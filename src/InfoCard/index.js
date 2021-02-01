import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import { RemoveScroll } from "react-remove-scroll"

import {
    Root,
    CloseButtonContainer,
    CloseButton,
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


// TO DO : style if group page link is displayed
const belongsToAGroup = false

export default React.memo(function ({ item, isMobile }) {

    const { selectItem, selectedRetailer } = useContext(MapListContext)
    const dealerName = {value: item.nameTranslated}
    const dealerAffiliate = !!item.affiliate
    const dealerAffiliationLabel = {value: dealerAffiliate ? "Official Matchbox Affiliate" : "Official Matchbox Retailer"}
    const adressLabel = {value: "10 rue Bachaumont<br />75002 Paris"}

    return (
        <RemoveScroll enabled={isMobile && item.dealerId === selectedRetailer.dealerId}>
            <Root activated={item.dealerId === selectedRetailer.dealerId} onClick={() => selectItem(item, "map")}>
                <CloseButtonContainer> <CloseButton>x</CloseButton> </CloseButtonContainer>
                <DealerDistance tag="div" field={{ value: item.dealerId / 100 + " km" }} />
                <DealerName field={dealerName} tag="h2" />
                <DealerAffiliation tag="div" field={dealerAffiliationLabel} />
                <DealerAdress tag="div" field={adressLabel} />
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
                {belongsToAGroup && (
                    <ViewGroup>
                        <RoundedIcon type="arrowRight" label={"Group Page"} />
                    </ViewGroup>
                )}
            </Root>
        </RemoveScroll>
    )
})
