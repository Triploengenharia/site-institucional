function toggleFAQ(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains('active')

  document.querySelectorAll('.faq_item').forEach(item => {
    item.classList.remove('active')
  })

  if (!isActive) {
    faqItem.classList.add('active')
  }
}

const hamburgerMenu = document.getElementById('hamburgerMenu')
const hamburgerButton = document.getElementById('hamburgerButton')
const menuFullscreen = document.getElementById('menuFullscreen')

function toggleMenu() {
  hamburgerMenu.classList.toggle('active')
  menuFullscreen.classList.toggle('active')
}

function closeMenu() {
  hamburgerMenu.classList.remove('active')
  menuFullscreen.classList.remove('active')
}

hamburgerButton.addEventListener('click', toggleMenu)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && menuFullscreen.classList.contains('active')) {
    closeMenu()
  }
})

document.querySelectorAll('.menu-fullscreen .menu-item').forEach(item => {
  item.addEventListener('click', function () {
    closeMenu()
  })
})

document
  .querySelector('.menu-fullscreen .contact-button')
  .addEventListener('click', function () {
    closeMenu()
  })

function checkWidth() {
  const width = window.innerWidth

  if (width > 901) {
    closeMenu()
  }
}

window.addEventListener('resize', checkWidth)

checkWidth()
