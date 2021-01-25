import React, { useState } from "react"
import ReactDOM from "react-dom"
import { RemoveScroll } from "react-remove-scroll"

import { Icon } from "../../commons/Icon"
import { PopinMain, CloseContainer, CloseButton } from "./styles"

export const usePopin = () => {
    const [isShowing, setIsShowing] = useState(false)

    const toggle = () => setIsShowing(!isShowing)

    return {
        isShowing,
        toggle
    }
}

export const Popin = ({ isShowing, hide, children, className }) => {
    return isShowing
        ? ReactDOM.createPortal(
              <RemoveScroll>
                  <PopinMain className={className}>
                      <CloseContainer>
                          <CloseButton onClick={hide}>
                              <Icon type="close" size="medium" />
                          </CloseButton>
                      </CloseContainer>
                      {children}
                  </PopinMain>
              </RemoveScroll>,
              document.body
          )
        : null
}
export default Popin
