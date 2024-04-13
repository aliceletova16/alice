let darkMode = document.querySelector(`#dark_mode`);
let body = document.body;
let navBar = document.querySelector(`#nav`)

darkMode.addEventListener(`click`, () => {
    body.classList.toggle(`dark_mode`);
    navBar.classList.toggle(`dark_nav`);
    darkMode.classList.toggle(`active`);
});






