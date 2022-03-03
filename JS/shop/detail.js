const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");

// const baseUrl ='http://localhost:1337';
import { baseUrl } from "../api.js";
import createMenu from "../components/createMenu.js";
import displayMessage from "../components/displayMessage.js";
const detailContainer = document.querySelector(".detail");
/*
if (!id) {
  document.location.href="/shop.html";
} */
createMenu();
async function shopDetail(url) {
  try {
    // JS Reads code top to bottom, left to right
    // back ticks are a new feature for string in javascript
    // Purpose it to make writing multiline strings easy and readable
    

    const productsUrl = `${url}/products/${id}`;
    const productsResponse = await fetch(productsUrl);
    const resolvedResponse = await productsResponse.json();
    // console.log(resolvedResponse);

    const imageUrl = `${baseUrl}${resolvedResponse.image.url}`;
    const price = resolvedResponse.price;
    const title = resolvedResponse.title;
    const description = resolvedResponse.description;
    detailContainer.innerHTML += ` <div  class=" detail--content">
                                    <div class='detail-picture' style="background-image:url(${imageUrl})"></div>
                                   
                                    <div class=" detail-content"> 
                                      <h4>${title}</h4>
                                      <p class="shop-price">Price: $${price}</p>
                                      <p class="detail-description"><b> Description:</b> <br>
                                        ${description}
                                      </p>
                                      <button id="addToCart" class="cta detail-btn" data-product="${resolvedResponse.id}"> Add To Cart </button> 
                                    </div> 
                                  </div>`;

    return {
      imageUrl,
      price,
      title,
    };
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".detail");
  }
}

shopDetail(baseUrl).then((product) => {
  const addToCartBtn = document.getElementById("addToCart");

  const addToCartHandler = (event) => {
   

    const newItems = [];
    const oldItem = localStorage.getItem("cart");
    const parsedOldItem = JSON.parse(oldItem); 
    if (parsedOldItem) {
      newItems.push(...parsedOldItem);
    }
    newItems.push(product);
    localStorage.setItem("cart", JSON.stringify(newItems));
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      cartCountElement.innerHTML = newItems.length;
    }
  };

  addToCartBtn.addEventListener("click", addToCartHandler);
});
