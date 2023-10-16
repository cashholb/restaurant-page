import background from './assets/images/background/dylan-mullins-ykFYIojIbVw-unsplash.jpg';
import './style.css';

import {homePageElem, menuPageElem, contactPageElem, footerElem, navbarElem} from './content.js';

let contentDiv = document.querySelector('.content');

// initialize the website on the landingContent page
contentDiv.appendChild(navbarElem);
const main = document.createElement('div');
main.classList.add('main');
main.style.backgroundImage = `url('${background}')`;
contentDiv.appendChild(main);
contentDiv.appendChild(footerElem);

// navbar on click functionality
const resetMainContent = (content) => {

    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = "";
    if(content == 'home') {
        mainContent.appendChild(homePageElem);
    }else if(content == 'menu') {
        mainContent.appendChild(menuPageElem);
    }else if(content == 'contact'){
        mainContent.appendChild(contactPageElem);
    }
}
const menuBtnElemArray = Array.from(document.querySelectorAll('.navbar li'));
menuBtnElemArray.forEach(elem => {
    elem.addEventListener('click', event => {
        console.log(elem.id);
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

// set home button as initial 'click'
resetMainContent('home');
menuBtnElemArray[0].classList.add('clickedNavBtn');