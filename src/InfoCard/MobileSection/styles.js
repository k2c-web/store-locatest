import styled from "styled-components"
import { Caption } from "../../Text"

export const Root = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const Title = styled(Caption)`
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
`

export const FlexBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const OpeningHours = styled(Caption)`
    margin: 0;
    padding: 0;
`
