import { get, copy } from "../../../public/js/modules/util.js";
import $ from "../../../public/js/modules/my-jquery/main.js"

function expandAndMinimize(event){
    let target = event.target
    const parent = target.parentElement
    const after = target.parentElement.previousElementSibling
    target.classList.toggle('rotated')

    const element = document.querySelector(`#${target.dataset.target}`)
    const display = element.style.display == 'none' ? '' : 'none'
    $(element).css('display', display)
}

const expand_images = $('li > img')
expand_images.on('click', expandAndMinimize)

const trocaFull = event => {
    const value = String(event.target.value).trim().split(' ')
    const name = event.target.dataset.name
    const laterais = $(`[name=${name}]`)

    switch (value.length) {
        case 1:
            for(let i of laterais){ i.value = value[0]}
            break
        case 2:
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[0]
            laterais[3].value = value[1]
            break
        case 3: 
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[2]
            laterais[3].value = value[1]
            break
        default:
            laterais[0].value = value[0]
            laterais[1].value = value[1]
            laterais[2].value = value[2]
            laterais[3].value = value[3]
            break
    }
    $("#div-cobaia").css(`border${name}`,value.join(' '))
    $(`#${name.toLowerCase()}`)[0].innerText = value.join(' ')
}

const trocaLateral = event => {
    const target = event.target
    const lado = target.dataset.lado
    const style = String(target.name)
    const value = target.value
    const main_input = get(`border-${style.toLowerCase()}`)
    //laterais
    let e = document.getElementsByName(style)
    let l = []
    for(let i in e){ l.push(e[i].value) }
    if(l[0] == l[1] && l[1] == l[2] && l[2] == l[3]){
        main_input.value = l[0]
    }else if(l[0] == l[2] && l[1] == l[3]){
        main_input.value = `${l[0]} ${l[1]}`
    }else if(l[1] == l[3]){
        main_input.value = `${l[0]} ${l[1]} ${l[2]}`
    }else{
        main_input.value = `${l[0]} ${l[1]} ${l[2]} ${l[3]}`
    }
    const eventLoad = new InputEvent('input')
    main_input.dispatchEvent(eventLoad)
    $("#div-cobaia").css(`border${lado}${style}`,value)
}

const border_style_inputs = $("#border-style,#border-color,#border-width,#border-radius")
border_style_inputs.on('input', trocaFull)

const laterais = $('ul > ul > li')
laterais.on('change', trocaLateral)

const copyToClipboard = event => {
    let element = document.querySelector("table.exemplo")
    let text = String(element.innerText)
    text = text.replace(/[0-9]\n/g,"")
    copy(text)
}
const copyButton = $("h2 > img")
copyButton.on('click', copyToClipboard)