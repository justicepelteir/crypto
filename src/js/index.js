import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CryptoService from './crypto.js';

function clearFields() {
  $('.showErrors').text("");
  $('.showPrice').text("");
  $('.showCap').text("");
}

// --- forEach Version ---
// function getElements(response) {
//   response.forEach(function(response) {
//   if (response) {
//     $('.showPrice').append(`Information for ${response.id} is shown below:<br>`);
//     $('.showPrice').append(`${response.id} price: ${response.price}<br>`);
//     $('.showPrice').append(`${response.id} current market cap: ${response.market_cap}<br><br>`);
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// });

// --- for loop Version ---
function getElements(response) {
  for (let i = 0; i < 10; i++) {
    if(response[i].id && response[i].price) {
      $('.showPrice').append(`Information for ${response[i].id} is shown below:<br>`);
      $('.showPrice').append(`${response[i].id} price: ${response[i].price}<br>`);
      $('.showPrice').append(`${response[i].id} current market cap: ${response[i].market_cap}<br><br>`);
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`);
    }
  }
  //forgot to have line 18 as an "else" statement, didn't have webpack.config.js line 20 was missing/not configed right.
}

async function makeApiCall(){
  const response = await CryptoService.getCoin();
  getElements(response);
  console.log(response);
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
