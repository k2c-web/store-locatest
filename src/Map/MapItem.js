import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import {
    ItemRoot,
    StoreItem,
    DealerName,
    DealerAffiliation,
    DealerAdress,
    DealerDistance,
    PhoneNumber,
    ViewDetails,
    GetDirection,
    VisitWebsite,
    CardContainer
} from "./styles"

export default React.memo(function ({ item }) {
    const { selectItem, selectedRetailer } = useContext(MapListContext)
    const dealerName = item.nameTranslated
    const dealerAffiliate = !!item.affiliate
    )
})
