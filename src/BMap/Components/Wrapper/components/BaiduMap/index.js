import React, { useEffect, useState, createRef } from 'react'
import { MapContainer } from './styles'
import { useGlobalBMapValues } from './../../global/context'
import Markers from './../Marker'
import BusinessCard from './../BusinessCard'
import Controllers from './../Controllers'
import mapStyles from './../MapStyles'
import SearchWrapper from './../SearchWrapper'

export default () => {
  const { reference: ref, BMapAPI, _defaultCenter, zoomLevel, center, icons = {}, mapSize = {}, propsSize = {} } = useGlobalBMapValues()

  const [map, setMap] = useState(null)
  const [selected, setSelected] = useState(null)
  const [viewport, setViewport] = useState(null)
  const [markers, setMarkers] = useState(null)
  const [listItems, setListItems] = useState([])
  const { width = `${mapSize?.width}px`, height = `${mapSize?.height}px` } = propsSize

  // const onClickMap = () => {
  //   console.log('flush marker : ', selected)
  // }

  const extractLatLng = ({ bounds }) => {
    try {
      const northEastLat = bounds.getNorthEast().lat
      const northEastLng = bounds.getNorthEast().lng
      const southWestLat = bounds.getSouthWest().lat
      const southWestLng = bounds.getSouthWest().lng
      return !!bounds ? { ne: { lat: northEastLat, lng: northEastLng }, sw: { lat: southWestLat, lng: southWestLng } } : null
    } catch (e) {
      console.error('ERROR : ', e)
      return null
    }
  }

  const onDragEnd = () => {
    console.log('DragEnd')
    setViewport(extractLatLng({ bounds: map.getBounds() }))
    setSelected(null)
    map.closeInfoWindow()
  }

  const onZoomEnd = () => {
    console.log('zoomEnd')
    setViewport(extractLatLng({ bounds: map.getBounds() }))
    setSelected(null)
  }

  const onMoveEnd = () => {
    console.log('moveEnd')
    //setViewport(extractLatLng({ bounds: map.getBounds() }))
  }

  useEffect(() => {
    if (!!ref.current) setMap(new BMapAPI.Map(ref.current))
  }, [])

  useEffect(() => {
    if (!!map) {
      const point = new BMapAPI.Point(center.lng || _defaultCenter.lng, center.lat || _defaultCenter.lat)

      map.setMaxZoom(15)
      map.centerAndZoom(point, zoomLevel)
      map.setMapStyleV2({ styleId: 'b60374b43cafe9d460530a20ed9dca46' }) // { styleId: 'b60374b43cafe9d460530a20ed9dca46'} // { styleJson: mapStyles }
      map.enableScrollWheelZoom()

      // b60374b43cafe9d460530a20ed9dca46
      map.addEventListener('dragend', onDragEnd)
      map.addEventListener('zoomend', onZoomEnd)
      map.addEventListener('moveend', onMoveEnd)
      // map.addEventListener('click', (e) => onClickMap())
    }
  }, [map])

  useEffect(() => {
    if (!!selected) {
      const d = selected.data
    }
  }, [selected])

  useEffect(() => {
    ;(async () => {
      if (!!viewport) {
        const urlWS = new URL('https://retailers.rlx-uat.com/app/establishments/by_viewport/light')
        const params = [
          { name: 'northEastLat', value: viewport.ne.lat },
          { name: 'northEastLng', value: viewport.ne.lng },
          { name: 'southWestLat', value: viewport.sw.lat },
          { name: 'southWestLng', value: viewport.sw.lng },
          { name: 'brand', value: 'RLX' },
          { name: 'establishmentType', value: 'STORE' },
        ].map((p) => {
          urlWS.searchParams.set(p.name, p.value)
        })

        const response = await fetch(urlWS.href)
        if (response.status === 200) {
          const result = await response.json()
          if (!!result.length) setMarkers(result)
        } else {
          setMarkers([])
        }
      }
    })()
  }, [viewport])

  return (
    <MapContainer>
      <SearchWrapper markers={listItems} setSelected={setSelected} selectedMarker={selected} />
      {/*selected && <BusinessCard data={selected.data} /> */}
      <MapContainer ref={ref} {...propsSize} map={map}>
        {!!map && !!markers && <Markers map={map} markers={markers} handler={setSelected} selectedMarker={selected} setList={setListItems} />}
      </MapContainer>
      <Controllers map={map} />
    </MapContainer>
  )
}
