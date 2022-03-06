import displayMessage from "./components/displayMessage.js";
import createMenu from "./components/createMenu.js";
import { getToken } from "./admin/storage.js";
import { baseUrl} from "./api.js"



const form = document.getElementById("addForm");
const title = document. querySelector("#title");
const price = document. querySelector("#price");
const image = document. querySelector("#file");
const description = document. querySelector("#description");
const message = document. querySelector(".message-container");

createMenu()
function submitForm(event) {
  console.log("Start start")
  event.preventDefault();

  message.innerHTML="";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();

 

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  addProduct(titleValue, priceValue, descriptionValue);

}

form.addEventListener("submit", submitForm);

const uploadImage = async (e) => {
  e.preventDefault();

  const formData = new FormData()

  formData.append('files', files [0])
  image.post(baseUrl + "/upload", formData) 
  
}


async function addProduct(title, price, image, description) {
  

  
  
  const url = baseUrl + "/products";
  uploadImage();
  // console.log("uploadimg:", uploadImage);
  const data = JSON.stringify({ title: title, price: price, image: image, description: description});
  const token = getToken();
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
} 