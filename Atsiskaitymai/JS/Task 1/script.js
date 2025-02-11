/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const weightCoversionForm = document.querySelector('.wrapper > form');

const inputWeightInKg = document.querySelector('#search');
inputWeightInKg.setAttribute('type', 'number');

weightCoversionForm.addEventListener('submit', e => {
    e.preventDefault();

    const weightInKg = inputWeightInKg.valueAsNumber;
    
    const weightInLb = (weightInKg * 2.2046).toFixed(2);
    const weightInGr = weightInKg / 0.0010000;
    const weightinOz = (weightInKg * 35.274).toFixed(2);
    
    const outputDiv = weightCoversionForm.nextElementSibling;
    const resultsDiv = document.createElement('div');

    const resultsHeader = document.createElement('h3');
    resultsHeader.textContent = `${weightInKg} kg is:`

    const weightInLbPar = document.createElement('p');
    weightInLbPar.textContent = `${weightInLb} lb`;
    
    const weightInGrPar = document.createElement('p');
    weightInGrPar.textContent = `${weightInGr} g`;
    const weightInOzPar = document.createElement('p');
    weightInOzPar.textContent = `${weightinOz} oz`;

    resultsDiv.append(resultsHeader, weightInLbPar, weightInGrPar, weightInOzPar);

    outputDiv.appendChild(resultsDiv);
});