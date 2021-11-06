function cinnaRoll(quantity, options, price, imgsrc){
    this.quantity = quantity;
    this.options = options;
    this.price = price;
    this.imgsrc = imgsrc;
}


const cartArr = [];

function updateCartTab() {
 
    cartArr.push(1)

    let cartNum = cartArr.length - 1; 

    if (cartNum > 0){
        document.getElementById('cart-label').href = "cart.html";
        document.getElementById('cart-label').textContent = "Cart("+cartNum+ ")";
        
    } else {
        document.getElementById('cart-label').innerHTML
        = "Cart"
    }
}

updateCartTab ();
 
function myAlert() {
    alert("Items Added to Cart!");
  }

