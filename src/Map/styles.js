import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    @media ${getMediaQuery("xs")}, ${getMediaQuery("s")} {
        width: 100%;
        height: 400px;
        position: sticky;
        top: 0;
        left: 0;
    }
    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")} {
        position: relative;
        width: 100%;
        height: 100%;
    }
`
