


const cartItems = JSON.parse(localStorage.getItem("cart"));
const cartContainer= document.querySelector(".cart-list");
const totalContainer= document.querySelector(".total");

// totalContainer.innerHTML = cartItems.price
// cartContainer.innerHTML = cartItems.

const reducer = (previousValue, currentValue) => {
    console.log("CURRENT VALUE: ", previousValue, currentValue)
    return previousValue + currentValue.price
}
// [1, 2, 3]
const grandTotal = cartItems.reduce(reducer, 0);
  


cartContainer.innerHTML = cartItems.map(cartItem => `<div>
                            <h4>Title: ${cartItem.title}</h4>
                            <div class='detail-picture' style="background-image:url(${cartItem.imageUrl})"></div>
                        </div>`)

totalContainer.innerHTML = `<h4>Total: ${grandTotal}</h4>`