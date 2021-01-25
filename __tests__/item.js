import React from "react"
import { mount } from "enzyme"
import Item from "../List/Item"
import data from "../Datas"

describe("Component <Item />", () => {
    //---PROPS --------------------------------------------------------------------------------
    const index = 0
    const item = data[index] // Map index generated from <List/>
    let activeIndex = null //activeIndex from machine context change when an item is clicked
    const selectItem = jest.fn() // Mock function that changed selectedItem
    const clickOrigin = "list" // Item clicked from map or list
    //----------------------------------------------------------------------------------------------

    const wrapper = mount(<Item selected={index === activeIndex} index={index} item={item} selectItem={selectItem} />)

    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it("should not display opening hours", () => {
        expect(wrapper.find(".opening-hours")).toHaveLength(0)
    })

    it("should send correct parameters to parent on click", () => {
        wrapper.simulate("click")
        expect(selectItem).toHaveBeenCalledWith(index, item, clickOrigin)
    })

    it.skip("should display opening hours on selected state", () => {
        activeIndex = 0
        const localWrapper = mount(
            <Item selected={index === activeIndex} index={index} item={item} selectItem={selectItem} />
        )
        expect(localWrapper.find(".opening-hours")).toHaveLength(1)
        expect(localWrapper.find(".opening-hours").text()).toBe(item.openingHours)
    })

    it("accepts its props", () => {
        expect(wrapper.props().item).toEqual(item)
    })
})
