
import { baseUrl } from "../api.js";

const featuredContainer = document.querySelector(".featured");

async function featuredPosts(url) {
 
  const productsUrl = `${url}/products`
  const productsResponse = await fetch(productsUrl);
  const resolvedResponse = await productsResponse.json() 
  console.log(resolvedResponse);

 

  resolvedResponse.map(function (currentItem) {


    featuredContainer.innerHTML += ` <div class="featured-content">
                                          <div class='featured-picture' style="background-image:url(${baseUrl}${currentItem.image.url})"></div>
                                          <figcaption><h4>${currentItem.title}</h4></figcaption>
                                          
  
  
                                     </div>`
    
    })
   

 
}
featuredPosts(baseUrl);