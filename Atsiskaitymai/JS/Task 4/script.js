/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const output = document.querySelector('#output');

fetch(ENDPOINT)
.then(res => res.json())
.then(data => {
    data.forEach(carMaker => {
        const cardDiv = document.createElement('div');

        const brandName = document.createElement('h3');
        brandName.textContent = `Brand Name: ${carMaker.brand}`;

        const modelCat = document.createElement('h4');
        modelCat.textContent = `Models:`;

        const modelDiv = document.createElement('div');

        const modelPar = document.createElement('p');
        modelPar.textContent = carMaker.models.join(', ');

        modelDiv.appendChild(modelPar);

        cardDiv.append(brandName, modelCat, modelDiv);

        output.appendChild(cardDiv);
    });
});