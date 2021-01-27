import React from "react"
import styled from "styled-components"
import { colors } from "../style/Colors"

import { PhoneIcon, GetDirectionIcon, ExternalLinkIcon, LocationIcon, PlusIcon, ArrowRight } from "./"

const RoundedBtn = styled.div`
    margin: 0;
    padding: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.white};
    border: 1px solid;
    border-color: ${colors.lightGrey};
    font-weight: bold;
`

const mapType = {
    phone: <PhoneIcon />,
    getDirection: <GetDirectionIcon />,
    externalLink: <ExternalLinkIcon />,
    location: <LocationIcon />,
    plus: <PlusIcon />,
    arrowRight: <ArrowRight />,
}

export const RoundedIcon = ({ type = "phone", label, ...rest }) => {
    return (
        <>
            <RoundedBtn {...rest}>{type && mapType[type] ? mapType[type] : <PhoneIcon />}</RoundedBtn>
            {!!label && <span>{label}</span>}
        </>
    )
}
