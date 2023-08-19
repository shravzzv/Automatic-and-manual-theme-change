const buttonEl = document.querySelector('button')
const rootEl = document.documentElement

const handleThemeChange = (e) => {
  rootEl.classList.toggle('dark')
}

buttonEl.addEventListener('click', handleThemeChange)
