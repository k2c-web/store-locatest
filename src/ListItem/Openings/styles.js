import styled from "styled-components"
import { Caption } from "../../Text"
import { DropDownIcon } from "../../Icon"

export const Root = styled.div``
export const Toggle = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Today = styled(Caption)`
    font-size: 14px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const OpeningHours = styled(Caption)`
    padding: 0;
    margin: 10px 0 0 0;
    font-size: 14px;
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const DropDownIconSC = styled(DropDownIcon)`
    ${(props) => props.rotate && `transform: rotate(-180deg)`};
    transition: transform 500ms;
`
