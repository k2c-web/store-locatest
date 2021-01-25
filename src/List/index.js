import React, { useContext } from "react"
import ListItem from "./ListItem"
import { MapListContext } from "../MapListContext"
import { Root } from "./styles"

export default React.memo(function () {
    const { retailers } = useContext(MapListContext)
    return (
        <Root>
            {retailers.map((item) => (
                <ListItem key={item.dealerId} item={item} />
            ))}
        </Root>
    )
})
