console.log("Hello world!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


let userOrder = ["L&P", "Mince and Cheese Pie", "Fish and Chips", "Pavlova"];
function getFormInput() {

    
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
    const ORDER_FIELD = document.getElementById("orderField");
    let order = Number(ORDER_FIELD.value);
  
    OUTPUT.innerHTML = "<p> Your name is: "+userName+" </p1>"

  OUTPUT.innerHTML += "You ordered: "+ userOrder[order-1];
  }
  