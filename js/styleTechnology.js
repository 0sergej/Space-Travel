const BTN_ONE = document.querySelector('.btn--one')
const BTN_TWO = document.querySelector('.btn--two')
const BTN_THREE = document.querySelector('.btn--three')

function removeClassActive() {
    BTN_ONE.classList.remove('btn--active')
    BTN_TWO.classList.remove('btn--active')
    BTN_THREE.classList.remove('btn--active')
}

BTN_ONE.classList.add('btn--active')

BTN_ONE.addEventListener('click', () => {
    removeClassActive()

    BTN_ONE.classList.add('btn--active')
})
BTN_ONE.addEventListener('keypress', () => {
    removeClassActive()

    BTN_ONE.classList.add('btn--active')
})
BTN_TWO.addEventListener('click', () => {
    removeClassActive()

    BTN_TWO.classList.add('btn--active')
})
BTN_TWO.addEventListener('keypress', () => {
    removeClassActive()

    BTN_TWO.classList.add('btn--active')
})
BTN_THREE.addEventListener('click', () => {
    removeClassActive()

    BTN_THREE.classList.add('btn--active')
})
BTN_THREE.addEventListener('keypress', () => {
    removeClassActive()

    BTN_THREE.classList.add('btn--active')
})
