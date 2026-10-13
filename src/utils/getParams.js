import getAttrNameFromSelector from "./getAttrNameFromSelector"

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(
        element.getAttribute(getAttrNameFromSelector(dataAttrSelector))
    )
}

export default getParams