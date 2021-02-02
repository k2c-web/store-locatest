import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import { RemoveScroll } from "react-remove-scroll"
import MobileSection from "./MobileSection"

import { XSmallTitle, Caption, CaptionBold, CallToAction } from "../Text"
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
    FlexBox,
    CallToActionSC,
} from "./styles"
import { RoundedIcon } from "../Icon/RoundedIcon"

export default React.memo(function ({ item, isMobile = false, hasGroup = false }) {
    const { selectItem, selectedRetailer } = useContext(MapListContext)
    const dealerName = { value: item.nameTranslated }
    const dealerAffiliate = !!item.affiliate
    const dealerAffiliationLabel = {
        value: dealerAffiliate ? "Official Matchbox Affiliate" : "Official Matchbox Retailer",
    }
    const adressLabel = { value: "10 rue Bachaumont<br />75002 Paris" }

    return (
        <RemoveScroll enabled={isMobile && item.dealerId === selectedRetailer.dealerId}>
            <Root
                lessBottomPadding={hasGroup}
                activated={item.dealerId === selectedRetailer.dealerId}
                onClick={() => selectItem(item, "map")}
            >
                <CloseButtonContainer>
                    <CloseButton>x</CloseButton>
                </CloseButtonContainer>
                <FlexBox lessMarginBottom={hasGroup}>
                    <DealerName field={dealerName} tag="h2" />
                    <DealerDistance tag="div" field={{ value: item.dealerId / 100 + " km" }} />
                </FlexBox>
                <DealerAffiliation tag="div" field={dealerAffiliationLabel} />
                <DealerAdress tag="div" field={adressLabel} />
                <PhoneNumber>
                    <RoundedIcon type="phone" label="Phone Number" />
                </PhoneNumber>
                <GetDirection>
                    <RoundedIcon type="getDirection" label={"Get Direction"} />
                </GetDirection>
                <VisitWebsite lessMarginBottom={hasGroup}>
                    <RoundedIcon type="externalLink" label={"Visit Website"} />
                </VisitWebsite>
                <ViewDetails>
                    <CallToAction underlineOff tag="span" field={{ value: "View Details" }} />
                </ViewDetails>
                <MobileSection />
                {hasGroup && (
                    <ViewGroup>
                        <RoundedIcon type="arrowRight" label={"Group Page"} />
                    </ViewGroup>
                )}
            </Root>
        </RemoveScroll>
    )
})
