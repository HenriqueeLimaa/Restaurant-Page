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


const createHome = () => {
    const home = document.createElement('section');
    home.classList.add('home');
    content.appendChild(home);

    const homeBg = document.createElement('div');
    homeBg.classList.add('home-bg');
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

createHeader();
createHome();