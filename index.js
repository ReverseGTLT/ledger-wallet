const menuListHidden = document.querySelector('.menu-list__hidden');
const menuListLinkAfter = document.querySelector('.menu-list__link--after');
const contactListLinkAfter = document.querySelector('.contact-list__link--after');
const contactListHidden = document.querySelector('.contact-list__hidden');
const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerClose = document.querySelector('.mobile-nav__btn');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

//Opening Pakiet drop menu
function toggleMenu(){
    menuListHidden.classList.toggle('visible')
}
menuListLinkAfter.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
})

document.addEventListener('click', function (e){
    let target = e.target;
    let itsMenu = target === menuListHidden || menuListHidden.contains(target);
    let itsHamburger = target === menuListLinkAfter;
    let menuIsActive = menuListHidden.classList.contains('visible');
    if (!itsMenu && !itsHamburger && menuIsActive) {
        toggleMenu()
    }
})


//Opening language drop menu
function toggleContact(){
    contactListHidden.classList.toggle('visible-language')
}
contactListLinkAfter.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleContact();
})

document.addEventListener('click', function (e){
    let target = e.target;
    let itsMenu = target === contactListHidden || contactListHidden.contains(target);
    let itsHamburger = target === contactListLinkAfter;
    let menuIsActive = contactListHidden.classList.contains('visible-language');
    if (!itsMenu && !itsHamburger && menuIsActive) {
        toggleContact()
    }
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