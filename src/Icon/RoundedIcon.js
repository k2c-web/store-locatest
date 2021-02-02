import React from "react"
import styled from "styled-components"
import { colors } from "../style/Colors"
import { Root, CallToActionSC, RoundedBtn } from "./styles"

import { PhoneIcon, GetDirectionIcon, ExternalLinkIcon, LocationIcon, PlusIcon, ArrowRight } from "./"

const mapType = {
    phone: <PhoneIcon />,
    getDirection: <GetDirectionIcon />,
    externalLink: <ExternalLinkIcon />,
    location: <LocationIcon />,
    plus: <PlusIcon />,
    arrowRight: <ArrowRight />,
}

export const RoundedIcon = ({ type = "phone", label, marginBottomPx, ...rest }) => {
    return (
        <Root marginBottomPx={marginBottomPx}>
            <RoundedBtn {...rest}>{type && mapType[type] ? mapType[type] : <PhoneIcon />}</RoundedBtn>
            {!!label && (
                <CallToActionSC underlineOff tag="span" field={{ value: label }}>
                    {label}
                </CallToActionSC>
            )}
        </Root>
    )
}
