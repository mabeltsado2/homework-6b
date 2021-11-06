function cinnaRoll(quantity, glaze, price, imgsrc){
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
    this.imgsrc = imgsrc;
}


const cartArr = [];

function updateCartTab() {

    let cartNum = cartArr.length; 

    if (cartNum > 0){
        document.getElementById('cart-label').href = "cart.html";
        document.getElementById('cart-label').textContent = "Cart("+cartNum+ ")";
        
    } else {
        document.getElementById('cart-label').innerHTML = "Cart"
    }
}

function myAlert() {
    alert("Items Added to Cart!");
  }


var quantityValue = document.getElementById("dropdown-quantity").value

var glazeValue = document.getElementById("glaze").value

// create json object based on selected values

switch(quantityValue){
    case "1": 
        var priceValue = 5.99 * 1 ;
        break;
    case "3": 
        var priceValue = 5.99 * 3 ;
        break;
    case "6": 
        var priceValue = 5.99 * 6 ;
        break;
    case "12": 
        var priceValue = 5.99 * 12 ;
        break;

}

switch(glazeValue){
    case "none": 
        var imgsrcValue = "pumpkin-spice-roll.jpg" ;
        break;
    case "vanilla-milk": 
        var imgsrcValue = "pumpkin1.jpg" ;
        break;
    case "sugar-milk": 
        var imgsrcValue = "pumpkin2.jpg" ;
        break;
    case "double-chocolate": 
        var imgsrcValue = "pumpkin3.jpg" ;
        break;

}

let itemSelected = new cinnaRoll (quantityValue, glazeValue, priceValue, imgsrcValue)
// add this newly selected item to the cart
cartArr.push(itemSelected)

updateCartTab ();
 