


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
  


cartContainer.innerHTML = cartItems.map(cartItem => `<div class="cart-content">
                                                        <div class='cart-picture' style="background-image:url(${cartItem.imageUrl})">
                                                          <button> X </button>
                                                        </div>
                                                        <div class= "cart-content-item">
                                                          <h5> ${cartItem.title}</h5>
                                                          <h6 class="cart-price">Title: $${cartItem.price}</h6>
                                                         <a href="shop.html" class='view-more-cart-btn'>View More</a>
                                                        </div>
                                                       
                                                        
                                                    </div>`)

totalContainer.innerHTML = `<h5 class="grand-tot">Total: $${grandTotal}</h5>`