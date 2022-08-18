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

eval("const content = document.getElementById('content');\r\n\r\nconst createHeader = () => {\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    content.appendChild(header);\r\n\r\n    const siteTitle = document.createElement('h1');\r\n    siteTitle.classList.add('restaurant-title');\r\n    siteTitle.textContent = 'Restaurante Président';\r\n    header.appendChild(siteTitle);\r\n\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav-buttons-div');\r\n    header.append(nav);\r\n\r\n    const homeButton = document.createElement('button');\r\n    homeButton.classList.add('nav-button', 'selected-nav-button');\r\n    homeButton.textContent = 'Home';\r\n    // homeButton.addEventListener('click', () => {\r\n    //     createHomePage();\r\n    // })\r\n    nav.appendChild(homeButton);\r\n\r\n    const menu = document.createElement('button');\r\n    menu.classList.add('nav-button');\r\n    menu.textContent = 'Menu';\r\n    nav.appendChild(menu);\r\n\r\n    const contact = document.createElement('button');\r\n    contact.classList.add('nav-button');\r\n    contact.textContent = 'Contato';\r\n    nav.appendChild(contact);\r\n};\r\n\r\nconst createHomePage = () => {\r\n    const home = document.createElement('section');\r\n    home.classList.add('home');\r\n    content.appendChild(home);\r\n\r\n    const homeBg = document.createElement('div');\r\n    homeBg.classList.add('body-bg');\r\n    home.appendChild(homeBg);\r\n\r\n    const textA = document.createElement('p');\r\n    textA.classList.add('text');\r\n    textA.textContent = 'O orgulho da profission';\r\n    homeBg.appendChild(textA);\r\n\r\n    const textB = document.createElement('p');\r\n    textB.classList.add('text');\r\n    textB.textContent = 'Muito tompero desde 2019';\r\n    homeBg.appendChild(textB);\r\n\r\n    const jacquinImg = document.createElement('img');\r\n    jacquinImg.classList.add('jacquin');\r\n    jacquinImg.src = '../dist/images/jacquin.png';\r\n    homeBg.appendChild(jacquinImg);\r\n\r\n    const textC = document.createElement('p');\r\n    textC.classList.add('text');\r\n    textC.textContent = 'Faça seu pedido online!';\r\n    homeBg.appendChild(textC);\r\n};\r\n\r\nconst createMenuPage = () => {\r\n    const menu = document.createElement('section');\r\n    content.appendChild(menu);\r\n\r\n    const menuBg = document.createElement('div');\r\n    menuBg.classList.add('menu-bg');\r\n    menu.appendChild(menuBg);\r\n\r\n    for(let i=0; i<=5; i++){\r\n        const pizza1 = document.createElement('div');\r\n        pizza1.classList.add('food-container');\r\n        menuBg.appendChild(pizza1);\r\n\r\n        const pizzaIcon = document.createElement('img');\r\n        pizzaIcon.src = '../dist/images/pizza.png';\r\n        pizzaIcon.classList.add('food-img');\r\n        pizza1.appendChild(pizzaIcon);\r\n\r\n        const pizzaTitle = document.createElement('p');\r\n        pizzaTitle.classList.add('food-title');\r\n        pizzaTitle.textContent = 'Pizza'\r\n        pizza1.appendChild(pizzaTitle);\r\n\r\n        const pizzaIngredients = document.createElement('p');\r\n        pizzaIngredients.classList.add('food-ingredients');\r\n        pizzaIngredients.textContent = 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basi';\r\n        pizza1.appendChild(pizzaIngredients);\r\n    }\r\n}\r\n\r\nconst createContactPage = () => {\r\n    const contactPage = document.createElement('section');\r\n    contactPage.classList.add('contact-bg');\r\n    content.appendChild(contactPage);\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.classList.add('text');\r\n    phoneNumber.textContent = \"Telefone: 4002-8922\";\r\n    contactPage.appendChild(phoneNumber);\r\n\r\n    const adress = document.createElement('p');\r\n    adress.classList.add('text');\r\n    adress.textContent = 'Endereço: R. da Consolação, 3527 - Cerqueira César, São Paulo';\r\n    contactPage.appendChild(adress);\r\n\r\n    const restaurantMap = document.createElement('img');\r\n    restaurantMap.src = '../dist/images/restaurant-map.png';\r\n    restaurantMap.classList.add('restaurant-map');\r\n    contactPage.appendChild(restaurantMap);\r\n}\r\n\r\n\r\ncreateHeader();\r\ncreateContactPage();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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