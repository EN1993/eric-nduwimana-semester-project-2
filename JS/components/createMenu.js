import { getUsername } from "../admin/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const{pathname} = document.location;

  const container = document.getElementById("navContainer");
  const username = getUsername();
  let authLink =`<li> <a href="login.html" id="auth-link" class="${pathname === "/login.html" ? "active" : ""}"> <i class="fas fa-user-circle"><span class="login-txt"> Log in</span></i></a></li>`;
  if (username) {
    authLink =` <li><a><i class="fas fa-user-circle"> <button id= "logout"> Logout ${username}</button></i></a></li>
                <li><a href="add.html"class="${pathname === "/add.html"  ? "active" : ""}">Add Product</a></li>`;
                
                    
  }

  console.log(username);
  // query local storage and get items count 
  container.innerHTML =  `  <header>
                              <a href="" class="logo"><img src="/images/logo11.jpg" alt="TheShoesOn store logo"></a>
                              <label for="hamburger-menu"><i class="fas fa-bars"></i></label>
                              <input type="checkbox" id="hamburger-menu">
                              <nav>
                                <ul>
                                  <li><a href="index.html"class="${pathname === "/index.html" || pathname === "/index.html"  ? "active" : ""}">Home</a></li>
                                  <li><a href="shop.html"class="${pathname === "/shop.html" || pathname === "/shop.html"  ? "active" : ""}">Shop</a></li>
                                  <li><a href="about.html"class="${pathname === "/about.html" || pathname === "/about.html"  ? "active" : ""}">About</a></li>
                                  <li><a href="contact.html"class="${pathname === "/contact.html" || pathname === "/contact.html"  ? "active" : ""}">Contact</a></li>
                                  <form class="search-form" ><input type="text"placeholder="Search"><i class="fas fa-search"></i></form>
                                  ${authLink} 
                                  <li><a href="cart.html"class="${pathname === "/cart.html" || pathname === "/cart.html"  ? "active" : ""}"><i class="fas fa-shopping-basket"> <span   id="cartCount" class="basket-count"> </span></i></a></li>
                                </ul>
                              </nav>
                            </header>`;

  logoutButton();
}