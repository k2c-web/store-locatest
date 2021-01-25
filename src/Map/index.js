import React, {useContext} from 'react';
import InfoCard from '../InfoCard'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { MapListContext } from "../MapListContext"
//import { RoundedIcon } from "../Icon/RoundedIcon" 
//<RoundedIcon type="location" onClick={() => selectItem(item, "map")}/>

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
     <LoadScript  googleMapsApiKey=''>
       <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={mapCenter}
        >   {
          markers.map(item => {
            return (
            <Marker type="location" key={item.nameTranslated} position={{lat: item.lat, lng: item.lng}} onClick={() => selectItem(item, "gmap")}>  
              {item.dealerId === selectedRetailer.dealerId && (<InfoWindow onCloseClick={() => selectItem(item, "close")}>
            <InfoCard item={item}/>
        </InfoWindow>)}
        </Marker>
            )
          })
       }
       </GoogleMap>
    </LoadScript>
  )
}

export default Map;