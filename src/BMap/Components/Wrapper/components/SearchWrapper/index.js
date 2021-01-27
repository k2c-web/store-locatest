import React, { useState } from 'react'
import { Container } from './styles'
import List from './../List'

export default ({ markers, ...props }) => {
  const [list, setList] = useState(null)

  return (
    <Container>
      <div>+ Input Search +</div>
      <List markers={markers} {...props} />
    </Container>
  )
}
