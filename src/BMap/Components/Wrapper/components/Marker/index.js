/* no-unused-expressions */
import React, { useEffect, useState } from 'react'
import { useGlobalBMapValues } from './../../global/context'

export default ({ map, handler, selectedMarker, markers, setList }) => {
  const { BMapAPI, BMapLibAPI, icons = {} } = useGlobalBMapValues() // , map = {}

  const { marker: iconMarker, cluster: iconCluster } = icons
  const iconMDefault = iconMarker.default
  const iconMSelect = iconMarker.selected
  const iconCDefault = iconCluster.default

  const [previousMarker, setPreviousMarker] = useState(null)
  const [prevInfoBox, setPrevInfoBox] = useState()

  // )

  let previous = null

  const iconMarkerSelected = new BMapAPI.Icon(iconMSelect.url, new BMapAPI.Size(iconMSelect.size.width, iconMSelect.size.height))
  const iconMarkerDefault = new BMapAPI.Icon(iconMDefault.url, new BMapAPI.Size(iconMDefault.size.width, iconMDefault.size.height))
  const iconClusterDefault = new BMapAPI.Icon(iconCDefault.url, new BMapAPI.Size(iconCDefault.size.width, iconCDefault.size.height))

  const clickMarkerHandler = ({ event, marker, data, previous }) => {
    const ob = { marker, data }
    handler(ob)
  }

  const content = ({ data }) => {
    // console.log('foo: content -> data', data)
    const directionHref = `http://api.map.baidu.com/marker?location=${data.latBaidu || data.lat},${data.lngBaidu || data.lng}&content=&title=${
      data.nameTranslated
    }&output=html&src=webapp.baidu.openAPIdemo`
    const moreDetailHref = `https://www.rolex.com/rolex-dealers/${data.urlRolexSeo}`
    return [
      '<div><h4 style="text-transform:uppercase">',
      data?.dealerName,
      '</h4><div>',
      !!data.phone1 || !!data.phone2 ? ['<a href="phone:', data.phone1 || data.phone2, '" target="_blank">Phone</a>', ' - '].join('') : '',
      '<a href="',
      directionHref,
      '" target="_blank">Direction</a>',
      ' - ',
      '<a href="',
      moreDetailHref,
      '" target="_blank">More details</a>',
      '</div></div>',
    ].join('')
  }

  useEffect(() => {
    if (!!selectedMarker) {
      // console.log('selectedMarker.marker = ', selectedMarker.marker)
      selectedMarker.marker.setIcon(iconMarkerSelected)

      // boxInfo.setContent()
      // boxInfo.setStyle()
      // const winInfo = new BMapAPI.InfoWindow(`${selectedMarker.data.dealerName} + CTA`, { width: 200, height: 100 })
      // boxInfo.setPosition(new BMapAPI.Point(selectedMarker.data.lng, selectedMarker.data.lat))
      // console.log('selectedMarker selectedMarker ', selectedMarker)

      // winInfo.addEventListener('clickclose', () => {
      //   handler(null)
      // })

      const infoBox = new BMapLibAPI.InfoBox(map, content({ data: selectedMarker.data }), {
        boxStyle: { background: 'white', width: '250px', padding: '10px', border: '1px solid #CCC', textAlign: 'center' },
        enableAutoPan: true,
        closeIconUrl: '/icons/close.png',
        closeIconMargin: '0 5px 0 0',
        offset: new BMapAPI.Size(0, 20),
      })

      // map.openInfoWindow(winInfo, new BMapAPI.Point(selectedMarker.data.lng, selectedMarker.data.lat))
      //infoBox.setPosition(new BMapAPI.Point(selectedMarker.data.lng, selectedMarker.data.lat))
      //console.log('`${selectedMarker?.data.dealerName}+CallToAction` :: ', `${selectedMarker?.data.dealerName}+CallToAction`)
      //infoBox.setContent(`${selectedMarker?.data.dealerName}+CallToAction`) // content({ data: selectedMarker?.data })
      //infoBox.close()
      infoBox.open(new BMapAPI.Point(selectedMarker.data.lng, selectedMarker.data.lat))
      // setTimeout(() => {
      //   infoBox.open(selectedMarker?.marker)
      // }, 100)

      if (selectedMarker?.data.rolexId !== previousMarker?.data.rolexId) {
        setPreviousMarker(selectedMarker)
        setPrevInfoBox(infoBox)

        if (!!previousMarker) {
          previousMarker.marker.setIcon(iconMarkerDefault)
          prevInfoBox.close()
        }
      }
    }
  }, [selectedMarker])

  useEffect(() => {
    if (!!map && !!markers.length) {
      map.clearOverlays()
      const aa = []
      const lm = []
      markers.map((m, i) => {
        const point = new BMapAPI.Point(m.lng, m.lat)
        const marker = new BMapAPI.Marker(point, { icon: iconMarkerDefault }) //
        marker.addEventListener('click', (event) => clickMarkerHandler({ event, marker, data: m }))
        // markersBPoints.push(marker)
        aa.push(marker)
        lm.push({ marker, data: m })
        //map.addOverlay(marker)
      })
      setList(lm)
      setTimeout(() => {
        const markerClusterer = new window.BMapLib.MarkerClusterer(map, { markers: aa })
        markerClusterer.setMaxZoom(14)
        markerClusterer.setMinClusterSize(3)
        markerClusterer.setStyles([
          {
            url: iconCDefault.url,
            size: new BMapAPI.Size(iconCDefault.size.width, iconCDefault.size.height),
            textColor: 'transparent',
          },
        ])
      }, 100)
    }
  }, [map, markers])

  return null
}

const InfoBoxContent = ({ data }) => {
  return (
    <div>
      <h3>{data.dealerName}</h3>
    </div>
  )
}
