//Create an object
function cinnaRoll(quantity, glaze, price){
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
}

var cartArr;

//Get Tab Label to update when add to cart is pressed
function updateCartTab() {

    cartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
    let cartNum = cartArr.length; 
    console.log("size: "+cartNum);
    if (cartNum > 0){
        document.getElementById('cart-label').textContent = "Cart("+cartNum+ ")";
        
    } else {
       document.getElementById('cart-label').textContent = "Cart";
    }
}

updateCartTab();

//Alert Page when add to car is presses
function myAlert() {
    alert("Items Added to Cart!");
  }

//Select Quantity from drop down and change price
var quantityValue
function quantitySelected() {
    quantityValue = Number(document.getElementById("dropdown-quantity").value)
    document.getElementById("price").innerHTML = "$" + calculatePrice(quantityValue)
    console.log (quantityValue);
    return quantityValue;
}

//Select Glaze and Change image
var glazeValue
function imgChange() {
    glazeValue = document.getElementById("glaze-name").value
    glazeValue = glazeValue.split(" ")[0]
    document.getElementById("pumpkin").src = glazeValue + ".jpg"
    console.log(glazeValue);
    return glazeValue;
}

//Calculate Change in Price
function calculatePrice(quantityValue) {
    priceValue = quantityValue * 5.99
    return priceValue
}

//Add Items to Cart
function addCartItem() {
    let quantityValue = quantitySelected();
    let glazeValue = imgChange();
    let priceValue = calculatePrice(quantityValue);
    let itemSelected = new cinnaRoll(quantityValue, glazeValue, priceValue);
    cartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
    cartArr.push(itemSelected);
    console.log(cartArr);
    itemSelectedJSON = JSON.stringify(cartArr);
    localStorage.setItem("cartArr", itemSelectedJSON);

}



