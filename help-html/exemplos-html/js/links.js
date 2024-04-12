import $ from "../../../public/js/modules/my-jquery/main.js"

const get = id => document.getElementById(id)

//Target
const escreve_target = event => { 
    const link_t = $("#link-target")[0]
    const target_s = $("#target")[0]
    const target = event.target.dataset.target
    link_t.target=target
    target_s.innerText=target
    const msg  = target === "_blank" ? "Este link será aberto em uma nova guia." : "Este link será aberto na mesma guia."
    $("#msg-target")[0].innerText = msg
}

const target_inputs = $("[name=target]")
target_inputs.on('click',escreve_target)

//Style
const link = $("#link-color")
const troca_cor = event => {
    const cor = event.target.value
    get("color").innerText = cor
    link.css('color',cor)
}
const troca_background = event => {
    const cor = event.target.value
    get("bg-color").innerText=cor
    link.css("backgroundColor", cor)
}
const txtDecoration = event => {
    const style = event.target.value
    get("txt-decor-line").innerText = style
    link.css("textDecorationLine", style)
}
const txtDecorationStl = event => {
    const style = event.target.value
    get("txt-decor-st").innerText = style
    link.css("textDecorationStyle",style)
}
const color_inputs = $("[name=color]")
color_inputs.on('click',troca_cor)

const bgcolor_inputs = $("[name=bgcolor]")
bgcolor_inputs.on('click',troca_background)

const tdec_input = $("[name=tdec]")
tdec_input.on('click', txtDecoration)

const tdecstl_input = $("[name=tdecstl]")
tdecstl_input.on('click',txtDecorationStl)