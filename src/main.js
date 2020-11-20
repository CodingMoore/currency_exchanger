//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';

function outputFun(response) {
  const newCur = ${newCur};
  if (response.conversion_rates) {
    $("#outputVal").text(`The exchange rate between ${baseCur} and ${newCur} is ${response.conversion_rates.AUD}.`)
  } else {
    $("#outputVal").text(`There was an error: ${response}`);
  }

  //error output
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    let baseCur = $("#baseCur").val();
    let newCur = $("#newCur").val();
    (async function() {
      const response = await ExchangeApi.apiCall(baseCur);
      outputFun(response);
    })();
  });
});
