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

menuListItem.addEventListener('mouseenter', addMenu);
menuListItem.addEventListener('mouseleave', removeMenu);
function addMenu(){
    menuListHidden.classList.add('visible')
}
function removeMenu(){
    menuListHidden.classList.remove('visible')
}
//Opening language drop menu

contactListItem.addEventListener('mouseenter', addContact);

contactListItem.addEventListener('mouseleave', removeContact);
function addContact(){
    contactListHidden.classList.add('visible-language')
}
function removeContact(){
    contactListHidden.classList.remove('visible-language')
}
//Opening burger menu

burgerBtn.addEventListener('click', openBurgerMenu);
function openBurgerMenu(){
    mobileMenu.classList.remove('invisible')
    mobileMenu.classList.add('open');
    main.classList.add('invisible');
    footer.classList.add('hide');
}

//Close burger menu

burgerClose.addEventListener('click', closeBurgerMenu);
function closeBurgerMenu(){
    mobileMenu.classList.remove('open')
    mobileMenu.classList.add('invisible');
    main.classList.remove('invisible');
    footer.classList.remove('hide');
}

