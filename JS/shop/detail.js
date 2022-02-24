const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");

const baseUrl ='http://localhost:1337';

const detailContainer = document.querySelector(".detail");

async function shopDetail(url) {


  // JS Reads code top to bottom, left to right
  // back ticks are a new feature for string in javascript
  // Purpose it to make writing multiline strings easy and readable
  const string1 = "something"
  const string2 = 'something'
  const string = `something`

  
  const productsUrl = `${url}/products/${id}`;
  const productsResponse = await fetch(productsUrl);
  const resolvedResponse = await productsResponse.json() 
  console.log(resolvedResponse);


    detailContainer.innerHTML += ` <div  class=" detail--content">
                                    <div class='detail-picture' style="background-image:url(${baseUrl}${resolvedResponse.image.url})"></div>
                                   
                                    <div class=" detail-content"> 
                                      <h4>${resolvedResponse.title}</h4>
                                      <p class="shop-price">Price: $${resolvedResponse.price}</p>
                                      <p class="detail-description"><b> Description:</b> <br>
                                        ${resolvedResponse.description}
                                      </p>
                                      <button class="cta detail-btn"> Add To Cart </button> 
                                    </div> 
                                  </div>`
    
 

 
}
shopDetail(baseUrl);
