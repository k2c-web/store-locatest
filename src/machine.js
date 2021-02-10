import { createMachine, invoke, state, transition, guard, reduce } from "robot3"
import { dummy } from "./Datas"

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
                return dummy
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
                guard(
                    (ctx, ev) =>
                        ev.selectedRetailer &&
                        ev.selectedRetailer.dealerId &&
                        ctx.selectedRetailer.dealerId !== ev.selectedRetailer.dealerId
                ),
                reduce((ctx, ev) => ({
                    ...ctx,
                    selectedRetailer: ev.selectedRetailer,
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
