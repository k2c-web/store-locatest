import styled from "styled-components"
import { getMediaQuery, sizes } from "../style/Breakpoint"
const mobileMaxWidth = `${sizes.s.max}px`

export const Root = styled.div`
    display: flex;
    height: 80vh;
    padding: 30px 0 0 5vw;
    max-width: 100vw;

    @media ${getMediaQuery("xs")} {
        flex-flow: column-reverse;
        align-items: center;
        justify-content: center;
        height: 100vh;
        max-height: 100%;
        padding: 0;
    }
`
