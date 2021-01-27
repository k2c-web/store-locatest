import React, { useContext } from "react"
import { render, fireEvent } from "@testing-library/react"
import { screen } from "@testing-library/dom"
import { renderHook, act } from "@testing-library/react-hooks"
import { mount } from "enzyme"
import ListItem from "../ListItem"
import data from "../Datas"
import MapListContextProvider, { MapListContext } from "../MapListContext"
const contextValues = {
    state: "loaded",
    retailers: data,
    selectedRetailer: data[0],
    activeIndex: 0,
    selectItem: jest.fn(),
}

const itemCounts = data.length
const lastItemIndex = itemCounts - 1

const TestComp = ({ ...props }) => {
    const { state, retailers, selectedRetailer, activeIndex, selectItem } = React.useContext(MapListContext)

    return (
        <MapListContext.Provider value={contextValues}>
            <ListItem item={props.item} />
        </MapListContext.Provider>
    )
}
const selectItem = jest.fn()
let wrapper = mount(<TestComp item={data[0]} />)

describe("Component <Item />", () => {
    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it("should generate the expected markup", () => {
        expect(wrapper.find("li")).toHaveLength(1)
        expect(wrapper.find("h2")).toHaveLength(1)
    })

    it.skip("should send correct parameters to parent on click", () => {
        const selectItem = jest.fn()
        wrapper.simulate("click")
        expect(selectItem).toHaveBeenCalledWith(data[0], "list")
    })

    it("should use custom step when incrementing", () => {
        const { result } = renderHook(() => useContext(() => selectItem(data[0]), { wrapper })
    console.log(result)
    })
})
