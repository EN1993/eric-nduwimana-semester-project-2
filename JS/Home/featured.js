const baseUrl ='http://localhost:1337';
const featuredContainer = document.querySelector(".featured");

async function featuredPosts(url) {
  // const fullyQualifiedUrl = `${url}/uploads/jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg`
  // const response = await fetch(fullyQualifiedUrl);
  // console.log("Posts: ", response);
  // const posts = await response.json();

  const productsUrl = `${url}/products`
  const productsResponse = await fetch(productsUrl);
  const resolvedResponse = await productsResponse.json() 
  console.log(resolvedResponse);

 featuredContainer.innerHTML += `
   <div class='featured-picture' style="background-image:url(${resolvedResponse[0].image})"></div>
   <h3>${resolvedResponse[0].title}</h3>
   <p></p>
  `
  
}
featuredPosts(baseUrl);