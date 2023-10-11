// About Page (landing page)
const aboutPageContent = () => {

    let contentDiv = document.querySelector('.content');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');

    // background image
    mainDiv.style.backgroundImage = "url(dylan-mullins-ykFYIojIbVw-unsplash.jpg)";

    // resturant name
    const header = document.createElement('h1');
    header.textContent = 'HOT MAMA\'S PIZZA';
    mainDiv.appendChild(header);

    // description
    const description = document.createElement('p');
    description.textContent = '700 E Pine St Seattle, Washington 98122';
    mainDiv.appendChild(description);

    // order now button
    const orderBtn = document.createElement('button');
    orderBtn.textContent = "order now";
    mainDiv.appendChild(orderBtn);

    contentDiv.appendChild(mainDiv);
}

// TODO: Menu Page

// TODO: Conact Page

const navbar = () => {
    let contentDiv = document.querySelector('.content');

    // navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar');

    const unorderedList = document.createElement('ul');
    let l1 = document.createElement('li');
    l1.textContent = 'Home';
    let l2 = document.createElement('li');
    l2.textContent = 'Menu';
    let l3 = document.createElement('li');
    l3.textContent = 'Contact';
    unorderedList.appendChild(l1);
    unorderedList.appendChild(l2);
    unorderedList.appendChild(l3);
    navbarDiv.appendChild(unorderedList);

    contentDiv.appendChild(navbarDiv);
}

const footer = () => {

    let contentDiv = document.querySelector('.content');


    // footer
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');
    const footerContent = document.createElement('p');
    footerContent.textContent = 'Created by Joe Mama';
    footerDiv.appendChild(footerContent);

    contentDiv.appendChild(footerDiv);
}



export {aboutPageContent, footer, navbar};