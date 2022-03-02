import { getUsername } from "../admin/storage.js";
export default function createMenu() {
  const{pathname} = document.location;

  const container = document.querySelector("nav")
  const username = getUsername();
  let authLink =`<li> <a href="login.html" id="auth-link" class="${pathname === "/login.html" ? "active" : ""}"> <span class="login-txt">Log in</span></a></li>`;
  if (username) {
    authLink =`<span> Hi ${username}</span>`;
  }

  console.log(username);
  container.innerHTML =  `<div >
                              <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop.html" class="${pathname === "/shop.html" || pathname === "/shop.html" ? "active" : ""}" >Shop</a></li>
                                    <li><a href="about.html"class="${pathname === "/about.html" || pathname === "/about.html" ? "active" : ""}">About</a></li>
                                    <li><a href="contact.html" >Contact</a></li>
                                    <form class="search-form" ><input type="text"placeholder="Search"><i class="fas fa-search"></i></form>
                                    <i class="fas fa-user-circle auth-link" >${authLink}</i>
                                    <li><a href="cart.html" ><i class="fas fa-shopping-basket"> <span   id="cartCount" class="basket-count">  </span></i></a></li>
                                  </ul>
                            
                            
                          </div>`;
}