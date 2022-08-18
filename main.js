/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content');\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    content.appendChild(header);\r\n\r\n    const siteTitle = document.createElement('h1');\r\n    siteTitle.classList.add('restaurant-title');\r\n    siteTitle.textContent = 'Restaurante Président';\r\n    header.appendChild(siteTitle);\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav-buttons-div');\r\n    header.append(nav);\r\n\r\n    const homeButton = document.createElement('button');\r\n    homeButton.classList.add('nav-button', 'selected-nav-button');\r\n    homeButton.textContent = 'Home';\r\n    nav.appendChild(homeButton);\r\n\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-button');\r\n    menu.textContent = 'Menu';\r\n    nav.appendChild(menu);\r\n\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-button');\r\n    contact.textContent = 'Contato';\r\n    nav.appendChild(contact);\r\n};\r\n\r\n\r\nconst createHome = () => {\r\n    const home = document.createElement('section');\r\n    home.classList.add('home');\r\n    content.appendChild(home);\r\n\r\n    const homeBg = document.createElement('div');\r\n    homeBg.classList.add('home-bg');\r\n    home.appendChild(homeBg);\r\n\r\n    const textA = document.createElement('p');\r\n    textA.classList.add('text');\r\n    textA.textContent = 'O orgulho da profission';\r\n    homeBg.appendChild(textA);\r\n\r\n    const textB = document.createElement('p');\r\n    textB.classList.add('text');\r\n    textB.textContent = 'Muito tompero desde 2019';\r\n    homeBg.appendChild(textB);\r\n\r\n    const jacquinImg = document.createElement('img');\r\n    jacquinImg.classList.add('jacquin');\r\n    jacquinImg.src = '../dist/images/jacquin.png';\r\n    homeBg.appendChild(jacquinImg);\r\n\r\n    const textC = document.createElement('p');\r\n    textC.classList.add('text');\r\n    textC.textContent = 'Faça seu pedido online!';\r\n    homeBg.appendChild(textC);\r\n};\r\n\r\ncreateHeader();\r\ncreateHome();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;