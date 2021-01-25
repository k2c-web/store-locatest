import React, {useContext} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { MapListContext } from "../MapListContext"

const Map = () => {
  
  const { retailers, selectedRetailer, selectItem } = useContext(MapListContext)

  const markers = retailers.map((item)=> ({
    ...item,
    location: {
      lat: item.lat,
      lng: item.lng
    }
  }))

  const mapStyles = {        
    height: "100%",
    width: "100%"
  };
  
  const defaultCenter = {
    lng: 2.777575869682096,
    lat: 48.85490742593591,
  }

  const mapCenter = selectedRetailer.lng ? {
      lng: selectedRetailer.lng,
      lat: selectedRetailer.lat
    } : defaultCenter

  return (
     <LoadScript
       googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={mapCenter}
        >   {
          markers.map(item => {
            return (
            <Marker key={item.nameTranslated} position={item.location} onClick={() => selectItem(item, "gmap")}>  
            <InfoWindow>
            <span>Something</span>
        </InfoWindow>
        </Marker>
            )
          })
       }</GoogleMap>
     </LoadScript>
  )
}
export default Map;