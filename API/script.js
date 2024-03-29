const wrapper = document.querySelector('.wrapper')
const loader = document.querySelector('.loader')


const func = async () => {
    const response = await fetch('https://dummyjson.com/users')

    const details = await response.json()

    console.log(details.users);


    details.users.map((el) => {
        wrapper.innerHTML += `
        <div class="card">
        <img src=${el.image} alt="">
        <h2>${el.firstName} ${el.lastName}</h2>
        <h3></h3>
        <p>${el.age}</p>
        <b>${el.birthDate}</b>
        <h4>${el.address.city}</h4>
    </div>
        `
    })
}

func()

setTimeout(() => {
    loader.remove()
}, 2000);





