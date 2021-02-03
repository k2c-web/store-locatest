import styled from "styled-components"
import { colors } from "../style/Colors/index"
import { CallToAction } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"
const revertibles = ["externalLink"] // RTL

export const Root = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: ${(props) => (props.marginBottomPx ? props.marginBottomPx : 0)};
    @media ${getMediaQuery("xs")} {
        justify-content: center;
    }
`

export const IconSvg = styled.svg`
    fill: ${(props) => (props.fill ? props.fill : colors.red)};
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
    background: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    font-weight: bold;
    ${CallToAction}&:hover {
    }
    &:hover {
        transition: all 300ms;
        background: ${colors.red};
        svg {
            fill: rgb(250, 250, 250);
        }
    }
`
