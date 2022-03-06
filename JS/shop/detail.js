const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");


import { baseUrl } from "../api.js";
import createMenu from "../components/createMenu.js";
import displayMessage from "../components/displayMessage.js";
const detailContainer = document.querySelector(".detail");

createMenu();
async function shopDetail(url) {
  try {
   
    const productsUrl = `${url}/products/${id}`;
    const productsResponse = await fetch(productsUrl);
    const resolvedResponse = await productsResponse.json();
    

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
    newItems.push({ ...product, id: newItems.length + 1 });
    localStorage.setItem("cart", JSON.stringify(newItems));
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
      cartCountElement.innerHTML = newItems.length;
    }
  };

  addToCartBtn.addEventListener("click", addToCartHandler);
});
