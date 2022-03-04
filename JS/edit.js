import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./admin/storage.js";
import { baseUrl} from "./api.js"

createMenu();

const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");

if (!id) {
  document.location.href="/shop.html";
}

const productsUrl = `${url}/products/${id}`;

const form = document.getElementById("editForm");
const title = document. querySelector("#title");
const price = document. querySelector("#price");
const idInput = document. querySelector("#id");
const description = document. querySelector("#description");
const message = document. querySelector(".message-container");
const loading = document. querySelector(".loading");


(async function () {
  
  try {
    
    const productsResponse = await fetch(productsUrl);
    const resolvedResponse = await productsResponse.json();

    title.value = resolvedResponse.title;
    price.value = resolvedResponse.price;
    description.value = resolvedResponse.description;
   idInput.value = resolvedResponse.id;


   console.log(resolvedResponse);
  } catch (error) {
    console.log(error);
  }finally{
    loading.style.display = "none";
    form.style.display = "block";
  }

})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  
  event.preventDefault();

  message.innerHTML ="";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const idValue = idInput.value;

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, idInput);

}


async function updateProduct(title, price, description, id) {
  
  const url = baseUrl + "/products" + id;
  const data = JSON.stringify({ title: title, price: price, description: description});
  const token = getToken();
  
  const options = {
    method: "PUT",
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
    if (json.updated_at) {
      displayMessage("success", "Product updated", ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }

  } catch (error) {
    console.log(error);
  }
} 

