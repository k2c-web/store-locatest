import styled from "styled-components"

import { colors } from "../style/Colors/index"
const revertibles = ["externalLink"] // RTL

export const IconSvg = styled.svg`
    fill: ${(props) => (props.fill ? props.fill : colors.red)};
    [dir="rtl"] && {
        transform: scale(${({ name }) => (!!~revertibles.indexOf(name) ? "-1, 1" : "1, 1")});
    }
`
