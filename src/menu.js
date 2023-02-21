class Square {
  constructor(pizzaName, pizzaToppings, imgSrc) {
    this.pizzaName = pizzaName;
    this.pizzaToppings = pizzaToppings;
    this.imgSrc = imgSrc;
  }
}

const pizzas = [
  new Square("Cheese", "Tomato sauce, Mozzarella", "../img/pizza.svg"),
  new Square(
    "Pepperoni",
    "Tomato sauce, Mozzarella, Pepperoni",
    "../img/pizza.svg"
  ),
  new Square(
    "Veggie",
    "Tomato sauce, Mozzarella, Red onion, Green pepper, Mushroom, Green Olives",
    "../img/pizza.svg"
  ),
  new Square(
    "Meatlovers",
    "Tomato sauce, Mozzarella, Pepperoni, Sausage, Bacon",
    "../img/pizza.svg"
  ),
  new Square(
    "Hawaiian",
    "Tomato sauce, Mozzarella, Pinapple",
    "../img/pizza.svg"
  ),
  new Square(
    "Neapolitan",
    "Tomato sauce, Mozzarella, Tomatoes, Garlic, Oregano, Olive oil",
    "../img/pizza.svg"
  ),
  new Square(
    "New York Style",
    "Tomato sauce, Mozzarella, Oregano, Chili flakes",
    "../img/pizza.svg"
  ),
  new Square(
    "Carolina Reaper",
    "Tomato sauce, Mozzarella, Carolina Reaper chili peppers",
    "../img/pizza.svg"
  ),
];

export function displayMenuContent() {
  const contentSection = document.querySelector(".content");
  contentSection.classList.add("content-menu");
  contentSection.appendChild(createMenuContent());
}

function createMenuContent() {
  let container = document.createElement("div");
  container.className = "menu-grid-container";
  return createGridSquares(container);
}

function createGridSquares(container) {
  // Create grid div

  pizzas.forEach((pizza) => {
    let square = document.createElement("div");
    square.className = "square";
    let heading = document.createElement("h1");
    heading.textContent = pizza.pizzaName;
    let toppings = document.createElement("p");
    toppings.textContent = pizza.pizzaToppings;
    let img = document.createElement("img");
    img.src = pizza.imgSrc;

    square.appendChild(img);
    square.appendChild(heading);
    square.appendChild(toppings);
    container.appendChild(square);
  });
  return container;
}
