const CLASSLIST = { 
    MENU: '.menu',
    MENU_BODY: '.column-header',
}
document.querySelector(CLASSLIST.MENU).addEventListener("click", () => {
    console.log(document.querySelectorAll('.column-header'));
    console.log('test');

    document.body.classList.toggle("active")
    document.querySelector(CLASSLIST.MENU).classList.toggle('active')
    document.querySelectorAll(CLASSLIST.MENU_BODY).forEach(item => item.classList.toggle('active'))
})
