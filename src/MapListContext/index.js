import React, { useCallback, useMemo } from "react"
import machine from "../machine"
import { useMachine } from "../Hooks/useMachine"

export const MapListContext = React.createContext({})

export default function MapListContextProvider({ children }) {
    const [state, send, context] = useMachine(machine)
    const init = () => send("fetch")
    const selectItem = useCallback(
        (item, selectedFrom) => {
            send("click", { selectedFrom, ...item }) // If the item clicked is aready active reset state
        },
        [send]
    )

    const displayLoader = useMemo(() => context.retailers.length <= 0, [context.retailers])

    const value = {
        state,
        send,
        ...context,
        selectItem,
        displayLoader,
        init,
    }
    return <MapListContext.Provider value={value}>{children}</MapListContext.Provider>
}
