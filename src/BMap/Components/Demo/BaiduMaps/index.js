import React, { useEffect, useState } from 'react'
import { BaiduContainer } from './styles'
import { BaiduMap, asyncWrapper, NavigationControl, Marker, MarkerClusterer, InfoWindow, Ground } from 'react-baidu-maps'
import config from './../../../config/static'

const urlSearch =
  'https://retailer.rlx-uat.com/app/search?countryCodeGeofencing=CN&query=%E6%A4%BF%E6%A0%91%E9%95%87&brand=RLX&typeSearch=AUTOCOMPLETE_CN&langCode=ZH-HANS'

const initialBB =
  'https://retailer.rlx-uat.com/app/establishments/initial_bounding_box?lat=31.693803&lng=116.728158&countryId=*&countrySeoName=*&countryCode=*&regionId=*&regionSeoName=*&cityId=*&citySeoName=*&districtId=*&districtSeoName=*&dealerId=*&dealerName=*&countryCodeGeofencing=ALL&brand=RLX&width=1026&height=700&langCode=EN'

const localBB = './data/initialBoundingBox.json'

const fetchData = async () => {
  const response = await fetch(localBB)
  const json = await response?.json()
  const coordMap = json.boundingBox
  const data = {
    center: coordMap.center,
    bb: { ne: coordMap.northEast, sw: coordMap.southWest },
  }

  return data
}
const fetchDataUrl = async ({ url = false } = {}) => {
  const response = await fetch(url)
  const json = await response?.json()

  return json
}

export default () => {
  const style1 = [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: {
        hue: '#007fff',
        saturation: 89,
      },
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: {
        color: '#ffffff',
      },
    },
  ]
  const styles = [
    {
      featureType: 'water',
      elementType: 'all',
      stylers: {
        color: '#cccff',
      },
    },
  ]

  const bounds = { sw: { lat: 44.810752, lng: -0.638973 }, ne: { lat: 44.91670389999999, lng: -0.5333089999999999 } }

  var GLOBE_WIDTH = 256 // a constant in Google's map projection
  var pixelWidth = 900
  var west = bounds.sw.lng
  var east = bounds.ne.lng
  var angle = east - west
  if (angle < 0) {
    angle += 360
  }
  var zoom = Math.round(Math.log((pixelWidth * 360) / angle / GLOBE_WIDTH) / Math.LN2)

  //  center={{ lat: 44.837789, lng: -0.57918 }}
  return (
    <BaiduContainer>
      <BaiduMap center={{ lat: 44.837789, lng: -0.57918 }} zoom={zoom} mapStyle={styles} mapContainer={<div style={{ height: '100%' }} />}></BaiduMap>
      {/* <Map /> */}
    </BaiduContainer>
  )
}

const TestMap = () => {
  const styles = [
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          visibility: 'on',
        },
        {
          hue: '#ff0000',
        },
      ],
    },
  ]

  return <BaiduMap mapContainer={<div style={{ height: '100%' }} />} />
}

const BMap = () => {
  const [pos, setPos] = useState(null)
  const [mk, setMarkers] = useState(null)

  useEffect(() => {
    ;(async () => {
      const pos = await fetchData()
      setPos(pos)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const allMarker = await fetchDataUrl({ url: urlSearch })
      // console.log('foo: BMap -> allMarker', allMarker.autoComplete)
      const markers = allMarker?.autoComplete.results.map((bp) => {
        return bp.baiduInfos.location
      })
      setMarkers(markers)
    })()
  }, [])

  return (
    !!pos && (
      <BaiduMap
        mapStyle={[
          {
            featureType: 'water',
            elementType: 'all',
            stylers: {
              visibility: 'on',
              color: '#000000ff',
            },
          },
        ]}
        enableScrollWheelZoom
        zoom={4}
        center={pos.center}
        mapContainer={<div style={{ height: '100%' }} />}>
        <NavigationControl type='small' anchor='top_right' offset={{ width: 0, height: 30 }} />
        <MarkerClusterer>
          {mk &&
            mk.map((m) => {
              return (
                <Marker position={m}>
                  <InfoWindow content={'position : ' + JSON.stringify(m)} offset={{ width: 0, height: -20 }} />
                </Marker>
              )
            })}
        </MarkerClusterer>
      </BaiduMap>
    )
  )
}

const Map = () => {
  let AsyncMap = asyncWrapper(BMap)

  return <AsyncMap mapUrl={`https://api.map.baidu.com/api?v=3.0&ak=${config.API_KEY}`} loadingElement={<div>Loading.....</div>}></AsyncMap>
}
