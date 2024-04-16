let btn = document.querySelector(`#btn`);
let colorInfo = document.querySelector(`#colorInfo`);
let color;

const randomColor = () => {
    color = `#`;
    let info = `0123456789ABCDEF`;

    for (let i = 0; i < 6; i++) {
        color = color + info[Math.floor(Math.random() * 16)];
    }

    return color;
};


btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    colorInfo.innerHTML = color;
})