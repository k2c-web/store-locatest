import posed from "react-pose"

export const Container = posed.div({
    visible: {
        applyAtStart: { visibility: "visible" },
        opacity: 1,
        transition: { duration: 4000 }
    },
    hidden: {
        applyAtEnd: { visibility: "hidden" },
        opacity: 0,
        transition: { duration: 4000 }
    }
})

export const Pop = posed.div({
    enter: { y: 0, opacity: 1, applyAtStart: { visibility: "visible" } },
    exit: {
        y: 500,
        opacity: 0,
        transition: { duration: 200 },
        applyAtStart: { visibility: "hidden" }
    }
})
