console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const MENU = document.getElementById("spaceForMenu");


let userOrder = ["L&P", "Mince and Cheese Pie", "Fish and Chips", "Pavlova"];
let price = [5, 7, 12, 15];


for (let i = 0; i < userOrder.length; i++) {
  console.log("menu" + i + ": " + userOrder[i] + price[i] + "<br>")
  MENU.innerHTML += userOrder[i] + " $" + price[i] + "<br>"
}
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}
function viewShoppingCart() {

  const LANDP_FIELD = document.getElementById("landpField");
  const MINCEANDCHEESE_FIELD = document.getElementById("minceandcheeseField");
  const FISHCHIPS_FIELD = document.getElementById("fishandchipsField");
  const PAVLOVA_FIELD = document.getElementById("pavlovaField");

  let landpAmount = Number(LANDP_FIELD.value);
  let mincecheeseAmount = Number(MINCEANDCHEESE_FIELD.value);
  let fishchipsAmount = Number(FISHCHIPS_FIELD.value);
  let pavlovaAmount = Number(PAVLOVA_FIELD.value);
  OUTPUT.innerHTML = "L&Ps: " 

  let cost = landpAmount * price[0] + mincecheeseAmount * price[1] + fishchipsAmount * price[2] + pavlovaAmount * price[3]

  if (landpAmount > 0) {
    OUTPUT.innerHTML += "L&Ps: " + landpAmount + "= $" + landpAmount * price[0] + "<br>";

  }
  if (mincecheeseAmount > 0) {
    OUTPUT.innerHTML += "Mince and cheese Pies: " + mincecheeseAmount + "= $" + mincecheeseAmount * price[1] + "<br>";
  }

  if (fishchipsAmount > 0) {
    OUTPUT.innerHTML += "Fish and chips: " + fishchipsAmount + "= $" + fishchipsAmount * price[2] + "<br>";

  }

  if (pavlovaAmount > 0) {
    OUTPUT.innerHTML += "Pavlova's: " + pavlovaAmount + "= $" + pavlovaAmount * price[3] + "<br>";

  }
  OUTPUT.innerHTML += "Total cost: $" + cost + "<br>";







}


function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");

  const LANDP_FIELD = document.getElementById("landpField");
  const MINCEANDCHEESE_FIELD = document.getElementById("minceandcheeseField");
  const FISHCHIPS_FIELD = document.getElementById("fishandchipsField");
  const PAVLOVA_FIELD = document.getElementById("pavlovaField");

  let userName = NAME_FIELD.value;
  let landpAmount = Number(LANDP_FIELD.value);
  let mincecheeseAmount = Number(MINCEANDCHEESE_FIELD.value);
  let fishchipsAmount = Number(FISHCHIPS_FIELD.value);
  let pavlovaAmount = Number(PAVLOVA_FIELD.value);


  let cost = landpAmount * price[0] + mincecheeseAmount * price[1] + fishchipsAmount * price[2] + pavlovaAmount * price[3]

  if (landpAmount > 0) {
    OUTPUT.innerHTML = "L&Ps: " + landpAmount + "= $" + landpAmount * price[0] + "<br>";

  }
  if (mincecheeseAmount > 0) {
    OUTPUT.innerHTML += "Mince and cheese Pies: " + mincecheeseAmount + "= $" + mincecheeseAmount * price[1] + "<br>";
  }

  if (fishchipsAmount > 0) {
    OUTPUT.innerHTML += "Fish and chips: " + fishchipsAmount + "= $" + fishchipsAmount * price[2] + "<br>";

  }

  if (pavlovaAmount > 0) {
    OUTPUT.innerHTML += "pavlova: " + pavlovaAmount + "= $" + pavlovaAmount * price[3] + "<br>";

  }

  let userMoney = Number(MONEY_FIELD.value);


  OUTPUT.innerHTML += "Total cost: $" + cost + "<br>";

  OUTPUT.innerHTML += "<p> Your name is: " + userName + "<br>";
  OUTPUT.innerHTML += "<p> You have: $" + userMoney;

  if (userMoney >= cost) {
    OUTPUT.innerHTML += "<p> You have $" + calculateChange(userMoney, cost) + " change"
  } else {
    OUTPUT.innerHTML += "<p> You can't afford this item, sorry.</p1>";
  }

  if (cost > userMoney) {
    OUTPUT.innerHTML += " Your items were $" + cost + " ,You have $ " + userMoney + " you cant afford these items, sorry."
  } else {
    OUTPUT.innerHTML += "Thanks for shopping at my Cafe , have a good day."

  }
}