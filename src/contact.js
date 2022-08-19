import restaurantMapIMG from './images/restaurant-map.png';

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
    restaurantMap.src = restaurantMapIMG;
    restaurantMap.classList.add('restaurant-map');
    contactPage.appendChild(restaurantMap);
}

export default createContactPage;