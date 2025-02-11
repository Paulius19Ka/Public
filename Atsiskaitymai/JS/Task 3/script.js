/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.querySelector('#output');
const message = document.querySelector('#message');

document.querySelector('#btn')
.addEventListener('click', e => {

    output.removeChild(message);

    fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        data.forEach(e => {
            const userCard = document.createElement('div');

            const login = document.createElement('p');
            login.textContent = e.login;

            const img = document.createElement('img');
            img.setAttribute('src', `${e.avatar_url}`);
            // img.setAttribute('width', '50px');

            userCard.append(login, img);

            output.appendChild(userCard);
        })
    })
})