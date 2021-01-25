import React from "react"
import { IconSvg } from "./styles"
import { colors } from "../style/Colors"

const DropDownIcon = (props) => (
    <IconSvg
        height={11}
        width={11}
        viewBox={"0 0 11 11"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
        fill={colors.blackDark}
    >
        <path d={"m11 3.2-5.5 5.7-5.5-5.7"} id={"down"} />
    </IconSvg>
)

const PhoneIcon = (props) => (
    <IconSvg
        height={11}
        width={11}
        viewBox={"0 0 11 11"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
    >
        <path
            d={
                "m3.55 3.64-.06.03c.4 1.39 1.19 3 2.76 4.46l.12-.1c.61-.54 1.51-.64 2.02-.24l.89.79c.49.4.48 1.1-.09 1.64-.31.36-2.52 2.62-5.85-2.64-3.52-5.56-1.41-7.08-.5-7.45.01-.01.03-.01.04-.02.03-.01.05-.02.07-.03.01 0 .02-.01.03-.01.13-.04.22-.05.22-.05s0 0 0 .01c.6-.12 1.09.17 1.28.67 0 0 .82 2.49-.93 2.94z"
            }
            id={"phone"}
        />
    </IconSvg>
)

const GetDirectionIcon = (props) => (
    <IconSvg
        height={11}
        width={11}
        viewBox={"0 0 11 11"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
    >
        <path d={"m7 7.8v-2.6h-5v5.8h-2v-6.6c0-.3.1-.6.3-.9.2-.2.5-.3.9-.3h.1 5.7v-2.4l4 3.5z"} id={"get-direction"} />
    </IconSvg>
)

const ExternalLinkIcon = (props) => (
    <IconSvg
        height={11}
        width={11}
        viewBox={"0 0 11 11"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
    >
        <path
            d="m5.78 8h1.22v1.78 1.22h-1.22-4.56-1.22v-1.22-8.56-1.22h1.22 4.57 1.21v1.22 1.78h-1.22v-1.78h-4.56v8.57h4.57v-1.79zm4.03-3.7-1.18-1.2v1.8h-5.63v1.22h5.63v1.8l1.19-1.2 1.18-1.22z"
            id="external-link"
        />
    </IconSvg>
)

const PlusIcon = (props) => (
    <IconSvg
        height={11}
        width={11}
        viewBox={"0 0 11 11"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
    >
        <path d="m11 6.15h-4.85v4.85h-1.3v-4.85h-4.85v-1.3h4.85v-4.85h1.3v4.85h4.85z" id="plus" />
    </IconSvg>
)

const LocationIcon = (props) => (
    <IconSvg
        height={21}
        width={21}
        viewBox={"0 0 21 21"}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        onClick={props.onClick}
    >
        <path d="m10.5 0c-1 0-1.9.2-2.8.6-2.4 1.1-4 3.4-4 6.2v.3.3c.1 1.4.5 2.7 1.2 3.9 1 1.7 5.6 9.7 5.6 9.7s4.3-7.4 5.5-9.6c.8-1.5 1.3-2.8 1.3-4.6 0-3.7-3.1-6.8-6.8-6.8zm4.7 6.8c0 2.6-2.1 4.8-4.8 4.8s-4.7-2.2-4.7-4.8c0-2.7 2.2-4.8 4.8-4.8s4.7 2.1 4.7 4.8z" id="location" />
    </IconSvg>
)

export { PlusIcon, DropDownIcon, PhoneIcon, GetDirectionIcon, ExternalLinkIcon, LocationIcon }
