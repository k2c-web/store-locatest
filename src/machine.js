import { createMachine, invoke, state, transition, guard, reduce } from "robot3"
import datas from "./Datas"

const wait = (duration) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve()
        }, duration)
    })
}

export default createMachine(
    {
        idle: state(transition("fetch", "loading")),
        loading: invoke(
            async () => {
                await wait(300)
                return datas
            },
            transition(
                "done",
                "loaded",
                reduce((ctx, ev) => ({ ...ctx, retailers: ev.data }))
            )
        ),
        loaded: state(
            transition(
                "click",
                "loaded",
                guard((ctx, ev) => ctx.selectedRetailer.dealerId !== ev.dealerId),
                reduce((ctx, ev) => ({
                    ...ctx,
                    selectedRetailer: ev,
                    selectedFrom: ev.selectedFrom,
                }))
            ),
            transition(
                "click",
                "loaded",
                reduce((ctx, ev) => ({
                    ...ctx,
                    selectedRetailer: {},
                    selectedFrom: null,
                }))
            )
        ),
    },
    () => ({
        selectedRetailer: {},
        retailers: [],
        selectedFrom: null,
    })
)
