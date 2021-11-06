function cinnaRoll(quantity, glaze){
    this.quantity = quantity;
    this.glaze = glaze;
}

const cartArr = [];

//function updateCartTab() {

    //cartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
    //let cartNum = cartArr.length; 

    //if (cartNum > 0){
       // document.getElementById('cart-label').href = "cart.html";
        //document.getElementById('cart-label').textContent = "Cart("+cartNum+ ")";
        
    //} else {
       // document.getElementById('cart-label').textContent = "Cart"
    //}
//}

function myAlert() {
    alert("Items Added to Cart!");
  }

var quantityValue
function quantitySelected() {
    quantityValue = Number(document.getElementById("dropdown-quantity").value)
    document.getElementById("price").innerHTML = "$" + calculatePrice(quantityValue)
}

var glazeValue
function imgChange () {
    glazeValue = document.getElementById("glaze-name").value
    glazeValue = glazeValue.split(" ")[0]
    document.getElementById("pumpkin").src = glazeValue + ".jpg"
}


// create json object based on selected values

function calculatePrice (quantityValue) {
    return quantityValue * 5.99
}

function addItem() {
    // get stored value of cart items
    var cartItemsString = localStorage.getItem("cartItems")
    // check if item exists in storage, if so, parse it
    if (cartItemsString === null) { // first time, we have to create the cartItems list
      var cartItems = []
    } else { // we've been here before, load the value
      var cartItems = JSON.parse(cartItemsString)
    }
}
// switch glazeValue {
//     case "none": 
//         var imgsrcValue = "pumpkin-spice-roll.jpg" ;
//         break;
//     case "vanilla-milk": 
//         var imgsrcValue = "pumpkin1.jpg" ;
//         break;
//     case "sugar-milk": 
//         var imgsrcValue = "pumpkin2.jpg" ;
//         break;
//     case "double-chocolate": 
//         var imgsrcValue = "pumpkin3.jpg" ;
//         break;

// }

let itemSelected = new cinnaRoll (quantityValue, glazeValue)
// add this newly selected item to the cart
cartArr.push(itemSelected)

updateCartTab ();