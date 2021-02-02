import styled from "styled-components"
import { colors } from "../style/Colors"
import { XSmallTitle, Caption, CaptionBold, CallToAction } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"
import { noScrolbarMixin } from "../style/Mixins"

const Root = styled.div`
    box-sizing: border-box;
    width: 276px;
    display: flex;
    flex-flow: column;
    background: white;
    padding: ${(props) => (props.lessBottomPadding ? "30px 30px 18px 30px" : "30px 30px")};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px 0px;
    @media ${getMediaQuery("xs")} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        align-items: flex-start;
        justify-content: flex-start;
        overflow: hidden;
        ${noScrolbarMixin};
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
        position: absolute;
        top: 0;
        right: 0;
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

const FlexBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media ${getMediaQuery("xs")} {
        margin-top: 34px;
    }
`

const DealerName = styled(XSmallTitle)`
    margin: 0;
    padding: 0;
`

const DealerDistance = styled(CaptionBold)`
    font-size: 12px;
    font-weight: bold;
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
    margin-bottom: 26px;
    @media ${getMediaQuery("xs")} {
        margin-bottom: 22px;
    }
`

const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

const GetDirection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

const VisitWebsite = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${(props) => (props.lessMarginBottom ? "12px" : "26px")};
    @media ${getMediaQuery("xs")} {
        margin-bottom: 12px;
    }
`

const ViewDetails = styled.button`
    background: none;
    margin: 0;
    padding: 0;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.red};
    border: 1px solid ${colors.greyMedium};
    border-radius: 25px;
    height: 34px;
    width: 100%;
    &:hover {
        color: rgb(190, 1, 0);
    }
    @media ${getMediaQuery("xs")} {
        width: 40%;
        margin: 0 auto 26px auto;
    }
`

const ViewGroup = styled.div`
    display: flex;
    align-items: center;
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
