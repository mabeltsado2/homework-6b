
// Getting item from local storage
const storedValue1 = JSON.parse(localStorage.getItem("cart"));
const cartArray1 = storedValue1 ? storedValue1 : []; 

const cartDiv = document.getElementById('cart-container');

function showProductInCart(product) {
    let thecode = '<img src = "pumpkin-spice-roll.jpg" alt= "pumpkin spice Cinnamon roll" class = "roll-pics" id="cart-image"><div id = "cart-text" class = "roll-pics"><b>Pumpkin Spice Cinnamon Roll</b><br><div>Glaze: '+ product.glaze+'</div><div id = "remove" >Remove</div></div><div id = "item-price">$5.99</div><div id="item-quantity">'+ product.quantity+'</div><div id = "item-total">$'+ product.price+'</div><br>';
    document.getElementById("cart-container").innerHTML += thecode; 
}

    for (let i = 0; i < cartArray1.length; i++) {
       cartArray1[i].id = i+1; 
        showProductInCart(cartArray1[i]);
    }