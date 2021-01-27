import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  overflow: auto;
  max-height: 90vh;
  position: relative;
  background-color: hsl(0, 0%, 100%);
  max-width: 30vw;
  border: 1px solid #ccc;
`
export const ListItem = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: ${({ selected }) => (selected ? `#418043;` : `white`)};
  color: ${({ selected }) => (selected ? `white;` : `black`)};
`
export const ListItemHeading = styled.h4`
  margin: 0;
  text-transform: uppercase;
`
