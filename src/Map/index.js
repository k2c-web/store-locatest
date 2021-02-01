import React, { useState, useContext, useRef, useEffect, useCallback } from "react"
import InfoCard from "../InfoCard"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { MapListContext } from "../MapListContext"
import { Root } from "./styles"
import { isBrowser } from "../utils"
import { sizes } from "../style/Breakpoint"
//import { RoundedIcon } from "../Icon/RoundedIcon"
//<RoundedIcon key={item.dealerId} text={item.nameTranslated} lat={item.location.lat} lng={item.location.lng} type="location" onClick={() => selectItem(item, "map")}/>

/*const long;
cont lati;
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(
        (position) => {
            lati = position.coords.latitude;
            long = position.coords.longitude;
        }
    )
};*/
const mobileMaxWidth = `${sizes.xs.max}px`

const Map = () => {
    const { retailers, selectedRetailer, selectItem, displayLoader } = useContext(MapListContext)
    const refCenter = useRef()

    // Load the Google maps scripts
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDLBYFZ20ju_3sSKYtbjolEscpnPGGuVnI",
    })

    const [map, setMap] = React.useState(null)
    const onLoad = useCallback(
        (map) => {
            setMap(map)
        },
        [setMap]
    )

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

    const handleCenterChange = useCallback(() => {
        const newCenter = map.getCenter()
        refCenter.current = newCenter.toJSON()
    })

    const handleZoomChanged = useCallback(() => {
        if (map) console.log(map.getBounds())
    })

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
