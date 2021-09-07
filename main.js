// Modal User
const userBtns = document.querySelector('.js-user-btn');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

userBtns.onclick = () => {showLoginRegis();};
function showLoginRegis() {
    modal.classList.add('show')
}

modalClose.onclick = () => {closeShowLoginRegis();}
function closeShowLoginRegis() {
    modal.classList.remove('show')
}

// Convert Register / Login 
const registerBTN = document.querySelector('.js-regis-btn')
const loginBTN = document.querySelector('.js-login-btn')
const regisForm = document.querySelector('.auth-form__regis')
const loginForm = document.querySelector('.auth-form__login')

registerBTN.onclick = () => {showRegis()}
function showRegis() {
    loginForm.classList.remove('show--form')
    loginForm.classList.add('hidden--form')
    regisForm.classList.remove('hidden--form')
    regisForm.classList.add('show--form')
}

loginBTN.onclick = () => {showLogin()}
function showLogin() {
    regisForm.classList.remove('show--form')
    regisForm.classList.add('hidden--form')
    loginForm.classList.remove('hidden--form')
    loginForm.classList.add('show--form')
}

// Search BTN
const searchBTN = document.querySelector('.js__search--btn');
const modalSearch = document.querySelector('.js-modal-btn-search');
const CloseModalSearch = document.querySelector('.js-modal-search-close')

searchBTN.onclick = () => {showSearch()}
function showSearch() {
    modalSearch.classList.add('show')
}

CloseModalSearch.onclick = () => {closeSearch()}
function closeSearch() {
    modalSearch.classList.remove('show')
}

// Img Slideshow Btn
var sliderIndex = 1;
showDivs(sliderIndex)

function plusDivs(n) {
    showDivs(sliderIndex += n)
}

function showDivs(n) {
    var i
    var x = document.querySelectorAll(".slide")
    if (n > x.length) {
        sliderIndex = 1
    }

    if (n < 1) {
        sliderIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    x[sliderIndex-1].style.display = "block"
}

// Img Slideshow Auto
var myIndex = 0
carousel()

function carousel() {
    var i
    var x = document.querySelectorAll('.slide')
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    myIndex++
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex-1].style.display = "block"
    setTimeout(carousel, 5000)
}

// Container Header Navbar Scroll & Btn Top
var headerScroll = document.querySelector('.js-header')
const topBtn = document.querySelector('.js-top-btn')

window.onscroll = function() {
    srcollHeader()
}

function srcollHeader() {
    if (document.body.scrollTop > 46 || document.documentElement.scrollTop > 46) {
        // topBtn.style.opacity = 1
        headerScroll.style.top = "0"
    }
    else {
        // topBtn.style.opacity = 0
        headerScroll.style.top = "46px"
    }
}




