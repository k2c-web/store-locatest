import styled from "styled-components"
import { colors } from "../style/Colors"
import { XSmallTitle, Caption, CaptionBold } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"

const Root = styled.div`
    box-sizing: border-box;
    width: 276px;
    height: 336px;
    display: flex;
    flex-flow: column;
    background: white;
    padding: ${(props) => (props.belongsToAGroup ? "30px 30px 18px 30px" : "30px 30px")};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px 0px;
    @media ${getMediaQuery("xs")} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
`
const CloseButtonContainer = styled.div`
    height: 34px;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    @media ${getMediaQuery("xs")} {
        display: flex;
    }
`

const CloseButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    height: 34px;
    line-height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.red};
    color: ${colors.white};
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
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
    margin: 0;
    margin-bottom: 12px;
`

const DealerDistance = styled(CaptionBold)`
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-align: right;
    margin-bottom: 6px;
`

const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 12px;
`

const ViewDetails = styled.button`
    background: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    display: block;
    text-align: center;
    color: ${colors.red};
    border: 1px solid ${colors.greyMedium};
    border-radius: 25px;
    height: 34px;
    &:hover {
        color: rgb(190, 1, 0);
    }
`

const ViewGroup = styled.div`
    display: flex;
    align-items: center;
`

const GetDirection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`
const VisitWebsite = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 26px;
`

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export {
    Root,
    CloseButton,
    CloseButtonContainer,
    DealerAdress,
    DealerAffiliation,
    DealerDistance,
    DealerName,
    PhoneNumber,
    ViewDetails,
    GetDirection,
    VisitWebsite,
    ViewGroup,
    FlexBox,
}
