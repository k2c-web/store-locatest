import styled from "styled-components"
import { CallToAction } from "../Text"
const revertibles = ["externalLink"] // RTL

export const Root = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${(props) => (props.marginBottomPx ? props.marginBottomPx : 0)};
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const IconSvg = styled.svg`
    fill: ${(props) => (props.fill ? props.fill : "steelblue")};
    [dir="rtl"] && {
        transform: scale(${({ name }) => (!!~revertibles.indexOf(name) ? "-1, 1" : "1, 1")});
    }
`

export const CallToActionSC = styled(CallToAction)`
    color: rgb(212, 212, 212);
`

export const RoundedBtn = styled.div`
    cursor: pointer;
    margin: 0 6px 0 0;
    padding: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 1px solid silver;
    font-weight: bold;
    ${CallToAction}&:hover {
    }
    &:hover {
        transition: all 300ms;
        background: steelblue;
        svg {
            fill: rgb(250, 250, 250);
        }
    }
`
