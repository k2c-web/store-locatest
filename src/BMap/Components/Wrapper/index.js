import React, { useEffect, useState, createRef } from 'react'

import { GlobalStateBMapContext } from './global/context'

import BaiduMap from './components/BaiduMap'

const BaiduMaps = (props) => {
  const { id = 'baidumap', mapContainer = '', center = '', zoomLevel = 4 } = props

  const _BMap = window.BMap
  const _BMapLib = window.BMapLib
  const ref = createRef()

  const initialValues = {
    BMapAPI: _BMap,
    BMapLibAPI: _BMapLib,
    reference: ref,
    id: id,
    _defaultCenter: { lat: 48.8660601, lng: 2.3565281 },
    ...props,
  }

  return (
    <GlobalStateBMapContext initialValues={initialValues}>
      <BaiduMap />
    </GlobalStateBMapContext>
  )
}

export default BaiduMaps
