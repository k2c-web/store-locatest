import React from "react"
import MapListContextProvider from "./MapListContext"
import Layout from "./Layout"
export default function App() {
    return (
        <MapListContextProvider>
            <Layout />
        </MapListContextProvider>
    )
}
