import { useState, useRef, useCallback } from "react"
import { interpret } from "robot3"

export function useMachine(machine) {
    const { current: service } = useRef(
        interpret(machine, () => {
            setContext(service.context)
            setState(service.machine.current)
        })
    )

    const [state, setState] = useState(service.machine.current)
    const [context, setContext] = useState(service.context)

    const send = useCallback(
        function ({ type, ...params }) {
            service.send({ type, ...params })
        },
        [service]
    )

    return [state, send, context]
}
