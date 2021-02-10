import React from "react"
import Loader from "./Loader"
import List from "../List"
import Map from "../Map"
import { Root } from "./styles"
import InfoCard from "../InfoCard"
import data from "../Datas"
import styled from "styled-components"

const Dev = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export default function Layout() {
    return document.location.search === "?c=infocard" ? (
        <Dev>
            <InfoCard hasGroup={false} item={data[0]} />
        </Dev>
    ) : (
        <Root>
            <Loader />
            <List />
            <Map />
        </Root>
    )
}
