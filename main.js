// Modal User
const userBtns = document.querySelector('.js-user-btn');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

userBtns.onclick = () => {showLogin();};
function showLogin() {
    modal.classList.add('show')
}

modalClose.onclick = () => {closeShowLogin();}
function closeShowLogin() {
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

// loginBTN.onclick = () => {showLogin()}
// function showLogin() {
//     regisForm.classList.remove('show--form')
//     loginForm.classList.remove('hidden--form')
// }








