import styled from "styled-components"
import { colors } from "../style/Colors"
import { XSmallTitle, Caption, CaptionBold } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"

import { RoundedIcon } from "../Icon/RoundedIcon"

export const Root = styled.li`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 20px;
    width: 100%;
    border-bottom: 4px solid rgb(190, 1, 0);
    background-color: ${(props) => (props.selected ? colors.lightGrey : colors.white)};
    border-color: ${(props) => (props.selected ? colors.red : colors.greyMedium)};
    cursor: pointer;
    color: ${colors.blackDark};
    transition: border 300ms;
    &:hover {
        background-color: ${colors.lightGrey};
    }
    @media ${getMediaQuery("xs")} {
        padding: 14px 5vw;
    }
`

export const DealerName = styled(XSmallTitle)`
    margin: 0;
    padding: 0;
`
export const DealerAffiliation = styled(XSmallTitle)`
    color: ${colors.red};
    font-size: 10px;
`

export const DealerAdress = styled(Caption)`
    color: ${colors.blackDark};
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

export const DealerDistance = styled(CaptionBold)`
    font-size: 12px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: bold;
    @media ${getMediaQuery("xs")} {
        font-size: 10px;
    }
`

export const RoundedBtn = styled(RoundedIcon)`
    cursor: pointer;
`

export const FlexBox = styled.div`
    width: 100%;
    display: flex;
    align-items: bottom;
    justify-content: space-between;
`
