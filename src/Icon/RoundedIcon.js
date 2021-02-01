import React from "react"
import styled from "styled-components"
import { colors } from "../style/Colors"

import { PhoneIcon, GetDirectionIcon, ExternalLinkIcon, LocationIcon, PlusIcon, ArrowRight } from "./"

const RoundedBtn = styled.div`
    cursor: pointer;
    margin: 0 6px 0 0;
    padding: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    font-weight: bold;
    &:hover {
        transition: all 300ms;
        background: ${colors.red};
        svg {
            fill: rgb(250, 250, 250);
        }
    }
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
