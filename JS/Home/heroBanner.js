const baseUrl ='http://localhost:1337/home';
const heroBannerContainer = document.querySelector(".hero-banner");

async function heroBannerPost(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  heroBannerContainer.innerHTML += `
  <div class='hero-banner-picture' style="background-image:url('${posts.hero_banner.url}')"></div>
  `
  
}
heroBannerPost(baseUrl);
