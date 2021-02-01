import React, { useContext, useEffect, useRef } from "react"
import Openings from "./Openings"
import { MapListContext } from "../MapListContext"
import smoothscroll from "smoothscroll-polyfill"
import {
    Root,
    DealerName,
    DealerAffiliation,
    DealerAdress,
    DealerDistance,
    RoundedBtn,
    FlexBox
} from "./styles"

// kick off the polyfill!
smoothscroll.polyfill()

export default React.memo(function ({ item }) {
    const rootRef = useRef()
    const value = useContext(MapListContext)
    const { selectItem, selectedFrom, selectedRetailer } = value
    const dealerName = {value: item.nameTranslated}
    const dealerAffiliate = !!item.affiliate
    const dealerAffiliationLabel = {value: dealerAffiliate ? "Official Matchbox Affiliate" : "Official Matchbox Retailer"}
    const adressLabel = {value: "10 rue Bachaumont<br />75002 Paris"}

    useEffect(() => {
        // Scrol intoview the selected item of the list
        if (rootRef.current && selectedFrom === "map" && dealerName === selectedRetailer.nameTranslated) {
            rootRef.current.scrollIntoView({ behavior: "instant", block: "start" })
        }
    }, [rootRef, selectedRetailer])

    const handleClick = (e) => {
        if (!e.target.classList.contains("opening-hours")) {
            selectItem(item, "list")
        }
    }

    return (
        <Root
            ref={rootRef}
            onClick={handleClick}
            selected={item.dealerId === selectedRetailer.dealerId}
        >
            <FlexBox>
                <DealerName field={dealerName} tag="h2" />
                <DealerDistance tag="div" field={{ value: item.dealerId / 100 + " km" }} />
            </FlexBox>
            <DealerAffiliation  tag="div" field={{dealerAffiliationLabel }} />
            <DealerAdress tag="div"field={adressLabel} />
            <FlexBox> <Openings value={item.hoursTranslated} />
            <RoundedBtn type="plus" /></FlexBox>
        </Root>
    )
})
