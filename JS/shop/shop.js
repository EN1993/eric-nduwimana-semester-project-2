import { baseUrl } from "../api.js";
// const baseUrl ='http://localhost:1337';
const shopContainer = document.querySelector(".shop");

async function shopPosts(url) {
 
  const productsUrl = `${url}/products`
  const productsResponse = await fetch(productsUrl);
  const resolvedResponse = await productsResponse.json() 
  console.log(resolvedResponse);

 

  resolvedResponse.map(function (currentItem) {


    shopContainer.innerHTML += ` <div>
                                  <div class='featured-picture' style="background-image:url(${baseUrl}${currentItem.image.url})"></div>
                                  <h4>${currentItem.title}</h4>
                                  <p class="shop-price">Price: $${currentItem.price}</p>
                                          
  
  
                                </div>`
    
    })
   

 
}
shopPosts(baseUrl);