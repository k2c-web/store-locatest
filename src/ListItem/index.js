import React, { useContext, useEffect, useMemo, useRef } from "react"
import Openings from "./Openings"
import { MapListContext } from "../MapListContext"
import smoothscroll from "smoothscroll-polyfill"
import { Root, Name, Adress, FlexBox, Border } from "./styles"

// kick off the polyfill!
smoothscroll.polyfill()

export default React.memo(function ({ item }) {
    const rootRef = useRef()
    const value = useContext(MapListContext)
    const { selectItem, selectedFrom, selectedRetailer } = value

    useEffect(() => {
        // Scrol intoview the selected item of the list
        if (
            rootRef.current &&
            selectedFrom === "map" &&
            item.nameTranslated.value === selectedRetailer.nameTranslated
        ) {
            rootRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [rootRef, selectedRetailer])

    const handleClick = (e) => {
        if (!e.target.classList.contains("opening-hours")) {
            selectItem(item, "list")
        }
    }

    const selected = useMemo(() => item.dealerId === selectedRetailer.dealerId)

    return (
        <Border ref={rootRef} onClick={handleClick} selected={selected}>
            <Root>
                <Name>{item.nameTranslated}</Name>
                <Adress>
                    11 rue Saint-Hubert
                    <br />
                    77500 Chelles
                </Adress>
                <FlexBox>
                    <Openings value={item.hoursTranslated} />
                </FlexBox>
            </Root>
        </Border>
    )
})
