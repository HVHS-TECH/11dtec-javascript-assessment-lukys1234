console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


let userOrder = ["L&P", "Mince and Cheese Pie", "Fish and Chips", "Pavlova"];
let price = [5 , 7, 12, 15 ];

function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}


function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const ORDER_FIELD = document.getElementById("orderField");
  const MONEY_FIELD = document.getElementById("moneyField");
  let userName = NAME_FIELD.value;
  let order = Number(ORDER_FIELD.value);
  let cost = Number(ORDER_FIELD.value);
  let userMoney = Number(MONEY_FIELD.value);
 
  OUTPUT.innerHTML = "<p> Your name is: " + userName + "";
  OUTPUT.innerHTML += "<p> You have: $" + userMoney;
  OUTPUT.innerHTML += "You ordered: " + userOrder[order - 1]+ " </p1>";

  if (userMoney >= price [cost  -1]) {
    OUTPUT.innerHTML += "<p> You have $"+calculateChange(userMoney, price [cost-1])+ " change"
  } else {
    OUTPUT.innerHTML += "<p> You can't afford this item, sorry."+ userOrder[order-1] + "</p1>";
  }

}
