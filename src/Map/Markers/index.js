import React, { useContext } from "react"
import InfoCard from "../../InfoCard"
import { Marker, InfoWindow } from "@react-google-maps/api"
import { MapListContext } from "../../MapListContext"

const Markers = ({ isMobile }) => {
    const { retailers, selectedRetailer, selectItem } = useContext(MapListContext)

    return (
        retailers.length > 0 &&
        retailers.map((item) => (
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
                        <InfoCard item={item} isMobile={isMobile} />
                    </InfoWindow>
                )}
            </Marker>
        ))
    )
}

export default Markers
