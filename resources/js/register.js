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

formLogin.onsubmit = (e) => e.preventDefault()

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

/* ================================register form================================ */

const formRegister = document.getElementById('register-form')

const userName = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const rePassword = document.getElementById('re-password')

const showPasswordBtn = document.querySelector('.item-field .show')
const hidePasswordBtn = document.querySelector('.item-field .hide')

const userNameMessage = document.getElementById('username-span')
const emailMessage = document.getElementById('email-span')
const passwordMessage = document.getElementById('password-span')
const rePasswordMessage = document.getElementById('repassword-span')

const iconUserName = document.querySelector('.icon-username')
const iconEmail = document.querySelector('.icon-email')
const iconPassword = document.querySelector('.icon-password')
const iconRePassword = document.querySelector('.icon-re-password')

const warningIcon = `<i class="far fa-exclamation-circle warning"></i>`
const successIcon = `<i class="far fa-check-circle success"></i>`

/* --------------------------------show and hide password-------------------------------- */

showPasswordBtn.onclick = () => {
    password.type = 'password'
    showPasswordBtn.classList.remove('active')
    hidePasswordBtn.classList.add('active')
}

hidePasswordBtn.onclick = () => {
    password.type = 'text'
    hidePasswordBtn.classList.remove('active')
    showPasswordBtn.classList.add('active')
}

/* --------------------------------process input-------------------------------- */

formRegister.onsubmit = e => {
    checkUserName()
    checkEmail()
    checkPassword()
    checkRePassword()
    if (checkUserName() && checkEmail() && checkPassword() && checkRePassword()) {
        alert('Đăng kí thành công')
    }
    e.preventDefault()
}

function checkFalse(value) {
    value.classList.remove('success')
    value.classList.add('warning')
    return false
}

function checkTrue(value) {
    value.classList.remove('warning')
    value.classList.add('success')
    return true
}

function unCheck(value) {
    value.classList.remove('warning')
    value.classList.remove('success')
    return true
}

function checkUserName() {
    userName.value.trim()
    if (!userName.value) {
        iconUserName.innerHTML = warningIcon
        userNameMessage.innerHTML = 'Không được bỏ trống'
        return checkFalse(userName)
    } else if (userName.value.length < 9) {
        userNameMessage.innerHTML = 'Tên đăng nhập quá ngắn!'
        iconUserName.innerHTML = warningIcon
        return checkFalse(userName)
    } else if (!isNaN(userName.value)) {
        iconUserName.innerHTML = warningIcon
        userNameMessage.innerHTML = 'Tên đăng nhập không được là số!'
        return checkFalse(userName)
    } else {
        userNameMessage.innerHTML = ''
        iconUserName.innerHTML = successIcon
        return checkTrue(userName)
    }
}

function checkEmail() {
    const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email.value) {
        iconEmail.innerHTML = warningIcon
        emailMessage.innerHTML = 'Không được bỏ trống'
        return checkFalse(email)
    } else if (!checkEmail.test(email.value)) {
        iconEmail.innerHTML = warningIcon
        emailMessage.innerHTML = 'Email không hợp lệ!'
        return checkFalse(email)
    } else {
        iconEmail.innerHTML = warningIcon
        emailMessage.innerHTML = ''
        iconEmail.innerHTML = successIcon
        return checkTrue(email)
    }
}

function checkPassword() {
    const checkMoreThan8 = new RegExp("^(?=.{8,})");
    const checkUL = new RegExp("^(?=.*[a-z])(?=.*[A-Z])")
    const checkNumber = new RegExp("^(?=.*[0-9])")
    if (!password.value) {
        showPasswordBtn.classList.remove('active')
        hidePasswordBtn.classList.remove('active')
        iconPassword.innerHTML = warningIcon
        passwordMessage.innerHTML = 'Không được bỏ trống'
        return checkFalse(password)
    } else if (!checkMoreThan8.test(password.value)) {
        showPasswordBtn.classList.remove('active')
        hidePasswordBtn.classList.remove('active')
        iconPassword.innerHTML = warningIcon
        passwordMessage.innerHTML = 'Mật khẩu phải trên 8 kí tự!'
        return checkFalse(password)
    } else if (!checkUL.test(password.value)) {
        showPasswordBtn.classList.remove('active')
        hidePasswordBtn.classList.remove('active')
        iconPassword.innerHTML = warningIcon
        passwordMessage.innerHTML = 'Mật khẩu bao gồm chữ in hoa và in thường!'
        return checkFalse(password)
    } else if (!checkNumber.test(password.value)) {
        showPasswordBtn.classList.remove('active')
        hidePasswordBtn.classList.remove('active')
        iconPassword.innerHTML = warningIcon
        passwordMessage.innerHTML = 'Mật khẩu bao gồm phải bao gồm cả số!'
        return checkFalse(password)
    } else {
        showPasswordBtn.classList.remove('active')
        hidePasswordBtn.classList.remove('active')
        passwordMessage.innerHTML = ''
        iconPassword.innerHTML = successIcon
        return checkTrue(password)
    }
}

function checkRePassword() {
    if (!rePassword.value) {
        iconRePassword.innerHTML = warningIcon
        rePasswordMessage.innerHTML = 'Không được bỏ trống'
        return checkFalse(rePassword)
    } else if (rePassword.value !== password.value) {
        iconRePassword.innerHTML = warningIcon
        rePasswordMessage.innerHTML = 'Mật khẩu nhập lại không đúng'
        return checkFalse(rePassword)
    } else {
        rePasswordMessage.innerHTML = ''
        iconRePassword.innerHTML = successIcon
        return checkTrue(rePassword)
    }
}

userName.onfocus = () => {
    unCheck(userName)
    iconUserName.innerHTML = ''
    userNameMessage.innerHTML = ''
}

email.onfocus = () => {
    unCheck(email)
    iconEmail.innerHTML = ''
    emailMessage.innerHTML = ''
}

password.onfocus = () => {
    showPasswordBtn.classList.contains('active') || hidePasswordBtn.classList.add('active')
    unCheck(password)
    iconPassword.innerHTML = ''
    passwordMessage.innerHTML = ''
}

rePassword.onfocus = () => {
    unCheck(rePassword)
    iconRePassword.innerHTML = ''
    rePasswordMessage.innerHTML = ''
}