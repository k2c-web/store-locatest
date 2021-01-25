import styled from "styled-components"
import { colors } from "../style/Colors"
import { noScrolbarMixin } from "../style/Mixins"
import { XSmallTitle, Caption, CallToAction } from "../commons/Text"

const Root = styled.ul`
    box-sizing: border-box;
    width: 280px;
    flex-flow: column;
    display: flex;
    height: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0 40px 0 0;
    ${noScrolbarMixin};
    background-color: ${colors.white};
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

const OpeningHoursSection = styled.p`
    color: ${colors.blackDark};
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const OpeningHours = styled(Caption)`
    color: ${colors.blackDark};
    padding: 0;
    margin: 10px 0 0 0;
`

const ListItem = styled.li`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    width: 100%;
    border-bottom: 2px solid black;
    background-color: ${(props) => (props.activated ? colors.lightGrey : colors.white)};
    border-color: ${(props) => (props.activated ? colors.red : colors.greyMedium)};
    cursor: pointer;
    color: ${colors.blackDark};
    transition: border 300ms;
    &:hover {
        background-color: ${colors.lightGrey};
    }
`
const OpeningHoursToggle = styled(Caption)`
    margin: 0;
    padding: 0;
`

const DealerDistance = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 6px;
    right: 26px;
`

const RoundedBtn = styled.div`
    position: absolute;
    bottom: 10px;
    right: 26px;
    cursor: pointer;
`

export {
    Root,
    ListItem,
    OpeningHours,
    DealerName,
    DealerAffiliation,
    DealerAdress,
    OpeningHoursSection,
    OpeningHoursToggle,
    DealerDistance,
    RoundedBtn,
}
