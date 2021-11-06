function cinnaRoll(quantity, glaze, price){
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
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
    console.log (quantityValue);
    return quantityValue;
}

var glazeValue
function imgChange () {
    glazeValue = document.getElementById("glaze-name").value
    glazeValue = glazeValue.split(" ")[0]
    document.getElementById("pumpkin").src = glazeValue + ".jpg"
    console.log (glazeValue);
    return glazeValue;
}


// create json object based on selected values

function calculatePrice (quantityValue) {
    priceValue = quantityValue * 5.99
    return priceValue
}

function addCartItem () {
    let quantityValue = quantitySelected ();
    let glazeValue = imgChange ();
    let priceValue = calculatePrice (quantityValue);
    let itemSelected = new cinnaRoll (quantityValue, glazeValue, priceValue);
    cartArr.push(itemSelected);
    itemSelectedJSON = JSON.stringify(cartArr);
    localStorage.setItem("cart", itemSelectedJSON);

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


// add this newly selected item to the cart



//updateCartTab ();