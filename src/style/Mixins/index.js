import { css } from "styled-components"

export const noScrolbarMixin = css`
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`

export const rounderBtn = `
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 45px;
    height: 45px;
    z-index: 2;
    border-radius: 0;
    background-color: steelblue;
    cursor: pointer;

    &:enabled {
        border: none;
        transition: none;
        box-shadow: none;
    }

    svg {
        fill: #fff;
    }

    [dir="rtl"] & {
        left: 0;
        right: initial;
    }
`
