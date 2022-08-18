import createContactPage from "./contact";
import createHomePage from "./home";
import createMenuPage from "./menu";

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
    homeButton.classList.add('nav-button', 'selected-nav-button'); //
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        content.textContent = "";
        createHeader()/
        createHomePage();
    })
    nav.appendChild(homeButton);

    const menu = document.createElement('button');
    menu.classList.add('nav-button');
    menu.textContent = 'Menu';
    menu.addEventListener('click', () => {
        homeButton.classList.remove('selected-nav-button');
        contact.classList.remove('selected-nav-button');
        menu.classList.add('selected-nav-button');
        content.textContent = "";
        createHeader();
        createMenuPage();
    })
    nav.appendChild(menu);

    const contact = document.createElement('button');
    contact.classList.add('nav-button');
    contact.textContent = 'Contato';
    contact.addEventListener('click', () => {
        content.textContent = "";
        createHeader();
        createContactPage();
    })
    nav.appendChild(contact);
};


createHeader();
createHomePage();
