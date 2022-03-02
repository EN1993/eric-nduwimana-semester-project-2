import { baseUrl } from "../api.js";
import createMenu from "../components/createMenu.js";
import displayMessage from "../components/displayMessage.js";
import { saveToken, saveUser } from "./storage.js";


const form = document.getElementById("loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

createMenu();

function submitForm(event) {
  console.log("start of the function")
  event.preventDefault();
  message.innerHTML="";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  console.log({usernameValue, passwordValue})
  if(usernameValue.length === 0 || passwordValue.length === 0){
    return displayMessage("warning", "Invalid values", ".message-container");
  }

  doLogin(usernameValue, passwordValue)
}
form.addEventListener("submit", submitForm);



async function doLogin(username, password) {
  const url = baseUrl + "/auth/local";
  const data = JSON.stringify({identifier: username, password: password});
  const options = {
    method: "POST",
    body: data,
    headers:{
      "Content-Type": "application/json",
    },
  };

  try {
    
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    if (json.user) {
      // displayMessage("success", "Successfully logged in", ".message-container");

      saveToken(json.jwt);
      saveUser(json.user);

      location.href="shop.html";
    }

    if (json.error) {
      displayMessage("warning", "Invalid Login info", ".message-container");
    }
   
  } catch (error) {
    console.log(error);
  }
}