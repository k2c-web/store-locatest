import styled from "styled-components"
import { colors } from "../style/Colors"
import { XSmallTitle, Caption, CallToAction } from "../Text"
import { getMediaQuery } from "../style/Breakpoint"

const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    background: white;
    @media ${getMediaQuery("xs")} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
    }
`

const DealerName = styled(XSmallTitle)`
    margin: 0;
    padding: 0;
`
const DealerAffiliation = styled(CallToAction)`
    color: ${colors.red};
    text-transform: uppercase;
`

const DealerAdress = styled(Caption)`
    color: ${colors.blackDark};
`

const DealerDistance = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 6px;
    right: 26px;
`

const PhoneNumber = styled.div`
    display: flex;
    align-items: center;
`

const ViewDetails = styled.div`
    width: 80%;
    height: 30px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.red};
    border: 1px solid ${colors.greyMedium};
    border-radius: 20px;
`

const ViewGroup = styled.div`
    display: flex;
    align-items: center;
`

const GetDirection = styled.div`
    display: flex;
    align-items: center;
`
const VisitWebsite = styled.div`
    display: flex;
    align-items: center;
`

export {
    Root,
    DealerAdress,
    DealerAffiliation,
    DealerDistance,
    DealerName,
    PhoneNumber,
    ViewDetails,
    GetDirection,
    VisitWebsite,
    ViewGroup,
}
