export function displayContactContent() {
  const contentSection = document.querySelector(".content");
  contentSection.classList.add("content-contact");
  contentSection.appendChild(createContactContent());
}

function createContactContent() {
  let container = document.createElement("div");
  container.className = "contact-container";
  let phoneSection = document.createElement("div");
  phoneSection.className = "phone-section";
  let phoneIcon = document.createElement("img");
  phoneIcon.src = "../img/phone.svg";
  let phoneText = document.createElement("p");
  phoneText.textContent = "(519)-448-2020";
  phoneSection.appendChild(phoneIcon);
  phoneSection.appendChild(phoneText);
  container.appendChild(phoneSection);
  let addressSection = document.createElement("div");
  addressSection.className = "address-section";
  let addressIcon = document.createElement("img");
  addressIcon.src = "../img/home.svg";
  let addressText = document.createElement("p");
  addressText.textContent = "69 Main St S, George, ON N0E 1N0";
  addressSection.appendChild(addressIcon);
  addressSection.appendChild(addressText);
  container.appendChild(addressSection);
  let map = document.createElement("img");
  map.src = "../img/map.png";
  map.width = "650";
  container.appendChild(map);
  return container;
}
