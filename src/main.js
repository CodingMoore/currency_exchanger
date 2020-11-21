import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';
import { calc, dataBase } from './business.logic.js';

function outputFun(response) {
  let baseCur = $("#baseCur").val();
  let newCur = $("#newCur").val();
  let inputVal = $("#inputVal").val();
  if (response.conversion_rates) {
    $("#outputVal").html("The exchange rate between " + baseCur + " and " + newCur + " is " + response.conversion_rates + ". <br><br>" + inputVal + " " + baseCur + " = " + calc(inputVal, response.conversion_rates) + " " + newCur + ".");
  } else {
    if (response["error-type"] === "unsupported-code") {
      $("#outputVal").text("That input currency is not supported or does not exist");
    } else {
    $("#outputVal").text(`There was an error: ${response["error-type"]}`);
    }
  }
}

$(document).ready(function() {
  $("#submitButton").click(function(event) {
    event.preventDefault();
    (async function() {
      const response = await ExchangeApi.apiCall($("#baseCur").val());
      outputFun(response);
      dataBase(response);
    })();
  });
});
