export const sizes = {
    xs: {
        min: 0,
        max: 599
    },
    s: {
        min: 600,
        max: 959
    },
    m: {
        min: 960,
        max: 1279
    },
    l: {
        min: 1280,
        max: 1919
    },
    xl: {
        min: 1920,
        max: Infinity
    }
}

export const getMediaQuery = mq => {
    if (!mq) throw new Error(`Missing size parameter, please provide one of the following: ${Object.keys(sizes)}`)

    switch (mq) {
        case "xs":
            return `(max-width: ${sizes[mq].max}px)`
        case "xl":
            return `(min-width: ${sizes[mq].min}px)`
        case "s":
        case "m":
        case "l":
            return `(min-width: ${sizes[mq].min}px) and (max-width: ${sizes[mq].max}px)`
        default:
            throw new Error(`"${mq}" doesn't exist, available sizes: ${Object.keys(sizes)}`)
    }
}
