import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';
import { calc } from './business.logic.js';

function outputFun(response) {
  if (response.conversion_rates) {
    $("#outputVal").html("The exchange rate between " + $('#baseCur').val() + " and " + $('#newCur').val() + " is " + response.conversion_rates.AUD + ". <br><br>" + $("#inputVal").val() + " " + $('#baseCur').val() + " = " + calc($("#inputVal").val(), response.conversion_rates.AUD) + " " + $('#newCur').val() + ".");
    console.log(response);
  } else {
    if (response["error-type"] === "unsupported-code") {
      $("#outputVal").text("That input currency is not supported or does not exist");
    } else {
    $("#outputVal").text(`There was an error: ${response["error-type"]}`);
    }
  }

  //error output
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    let baseCur = $("#baseCur").val();
    // let newCur = $("#newCur").val();
    // let inputVal = $("#inputVal").val();
    (async function() {
      const response = await ExchangeApi.apiCall(baseCur);
      outputFun(response);
    })();
  });
});
