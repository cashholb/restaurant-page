import { menuList, contactPageList, navbarList} from "./config.js";
import githubLogo from './assets/images/icons/github-mark.png'
import { homePageContent } from "./config.js";

// Home Page (landing page)
const homePageElem = (() => {

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('home');

    // resturant name
    const header = document.createElement('h1');
    header.textContent = homePageContent.header;
    homePageDiv.appendChild(header);

    // description
    const underHeaderText = document.createElement('p');
    underHeaderText.textContent = homePageContent.underHeader;
    homePageDiv.appendChild(underHeaderText);

    // order now button
    const orderBtn = document.createElement('button');
    orderBtn.textContent = "order now";
    homePageDiv.appendChild(orderBtn);

    return homePageDiv;
})();


// TODO: Menu Page
const menuPageElem = (() => {

    const menuPageDiv = document.createElement('div');
    menuPageDiv.classList.add('menu');

    // each category
    menuList.forEach(category => {

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitleElem = document.createElement('h1');
        categoryTitleElem.textContent = category.categoryTitle;

        categoryTitleElem.style.backgroundImage = `url("${category.image}")`;

        categoryDiv.appendChild(categoryTitleElem);

        // for each item in that category
        const itemsListDiv = document.createElement('div');
        itemsListDiv.classList.add('items-list');
        category.items.forEach(item => {

            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const itemTitle = document.createElement('h2');
            itemTitle.textContent = item.title;
            itemDiv.appendChild(itemTitle);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDiv.appendChild(itemDescription);

            itemsListDiv.appendChild(itemDiv);
        });
        categoryDiv.appendChild(itemsListDiv);

        menuPageDiv.appendChild(categoryDiv);
    });

    return menuPageDiv;
})();

// Contact Page
const contactPageElem = (() => {
    const contactPageDiv = document.createElement('div');
    contactPageDiv.classList.add('contact');

    // map (google api)
    const map = document.createElement('div');
    map.classList.add('map');
    map.textContent = 'map';
    contactPageDiv.appendChild(map);

    // contact
    contactPageList.forEach(elem => {

        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');

        const contactTitle = document.createElement('h1');
        contactTitle.textContent = elem.title;
        contactTitle.style.textDecoration = 'underline';
        contactItem.appendChild(contactTitle);

        elem.description.forEach(desc => {

            // check for link
            if(typeof desc !== 'string'){
                const a = document.createElement('a');
                let linkText = document.createElement('p');
                linkText.textContent = desc.link;
                a.appendChild(linkText);
                a.title = desc.link;
                a.href = desc.link;
                contactItem.appendChild(a);

            // otherwise it's plain text
            }else{
                const contactItemDesc = document.createElement('p');
                contactItemDesc.textContent = desc;
                contactItem.appendChild(contactItemDesc);
            }
        });
        contactPageDiv.appendChild(contactItem);
    });

    return contactPageDiv;
})();

const navbarElem = (() => {

    // navbar
    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar');

    const unorderedList = document.createElement('ul');

    navbarList.forEach(item => {
        const liElem = document.createElement('li');
        liElem.setAttribute('id', `${item.slice(0,1).toLowerCase()}${item.slice(1)}`);
        liElem.textContent = item;
        unorderedList.appendChild(liElem);
    });

    navbarDiv.appendChild(unorderedList);

    return navbarDiv;
})();

const footerElem = (() => {

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
    githubImage.src = githubLogo;
    githubImage.alt = 'github logo image the links to the github repository';
    githubLink.appendChild(githubImage);
    footerDiv.appendChild(githubLink);

    return footerDiv;
})();

export {homePageElem, menuPageElem, contactPageElem, footerElem, navbarElem};