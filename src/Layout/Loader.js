import React, { useEffect, useContext } from "react"
import { MapListContext } from "../MapListContext"
import styled from "styled-components"

const Root = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #be0100;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default React.memo(function () {
    const { displayLoader, init } = useContext(MapListContext)
    useEffect(() => init(), [displayLoader, init]) // Init the finite stat machine and retrieve datas
    return displayLoader && <Root><h1>Loading...</h1></Root>
})
