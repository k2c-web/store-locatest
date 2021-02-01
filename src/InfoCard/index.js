import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import { RemoveScroll } from "react-remove-scroll"

import {
    Root,
    DealerName,
    DealerAffiliation,
    DealerAdress,
    DealerDistance,
    PhoneNumber,
    ViewDetails,
    GetDirection,
    VisitWebsite,
    ViewGroup,
} from "./styles"
import { RoundedIcon } from "../Icon/RoundedIcon"

export default React.memo(function ({ item }) {
    const { selectItem, selectedRetailer } = useContext(MapListContext)
    const dealerName = item.nameTranslated
    const dealerAffiliate = !!item.affiliate
    const isMobile = false
    return (
        <RemoveScroll enabled={isMobile && item.dealerId === selectedRetailer.dealerId}>
            <Root activated={item.dealerId === selectedRetailer.dealerId} onClick={() => selectItem(item, "map")}>
                <DealerDistance tag="div" field={{ value: item.dealerId / 100 + " km" }}>
                    1KM
                </DealerDistance>
                <DealerName field={{ value: dealerName }} tag="h2" />
                <DealerAffiliation
                    underlineOff
                    tag="div"
                    field={{ value: dealerAffiliate ? "Official Matchbox Affiliate" : "Official Matchbox Retailer" }}
                />
                <DealerAdress
                    tag="div"
                    field={{
                        value: "10 rue Bachaumont<br />75002 Paris",
                    }}
                />

                <PhoneNumber>
                    <RoundedIcon type="phone" label="Phone Number" />
                </PhoneNumber>
                <GetDirection>
                    <RoundedIcon type="getDirection" label={"Get Direction"} />
                </GetDirection>
                <VisitWebsite>
                    <RoundedIcon type="externalLink" label={"Visit Website"} />
                </VisitWebsite>
                <ViewDetails>ViewDetails</ViewDetails>
                <ViewGroup>
                    <RoundedIcon type="arrowRight" label={"Group Page"} />
                </ViewGroup>
            </Root>
        </RemoveScroll>
    )
})
