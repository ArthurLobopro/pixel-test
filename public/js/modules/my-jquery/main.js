import ElementsFunctions from "./ElementsFunctions.js"

export default function $(query) {
    if(typeof query === "string" || query instanceof String){
        const elements = document.querySelectorAll(query)
        return new ElementsFunctions(...elements)
    }else{
        return new ElementsFunctions(...[query])
    }
}