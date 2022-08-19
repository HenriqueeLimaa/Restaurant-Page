import jacquinIMG from './images/jacquin.png'

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
    jacquinImg.src = jacquinIMG;
    homeBg.appendChild(jacquinImg);

    const textC = document.createElement('p');
    textC.classList.add('text');
    textC.textContent = 'Faça seu pedido online!';
    homeBg.appendChild(textC);
};

export default createHomePage;