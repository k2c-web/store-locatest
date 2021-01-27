import styled from 'styled-components'

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  right: 20px;
`

const button = styled.div`
  color: white;
  border-radius: 15px;
  background-color: green;
  &:hover {
    background-color: black;
  }
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ControlPlus = styled(button)`
  &:after {
    font-weight: bold;
    height: 20px;
    content: '+';
  }
`
export const ControlMoins = styled(button)`
  &:after {
    font-weight: bold;
    height: 20px;
    content: '-';
  }
`
