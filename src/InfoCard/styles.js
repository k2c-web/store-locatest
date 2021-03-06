import styled from "styled-components"
import { XSmallTitle, Caption } from "../Text"
import { noScrolbarMixin } from "../style/Mixins"

export const Root = styled.div`
    box-sizing: border-box;
    width: 276px;
    display: flex;
    flex-flow: column;
    background: white;
    padding: ${(props) => (props.lessBottomPadding ? "30px 30px 18px 30px" : "30px 30px")};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px 0px;
    @media screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
        ${noScrolbarMixin};
    }
`
export const CloseButtonContainer = styled.div`
    height: 34px;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const CloseButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    height: 34px;
    line-height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: steelblue;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
`

export const FlexBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        margin-top: 34px;
    }
`

export const DealerName = styled(XSmallTitle)`
    margin: 0;
    padding: 0;
`

export const DealerAdress = styled(Caption)`
    margin: 0;
    margin-bottom: 26px;
    @media screen and (max-width: 768px) {
        margin-bottom: 22px;
    }
`

export const ViewDetails = styled.button`
    background: none;
    margin: 0;
    padding: 0;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: steelblue;
    border: 1px solid silver;
    border-radius: 25px;
    height: 34px;
    width: 100%;
    &:hover {
        color: rgb(190, 1, 0);
    }
    @media screen and (max-width: 768px) {
        width: 40%;
        margin: 0 auto 26px auto;
    }
`

export const ViewGroup = styled.div`
    display: flex;
    align-items: center;
`
