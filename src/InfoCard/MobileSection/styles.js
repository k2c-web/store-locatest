import styled from "styled-components"
import { XSmallTitle, Caption, CaptionBold } from "../../Text"
import { getMediaQuery, sizes } from "../../style/Breakpoint"
import { colors } from "../../style/Colors"

export const Root = styled.div`
    display: none;
    @media ${getMediaQuery("xs")} {
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
