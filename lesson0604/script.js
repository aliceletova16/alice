const generateQuotes = () => {
    const quotes = [
        "Волк не тот кто волк, а тот кто волк. Ауф!☝️",

        "Лучше быть последним - первым, чем первым - последним",

        "Бесплатный сыр бывает только бесплатным",

        "Упал - не значит упал. Провал - это там, где не встал."
    ]

    let quotesDisplay = document.querySelector(`.block_1`);
    let randomQuotes = Math.floor(Math.random() * quotes.length);

    quotesDisplay.innerHTML = quotes[randomQuotes];
};