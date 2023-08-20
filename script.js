const buttonEl = document.querySelector('button')
const rootEl = document.documentElement
const themeTextEl = document.querySelector('code')

themeTextEl.innerText = 'light'

const handleThemeChange = (e) => {
  rootEl.classList.toggle('changed')
  themeTextEl.innerText = rootEl.classList.contains('dark') ? 'dark' : 'light'
}

buttonEl.addEventListener('click', handleThemeChange)
