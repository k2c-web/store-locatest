const _BASE_FONT_SIZE = "16px"

/**
 * getResponsiveFontSize() Is a method returning the Calc method to calculate the font size responsive
 * All parameters are required
 * calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
 *
 * @params "fontSizeMin" (with unit)
 * Is the minimum font-size applied at Text (ex : 20px)
 * @params "fontSizeMax" (with unit)
 * Is the maximum font-size applied at Text (ex : 50px)
 * @params "viewportMinWidth" (with unit)
 * Is the minimum viewport size to change font-size (ex : 320px)
 * @params "viewportMaxWidth" (with unit)
 * Is the maximum viewport size to change font-size (ex : 1200px)
 */

export const getResponsiveFontSize = (fontSizeMin, fontSizeMax, viewportMinWidth, viewportMaxWidth) => {
    if (!fontSizeMin || !fontSizeMax || !viewportMinWidth || !viewportMaxWidth)
        throw new Error("All parameters to calculate de font-size are required")

    const minimumFontSize = parseInt(fontSizeMin, 10)
    const maximumFontSize = parseInt(fontSizeMax, 10)
    const minimumVW = parseInt(viewportMinWidth, 10)
    const maximumVW = parseInt(viewportMaxWidth, 10)

    if (
        typeof minimumFontSize !== "number" ||
        typeof maximumFontSize !== "number" ||
        typeof minimumVW !== "number" ||
        typeof maximumVW !== "number"
    )
        throw new Error("Bad parameters")

    return `calc(${convertToREM(fontSizeMin, true)} + (${convertToREM(maximumFontSize)} - ${convertToREM(
        minimumFontSize
    )}) * ((100vw - ${convertToREM(minimumVW, true)}) / (${convertToREM(maximumVW)} - ${convertToREM(minimumVW)}) ))`
}

/**  ConvertToREM() : This method convert the value in Pixels to REM. She improve the readibilty and usability of the parent method.
 * Only the first parameter is required
 * calc ([valueInPixels] / [valueOfBaseInPixels])
 *
 * @params "valueInPixels" - Number or String (with or without unit) - Required
 * The value in pixels to convert
 *
 * @params "wUnit" - Boolean - Optional
 * Flag to add rem unit at outter value
 **/
const convertToREM = (valueInPixels, wUnit) => {
    const BASE = parseInt(_BASE_FONT_SIZE, 10)
    if (!valueInPixels) throw new Error("The first parameter is necessary to transform it")
    return wUnit ? parseInt(valueInPixels, 10) / BASE + "rem" : parseInt(valueInPixels, 10) / BASE
}

export const toREM = pixels => convertToREM(pixels, true)
