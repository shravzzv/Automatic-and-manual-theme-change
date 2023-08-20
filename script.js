const buttonEl = document.querySelector('button')
const rootEl = document.documentElement
const themeTextEl = document.querySelector('code')

let isThemeInverse = false
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  themeTextEl.innerText = 'dark'
} else {
  themeTextEl.innerText = 'light'
}

const handleThemeChange = (e) => {
  rootEl.classList.toggle('changed')
  isThemeInverse = !isThemeInverse
  updateThemeText()
}

const updateThemeText = () => {
  if (themeTextEl.innerText === 'dark') {
    themeTextEl.innerText = 'light'
  } else if (themeTextEl.innerText === 'light') {
    themeTextEl.innerText = 'dark'
  }
}

buttonEl.addEventListener('click', handleThemeChange)
