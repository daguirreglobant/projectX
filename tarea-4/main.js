import * as helpers from './helpers.js';
import calculate from './calculator.js';

let [string, stringHTML, result, resultDOM] = [
  "",
  "",
  undefined,
  document.getElementById("result"),
];

function main(text) {
  if ((string.length == 0) & isNaN(text)) {
    [string, stringHTML] = helpers.isContinuous(result);
  }
  [string, stringHTML] = helpers.addText(string, stringHTML, text);
  if (text == "=") {
    result = calculate(string);
    resultDOM.innerHTML = helpers.formatNumber(result);
    [string, stringHTML] = ["", ""];
  } else {
    resultDOM.innerHTML = stringHTML;
  }
}
