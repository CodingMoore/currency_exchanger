import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';
import { calc, Database } from './business.logic.js';
import { moneyArray } from './money.array.js';

$(window).on("load", function(){
  for (let i = 0; i < moneyArray.length; i++) {
    $("#baseCur").append("<option " + " " + "value='" + moneyArray[i][0] + "'>" + moneyArray[i][0] + " - " + moneyArray[i][1] + " - " + moneyArray[i][2] + "</option>");
    $("#newCur").append("<option " + " " + "value='" + moneyArray[i][0] + "'>" + moneyArray[i][0] + " - " + moneyArray[i][1] + " - " + moneyArray[i][2] + "</option>");
  }
});

function outputText() {
  let baseCur = $("#baseCur").val();
  let newCur = $("#newCur").val();
  let inputVal = $("#inputVal").val();
  let factor = Database.conFactor;
  if (factor === "invalidCur") {
    $("#outputVal").text("That output currency is not supported or does not exist");
  } else {
    $("#outputVal").html("The exchange rate between " + baseCur + " and " + newCur + " is " + factor + ". <br><br>" + inputVal + " " + baseCur + " = " + calc(inputVal, factor) + " " + newCur + ".");
  }
}

function outputFun(response) {
  let newCur = $("#newCur").val();
  if (response === "useDatabaseOld") {
    Database.databaseOld(newCur);
    outputText();
  } 
  else if (response.conversion_rates) {
    Database.databaseNew(response, newCur);
    outputText();
  } else {
    if (response["error-type"] === "unsupported-code") {
      $("#outputVal").text("That input currency is not supported or does not exist");
    } else {
      $("#outputVal").text(`There was an error: ${response["error-type"]}`);
    }
  }
}

$(document).ready(function() {
  const baseCurArray = ["placeHolder1", "placeHolder2"];
  $("#submitButton").click(function(event) {
    event.preventDefault();
    let baseCur = $("#baseCur").val();
    baseCurArray.push(baseCur);
    baseCurArray.shift();
    if (baseCurArray[1] === baseCurArray[0] && Database.keyArray.includes(baseCur)) {
      let response = "useDatabaseOld";
      outputFun(response);
    } else {
      (async function() {
        const response = await ExchangeApi.apiCall($("#baseCur").val());
        outputFun(response);
      })();
    }
  });
});
