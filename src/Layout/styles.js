import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    display: flex;
    max-width: 100vw;

    @media ${getMediaQuery("xs")} {
        flex-flow: column-reverse;
        align-items: center;
        justify-content: center;
    }

    @media ${getMediaQuery("s")}, ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")} {
        height: 80vh;
        padding: 30px 0 0 5vw;
    }
`
