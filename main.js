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








