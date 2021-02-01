import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    width: calc(70% + 5vw);
    @media ${getMediaQuery("xs")} {
        height: 400px;
        position: sticky;
        top: 0;
        left: 0;
    }
    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")}, ${getMediaQuery("s")} {
        position: relative;
    }
`
