let stars = document.querySelectorAll(`.stars i`);

let message = document.querySelector(`#message`);

stars.forEach((star, index1) => {
  star.addEventListener(`click`, () => {
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add(`active`);

        if(index1 === 0){
            message.innerHTML = `1 star`;
        }
            if(index1 === 1){
                message.innerHTML = `2 star`;
            }
                if(index1 === 2){
                    message.innerHTML = `3 star`;
                }
                    if(index1 === 3){
                        message.innerHTML = `4 star`;
                    }
                        if(index1 === 4){
                            message.innerHTML = `5 star`;
        }
        // message.innerHTML = `Thank You`;
      } else {
        star.classList.remove(`active`);
      }
    });
  });
});
