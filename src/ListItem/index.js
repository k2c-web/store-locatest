import React, { useState, useContext, useEffect, useRef } from "react"
import { MapListContext } from "../MapListContext"
import { DropDownIcon } from "../Icon"
import smoothscroll from 'smoothscroll-polyfill';
import {
    Root,
    DealerName,
    DealerAffiliation,
    OpeningHoursSection,
    OpeningHours,
    DealerAdress,
    OpeningHoursToggle,
    DealerDistance,
    RoundedBtn,
} from "./styles"

import {RoundedIcon} from '../Icon/RoundedIcon'

 
// kick off the polyfill!
smoothscroll.polyfill();

export default React.memo(function ({ item }) {
    const [displayOpeningHours, setDisplayOpeningHours] = useState(false)
    const rootRef = useRef()
    const value = useContext(MapListContext)
    const { selectItem,  selectedFrom, selectedRetailer } = value
    const dealerName = item.nameTranslated
    const dealerAffiliate = !!item.affiliate

    useEffect(() => {
        if(rootRef.current && selectedFrom === "map" && dealerName === selectedRetailer.nameTranslated) {
          
            const top = rootRef.current.offsetTop - rootRef.current.getBoundingClientRect().height
             //window.requestAnimationFrame(() => window.scrollTo({ top, left: 0, behavior: 'smooth' }))
            rootRef.current.parentElement.scrollTop = top 
        }
    }, [rootRef, selectedRetailer])

    const handleClick = (e) => {
        if(e.target.classList.contains('opening-hours-section')) {
            setDisplayOpeningHours(!displayOpeningHours)
        } else {
            selectItem(item, "list")
        }
    }
    return (
        <Root ref={rootRef} onClick={handleClick} expand={displayOpeningHours} activated={item.dealerId === selectedRetailer.dealerId}>
            <DealerName field={{ value: dealerName }} tag="h2" />
            <DealerAffiliation
                tag="div"
                underlineOff
                field={{ value: dealerAffiliate ? "Official Matchbox Affiliate" : "Official Matchbox Retailer" }}
            />
            <DealerAdress
                tag="div"
                field={{
                    value: "10 rue Bachaumont<br />75002 Paris",
                }}
            />
            <div>
                <OpeningHoursSection>
                    <OpeningHoursToggle
                        tag="div"
                        field={{value: "Opening Hours"}}
                        className="opening-hours-section" 
                    />
                    <DropDownIcon />
                </OpeningHoursSection>
                {displayOpeningHours && (
                    <OpeningHours className="opening-hours-section" 
                        tag="div"
                        field={{value: item.hoursTranslated}}
                    />
                )}
            </div>
            <DealerDistance>1KM</DealerDistance>
            <RoundedBtn><RoundedIcon type="plus" /></RoundedBtn>
        </Root>
    )
})
