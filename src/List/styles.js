import styled from "styled-components"
import { noScrolbarMixin } from "../style/Mixins"

export const Root = styled.ul`
    box-sizing: border-box;
    flex-flow: column;
    display: flex;
    list-style-type: none;
    padding: 0;
    ${noScrolbarMixin};
    background-color: white;
    height: 100%;
    width: calc(30% - 5vw);
    margin: 0;
    @media screen and (max-width: 768px) {
        .bloc {
            width: 100%;
            height: 100%;
            margin: 0;
        }
    }
`
