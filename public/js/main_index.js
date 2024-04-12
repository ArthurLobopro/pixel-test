import { troca, lerTema} from "./modules/tema.js"
import { expandAndMinimize, show } from "./modules/expand.js"
import $ from "./modules/my-jquery/main.js"

//Detecção de eventos

document.body.onload = ()=> {
	lerTema()
	document.body.style.display = ""
}

const titles = $('h2')
titles.on('click',expandAndMinimize)

const buttons = $("nav > ul > li")
buttons.on('click', show)

const theme_button = $('.theme-button')
theme_button.on('click',troca)

const circle = $('.circle')

setTimeout(() => {
	circle.removeClass('ad-2s')
}, 1000);