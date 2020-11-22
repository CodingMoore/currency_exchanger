import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';
import { calc, Database } from './business.logic.js';

function outputFun(response) {
  let baseCur = $("#baseCur").val();
  let newCur = $("#newCur").val();
  let inputVal = $("#inputVal").val();
  dataBase(response, newCur);
  if (response.conversion_rates) {
    $("#outputVal").html("The exchange rate between " + baseCur + " and " + newCur + " is " + multFactor + ". <br><br>" + inputVal + " " + baseCur + " = " + calc(inputVal, Database.confactor) + " " + newCur + ".");
  } else {
    if (response["error-type"] === "unsupported-code") {
      $("#outputVal").text("That input currency is not supported or does not exist");
    } else {
    $("#outputVal").text(`There was an error: ${response["error-type"]}`);
    }
  }
}

// function outputDatabase() {
//   let newCur = $("#newCur").val();
//   let multFactor = dataBase(response, newCur);
//   if (response.conversion_rates) {
//     $("#outputVal").html("The exchange rate between " + baseCur + " and " + newCur + " is " + multFactor + ". <br><br>" + inputVal + " " + baseCur + " = " + calc(inputVal, multFactor) + " " + newCur + ".");
// }
// }

$(document).ready(function() {
  const baseCurArray = ["placeHolder"];
  $("#submitButton").click(function(event) {
    event.preventDefault();
    baseCurArray.push($("#baseCur").val());
    if (baseCurArray[1] === baseCurArray[0]) {
      let response = "useDatabase"
      outputFun(response);
    } else {
      (async function() {
        const response = await ExchangeApi.apiCall($("#baseCur").val());
        outputFun(response);
      })();
    }
  });
});