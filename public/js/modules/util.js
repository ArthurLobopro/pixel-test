const get = id => document.getElementById(id)
const querySelector = str => document.querySelector(str)

const copy = text => {
    navigator.clipboard.writeText(text)
    .then(() => alert("Copiado para área de transferência!"))
}

export { get, querySelector, copy }