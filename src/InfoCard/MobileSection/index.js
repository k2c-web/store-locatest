import React from "react"
import { Root, Title, FlexBox, OpeningHours } from "./styles"

export default React.memo(function ({ item, isMobile = false, hasGroup = false }) {
    return (
        <Root>
            <Title tag="div" field={{ value: "Opening Hours :" }}></Title>
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
            <OpeningHours tag="div" field={{ value: "Monday: 8:00am - 7:00pm" }} />
        </Root>
    )
})
