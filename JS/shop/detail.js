const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");

const baseUrl ='http://localhost:1337';

const detailContainer = document.querySelector(".detail");

async function shopDetail(url) {
 
  const productsUrl = `${url}/products/ ` +id;
  const productsResponse = await fetch(productsUrl);
  const resolvedResponse = await productsResponse.json() 
  console.log(resolvedResponse);

 

  resolvedResponse.map(function (currentItem) {


    detailContainer.innerHTML += ` <div>
                                    <div class='featured-picture' style="background-image:url(${baseUrl}${currentItem.image.url})"></div>
                                    <h4>${currentItem.title}</h4>
                                    <p class="shop-price">Price: $${currentItem.price}</p>
                                          
                                  </div>`
    
    })
   

 
}
shopDetail(baseUrl);
