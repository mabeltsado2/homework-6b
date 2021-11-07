
function showProductInCart(product, position) {
    // Getting item from local storage
    const storedValue1 = JSON.parse(localStorage.getItem("cartArr"));
    const cartArray1 = storedValue1 ? storedValue1 : []; 

    const cartDiv = document.getElementById('cart-container');
    let cartCode = '<img src = "pumpkin-spice-roll.jpg" alt= "pumpkin spice Cinnamon roll" class = "roll-pics" id="cart-image"><div id = "cart-text" class = "roll-pics"><b>Pumpkin Spice Cinnamon Roll</b><br><div>Glaze: '+ product.glaze+'</div><br><div class = "roll-text" id = "remove" onClick = "removeItem('+position+');">Remove</div></div><div id = "item-price">$5.99</div><div id="item-quantity">'+ product.quantity+'</div><div id = "item-total">$'+ product.price+'</div>';
    document.getElementById("cart-container").innerHTML += cartCode; 
}

function displayCartItems() {
    // Getting item from local storage
    const storedValue1 = JSON.parse(localStorage.getItem("cartArr"));
    const cartArray1 = storedValue1 ? storedValue1 : []; 
    for (let i = 0; i < cartArray1.length; i++) {
        cartArray1[i].id = i+1; 
        showProductInCart(cartArray1[i],i);
    }
}
displayCartItems();


//Remove item
function removeItem(position) {
    cartArr = JSON.parse(localStorage.getItem("cartArr") || "[]");
    cartArr.splice(position,1);
    //console.log(cartArr);
    itemSelectedJSON = JSON.stringify(cartArr);
    localStorage.setItem("cartArr", itemSelectedJSON);
    //document.getElementById("cart-container").innerHTML = "";
    //displayCart();
    location.reload();
}