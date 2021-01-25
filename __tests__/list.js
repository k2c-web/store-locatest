import React from "react"
import { screen } from "@testing-library/dom"
import { mount } from "enzyme"
import List from "../List"
import data from "../Datas"

/*
with dive()
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import About from '../pages/about.js'

describe('With Enzyme', () => {
  it('App shows "About"', () => {
    const about = shallow(
      <About />
    ).dive()
    expect(about.find('h1').text()).toEqual('About')
  })
})
*/

const selectItem = jest.fn()
const lastItemIndex = data.length - 1
const wrapper = mount(<List items={data} activeIndex={null} selectItem={selectItem} />)

describe("<List />", () => {
    it("should render", () => {
        expect(wrapper).not.toBeNull()
    })

    it("should contains the right numbers of <Items />", () => {
        expect(wrapper.find("ul")).toHaveLength(1)
        expect(wrapper.find("li")).toHaveLength(data.length)
        expect(wrapper.find("li").first().text()).toBe(data[0].name)
        expect(wrapper.find("li").at(2).text()).toBe(data[2].name)
    })

    it("should generate the right texts contents for the item of the list", () => {
        expect(wrapper.find("ul")).toHaveLength(1)
        expect(wrapper.find("li")).toHaveLength(data.length)
        expect(wrapper.find("li").first().text()).toBe(data[0].name)
        expect(wrapper.find("li").at(2).text()).toBe(data[2].name)
        expect(wrapper.find("li").last().text()).toBe(data[lastItemIndex].name)
    })
})
