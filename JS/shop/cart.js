import createMenu from "../components/createMenu.js";


let cartItems = JSON.parse(localStorage.getItem("cart"));
const cartContainer= document.querySelector(".cart-list");
const totalContainer= document.querySelector(".total");

const removeFromCartHandler = (event) => {
  const newCart = [];
  console.log("Event: ", event)
  const selectedCartItemID = parseInt(event.target.value)
  const oldCart = localStorage.getItem("cart"); 
  const parsedOldCart = JSON.parse(oldCart);

  if (parsedOldCart) {
    const filteredCart = parsedOldCart.filter(item => {
      return item.id !== selectedCartItemID
    })
    console.log("Filtered Cart: ", filteredCart)
    newCart.push(...filteredCart);
  }
  localStorage.setItem("cart", JSON.stringify(newCart));
  const cartCountElement = document.getElementById("cartCount");
  if (cartCountElement) {
    cartCountElement.innerHTML = newCart.length;
  }
  renderItems(newCart)
};

const renderItems = (itemsToRender) => {
createMenu();

const reducer = (previousValue, currentValue) => previousValue + currentValue.price

const grandTotal = itemsToRender.reduce(reducer, 0);
  
cartContainer.innerHTML = itemsToRender.map(cartItem => `<div class="cart-content">
                                                        <div class='cart-picture' style="background-image:url(${cartItem.imageUrl})">
                                                          <button id=${cartItem.id} value=${cartItem.id}> X </button>
                                                        </div>
                                                        <div class= "cart-content-item">
                                                          <h5> ${cartItem.title}</h5>
                                                          <h6 class="cart-price">Title: $${cartItem.price}</h6>
                                                         <a href="shop.html" class='view-more-cart-btn'>View More</a>
                                                        </div>
                                                    </div>`)

totalContainer.innerHTML = `<h5 class="grand-tot">Total: $${grandTotal}</h5>`
}

renderItems(cartItems)


cartItems.map((cartItem) => {
  const removeProductBtn = document.getElementById(cartItem.id)
  removeProductBtn.addEventListener("click", removeFromCartHandler)
})