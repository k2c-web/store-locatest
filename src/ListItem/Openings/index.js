import React, { useState } from "react"
import { Root, Toggle, Today, OpeningHours, ToggleLabel, DropDownIconSC } from "./styles"

const className = "opening-hours"
export default React.memo(function ({ value }) {
    const [displayOpeningHours, setDisplayOpeningHours] = useState(false)
    const toggle = () => setDisplayOpeningHours(!displayOpeningHours)
    return (
        <Root className={className} onClick={toggle}>
            <Today
                className={className}
                tag="div"
                field={{
                    value:
                        "Today" +
                        value
                            .split("<br/>")[0]
                            .replace(/Mon-(Sat|Sun)/gi, "")
                            .trim(),
                }}
            />
            <Toggle>
                <ToggleLabel tag="div" field={{ value: "Opening Hours" }} className={className} />
                <DropDownIconSC rotate={displayOpeningHours} />
            </Toggle>
            {displayOpeningHours && <OpeningHours className={className} tag="div" field={{ value }} />}
        </Root>
    )
})
