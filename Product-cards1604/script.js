let red = document.querySelector(`#red`);
let orange = document.querySelector(`#orange`);
let black = document.querySelector(`#black`);
let img = document.querySelector(`img`);
let btn = document.querySelector(`button`);

red.addEventListener(`click`, () => {
   img.setAttribute(`src`, `./image2.png`);
   btn.computedStyleMap.backgroundColor = `red`;

});

orange.addEventListener(`click`, () => {
   img.setAttribute(`src`, `./.vscode/image3.png`);
   btn.computedStyleMap.backgroundColor = `orange`;

});

black.addEventListener(`click`, () => {
   img.setAttribute(`src`, `./.vscode/pngwing.png`);
   btn.computedStyleMap.backgroundColor = `black`;

});
