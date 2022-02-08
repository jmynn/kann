const CLASSLIST = {
	MENU: '.menu',
	MENU_BODY: '.column-header',
}
let bool = false
let bool_2 = true 
const links = []
function dynamicNewList() {
    function createLi(link) {
		let li
		li = document.createElement('li')
		li.textContent = link
		return li
	}
    for (let i = 0; i < links.length; i++) {
		links[i] = createLi(links[i])
        document.querySelector('.column-header__list').appendChild(links[i])
	}

}

document.querySelector(CLASSLIST.MENU).addEventListener('click', () => {
    bool = true
	if(bool && bool_2){
        bool_2 = false
        document.querySelectorAll('.column-header__list')[1].querySelectorAll('li').forEach((item) => links.push(item.textContent))
        dynamicNewList()
        document.querySelector('.header__row').removeChild(document.querySelectorAll(".column-header")[1])
        document.querySelector('.column-header__body').prepend(document.querySelector('.header__logo'))
    }

	document.body.classList.toggle('active')
	document.querySelector(CLASSLIST.MENU).classList.toggle('active')
	document.querySelector(CLASSLIST.MENU_BODY).classList.toggle('active')
})
window.addEventListener('resize', () => {
    if(document.body.offsetWidth > 767 && !bool_2){
        document.querySelector('.column-header__list').querySelectorAll('li')[4].style.paddingLeft = '15vw'
        document.querySelector('.column-header__body').style.display = 'flex'
    }
    else{
        document.querySelector('.column-header__body').style.display = ''
        document.querySelector('.column-header__list').querySelectorAll('li')[4].style.paddingLeft = ''
    }
        
})