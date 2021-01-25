import styled from "styled-components"
import { colors } from "../style/Colors"
import { noScrolbarMixin } from "../style/Mixins"

export const Root = styled.ul`
    box-sizing: border-box;
    width: 280px;
    flex-flow: column;
    display: flex;
    height: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0 40px 0 0;
    ${noScrolbarMixin};
    background-color: ${colors.white};
`
