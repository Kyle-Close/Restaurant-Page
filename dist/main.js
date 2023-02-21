/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContactContent\": () => (/* binding */ displayContactContent)\n/* harmony export */ });\nfunction displayContactContent() {\n  const contentSection = document.querySelector(\".content\");\n  contentSection.classList.add(\"content-contact\");\n  contentSection.appendChild(createContactContent());\n}\n\nfunction createContactContent() {\n  let container = document.createElement(\"div\");\n  container.className = \"contact-container\";\n  let phoneSection = document.createElement(\"div\");\n  phoneSection.className = \"phone-section\";\n  let phoneIcon = document.createElement(\"img\");\n  phoneIcon.src = \"../img/phone.svg\";\n  let phoneText = document.createElement(\"p\");\n  phoneText.textContent = \"(519)-448-2020\";\n  phoneSection.appendChild(phoneIcon);\n  phoneSection.appendChild(phoneText);\n  container.appendChild(phoneSection);\n  let addressSection = document.createElement(\"div\");\n  addressSection.className = \"address-section\";\n  let addressIcon = document.createElement(\"img\");\n  addressIcon.src = \"../img/home.svg\";\n  let addressText = document.createElement(\"p\");\n  addressText.textContent = \"69 Main St S, George, ON N0E 1N0\";\n  addressSection.appendChild(addressIcon);\n  addressSection.appendChild(addressText);\n  container.appendChild(addressSection);\n  let map = document.createElement(\"img\");\n  map.src = \"../img/map.png\";\n  map.width = \"650\";\n  container.appendChild(map);\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHomePageContent\": () => (/* binding */ displayHomePageContent)\n/* harmony export */ });\nfunction createHomeContent() {\n  const container = document.createElement(\"div\");\n  container.className = \"home-info-container\";\n  const aboveText = document.createElement(\"p\");\n  aboveText.textContent = \"Best pizza in the Kitchener Metropolitan Area!\";\n  container.appendChild(aboveText);\n  const image = document.createElement(\"img\");\n  image.src = \"../img/tito.jpg\";\n  image.style.maxWidth = \"150px\";\n  image.style.width = \"auto\";\n  image.style.height = \"auto\";\n  image.style.borderRadius = \"70%\";\n  container.appendChild(image);\n  const belowText = document.createElement(\"p\");\n  belowText.textContent = \"Order online or in person\";\n  container.appendChild(belowText);\n  return container;\n}\n\nfunction displayHomePageContent() {\n  const contentSection = document.querySelector(\".content\");\n  contentSection.classList.add(\"content-home\");\n  contentSection.appendChild(createHomeContent());\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHomePageContent)();\nconst buttons = document.querySelectorAll(\"button\");\n\n[...buttons].forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    console.log(\"test\");\n    // Delete child node, then create/display new node\n    deleteChild();\n    switch (e.target.parentElement.className) {\n      case \"home\":\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHomePageContent)();\n        break;\n      case \"menu\":\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.displayMenuContent)();\n        break;\n      case \"contact\":\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.displayContactContent)();\n        break;\n    }\n  });\n});\n\nfunction deleteChild() {\n  const contentSection = document.querySelector(\".content\");\n  if (contentSection.firstChild != null) {\n    contentSection.removeChild(contentSection.firstChild);\n    contentSection.classList.remove(contentSection.classList[1]);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMenuContent\": () => (/* binding */ displayMenuContent)\n/* harmony export */ });\nclass Square {\n  constructor(pizzaName, pizzaToppings, imgSrc) {\n    this.pizzaName = pizzaName;\n    this.pizzaToppings = pizzaToppings;\n    this.imgSrc = imgSrc;\n  }\n}\n\nconst pizzas = [\n  new Square(\"Cheese\", \"Tomato sauce, Mozzarella\", \"../img/pizza.svg\"),\n  new Square(\n    \"Pepperoni\",\n    \"Tomato sauce, Mozzarella, Pepperoni\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"Veggie\",\n    \"Tomato sauce, Mozzarella, Red onion, Green pepper, Mushroom, Green Olives\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"Meatlovers\",\n    \"Tomato sauce, Mozzarella, Pepperoni, Sausage, Bacon\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"Hawaiian\",\n    \"Tomato sauce, Mozzarella, Pinapple\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"Neapolitan\",\n    \"Tomato sauce, Mozzarella, Tomatoes, Garlic, Oregano, Olive oil\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"New York Style\",\n    \"Tomato sauce, Mozzarella, Oregano, Chili flakes\",\n    \"../img/pizza.svg\"\n  ),\n  new Square(\n    \"Carolina Reaper\",\n    \"Tomato sauce, Mozzarella, Carolina Reaper chili peppers\",\n    \"../img/pizza.svg\"\n  ),\n];\n\nfunction displayMenuContent() {\n  const contentSection = document.querySelector(\".content\");\n  contentSection.classList.add(\"content-menu\");\n  contentSection.appendChild(createMenuContent());\n}\n\nfunction createMenuContent() {\n  let container = document.createElement(\"div\");\n  container.className = \"menu-grid-container\";\n  return createGridSquares(container);\n}\n\nfunction createGridSquares(container) {\n  // Create grid div\n\n  pizzas.forEach((pizza) => {\n    let square = document.createElement(\"div\");\n    square.className = \"square\";\n    let heading = document.createElement(\"h1\");\n    heading.textContent = pizza.pizzaName;\n    let toppings = document.createElement(\"p\");\n    toppings.textContent = pizza.pizzaToppings;\n    let img = document.createElement(\"img\");\n    img.src = pizza.imgSrc;\n\n    square.appendChild(img);\n    square.appendChild(heading);\n    square.appendChild(toppings);\n    container.appendChild(square);\n  });\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst contentContainer = document.querySelector(\"body\");\n\nfunction createElements() {\n  contentContainer.appendChild(createHeader());\n  contentContainer.appendChild(createContentSection());\n  contentContainer.appendChild(createFooter());\n}\n\nfunction createHeader() {\n  const headerSection = document.createElement(\"div\");\n  headerSection.className = \"header\";\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Titos Pizza\";\n  headerSection.appendChild(title);\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.className = \"menu-section\";\n  menuDiv.appendChild(createTab(\"home\", \"#39FF14\"));\n  menuDiv.appendChild(createTab(\"menu\", \"#f0051c\"));\n  menuDiv.appendChild(createTab(\"contact\", \"#0548f0\"));\n  headerSection.appendChild(menuDiv);\n  return headerSection;\n}\n\nfunction createTab(className, color) {\n  // Create Button\n  const tab = document.createElement(\"button\");\n  tab.className = className;\n  tab.style.setProperty(\"--clr\", color);\n  // Create span inside button\n  const tabSpan = document.createElement(\"span\");\n  tabSpan.textContent = className;\n  tab.appendChild(tabSpan);\n  // Add \"i\" section (for styling)\n  const tabI = document.createElement(\"i\");\n  tab.appendChild(tabI);\n  return tab;\n}\n\nfunction createContentSection() {\n  const content = document.createElement(\"div\");\n  content.className = \"content\";\n  return content;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"div\");\n  footer.className = \"footer\";\n  const text = document.createElement(\"p\");\n  text.innerHTML = \"Copyright &copy 2023 Kyle Close\";\n  footer.appendChild(text);\n  return footer;\n}\n\nfunction pageLoad() {\n  createElements();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;