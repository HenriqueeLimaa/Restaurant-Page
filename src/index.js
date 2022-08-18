const content = document.getElementById('content');

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);

    const siteTitle = document.createElement('h1');
    siteTitle.classList.add('restaurant-title');
    siteTitle.textContent = 'Restaurante Président';
    header.appendChild(siteTitle);

    const nav = document.createElement('nav');
    nav.classList.add('nav-buttons-div');
    header.append(nav);

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button', 'selected-nav-button');
    homeButton.textContent = 'Home';
    // homeButton.addEventListener('click', () => {
    //     createHomePage();
    // })
    nav.appendChild(homeButton);

    const menu = document.createElement('button');
    menu.classList.add('nav-button');
    menu.textContent = 'Menu';
    nav.appendChild(menu);

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.textContent = 'Contato';
    nav.appendChild(contact);
};

const createHomePage = () => {
    const home = document.createElement('section');
    home.classList.add('home');
    content.appendChild(home);

    const homeBg = document.createElement('div');
    homeBg.classList.add('body-bg');
    home.appendChild(homeBg);

    const textA = document.createElement('p');
    textA.classList.add('text');
    textA.textContent = 'O orgulho da profission';
    homeBg.appendChild(textA);

    const textB = document.createElement('p');
    textB.classList.add('text');
    textB.textContent = 'Muito tompero desde 2019';
    homeBg.appendChild(textB);

    const jacquinImg = document.createElement('img');
    jacquinImg.classList.add('jacquin');
    jacquinImg.src = '../dist/images/jacquin.png';
    homeBg.appendChild(jacquinImg);

    const textC = document.createElement('p');
    textC.classList.add('text');
    textC.textContent = 'Faça seu pedido online!';
    homeBg.appendChild(textC);
};

const createMenuPage = () => {
    const menu = document.createElement('section');
    content.appendChild(menu);

    const menuBg = document.createElement('div');
    menuBg.classList.add('menu-bg');
    menu.appendChild(menuBg);

    for(let i=0; i<=5; i++){
        const pizza1 = document.createElement('div');
        pizza1.classList.add('food-container');
        menuBg.appendChild(pizza1);

        const pizzaIcon = document.createElement('img');
        pizzaIcon.src = '../dist/images/pizza.png';
        pizzaIcon.classList.add('food-img');
        pizza1.appendChild(pizzaIcon);

        const pizzaTitle = document.createElement('p');
        pizzaTitle.classList.add('food-title');
        pizzaTitle.textContent = 'Pizza'
        pizza1.appendChild(pizzaTitle);

        const pizzaIngredients = document.createElement('p');
        pizzaIngredients.classList.add('food-ingredients');
        pizzaIngredients.textContent = 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basi';
        pizza1.appendChild(pizzaIngredients);
    }
}

const createContactPage = () => {
    const contactPage = document.createElement('section');
    contactPage.classList.add('contact-bg');
    content.appendChild(contactPage);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('text');
    phoneNumber.textContent = "Telefone: 4002-8922";
    contactPage.appendChild(phoneNumber);

    const adress = document.createElement('p');
    adress.classList.add('text');
    adress.textContent = 'Endereço: R. da Consolação, 3527 - Cerqueira César, São Paulo';
    contactPage.appendChild(adress);

    const restaurantMap = document.createElement('img');
    restaurantMap.src = '../dist/images/restaurant-map.png';
    restaurantMap.classList.add('restaurant-map');
    contactPage.appendChild(restaurantMap);
}


createHeader();
createContactPage();