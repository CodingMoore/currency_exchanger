//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { ExchangeApi } from './exchange-service';

function outputFun(response) {
  //resolved output

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
