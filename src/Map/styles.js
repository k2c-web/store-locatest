import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    @media ${getMediaQuery("xs")} {
        height: 206px;
        width: 100%;
        position: sticky;
        top: 0;
        left: 0;
    }
    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")}, ${getMediaQuery("s")} {
        position: relative;
        width: calc(70% + 5vw);
    }
`
