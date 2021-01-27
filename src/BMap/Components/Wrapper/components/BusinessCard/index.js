import React from 'react'
import { BusinessContainer } from './styles'
const BusinessCard = ({ data = {}, ...props }) => {
  const { dealerName, streetAddress } = data
  return (
    <BusinessContainer>
      <h2>{dealerName}</h2>
      <p>{streetAddress}</p>
    </BusinessContainer>
  )
}

export default BusinessCard
