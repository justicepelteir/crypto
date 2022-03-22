import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CryptoService from './crypto.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showImg').text("");
  $('.showDescription').text("");
}

function getElements(response) {
  if (response) {
    console.log(response);
    $('.showCap').text(`BTC market cap is: ${response[0].market_cap}`);
    $('.showPrice').append(`BTC currenct price ${response[0].price}`);
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(){
  const response = await CryptoService.getCoin();
  getElements(response);
}

$(document).ready(function() {
  $('#results').click(function() {
    // let coin =  $('#userCoin').val();
    clearFields();
    makeApiCall();
  //   (async function() {
  //     response = await CryptoService.getCoin(coin);
  // getElements(response);
  //   })();
  });
});
