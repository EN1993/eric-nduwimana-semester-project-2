export default function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);
  if (element) {
    element.innerHTML=`<div class="message ${messageType}">${message}</div>`;
  }
}