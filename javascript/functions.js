/**
 * Get all currencies
 */

const BASE_URL = "https://free.currencyconverterapi.com";
const url = `${BASE_URL}/api/v5/currencies`

let currencySelector = document.getElementsByClassName('currency');
let currency_options = ``;
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(response => {
        const currencies = response.results

        for (let currency in currencies) {
            currency_options += `<option value="${currencies[currency].id}"> ${currencies[currency].currencyName}</option>`;
        }

        for (let element of currencySelector) {
            element.innerHTML = currency_options;
        }

    })
    .catch(error => console.log(error))