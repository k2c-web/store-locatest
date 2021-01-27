import React, { useState, useContext, useRef, useEffect, useCallback } from "react"
import InfoCard from "../InfoCard"
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { MapListContext } from "../MapListContext"
import { Root } from "./styles"

//import { RoundedIcon } from "../Icon/RoundedIcon"
//<RoundedIcon type="location" onClick={() => selectItem(item, "map")}/>

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

const Map = () => {
    const { retailers, selectedRetailer, selectItem, displayLoader } = useContext(MapListContext)
    const refCenter = useRef()

    // Load the Google maps scripts
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDLBYFZ20ju_3sSKYtbjolEscpnPGGuVnI",
    })

    const [map, setMap] = React.useState(null)
    // Use fitbounds to display a map covering all the markers
    const onLoad = useCallback((map) => {
        setMap(map)
    })

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

    const handleCenterChange = useCallback(() => {
        const newCenter = map.getCenter()
        refCenter.current = newCenter.toJSON()
    })

    const handleClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            selectItem({}, "map")
        }
    })

    return (
        <Root>
            {retailers && isLoaded && (
                <GoogleMap
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%",
                    }}
                    zoom={10}
                    onLoad={onLoad}
                    center={refCenter.current}
                    onCenterChanged={handleCenterChange}
                    onClick={handleClick}
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
                                    {item.dealerId === selectedRetailer.dealerId && (
                                        <InfoWindow
                                            position={{ lat: item.lat, lng: item.lng }}
                                            visible={item.dealerId === selectedRetailer.dealerId}
                                            onCloseClick={() => selectItem({}, "close")}
                                        >
                                            <InfoCard item={item} />
                                        </InfoWindow>
                                    )}
                                </Marker>
                            )
                        })}
                </GoogleMap>
            )}
        </Root>
    )
}

export default Map
