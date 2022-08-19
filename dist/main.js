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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-map.png */ \"./src/images/restaurant-map.png\");\n\r\n\r\nconst createContactPage = () => {\r\n    const contactPage = document.createElement('section');\r\n    contactPage.classList.add('contact-bg');\r\n    content.appendChild(contactPage);\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.classList.add('text');\r\n    phoneNumber.textContent = \"Telefone: 4002-8922\";\r\n    contactPage.appendChild(phoneNumber);\r\n\r\n    const adress = document.createElement('p');\r\n    adress.classList.add('text');\r\n    adress.textContent = 'Endereço: R. da Consolação, 3527 - Cerqueira César, São Paulo';\r\n    contactPage.appendChild(adress);\r\n\r\n    const restaurantMap = document.createElement('img');\r\n    restaurantMap.src = _images_restaurant_map_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    restaurantMap.classList.add('restaurant-map');\r\n    contactPage.appendChild(restaurantMap);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_jacquin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/jacquin.png */ \"./src/images/jacquin.png\");\n\r\n\r\nconst createHomePage = () => {\r\n    const home = document.createElement('section');\r\n    home.classList.add('home');\r\n    content.appendChild(home);\r\n\r\n    const homeBg = document.createElement('div');\r\n    homeBg.classList.add('body-bg');\r\n    home.appendChild(homeBg);\r\n\r\n    const textA = document.createElement('p');\r\n    textA.classList.add('text');\r\n    textA.textContent = 'O orgulho da profission';\r\n    homeBg.appendChild(textA);\r\n\r\n    const textB = document.createElement('p');\r\n    textB.classList.add('text');\r\n    textB.textContent = 'Muito tompero desde 2019';\r\n    homeBg.appendChild(textB);\r\n\r\n    const jacquinImg = document.createElement('img');\r\n    jacquinImg.classList.add('jacquin');\r\n    jacquinImg.src = _images_jacquin_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    homeBg.appendChild(jacquinImg);\r\n\r\n    const textC = document.createElement('p');\r\n    textC.classList.add('text');\r\n    textC.textContent = 'Faça seu pedido online!';\r\n    homeBg.appendChild(textC);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _images_restaurant_map_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/restaurant-map.png */ \"./src/images/restaurant-map.png\");\n\r\n\r\n\r\n// import backgroundIMG from './images/background.png';\r\n\r\n\r\nconst content = document.getElementById('content');\r\ncontent.style.backgroundImage = 'url(https://michalosman.github.io/restaurant-page/images/background.jpg)';\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    content.appendChild(header);\r\n\r\n    const siteTitle = document.createElement('h1');\r\n    siteTitle.classList.add('restaurant-title');\r\n    siteTitle.textContent = 'Restaurante Président';\r\n    header.appendChild(siteTitle);\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav-buttons-div');\r\n    header.append(nav);\r\n\r\n    const homeButton = document.createElement('button');\r\n    homeButton.classList.add('nav-button');\r\n    homeButton.textContent = 'Home';\r\n    homeButton.addEventListener('click', () => {\r\n        content.textContent = \"\";\r\n        createHeader();\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n    nav.appendChild(homeButton);\r\n\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-button');\r\n    menu.textContent = 'Menu';\r\n    menu.addEventListener('click', () => {\r\n        content.textContent = \"\";\r\n        createHeader();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n    nav.appendChild(menu);\r\n\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-button');\r\n    contact.textContent = 'Contato';\r\n    contact.addEventListener('click', () => {\r\n        content.textContent = \"\";\r\n        createHeader();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n    nav.appendChild(contact);\r\n};\r\n\r\n\r\ncreateHeader();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.png */ \"./src/images/pizza.png\");\n\r\n\r\nconst createMenuPage = () => {\r\n    const menu = document.createElement('section');\r\n    menu.classList.add('menu');\r\n    content.appendChild(menu);\r\n\r\n    const menuBg = document.createElement('div');\r\n    menuBg.classList.add('menu-bg');\r\n    menu.appendChild(menuBg);\r\n\r\n    for(let i=0; i<=5; i++){\r\n        const pizza1 = document.createElement('div');\r\n        pizza1.classList.add('food-container');\r\n        menuBg.appendChild(pizza1);\r\n\r\n        const pizzaIcon = document.createElement('img');\r\n        pizzaIcon.src = _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        pizzaIcon.classList.add('food-img');\r\n        pizza1.appendChild(pizzaIcon);\r\n\r\n        const pizzaTitle = document.createElement('p');\r\n        pizzaTitle.classList.add('food-title');\r\n        pizzaTitle.textContent = 'Pizza'\r\n        pizza1.appendChild(pizzaTitle);\r\n\r\n        const pizzaIngredients = document.createElement('p');\r\n        pizzaIngredients.classList.add('food-ingredients');\r\n        pizzaIngredients.textContent = 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basi';\r\n        pizza1.appendChild(pizzaIngredients);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/jacquin.png":
/*!********************************!*\
  !*** ./src/images/jacquin.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2b70d6eaef802df15d0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/jacquin.png?");

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"092360f20b5fceec80bc.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.png?");

/***/ }),

/***/ "./src/images/restaurant-map.png":
/*!***************************************!*\
  !*** ./src/images/restaurant-map.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"487605119eeca0f9fada.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-map.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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