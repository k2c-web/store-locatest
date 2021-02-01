import React, { useState, useContext, useRef, useEffect, useCallback } from "react"
import InfoCard from "../InfoCard"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { MapListContext } from "../MapListContext"
import { Root } from "./styles"
import { isBrowser } from "../utils"
import { sizes } from "../style/Breakpoint"
import Markers from "./Markers"

const mobileMaxWidth = `${sizes.xs.max}px`
const mapContainerStyle = {
    height: "100%",
    width: "100%",
}
const googleMapsApiKey = "AIzaSyDLBYFZ20ju_3sSKYtbjolEscpnPGGuVnI"
const Map = () => {
    const { retailers, selectedRetailer, selectItem, displayLoader } = useContext(MapListContext)
    //-------------------------------------------------------------------------------------
    // Load the Google maps scripts
    const { isLoaded } = useLoadScript({ googleMapsApiKey })
    //-------------------------------------------------------------------------------------

    // State to store the map instance
    const [map, setMap] = React.useState(null)
    //-------------------------------------------------------------------------------------

    // Store the map isntance in the state
    const onLoad = useCallback(
        (map) => {
            setMap(map)
        },
        [setMap]
    )
    //-------------------------------------------------------------------------------------
    // Using a ref to store center of the map when it's change so the map don't move back
    const refCenter = useRef()
    //-------------------------------------------------------------------------------------

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
            const matchQuery = (x) => setIsMobile(x.matches)
            const match = window.matchMedia(`(max-width: ${mobileMaxWidth})`)
            match.addListener(matchQuery)
            matchQuery(match)
            return () => match.removeListener(matchQuery)
        }
    }, [])
    //-------------------------------------------------------------------------------------

    // Update the center ref on center change to prevent the map from moving on unselec
    const handleCenterChange = useCallback(() => {
        if (map && map.getCenter()) {
            const newCenter = map.getCenter()
            refCenter.current = newCenter.toJSON()
        }
    }, [map])
    //-------------------------------------------------------------------------------------

    const handleIdle = useCallback(() => {
        //console.log("idle")
        if (map && map.getBounds()) {
            let ne = map.getBounds().getNorthEast()
            let sw = map.getBounds().getSouthWest()
            var event = new CustomEvent("mapBoundsChanged ", { detail: map.getBounds().toJSON() })
            //console.log(ne.lat() + ";" + ne.lng())
            //console.log(sw.lat() + ";" + sw.lng())
            //console.log(map.getBounds().toJSON())
            //if(map.getZoom()) console.log(map.getZoom())
        }
    }, [map])

    // On Click of a marker on the map update machine context to select the retailer
    const onMarkerClick = useCallback((e, item) => selectItem(item, "map"))
    //-------------------------------------------------------------------------------------

    // On map click but not a marker, unselect the retailer
    const onMapClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            selectItem({}, "map")
        }
    })
    //-------------------------------------------------------------------------------------

    return (
        <Root>
            {retailers && isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    onIdle={handleIdle}
                    onLoad={onLoad}
                    center={refCenter.current}
                    onCenterChanged={handleCenterChange}
                    onClick={onMapClick}
                    clickableIcons={true}
                >
                    <Markers isMobile={isMobile} />
                </GoogleMap>
            )}

            {isMobile && selectedRetailer.dealerId && <InfoCard theme="mobile" item={selectedRetailer} />}
        </Root>
    )
}

export default Map
