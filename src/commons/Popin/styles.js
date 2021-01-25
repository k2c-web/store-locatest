import styled from "styled-components"
import { colors } from "../../style/Colors/index"
import { sizes } from "../../style/Breakpoint/index"
const mobileMaxWidth = `${sizes.s.max}px`

export const PopinMain = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10000;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-color: ${colors.white};
    overflow-y: auto;
    z-index: 20000;
    @media screen and (max-width: ${mobileMaxWidth}) {
        height: 100vh;
    }
`

export const CloseContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    background-color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
    @media screen and (max-width: ${mobileMaxWidth}) {
        height: 60px;
        @supports (-webkit-touch-callout: none) {
            top: 15px;
        }
    }
    .configurator & {
        position: absolute;
        background-color: transparent;
        pointer-events: none;
    }
`

export const CloseButton = styled.button`
    background-color: ${colors.white};
    border: 1px solid #cbcbcb;
    padding: 0;
    border-radius: 50%;
    display: inline-block;
    height: calc(110px - 64px);
    width: calc(110px - 64px);
    cursor: pointer;
    pointer-events: all;
    transition: all 300ms;
    @media (hover: hover) {
        &:hover {
            background: ${colors.red};
            span svg {
                fill: #fff;
            }
        }
    }
    @media screen and (max-width: ${mobileMaxWidth}) {
        height: calc(60px - 16px);
        width: calc(60px - 16px);
    }
`
