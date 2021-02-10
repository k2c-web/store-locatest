import styled from "styled-components"

export const Border = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 1px dashed steelblue;
    background-color: ${(props) => (props.selected ? "silver" : "white")};
    border-color: ${(props) => (props.selected ? "steelblue" : "silver")};
`
export const Root = styled.li`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 20px;
    width: 100%;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        background-color: lightsteelblue;
    }
    @media screen and (max-width: 768px) {
        padding: 14px 5vw;
    }
`

export const Name = styled("h2")`
    color: steelblue;
    margin: 0;
    padding: 0;
`

export const Adress = styled("p")`
    font-size: 14px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const FlexBox = styled.div`
    width: 100%;
    display: flex;
    align-items: bottom;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        align-items: baseline;
    }
`
