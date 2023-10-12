import { menuList } from "./config.js";

// Home Page (landing page)
const homePageElem = () => {

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('main');

    // background image
    homePageDiv.style.backgroundImage = "url(dylan-mullins-ykFYIojIbVw-unsplash.jpg)";

    // resturant name
    const header = document.createElement('h1');
    header.textContent = 'HOT MAMA\'S PIZZA';
    homePageDiv.appendChild(header);

    // description
    const description = document.createElement('p');
    description.textContent = '700 E Pine St Seattle, Washington 98122';
    homePageDiv.appendChild(description);

    // order now button
    const orderBtn = document.createElement('button');
    orderBtn.textContent = "order now";
    homePageDiv.appendChild(orderBtn);

    return homePageDiv;
}


// TODO: Menu Page
const menuPageElem = () => {
    const menuPageContainer = document.createElement('div');
    menuPageContainer.classList.add('menu');

    const menuPageDiv = document.createElement('div');
    menuPageDiv.classList.add('menuList');

    menuList.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.description;
        menuItem.appendChild(image);

        const title = document.createElement('h1');
        title.textContent = item.title;
        menuItem.appendChild(title);

        const description = document.createElement('p');
        description.textContent = item.description;
        menuItem.appendChild(description);

        const cost = document.createElement('p');
        cost.textContent = `\$${item.cost}`;
        menuItem.appendChild(cost);

        menuPageDiv.appendChild(menuItem);
    });

    menuPageContainer.appendChild(menuPageDiv);

    return menuPageContainer;
}

// TODO: Conact Page

const navbarElem = () => {

    // navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar');

    const unorderedList = document.createElement('ul');
    let l1 = document.createElement('li');
    l1.setAttribute('id', 'home');
    l1.textContent = 'Home';
    
    let l2 = document.createElement('li');
    l2.setAttribute('id', 'menu');
    l2.textContent = 'Menu';

    let l3 = document.createElement('li');
    l3.setAttribute('id', 'contact');
    l3.textContent = 'Contact';
    
    unorderedList.appendChild(l1);
    unorderedList.appendChild(l2);
    unorderedList.appendChild(l3);
    navbarDiv.appendChild(unorderedList);

    return navbarDiv;
}

const footerElem = () => {

    const footerDiv = document.createElement('div');

    // text
    footerDiv.classList.add('footer');
    const footerContent = document.createElement('p');
    footerContent.textContent = 'Developed by Cashton Holbert';
    footerDiv.appendChild(footerContent);

    // github logo
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/cashholb/resturant-page';
    const githubImage = document.createElement('img');
    githubImage.src = './github-mark.png';
    githubImage.alt = 'github logo image the links to the github repository';
    githubLink.appendChild(githubImage);
    footerDiv.appendChild(githubLink);

    return footerDiv;
}


export {homePageElem, menuPageElem, footerElem, navbarElem};