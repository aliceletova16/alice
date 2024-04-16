let btn = document.querySelector(`#btn`);

const randomPassword = () => {
  let displayPassword = document.querySelector(`#displayPassword`);
  let passwordLenght = +document.querySelector(`#passwordLength`).value;
  let error = document.querySelector(`#error`);
  let password = ``;
  let characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]_+-~"№;:?.,<>`;

  if (passwordLenght === 0) {
    error.innerHTML = `Please select password lengtht`;
    error.style.color = `red`;
  }

  for (let i = 0; i < passwordLenght; i++) {
    password =
      password + characters[Math.floor(Math.random() * characters.length)];
  }

  displayPassword.value = password;
};

btn.addEventListener(`click`, () => randomPassword());
