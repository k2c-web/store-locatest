import styled from "styled-components"
import { colors } from "../../style/Colors"
import { Caption } from "../../Text"
import { getMediaQuery } from "../../style/Breakpoint"
import { DropDownIcon } from "../../Icon"

export const Root = styled.div``
export const Toggle = styled.div`
    color: ${colors.blackDark};
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;

    @media ${getMediaQuery("xs")} {
        display: none;
    }
`

export const Today = styled(Caption)`
    font-size: 14px;
    color: ${colors.blackDark};
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

export const OpeningHours = styled(Caption)`
    color: ${colors.blackDark};
    padding: 0;
    margin: 10px 0 0 0;
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
    animation-duration: 500ms;
    animation-name: show;
    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            oacity: 1;
        }
    }
`

export const ToggleLabel = styled(Caption)`
    margin: 0;
    margin-right: 6px;
    padding: 0;
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

export const DropDownIconSC = styled(DropDownIcon)`
    ${(props) => props.rotate && `transform: rotate(-180deg)`};
    transition: transform 500ms;
`
