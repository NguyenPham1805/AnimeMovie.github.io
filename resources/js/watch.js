/* ================================navbar animation================================ */

const menuItem = document.querySelectorAll('.head-banner__menu-1 .item-link')
const navAnimation = document.querySelector('.head-banner__menu-1 .navbar-animation')
const itemActive = document.querySelector('.head-banner__menu-1 .active')
const itemLink = document.querySelectorAll('.head-banner__menu-2 .list .item-link-mb')
const dropdownBorder = document.querySelector('.head-banner__menu-2 .sidebar-animation')
const dropdownListType = document.querySelector('.head-banner__menu-2 .list-type')
const dropdownListYear = document.querySelector('.head-banner__menu-2 .list-year')
const typeOfMV = document.querySelector('.head-banner__menu-2 .item-link-mb .type-mv')
const typeCaret = document.querySelector('.head-banner__menu-2 .type-mv .caret')
const yearMV = document.querySelector('.head-banner__menu-2 .year-mv')
const yearCaret = document.querySelector('.head-banner__menu-2 .year-mv .caret')
const menu2 = document.querySelector('.head-banner__menu-2')
const menuIcon = document.querySelector('.menu-icon-toggle')
const layerCover = document.querySelector('.layer-cover')
const closeSidebar = document.querySelector('.close-sidebar')
let toggle = true
let toggleTypeCaret = false
let toggleYearCaret = false

if (window.innerWidth > 615) {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].onmouseenter = () => {
            navAnimation.style.left = i * menuItem[i].clientWidth + 'px'
        }
        menuItem[i].onmouseleave = () => {
            navAnimation.style.left = itemActive.style.left
        }
    }
}

/* ================================sidebar toggle================================ */

menuIcon.onclick = () => {
    if (toggle) {
        menu2.style.left = 0
        toggle = !toggle
        layerCover.style.display = 'block'
    }
}

layerCover.onclick = () => {
    menu2.style.left = '-100%'
    toggle = !toggle
    layerCover.style.display = 'none'
    dropdownBorder.style.top = 0
    dropdownListType.classList.remove('show')
    typeCaret.style.transform = 'rotate(0)'
    toggleTypeCaret = false
    dropdownListYear.classList.remove('show')
    yearCaret.style.transform = 'rotate(0)'
    toggleYearCaret = false
}

closeSidebar.onclick = () => {
    menu2.style.left = '-100%'
    toggle = !toggle
    layerCover.style.display = 'none'
    dropdownBorder.style.top = 0
    dropdownListType.classList.remove('show')
    typeCaret.style.transform = 'rotate(0)'
    toggleTypeCaret = false
    dropdownListYear.classList.remove('show')
    yearCaret.style.transform = 'rotate(0)'
    toggleYearCaret = false
}

/* ================================sidebar dropdown================================ */



typeOfMV.onclick = () => {
    dropdownListType.classList.toggle('show')
    dropdownListYear.classList.remove('show')
    yearCaret.style.transform = 'rotate(0)'
    toggleYearCaret = false
    if (toggleTypeCaret) {
        typeCaret.style.transform = 'rotate(0)'
        toggleTypeCaret = !toggleTypeCaret
    } else {
        typeCaret.style.transform = 'rotate(-180deg)'
        toggleTypeCaret = !toggleTypeCaret
    }
}

yearMV.onclick = () => {
    dropdownListYear.classList.toggle('show')
    dropdownListType.classList.remove('show')
    typeCaret.style.transform = 'rotate(0)'
    toggleTypeCaret = false
    if (toggleYearCaret) {
        yearCaret.style.transform = 'rotate(0)'
        toggleYearCaret = !toggleYearCaret
    } else {
        yearCaret.style.transform = 'rotate(-180deg)'
        toggleYearCaret = !toggleYearCaret
    }
}

for (let i = 0; i < itemLink.length; i++) {
    itemLink[i].onclick = () => {
        dropdownBorder.style.top = i * 45 + 'px'
    }
}


/* ================================navbar scroll================================ */
/* ================================header scroll================================ */

const menuBar = document.querySelector('.head-banner__menu-1')
let lastScrollTop = 0
const headerBar = document.querySelector('.head-banner')
let headerLastScrollTop = 0

window.onload = () => {
    if (window.innerWidth > 615) {
        if (window.pageYOffset >= 70) menuBar.style.top = '0'
    }
}

window.onscroll = () => {
    if (window.innerWidth > 615) {
        headerBar.style.position = 'relative'
        headerBar.style.top = '0'
        if (window.pageYOffset <= 70) {
            menuBar.style.position = 'relative'
        } else {
            menuBar.style.position = 'fixed'
            let scrollTop = window.pageYOffset
            if (scrollTop > lastScrollTop) menuBar.style.top = '-70px'
            else menuBar.style.top = '0'
            lastScrollTop = scrollTop
        }
    } else {
        if (window.pageYOffset <= 70) {
            headerBar.style.position = 'relative'
        } else {
            headerBar.style.position = 'fixed'
            let scrollTop = window.pageYOffset
            if (scrollTop > headerLastScrollTop) headerBar.style.top = '-60px'
            else headerBar.style.top = '0'
            headerLastScrollTop = scrollTop
        }
    }
}

/* ================================login form================================ */

const loginFrame = document.querySelector('.modal-frame-login')
const formLogin = document.getElementById('form-login')
const layerLoginCover = document.querySelector('.login-layer-cover')
const loginBtnSM = document.querySelector('.head-banner__menu-2 .fa-user')
const loginBtnLG = document.getElementById('login-btn')
const frameClose = loginFrame.querySelector('.btn-close')

formLogin.onsubmit = e => e.preventDefault()

loginBtnSM.onclick = () => showForm()

loginBtnLG.onclick = () => showForm()

frameClose.onclick = () => hideForm()

function showForm() {
    loginFrame.style.display = 'block'
    layerLoginCover.style.display = 'block'
}

function hideForm() {
    loginFrame.style.display = 'none'
    layerLoginCover.style.display = 'none'
}
