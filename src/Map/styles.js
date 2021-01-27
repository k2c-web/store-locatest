import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    width: 100%;
    @media ${getMediaQuery("xs")}, ${getMediaQuery("s")} {
        height: 400px;
        position: sticky;
        top: 0;
        left: 0;
    }
    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")} {
        position: relative;
    }
`
