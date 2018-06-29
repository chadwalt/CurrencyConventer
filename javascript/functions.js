const BASE_URL = "https://free.currencyconverterapi.com";
const currency_url = `${BASE_URL}/api/v5/currencies`;
const convert_url = `${BASE_URL}/api/v5/convert`;

let currencySelector = document.getElementsByClassName('currency');
let currency_options = ``;

fetch(currency_url)
    .then(response => response.json())
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

convert = () => {
    let from_currency_amount = Number(document.getElementById('from_currency_amount').value);
    let from_currency = encodeURIComponent(document.getElementById('from_currency').value);
    let to_currency_amount = document.getElementById('to_currency_amount');
    let to_currency = encodeURIComponent(document.getElementById('to_currency').value);
    let query = `?q=${from_currency}_${to_currency}&compact=ultra`;
    let url = convert_url + query;

    fetch(url)
    .then(response => response.json())
    .then(result => {
        let rate = Number(Object.values(result)[0]);
        to_currency_amount.value = (rate * from_currency_amount).toFixed(2);
    })
    .catch(error => console.log(error))
}