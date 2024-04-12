import { get } from "./util.js";
import $ from "./my-jquery/main.js"

const expandAndMinimize = event => {
    let target = event.target.tagName !== 'IMG' ? event.target : event.target.parentElement
    target.children[0].classList.toggle('rotated')
    $(target).next().toggleClass('invisible')
}

const show = event =>{
    let e = get(event.target.dataset.target)
	
    if($(e).next()[0].classList.contains('invisible')) e.click()
    
	e = $(e).next()[0]
	window.scroll(0, (e.offsetTop - (window.innerHeight/2 - e.offsetHeight/2)))
}
export { expandAndMinimize, show }