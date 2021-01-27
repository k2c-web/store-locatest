import React, { act } from "react"
import { screen } from "@testing-library/dom"
import { mount, shallow } from "enzyme"
import List from "../List"
import ListItem from "../ListItem"
import data from "../Datas"
import MapListContextProvider, { MapListContext } from "../MapListContext"

const contextValues = {
    state: "loaded",
    retailers: data,
    selectedRetailer: {},
    activeIndex: null,
    selectItem: jest.fn(),
}

const itemCounts = data.length
const lastItemIndex = itemCounts - 1

const TestComp = () => {
    const { retailers } = React.useContext(MapListContext)
    return <List />
}

const wrapper = mount(
    <MapListContext.Provider value={contextValues}>
        <TestComp />
    </MapListContext.Provider>
)

describe("<List />", () => {
    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it("should generate an <ul>", () => {
        expect(wrapper.find("ul")).toHaveLength(1)
    })

    it("should contains the right numbers of <ListItem />", () => {
        expect(wrapper.find(ListItem)).toHaveLength(data.length)
    })

    it("should generate the right number of <li>", () => {
        expect(wrapper.find("li")).toHaveLength(data.length)
    })
})
