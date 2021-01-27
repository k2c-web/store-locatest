import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    display: flex;

    @media ${getMediaQuery("xs")}, ${getMediaQuery("s")} {
        flex-flow: column-reverse;
        align-items: center;
        justify-content: center;
    }

    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")} {
        height: 80vh;
        padding: 5vh 5vw;
    }
`
