import styled from 'styled-components'

export const MapContainer = styled.div`
  position: relative;
  height: ${(props) => props.height || '100vh'};
  width: ${(props) => props.width || '100%'};
`
