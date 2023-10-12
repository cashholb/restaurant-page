import {homePageElem, menuPageElem, contactElem, footerElem, navbarElem} from './content.js';

let contentDiv = document.querySelector('.content');

// initialize the website on the landingContent page
contentDiv.appendChild(navbarElem());
const main = document.createElement('div');
main.classList.add('main');
main.style.backgroundImage = "url(dylan-mullins-ykFYIojIbVw-unsplash.jpg)";
contentDiv.appendChild(main);
contentDiv.appendChild(footerElem());

// navbar on click functionality
const resetMainContent = (content) => {

    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = "";
    console.log(content);
    if(content == 'home') {
        mainContent.appendChild(homePageElem());
    }else if(content == 'menu') {
        mainContent.appendChild(menuPageElem());
    }else if(content == 'contact'){
        mainContent.appendChild(contactElem());
    }
}

const menuBtnElemArray = Array.from(document.querySelectorAll('.navbar li'));
menuBtnElemArray.forEach(elem => {
    elem.addEventListener('click', event => {

        resetMainContent(elem.id);
        for(let i in menuBtnElemArray) {
            if(menuBtnElemArray[i].id == elem.id) {
                menuBtnElemArray[i].classList.add('clickedNavBtn');
            }else{
                menuBtnElemArray[i].classList.remove('clickedNavBtn');
            }
        }
    });
});

// set first button (likely home) as initial 'click'
resetMainContent('home');
menuBtnElemArray[0].classList.add('clickedNavBtn');
