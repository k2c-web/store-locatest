import React, { useState, createRef, useEffect } from 'react'
import { List, ListItem, ListItemHeading } from './styles'

export default ({ markers, setSelected, selectedMarker }) => {
  const [list, setList] = useState(null)
  const ref = createRef()
  const onClickEvent = (marker) => {
    setSelected(marker)
  }
  const movingDisplayItem = (position) => {
    if (position) {
      ref.current.scrollTo(0, position)
    }
  }

  return (
    !!markers && (
      <List ref={ref}>
        {markers.map((m, i) => {
          const active = selectedMarker?.data.rolexId === m?.data.rolexId ? true : false

          return <ItemList m={m} key={i} clickHandler={onClickEvent} hasSelected={active} handlerMove={movingDisplayItem} />
        })}
      </List>
    )
  )
}

const ItemList = ({ m, clickHandler, hasSelected, handlerMove }) => {
  const data = m.data
  const ref = createRef()

  useEffect(() => {
    if (hasSelected) {
      handlerMove(ref.current.offsetTop)
      // console.log('ref : ', ref.current.offsetWidth) // offsetWidth
    }
  }, [ref, hasSelected])

  return (
    <ListItem onClick={(e) => clickHandler(m)} selected={hasSelected} ref={ref}>
      <div>
        <ListItemHeading>{data.dealerName}</ListItemHeading>
        <p dangerouslySetInnerHTML={htmlOutput(data.shortAddress)} />
      </div>
    </ListItem>
  )
}

const htmlOutput = (html) => {
  return {
    __html: html,
  }
}
