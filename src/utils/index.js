const detectBrowser = () => {
    try {
        return !!window && typeof window !== "undefined"
    } catch (e) {
        return false
    }
}

const SSRDetection = () => {
    try {
        return !window
    } catch (e) {
        return true
    }
}

export const isBrowser = detectBrowser()
export const isSSR = SSRDetection()
export const createCookie = (name, value, days) => {
    let date, expires
    if (days) {
        date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toGMTString()}`
    } else {
        expires = ""
    }
    document.cookie = `${name}=${value}${expires}; path=/`
}

export const getCookieValue = (a) => {
    const b = document.cookie.match(`(^|;)\\s*${a}\\s*=\\s*([^;]+)`)
    return b ? b.pop() : ""
}
