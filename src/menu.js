const createMenuPage = () => {
    const menu = document.createElement('section');
    menu.classList.add('menu');
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

export default createMenuPage;