// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector(".btn3")
// const btn4 = document.querySelector(".btn4")

// const menu = document.querySelector(".menu")
// const img = document.querySelector(".img")

// btn1.addEventListener("click", () => {
//     menu.classList.add("open")
// })


// btn1.addEventListener("click", () => {
//     menu.classList.add("open")
// })

// btn2.addEventListener("click", () => {
//     menu.classList.remove("open")
// })








function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menu.addEventListener("click", (event) => {
      if(event.target){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  



