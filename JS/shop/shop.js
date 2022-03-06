import { baseUrl } from "../api.js";
import createMenu from "../components/createMenu.js";
import displayMessage from "../components/displayMessage.js";
const shopContainer = document.querySelector(".shop");

export const renderProducts = (productsToRender)  => productsToRender.map(currentItem => shopContainer.innerHTML += ` 
                                
<a href="detail.html?id=${currentItem.id}">
    <div class="shop-content">
      <div class='featured-picture' style="background-image:url(${baseUrl}${currentItem.image.url})">
        <button class="view-more-btn">View More</button>
      </div>
      <h4>${currentItem.title}</h4>
      <p class="shop-price">Price: $${currentItem.price}</p>
              
    </div>
                            
</a> `
)

createMenu();

const products = []
async function shopPosts(url) {
  try {
    
    const productsUrl = `${url}/products`
    const productsResponse = await fetch(productsUrl);
    const resolvedResponse = await productsResponse.json() 
    localStorage.setItem('products', JSON.stringify(resolvedResponse))
    renderProducts(resolvedResponse)
  } catch (error) {
    console.log(error);
    displayMessage("error",error,".shop");
  } 
}

shopPosts(baseUrl)