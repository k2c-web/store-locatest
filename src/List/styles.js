import styled from "styled-components"
import { colors } from "../style/Colors"
import { noScrolbarMixin } from "../style/Mixins"
import { getMediaQuery } from "../style/Breakpoint"

export const Root = styled.ul`
    box-sizing: border-box;
    flex-flow: column;
    display: flex;
    list-style-type: none;
    padding: 0;
    ${noScrolbarMixin};
    background-color: ${colors.white};
    @media ${getMediaQuery("xs")} {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    @media ${getMediaQuery("m")}, ${getMediaQuery("l")}, ${getMediaQuery("xl")}, ${getMediaQuery("s")} {
        height: 100%;
        width: calc(30% - 5vw);
        margin: 0;
    }
`
