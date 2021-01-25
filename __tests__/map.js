import React from "react"
import { mount } from "enzyme"
import Map from "../Map"
import retailers from "../Datas"

describe("Component <Item />", () => {
    //---PROPS --------------------------------------------------------------------------------
    const index = 0
    let activeIndex = null //activeIndex from machine context change when an item is clicked
    const selectItem = jest.fn() // Mock function that changed selectedItem
    const item = retailers[index]
    const selectedRetailer = item
    const clickOrigin = "map"
    //----------------------------------------------------------------------------------------------

    const wrapper = mount(
        <Map
            data={selectedRetailer}
            activeIndex={activeIndex}
            selectItem={selectItem}
            items={retailers}
            selectedFrom={clickOrigin}
        />
    )

    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it("should accepts its props", () => {
        expect(wrapper.props().items).toEqual(retailers)
    })

    it("should send correct parameters to parent on click", () => {
        wrapper.find("li").first().simulate("click")
        expect(selectItem).toHaveBeenCalledWith(index, item, clickOrigin)
    })
})
