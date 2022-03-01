import { baseUrl } from "../api.js";
import displayMessage from "../components/displayMessage.js";
// const baseUrl ='http://localhost:1337';
const shopContainer = document.querySelector(".shop");


async function shopPosts(url) {

  try {
    
    const productsUrl = `${url}/products`
    const productsResponse = await fetch(productsUrl);
    const resolvedResponse = await productsResponse.json() 
    console.log(resolvedResponse);

  

    resolvedResponse.map(function (currentItem) {


      shopContainer.innerHTML += ` 
                                  
                              <a href="detail.html?id=${currentItem.id}">
                                  <div class="shop-content">
                                    <div class='featured-picture' style="background-image:url(${baseUrl}${currentItem.image.url})"></div>
                                    <h4>${currentItem.title}</h4>
                                    <p class="shop-price">Price: $${currentItem.price}</p>
                                    <button class="view-more-btn">View More</button>        
                                  </div>
                                                          
                              </a> `
      
    })

  } catch (error) {
    console.log(error);
    displayMessage("error",error,".shop");
  }
 
  
   

 
}
shopPosts(baseUrl);