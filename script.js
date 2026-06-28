console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const MENU = document.getElementById("spaceForMenu");


let userOrder = ["L&P", "Mince and Cheese Pie", "Fish and Chips", "Pavlova"];
let price = [5, 7, 12, 15];
let quantities = [];
for (let i = 0; i < userOrder.length; i++) {
OUTPUT.innerHTML += "$" +price[i] + ":" + userOrder[i] + " " + '<input placehholder="number" id="' + userOrder[i] +'Field" name="formmoney" ><br><br>';
}

for (let i = 0; i < userOrder.length; i++) {
  console.log("menu" + i + ": " + userOrder[i] + price[i] + "<br>")
  MENU.innerHTML += userOrder[i] + " $" + price[i] + "<br>"
}
function calculateChange(_money, _price) {
  let change = _money - _price;
  return change;
}

/*
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
    OUTPUT.innerHTML += "" + landpAmount + "= $" + landpAmount * price[0] + "<br>";

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

*/
function getFormInput() {
  const NAME_FIELD = document.getElementById("nameField");
  const MONEY_FIELD = document.getElementById("moneyField");

  let userName = NAME_FIELD.value;
  let userMoney = Number(MONEY_FIELD.value);
  let cost = 0;


  for (let i=0; i <userOrder.length;i++) {
  const menuField = document.getElementById(userOrder[i] +"Field")
  quantities [i] = Number( menuField.value) ;
  let total = quantities[i]* price[i]
  cost+= total
  }



 // if (landpAmount > 0) {
  //  OUTPUT.innerHTML = "L&Ps: " + landpAmount + "= $" + landpAmount * price[0] + "<br>";

//}
 // if (mincecheeseAmount > 0) {
 //   OUTPUT.innerHTML += "Mince and cheese Pies: " + mincecheeseAmount + "= $" + mincecheeseAmount * price[1] + "<br>";
//  }

 // if (fishchipsAmount > 0) {
 //   OUTPUT.innerHTML += "Fish and chips: " + fishchipsAmount + "= $" + fishchipsAmount * price[2] + "<br>";

//}

 // if (pavlovaAmount > 0) {
  //  OUTPUT.innerHTML += "Pavlova: " + pavlovaAmount + "= $" + pavlovaAmount * price[3] + "<br>";

 // }


 OUTPUT.innerHTML += "<p> Your name is: " + userName + "<br>";
OUTPUT.innerHTML += "<p> You have: $" + userMoney;

 
 if (userMoney >= cost) {
  for( let i = 0; + userOrder.length; i++) {
    let total =quantities [i] * price[ i]
    OUTPUT.innerHTML += userOrder[i] + " total: $" + total + "<br>";
  }
  OUTPUT.innerHTML += "<p> You have $" + calculateChange(userMoney, cost) + " change"
  OUTPUT.innerHTML += "Thanks for shopping at my Cafe , have a good day."
} else {
  OUTPUT.innerHTML += "<p> You can't afford this item, sorry.</p1>";
    OUTPUT.innerHTML += " Your items were $" + cost + " ,You have $ " + userMoney + " you cant afford these items, sorry."
}



 OUTPUT.innerHTML += "Total cost: $" + cost + "<br>";

}