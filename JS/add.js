import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./admin/storage.js";
import { baseUrl} from "./api.js"



const form = document.getElementById("addForm");
const name = document. querySelector("#title");
const price = document. querySelector("#price");
const description = document. querySelector("#description");
const message = document. querySelector(".message-container");

createMenu()
function submitForm(event) {
  console.log("Start start")
  event.preventDefault();

  message.innerHTML="";

  const nameValue = name.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

  console.log("priceValue", priceValue)

  if (nameValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  // addProduct(titleValue, priceValue, descriptionValue);

}

form.addEventListener("submit", submitForm);

/*
async function addProduct(name, price, description) {
  
  const url = baseUrl + "/products";
  const data = JSON.stringify({ name: name, price: price, description: description});
  const options = {
    method: "POST",
    body: data,
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  } 
} */