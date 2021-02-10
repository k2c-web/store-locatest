import React, { useContext } from "react"
import { MapListContext } from "../MapListContext"
import { RemoveScroll } from "react-remove-scroll"
import MobileSection from "./MobileSection"

import { CallToAction } from "../Text"
import { Root, CloseButtonContainer, CloseButton, DealerName, DealerAdress, ViewDetails, ViewGroup } from "./styles"
import { RoundedIcon } from "../Icon/RoundedIcon"

export default React.memo(function ({ item, isMobile = false, hasGroup = false }) {
    const { selectItem, selectedRetailer } = useContext(MapListContext)
    const dealerName = { value: item.nameTranslated }
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
                <DealerName field={dealerName} tag="h2" />
                <DealerAdress tag="div" field={adressLabel} />
                <RoundedIcon type="phone" label="Phone Number" marginBottomPx="12px" />
                <RoundedIcon type="getDirection" label={"Get Direction"} marginBottomPx="12px" />
                <RoundedIcon marginBottomPx={hasGroup ? "12px" : "26px"} type="externalLink" label={"Visit Website"} />
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
