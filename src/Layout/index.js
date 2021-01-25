import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import Loader from "./Loader"
import List from "../List"
import Map from "../Map"
import { Root } from "./styles"

export default function Layout() {
    const { selectedRetailer, selectedFrom, selectItem } = useContext(MapListContext)
    const handleClick = (e) => {
            if(e.target === e.currentTarget) selectItem({}, "layout")
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>
                {selectedFrom
                    ? selectedRetailer.nameTranslated + " séléctionné depuis la " + selectedFrom
                    : "Aucun item activé"}
            </h2>
            <Root onClick={handleClick}> 
                <Loader />
                <List />
                <Map />
            </Root>
        </>
    )
}
