const menuListHidden = document.querySelector('.menu-list__hidden');
const menuListItem = document.querySelector('.menu-list__item--after');
const contactListItem = document.querySelector('.contact-list__item--after');
const contactListHidden = document.querySelector('.contact-list__hidden');
const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerClose = document.querySelector('.mobile-nav__btn');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

//Opening Pakiet drop menu
function toggleMenu(){
    menuListHidden.classList.add('visible')
}
function removeMenu(){
    menuListHidden.classList.remove('visible')
}
menuListItem.addEventListener('mouseenter', function (e) {
    toggleMenu();
})
menuListItem.addEventListener('mouseleave', function (e) {
    removeMenu();
})

//Opening language drop menu
function toggleContact(){
    contactListHidden.classList.add('visible-language')
}
function removeContact(){
    contactListHidden.classList.remove('visible-language')
}
contactListItem.addEventListener('mouseenter', function (e) {
    console.log('language enter')
    toggleContact();
})

contactListItem.addEventListener('mouseleave', function (e) {
    removeContact();
})

//Opening burger menu
function openBurgerMenu(){
    mobileMenu.classList.remove('invisible')
    mobileMenu.classList.add('open');
    main.classList.add('invisible');
    footer.classList.add('hide');
}
burgerBtn.addEventListener('click', () => {
    openBurgerMenu();
})

//Close burger menu
function closeBurgerMenu(){
    mobileMenu.classList.remove('open')
    mobileMenu.classList.add('invisible');
    main.classList.remove('invisible');
}
burgerClose.addEventListener('click', () => {
    closeBurgerMenu();
})