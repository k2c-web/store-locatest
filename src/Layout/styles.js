import styled from "styled-components"

export const Root = styled.div`
    display: flex;
    height: 80vh;
    padding: 30px 0 0 5vw;
    max-width: 100vw;

    @media screen and (max-width: 768px) {
        flex-flow: column-reverse;
        align-items: center;
        justify-content: center;
        height: 100vh;
        max-height: 100%;
        padding: 0;
    }
`
