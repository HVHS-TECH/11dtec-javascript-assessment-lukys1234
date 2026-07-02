console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



let userOrder = ["L&P", "Mince&CheesePie", "FishnChips", "Pavlova", ];
let price = [5, 7, 12, 15,];
let quantities = [];   



for (let i = 0; i < userOrder.length; i++) {
  OUTPUT.innerHTML += "$" + price[i] + ":" + userOrder[i] + " " + '<input placehholder="number" type= "number" id="' + userOrder[i] + 'Field" name="formmoney"><br><br>';
}


function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}
function viewShoppingCart(){
  const MONEY_FIELD = document.getElementById("moneyField");
  let userMoney = Number(MONEY_FIELD.value);
  let cost = 0;

  for (let i = 0; i < userOrder.length; i++) {
    const menuField = document.getElementById(userOrder[i] + "Field")
    quantities[i] = Number(menuField.value);
    let total = quantities[i] * price[i]
    cost += total
  }

  if (userMoney >= cost) {
    for (let i = 0; i < userOrder.length; i++) {
      let total = quantities[i] * price[i]
      OUTPUT.innerHTML += userOrder[i] + " total: $" + total + "<br>";
    }

    OUTPUT.innerHTML += "Total cost: $" + cost + "<br>";
  }
}
function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");

  let userName = NAME_FIELD.value;
  let userMoney = Number(MONEY_FIELD.value);
  let cost = 0;


  for (let i = 0; i < userOrder.length; i++) {
    console.log("yozaplanet")
    const menuField = document.getElementById(userOrder[i] + "Field")
    quantities[i] = Number(menuField.value);
    let total = quantities[i] * price[i]
    cost += total
  }

  OUTPUT.innerHTML = "<p> Your name is: " + userName + "<br>";
  OUTPUT.innerHTML += "<p> You have: $" + userMoney;

  if (userMoney >= cost) {
    for (let i = 0; i < userOrder.length; i++) {
      let total = quantities[i] * price[i]
      OUTPUT.innerHTML += userOrder[i] + " total: $" + total + "<br>";
    }
    OUTPUT.innerHTML += "Total cost: $" + cost + "<br>";
    OUTPUT.innerHTML += "<p> You have $" + calculateChange(userMoney, cost) + " change"
    OUTPUT.innerHTML += "Thanks for shopping at my Cafe , have a good day."

  } else {
    OUTPUT.innerHTML += " Your items were $" + cost + " ,You have $ " + userMoney + " you cant afford these items, sorry."

  }
}