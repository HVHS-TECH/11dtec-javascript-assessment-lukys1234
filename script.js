console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


let userOrder = ["L&P", "Mince and Cheese Pie", "Fish and Chips", "Pavlova"];
function getFormInput() {


  const MONEY_FIELD = document.getElementById("moneyField");
  const ORDER_FIELD = document.getElementById("orderField");
  const NAME_FIELD = document.getElementById("nameField");

  let userName = NAME_FIELD.value;
  let order = Number(ORDER_FIELD.value);
  let userMoney = Number(MONEY_FIELD.value);
  OUTPUT.innerHTML = "<p> Your name is: " + userName + " </p1>";
  OUTPUT.innerHTML += "<p> You have: $" + userMoney + " </p1>";
  OUTPUT.innerHTML += "You ordered: " + userOrder[order - 1];
}


function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

