import $ from "./my-jquery/main.js"
function troca(){
	const circle = $('.circle')
	if(tema == "white"){
		circle.toggleClass('left')
		circle.toggleClass('right')
	}else{
		circle.toggleClass('right')
		circle.toggleClass('left')
	}
	troca_tema()
}

const troca_tema = () => {
	tema = tema == "white" ? "dark" : "white"
	set_tema()
}

const lerTema = () =>{
	if(localStorage.tema == undefined){
		criaTema()
	}else{
		tema = localStorage.tema
	}
	set_tema()
	btn_class()
}

const criaTema = () => {
	localStorage.tema = tema
}

let tema = 'white'

const set_tema = () => {
	const cores = $('#cores')[0]
	const cabecalho = $("#cabecalho")[0]
	if(tema=="white"){
		cores.href="css/theme-white.css"
		cabecalho.href="../public/css/cabecalho-white.css"
	}else{
		cores.href="css/theme-dark.css"
		cabecalho.href="../public/css/cabecalho-dark.css"
	}
	criaTema()
}

const classe = {
	white: "left", dark: "right"
}

const btn_class = () => {
	const circle = $(".circle")
	circle.addClass(classe[tema])
}
export { troca, lerTema }