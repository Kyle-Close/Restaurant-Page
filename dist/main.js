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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHomePageContent)();\nconst buttons = document.querySelectorAll(\"button\");\n\n[...buttons].forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    // Delete child node, then create/display new node\n    deleteChild();\n    switch (e.target.parentElement.className) {\n      case \"home\":\n        console.log(\"Clicked home button\");\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.displayHomePageContent)();\n        break;\n      case \"menu\":\n        console.log(\"Clicked menu button\");\n        break;\n      case \"contact\":\n        console.log(\"Clicked contact button\");\n        break;\n    }\n  });\n});\n\nfunction deleteChild() {\n  const contentSection = document.querySelector(\".content\");\n  if (contentSection.firstChild != null) {\n    contentSection.removeChild(contentSection.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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