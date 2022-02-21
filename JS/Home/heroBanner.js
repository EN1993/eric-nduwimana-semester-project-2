const baseUrl ='http://localhost:1337';
const heroBannerContainer = document.querySelector(".hero-banner");

async function heroBannerPost(url) {
  const fullyQualifiedUrl = `${url}/uploads/jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg`
  const response = await fetch(fullyQualifiedUrl);
  // console.log( response);
  // const posts = await response.json();
  heroBannerContainer.innerHTML += `
  <div class='hero-banner-picture' style="background-image:url('${response.url}')"></div>
  `
  
}
heroBannerPost(baseUrl);
