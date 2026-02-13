const wfMenu = document.getElementById('wf-menu')
const menu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')
const closeBtn = document.querySelector('.wf-fechar')

if (wfMenu && menu && overlay) {
  wfMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
  })

  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('abrir-menu')
    })
  }

  // Fecha ao clicar em links do menu
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('abrir-menu')
    })
  })
}

