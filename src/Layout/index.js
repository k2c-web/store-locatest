import React, { useContext } from "react"
import Loader from "./Loader"
import List from "../List"
import Map from "../Map"
import { Root } from "./styles"

export default function Layout() {
    return (
        <Root>
            <Loader />
            <List />
            <Map />
        </Root>
    )
}
