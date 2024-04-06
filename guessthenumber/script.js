let randomNum = Math.floor(Math.random() * 100)

let startGame = () => {
    let userNumber = +document.querySelector('#userInput').value;
    const result = document.querySelector('#result');

   if(randomNum === userNumber){
    result.innerHTML = 'Congratulationб you win!'
    result.style.backgroundColor = 'green';

   } else if (randomNum < userNumber) {
    result.innerHTML = 'Number is less then ${userNumber}'
    result.style.backgroundColor = 'red';

   }  else if (randomNum > userNumber) {
    result.innerHTML = 'Number is greter then ${userNumber}'
    result.style.backgroundColor = 'red';
   }

}






const reset = () => {
    window.location.reload();
};