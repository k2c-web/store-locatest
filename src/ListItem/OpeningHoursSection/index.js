import React, { useState } from "react"

import { DropDownIcon } from "../../Icon"
import { OpeningHoursSection, OpeningHours, OpeningHoursToggleLabel } from "../styles"

export default React.memo(function ({ hoursTranslated, displayOpeningHours, handleClick, className }) {
    return (
        <div onClick={handleClick} className={className}>
            <OpeningHoursSection onClick={handleClick}>
                <OpeningHoursToggleLabel tag="div" field={{ value: "Opening Hours" }} className={className} />
                <DropDownIcon />
            </OpeningHoursSection>
            {displayOpeningHours && <OpeningHours className={className} tag="div" field={{ value: hoursTranslated }} />}
        </div>
    )
})
