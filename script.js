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

  const LANDP_FIELD = document.getElementById("landpField");
  const MINCEANDCHEESE_FIELD = document.getElementById("minceandcheeseField");
  const FISHCHIPS_FIELD = document.getElementById("fishandchipsField");
  const PAVLOVA_FIELD = document.getElementById("pavlovaField");

  let userName = NAME_FIELD.value;
  let landpAmount  = Number(LANDP_FIELD.value);
  let mincecheeseAmount = Number(MINCEANDCHEESE_FIELD.value);
  let fishchipsAmount = Number(FISHCHIPS_FIELD.value);
  let pavlovaAmount = Number(PAVLOVA_FIELD.value);

let cost =landpAmount *price[0] + mincecheeseAmount * price [1] + fishchipsAmount * price[2] + pavlovaAmount * price[3]

  let userMoney = Number(MONEY_FIELD.value);
 
  OUTPUT.innerHTML = "<p> Your name is: " + userName + "";
  OUTPUT.innerHTML += "<p> You have: $" + userMoney;
  OUTPUT.innerHTML += "You ordered: " + landpAmount + "L&P ";
  OUTPUT.innerHTML += "You ordered: " + mincecheeseAmount + " Mince and cheese Pies" ;
  OUTPUT.innerHTML += "You ordered: " + fishchipsAmount +  " Fish and chips";
  OUTPUT.innerHTML += "You ordered: " + pavlovaAmount +  " </p1>";


  if (userMoney >= cost ) {
    OUTPUT.innerHTML += "<p> You have $"+calculateChange(userMoney, cost )+ " change"
  } else {
    OUTPUT.innerHTML += "<p> You can't afford this item, sorry."+  + "</p1>";
  }

}
