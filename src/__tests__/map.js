import React from "react"
import { mount } from "enzyme"
import Map from "../Map"
import retailers from "../Datas"
import data from "../Datas"
import InfoCard from "../InfoCard"
import { GoogleMap } from "@react-google-maps/api"
import MapListContextProvider, { MapListContext } from "../MapListContext"

const contextValues = {
    state: "loaded",
    retailers: data,
    selectedFrom: "map",
    selectedRetailer: {},
    activeIndex: null,
    selectItem: jest.fn(),
}

describe("Component <Item />", () => {
    const itemCounts = data.length
    const lastItemIndex = itemCounts - 1

    const TestComp = ({ ...props }) => {
        const { state, retailers, selectedRetailer, activeIndex, selectItem } = React.useContext(MapListContext)

        return (
            <MapListContext.Provider value={contextValues}>
                <Map />
            </MapListContext.Provider>
        )
    }

    const wrapper = mount(
        <MapListContext.Provider value={contextValues}>
            <TestComp />
        </MapListContext.Provider>
    )
    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it.skip("should render a google map component", () => {
        expect(wrapper.find(GoogleMap)).toHaveLength(1)
        expect(wrapper.find(GoogleMap).find).toHaveLength(1)
    })
})
