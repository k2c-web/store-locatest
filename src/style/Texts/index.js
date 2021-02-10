import { css } from "styled-components"

export const BigTitleCss = css`
    font-family: var(--font-meta-headline-black);
    font-size: calc(2rem + ((1vw - 3.2px) * 2.5));
    @media (max-width: 320px) {
        font-size: 32px;
    }
    @media (min-width: 1600px) {
        font-size: 64px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
`

export const MediumTitleCss = css`
    font-family: var(--font-meta-headline-black);
    font-size: calc(1.5rem + ((1vw - 3.2px) * 0.9375));
    margin-bottom: 30px;
    @media (max-width: 320px) {
        font-size: 24px;
    }
    @media (min-width: 1600px) {
        font-size: 36px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
`

export const SmallTitleCss = css`
    font-family: var(--font-meta-headline-black);
    font-size: calc(1.125rem + ((1vw - 3.2px) * 0.7813));
    @media (max-width: 320px) {
        font-size: 18px;
    }
    @media (min-width: 1600px) {
        font-size: 28px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
`

export const XSmallTitleCss = css`
    font-family: var(--font-meta-headline-black);
    font-size: calc(0.875rem + ((1vw - 3.2px) * 0.3125));
    @media (max-width: 320px) {
        font-size: 14px;
    }
    @media (min-width: 1600px) {
        font-size: 18px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
    -webkit-text-stroke: 0.2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`

export const ParagraphCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(1rem + ((1vw - 3.2px) * 0.1563));
    margin-bottom: 30px;
    @media (max-width: 320px) {
        font-size: 16px;
    }
    @media (min-width: 1600px) {
        font-size: 18px;
    }
    line-height: 1.6em;
    font-weight: 200;
    letter-spacing: 0.05em;
`

export const ParagraphBoldCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.9375rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 15px;
    }
    @media (min-width: 1600px) {
        font-size: 17px;
    }
    line-height: 1.6em;
    font-weight: 400;
    letter-spacing: 0.05em;
`

export const CaptionCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.875rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 14px;
    }
    @media (min-width: 1600px) {
        font-size: 16px;
    }
    line-height: 1.4em;
    font-weight: 200;
    letter-spacing: 0.05em;
`

export const CaptionBoldCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.8125rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 13px;
    }
    @media (min-width: 1600px) {
        font-size: 15px;
    }
    line-height: 1.6em;
    font-weight: 400;
    letter-spacing: 0.05em;
`

export const BloquoteCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.875rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 14px;
    }
    @media (min-width: 1600px) {
        font-size: 16px;
    }
    line-height: 1.6em;
    font-weight: 200;
    letter-spacing: 0.15em;
`

export const LabelBigCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.6875rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 11px;
    }
    @media (min-width: 1600px) {
        font-size: 13px;
    }
    line-height: 1.6em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`

export const LabelSmallCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.6875rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 11px;
    }
    @media (min-width: 1600px) {
        font-size: 13px;
    }
    line-height: 1.6em;
    font-weight: 600;
    letter-spacing: 0.05em;
`

export const CallToActionCss = css`
    border: none;
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.625rem + ((1vw - 3.2px) * 0.0781));
    @media (max-width: 320px) {
        font-size: 10px;
    }
    @media (min-width: 1600px) {
        font-size: 11px;
    }
    line-height: 1.4em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: steelblue;
    max-width: max-content;
    display: block;
    background: transparent;
    ${(props) =>
        !props.underlineOff &&
        `
    ::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: steeblue;
        transition: width 0.3s;
    }
    @media (hover: hover) {
    :hover::after {
        width: 100%;
    }}
    `}
`

export const CallToActionLightCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.625rem + ((1vw - 3.2px) * 0.0781));
    @media (max-width: 320px) {
        font-size: 10px;
    }
    @media (min-width: 1600px) {
        font-size: 11px;
    }
    line-height: 1.4em;
    font-weight: 200;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: white;
`

export const StyledLinkCss = css`
    font-family: var(--font-helvetica-neue);
    font-size: calc(0.625rem + ((1vw - 3.2px) * 0.1563));
    @media (max-width: 320px) {
        font-size: 10px;
    }
    @media (min-width: 1600px) {
        font-size: 12px;
    }
    line-height: 1.4em;
    font-weight: 400;
    letter-spacing: 0.05em;
`
