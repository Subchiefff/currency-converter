import {convertCurrency} from './converter.js';

const input = document.getElementById('input-id');
const convert = document.getElementById('get-input');
const display = document.getElementById('display-input');
const currencyFrom = document.getElementById('currency-from');
const currencyTo = document.getElementById('currency-to');

async function displayConverter() {
  const amount = Number(input.value);
  const from = currencyFrom.value;
  const to = currencyTo.value;

  if (!amount) {
    display.innerHTML = '<p style="color: red;">Please enter a valid amount</p>';
    return;
  }

  const resulting = await convertCurrency(from,to,amount);
  let html = `<p>${amount} ${from} => ${resulting.result} ${to}</p>`;
  display.innerHTML += html;

  input.value= '';
}

convert.addEventListener('click', async ()=> {displayConverter()});