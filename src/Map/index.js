import React, { useContext, useRef } from "react"
import InfoCard from "../InfoCard"
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api"
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
    // Load the Google maps scripts
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDLBYFZ20ju_3sSKYtbjolEscpnPGGuVnI",
    })

    const { retailers, selectedRetailer, selectItem } = useContext(MapListContext)

    const markers = retailers.map((item) => ({
        ...item,
        location: {
            lat: item.lat,
            lng: item.lng,
        },
    }))

    const mapStyles = {
        height: "100%",
        width: "100%",
    }

    const defaultCenter = {
        lng: 2.777575869682096,
        lat: 48.85490742593591,
    }

    const mapCenter = selectedRetailer.lng
        ? {
              lng: selectedRetailer.lng,
              lat: selectedRetailer.lat,
          }
        : defaultCenter

    const [map, setMap] = React.useState(null)
    const currentMap = useRef()
    const onLoad = React.useCallback(
        function callback(map) {
            if (retailers.length > 0) {
                const bounds = new window.google.maps.LatLngBounds()
                console.log("gmap retailers", retailers)
                const tmp = retailers.map((item) => {
                    console.log("gmap item", item)
                    bounds.extend(item.location)
                    //return item.dealerId
                })
                map.fitBounds(bounds)
                setMap(map)
            }
        },
        [retailers]
    )

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <Root show={retailers}>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    center={defaultCenter}
                >
                    {markers.map((item) => {
                        return (
                            <Marker
                                type="location"
                                key={item.nameTranslated}
                                position={{ lat: item.lat, lng: item.lng }}
                                onClick={() => selectItem(item, "map")}
                            >
                                {item.dealerId === selectedRetailer.dealerId && (
                                    <InfoWindow
                                        position={{ lat: selectedRetailer.lat, lng: selectedRetailer.lng }}
                                        visible={item.dealerId === selectedRetailer.dealerId}
                                        onCloseClick={() => selectItem(item, "close")}
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
