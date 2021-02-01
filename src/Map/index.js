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

    const handleCenterChange = useCallback(() => {
        const newCenter = map.getCenter()
        refCenter.current = newCenter.toJSON()
    })

    const handleZoomChanged = useCallback(() => {
        if (map) console.log(map.getZoom())
    })

    const onMapClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            selectItem({}, "map")
        }
    })

    const onMarkerClick = useCallback((e, item) => selectItem(item, "map"))

    const onChange = useCallback(() => console.log("changes"))

    return (
        <Root>
            {retailers && isLoaded && (
                <GoogleMap
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%",
                    }}
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
                                    {item.dealerId === selectedRetailer.dealerId && (
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
        </Root>
    )
}

export default Map
