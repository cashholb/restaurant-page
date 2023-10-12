import {homePageElem, menuPageElem, footerElem, navbarElem} from './content.js';

let contentDiv = document.querySelector('.content');

// initialize the website on the landingContent page
contentDiv.appendChild(navbarElem());
contentDiv.appendChild(homePageElem());
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
        mainContent.appendChild(contactPageContent());
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
menuBtnElemArray[0].classList.add('clickedNavBtn');
