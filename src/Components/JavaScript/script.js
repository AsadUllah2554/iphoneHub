let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

const menuClick = menu.onclick = () => {
	menu.classList.toggle('bx-x')
	navbar.classList.toggle('open')
}

const menuScroll= window.onscroll = () => {
	menu.classList.remove('bx-x')
	navbar.classList.remove('open')
}

export {menuClick,menuScroll}
