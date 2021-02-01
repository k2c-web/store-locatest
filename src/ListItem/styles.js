import styled from "styled-components"
import { colors } from "../style/Colors"
import { XSmallTitle, Caption, CallToAction, CaptionBold } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"

const Root = styled.li`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 20px;
    width: 100%;
    border-bottom: 4px solid rgb(190, 1, 0);
    background-color: ${(props) => (props.activated ? colors.lightGrey : colors.white)};
    border-color: ${(props) => (props.activated ? colors.red : colors.greyMedium)};
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

const DealerName = styled(XSmallTitle)`
    margin: 0;
    padding: 0;
`
const DealerAffiliation = styled(XSmallTitle)`
    color: ${colors.red};
    font-size: 10px;
`

const DealerAdress = styled(Caption)`
    color: ${colors.blackDark};
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

const OpeningHoursSection = styled.div`
    color: ${colors.blackDark};
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const todayOpeningHours = styled(Caption)`
    font-size: 14px;
    color: ${colors.blackDark};
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

const OpeningHours = styled(Caption)`
    color: ${colors.blackDark};
    padding: 0;
    margin: 10px 0 0 0;
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

const OpeningHoursToggleLabel = styled(Caption)`
    margin: 0;
    padding: 0;
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 12px;
    }
`

const DealerDistance = styled(CaptionBold)`
    font-size: 12px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 30px;
    right: 20px;
    font-size: 14px;
    @media ${getMediaQuery("xs")} {
        font-size: 10px;
    }
`

const RoundedBtn = styled.div`
    position: absolute;
    bottom: 30px;
    right: 20px;
    cursor: pointer;
`

export {
    Root,
    OpeningHours,
    DealerName,
    DealerAffiliation,
    DealerAdress,
    OpeningHoursSection,
    OpeningHoursToggleLabel,
    todayOpeningHours,
    DealerDistance,
    RoundedBtn,
}
