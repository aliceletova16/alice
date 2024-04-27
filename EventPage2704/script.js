let launchDateDisplay = document.querySelectorAll(`#launchDate`);
let launchDate = `1 June 2024 05:00 PM`;

launchDateDisplay.innerHTML = launchDate;

let inputs = document.querySelectorAll(`span`);

const countDown = () => {
// конец даты
    let end = new Date(launchDate);

// текущая дата
    let start = new Date();

// разница от даты запуска до текущей даты
    let diff = (end - start) / 1000;

    // остановка отсчёта
    if(diff < 0) return;
    

    inputs[0].innerHTML = Math.floor(diff / 3600 / 24);

    inputs[1].innerHTML = Math.floor((diff / 3600) % 24);

    inputs[2].innerHTML = Math.floor((diff / 60) % 60);

    inputs[3].innerHTML = Math.floor(diff % 60);
};

setInterval (() => {
    countDown();
}, 1000);