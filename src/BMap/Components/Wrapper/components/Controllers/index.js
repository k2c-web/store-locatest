/* eslint-disable  no-unused-expressions */

import React from 'react'
import { ControlsContainer, ControlPlus, ControlMoins } from './styles'

export default ({ map }) => {
  const zommIn = () => {
    map?.zoomIn()
  }

  const zommOut = () => {
    map?.zoomOut()
  }

  return (
    <ControlsContainer>
      <ControlPlus onClick={(e) => zommIn()} />
      <ControlMoins onClick={(e) => zommOut()} />
    </ControlsContainer>
  )
}
