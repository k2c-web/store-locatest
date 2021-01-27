import React, { useState, useEffect } from 'react'
import BaiduMap from './../../Wrapper'
import iconsMapping from './../../../config/iconMarker'

export default ({ zoomLevel }) => {
  /* How to use  React Wrapper for Baidu Map */
  // const [markers, setMarkers] = useState(null)
  const [position, setPosition] = useState(null)

  // useEffect(() => {
  //   if (!markers);
  //   ;(async () => {
  //     const response = await fetch('/data/markers.json')
  //     const result = await response.json()
  //     setMarkers(result)
  //   })()
  // }, [])

  useEffect(() => {
    if (!position);
    ;(async () => {
      const response = await fetch('/data/initialBoundingBox_paris.json')
      const result = await response.json()
      const { boundingBox: { center = {} } = {} } = result
      const centerOfMap = { lat: center.lat, lng: center.lng }
      setPosition(centerOfMap)
    })()
  }, [])

  return <div>{!!position && <BaiduMap center={position} zoomLevel={zoomLevel || 7} icons={iconsMapping}></BaiduMap>}</div>
}

// markers={markers}
