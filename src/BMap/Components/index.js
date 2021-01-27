import React from "react"

// import BaiduMaps from './Components/Demo/BaiduMaps'
import BaiduWrapper from "./Components/Demo/BaiduWrapper"

function BMap() {
    return (
        <div className="App">
            <BaiduWrapper zoomLevel="14" />
        </div>
    )
}

export default BMap
