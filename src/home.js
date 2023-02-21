function createHomeContent() {
  const container = document.createElement("div");
  container.className = "home-info-container";
  const aboveText = document.createElement("p");
  aboveText.textContent = "Best pizza in the Kitchener Metropolitan Area!";
  container.appendChild(aboveText);
  const image = document.createElement("img");
  image.src = "../img/tito.jpg";
  image.style.maxWidth = "150px";
  image.style.width = "auto";
  image.style.height = "auto";
  image.style.borderRadius = "70%";
  container.appendChild(image);
  const belowText = document.createElement("p");
  belowText.textContent = "Order online or in person";
  container.appendChild(belowText);
  return container;
}

export function displayHomePageContent() {
  const contentSection = document.querySelector(".content");
  contentSection.classList.add("content-home");
  contentSection.appendChild(createHomeContent());
}
