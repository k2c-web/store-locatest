import React, { useState, useContext, useRef, useEffect, useCallback } from "react"
import InfoCard from "../InfoCard"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { MapListContext } from "../MapListContext"
import { Root } from "./styles"
import { isBrowser } from "../utils"
import { sizes } from "../style/Breakpoint"

const mobileMaxWidth = `${sizes.xs.max}px`
const googleMapsApiKey = "AIzaSyDLBYFZ20ju_3sSKYtbjolEscpnPGGuVnI"
const Map = () => {
    const { retailers, selectedRetailer, selectItem, displayLoader } = useContext(MapListContext)

    // Load the Google maps scripts
    const { isLoaded } = useLoadScript({ googleMapsApiKey })

    // State to store the map instance
    const [map, setMap] = React.useState(null)

    // Store the map isntance in the state
    const onLoad = useCallback(
        (map) => {
            setMap(map)
        },
        [setMap]
    )

    // Using a ref to store center of the map when it's change so the map don't move back
    const refCenter = useRef()

    // Fitbounds allow to adapt the map center and zoom to disply all the injected markers
    useEffect(() => {
        if (map && retailers.length) {
            const bounds = new window.google.maps.LatLngBounds()
            retailers.forEach((item) => {
                bounds.extend({ lat: item.lat, lng: item.lng })
                return item.dealerId
            })
            map.fitBounds(bounds)
        }
    }, [map, retailers])

    // Detect the breadking change of the design that need to change the elements in the dom
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (isBrowser) {
            const matchQuery = (x) => {
                if (x.matches) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            }
            const match = window.matchMedia(`(max-width: ${mobileMaxWidth})`)
            match.addListener(matchQuery)
            matchQuery(match)
            return () => match.removeListener(matchQuery)
        }
    }, [])

    // Update the center ref on center change to prevent the map from moving on unselec
    const handleCenterChange = useCallback(() => {
        const newCenter = map.getCenter()
        refCenter.current = newCenter.toJSON()
    })

    // Tmp for test / dev purpose
    const handleZoomChanged = useCallback(() => {
        if (map) console.log(map.getZoom())
    })

    const handleBoundsChanged = useCallback(() => {
        if (map) {
            let ne = map.getBounds().getNorthEast()
            let sw = map.getBounds().getSouthWest()
            //console.log(ne.lat() + ";" + ne.lng())
            //console.log(sw.lat() + ";" + sw.lng())
            //console.log(map.getBounds().toJSON())
            var event = new CustomEvent("mapBoundsChanged ", { detail: map.getBounds().toJSON() })
            window.dispatchEvent(event)
        }
    })

    /*useEffect(() => {
        if (isBrowser) {
            window.addEventListener("mapBoundsChanged", handleRedMark)
            return () => window.removeEventListener("mapBoundsChanged", setHasFavorite)
        }
    }, [])*/

    const onMapClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            selectItem({}, "map")
        }
    })

    const onMarkerClick = useCallback((e, item) => selectItem(item, "map"))

    return (
        <Root>
            {retailers && isLoaded && (
                <GoogleMap
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%",
                    }}
                    onIdle={() => console.log("idled")}
                    onLoad={onLoad}
                    center={refCenter.current}
                    onCenterChanged={handleCenterChange}
                    onClick={onMapClick}
                    onZoomChanged={handleZoomChanged}
                    onBoundsChanged={handleBoundsChanged}
                    clickableIcons={true}
                >
                    {!!retailers.length &&
                        retailers.map((item) => {
                            return (
                                <Marker
                                    type="location"
                                    key={item.nameTranslated}
                                    position={{ lat: item.lat, lng: item.lng }}
                                    onClick={() => selectItem(item, "map")}
                                >
                                    {item.dealerId === selectedRetailer.dealerId && !isMobile && (
                                        <InfoWindow
                                            position={{ lat: item.lat, lng: item.lng }}
                                            visible={item.dealerId === selectedRetailer.dealerId}
                                            onCloseClick={(e) => selectItem(e, item, "close")}
                                        >
                                            <InfoCard item={item} />
                                        </InfoWindow>
                                    )}
                                </Marker>
                            )
                        })}
                </GoogleMap>
            )}

            {isMobile && selectedRetailer.dealerId && <InfoCard theme="mobile" item={selectedRetailer} />}
        </Root>
    )
}

export default Map
