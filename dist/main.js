/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuList: () => (/* binding */ menuList)
/* harmony export */ });


const menuItem = (title, image, description, cost) => {
    return {title, image, description, cost};
}

const menuList = [
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
    menuItem(
        'pepperoni pizza',
        'menu_images/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg',
        'wonderful pizza pie dotted with fresh pepperoni',
        8
    ),
];





/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerElem: () => (/* binding */ footerElem),
/* harmony export */   homePageElem: () => (/* binding */ homePageElem),
/* harmony export */   menuPageElem: () => (/* binding */ menuPageElem),
/* harmony export */   navbarElem: () => (/* binding */ navbarElem)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");


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

    _config_js__WEBPACK_IMPORTED_MODULE_0__.menuList.forEach(item => {
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/content.js");


let contentDiv = document.querySelector('.content');

// initialize the website on the landingContent page
contentDiv.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.navbarElem)());
contentDiv.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.homePageElem)());
contentDiv.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.footerElem)());

// navbar on click functionality
const resetMainContent = (content) => {

    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = "";
    console.log(content);
    if(content == 'home') {
        mainContent.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.homePageElem)());
    }else if(content == 'menu') {
        mainContent.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.menuPageElem)());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NxQjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLGdEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLFVBQVU7QUFDMUM7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7VUNwSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nRjs7QUFFaEY7O0FBRUE7QUFDQSx1QkFBdUIsdURBQVU7QUFDakMsdUJBQXVCLHlEQUFZO0FBQ25DLHVCQUF1Qix1REFBVTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5REFBWTtBQUM1QyxLQUFLO0FBQ0wsZ0NBQWdDLHlEQUFZO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBtZW51SXRlbSA9ICh0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBjb3N0KSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgaW1hZ2UsIGRlc2NyaXB0aW9uLCBjb3N0fTtcbn1cblxuY29uc3QgbWVudUxpc3QgPSBbXG4gICAgbWVudUl0ZW0oXG4gICAgICAgICdwZXBwZXJvbmkgcGl6emEnLFxuICAgICAgICAnbWVudV9pbWFnZXMvUGVwcGVyb25pLVBpenphLVJlY2lwZS1TaXAtQml0ZS1Hby5qcGcnLFxuICAgICAgICAnd29uZGVyZnVsIHBpenphIHBpZSBkb3R0ZWQgd2l0aCBmcmVzaCBwZXBwZXJvbmknLFxuICAgICAgICA4XG4gICAgKSxcbiAgICBtZW51SXRlbShcbiAgICAgICAgJ3BlcHBlcm9uaSBwaXp6YScsXG4gICAgICAgICdtZW51X2ltYWdlcy9QZXBwZXJvbmktUGl6emEtUmVjaXBlLVNpcC1CaXRlLUdvLmpwZycsXG4gICAgICAgICd3b25kZXJmdWwgcGl6emEgcGllIGRvdHRlZCB3aXRoIGZyZXNoIHBlcHBlcm9uaScsXG4gICAgICAgIDhcbiAgICApLFxuICAgIG1lbnVJdGVtKFxuICAgICAgICAncGVwcGVyb25pIHBpenphJyxcbiAgICAgICAgJ21lbnVfaW1hZ2VzL1BlcHBlcm9uaS1QaXp6YS1SZWNpcGUtU2lwLUJpdGUtR28uanBnJyxcbiAgICAgICAgJ3dvbmRlcmZ1bCBwaXp6YSBwaWUgZG90dGVkIHdpdGggZnJlc2ggcGVwcGVyb25pJyxcbiAgICAgICAgOFxuICAgICksXG4gICAgbWVudUl0ZW0oXG4gICAgICAgICdwZXBwZXJvbmkgcGl6emEnLFxuICAgICAgICAnbWVudV9pbWFnZXMvUGVwcGVyb25pLVBpenphLVJlY2lwZS1TaXAtQml0ZS1Hby5qcGcnLFxuICAgICAgICAnd29uZGVyZnVsIHBpenphIHBpZSBkb3R0ZWQgd2l0aCBmcmVzaCBwZXBwZXJvbmknLFxuICAgICAgICA4XG4gICAgKSxcbiAgICBtZW51SXRlbShcbiAgICAgICAgJ3BlcHBlcm9uaSBwaXp6YScsXG4gICAgICAgICdtZW51X2ltYWdlcy9QZXBwZXJvbmktUGl6emEtUmVjaXBlLVNpcC1CaXRlLUdvLmpwZycsXG4gICAgICAgICd3b25kZXJmdWwgcGl6emEgcGllIGRvdHRlZCB3aXRoIGZyZXNoIHBlcHBlcm9uaScsXG4gICAgICAgIDhcbiAgICApLFxuICAgIG1lbnVJdGVtKFxuICAgICAgICAncGVwcGVyb25pIHBpenphJyxcbiAgICAgICAgJ21lbnVfaW1hZ2VzL1BlcHBlcm9uaS1QaXp6YS1SZWNpcGUtU2lwLUJpdGUtR28uanBnJyxcbiAgICAgICAgJ3dvbmRlcmZ1bCBwaXp6YSBwaWUgZG90dGVkIHdpdGggZnJlc2ggcGVwcGVyb25pJyxcbiAgICAgICAgOFxuICAgICksXG5dO1xuXG5leHBvcnQge21lbnVMaXN0fTtcblxuIiwiaW1wb3J0IHsgbWVudUxpc3QgfSBmcm9tIFwiLi9jb25maWcuanNcIjtcblxuLy8gSG9tZSBQYWdlIChsYW5kaW5nIHBhZ2UpXG5jb25zdCBob21lUGFnZUVsZW0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIC8vIGJhY2tncm91bmQgaW1hZ2VcbiAgICBob21lUGFnZURpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChkeWxhbi1tdWxsaW5zLXlrRllJb2pJYlZ3LXVuc3BsYXNoLmpwZylcIjtcblxuICAgIC8vIHJlc3R1cmFudCBuYW1lXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnSE9UIE1BTUFcXCdTIFBJWlpBJztcbiAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICc3MDAgRSBQaW5lIFN0IFNlYXR0bGUsIFdhc2hpbmd0b24gOTgxMjInO1xuICAgIGhvbWVQYWdlRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIG9yZGVyIG5vdyBidXR0b25cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJvcmRlciBub3dcIjtcbiAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2VEaXY7XG59XG5cblxuLy8gVE9ETzogTWVudSBQYWdlXG5jb25zdCBtZW51UGFnZUVsZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudVBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVMaXN0Jyk7XG5cbiAgICBtZW51TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgIGltYWdlLmFsdCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb3N0LnRleHRDb250ZW50ID0gYFxcJCR7aXRlbS5jb3N0fWA7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGNvc3QpO1xuXG4gICAgICAgIG1lbnVQYWdlRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICB9KTtcblxuICAgIG1lbnVQYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlRGl2KTtcblxuICAgIHJldHVybiBtZW51UGFnZUNvbnRhaW5lcjtcbn1cblxuLy8gVE9ETzogQ29uYWN0IFBhZ2VcblxuY29uc3QgbmF2YmFyRWxlbSA9ICgpID0+IHtcblxuICAgIC8vIG5hdmJhclxuICAgIGNvbnN0IG5hdmJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhckRpdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGxldCBsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbDEuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgbDEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgXG4gICAgbGV0IGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBsMi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGxldCBsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbDMuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG4gICAgbDMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgXG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMSk7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMik7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMyk7XG4gICAgbmF2YmFyRGl2LmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgcmV0dXJuIG5hdmJhckRpdjtcbn1cblxuY29uc3QgZm9vdGVyRWxlbSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gdGV4dFxuICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIGJ5IENhc2h0b24gSG9sYmVydCc7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgLy8gZ2l0aHViIGxvZ29cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vY2FzaGhvbGIvcmVzdHVyYW50LXBhZ2UnO1xuICAgIGNvbnN0IGdpdGh1YkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0aHViSW1hZ2Uuc3JjID0gJy4vZ2l0aHViLW1hcmsucG5nJztcbiAgICBnaXRodWJJbWFnZS5hbHQgPSAnZ2l0aHViIGxvZ28gaW1hZ2UgdGhlIGxpbmtzIHRvIHRoZSBnaXRodWIgcmVwb3NpdG9yeSc7XG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWFnZSk7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3RlckRpdjtcbn1cblxuXG5leHBvcnQge2hvbWVQYWdlRWxlbSwgbWVudVBhZ2VFbGVtLCBmb290ZXJFbGVtLCBuYXZiYXJFbGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZVBhZ2VFbGVtLCBtZW51UGFnZUVsZW0sIGZvb3RlckVsZW0sIG5hdmJhckVsZW19IGZyb20gJy4vY29udGVudC5qcyc7XG5cbmxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuLy8gaW5pdGlhbGl6ZSB0aGUgd2Vic2l0ZSBvbiB0aGUgbGFuZGluZ0NvbnRlbnQgcGFnZVxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZiYXJFbGVtKCkpO1xuY29udGVudERpdi5hcHBlbmRDaGlsZChob21lUGFnZUVsZW0oKSk7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlckVsZW0oKSk7XG5cbi8vIG5hdmJhciBvbiBjbGljayBmdW5jdGlvbmFsaXR5XG5jb25zdCByZXNldE1haW5Db250ZW50ID0gKGNvbnRlbnQpID0+IHtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgIGlmKGNvbnRlbnQgPT0gJ2hvbWUnKSB7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlRWxlbSgpKTtcbiAgICB9ZWxzZSBpZihjb250ZW50ID09ICdtZW51Jykge1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZUVsZW0oKSk7XG4gICAgfWVsc2UgaWYoY29udGVudCA9PSAnY29udGFjdCcpe1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZUNvbnRlbnQoKSk7XG4gICAgfVxufVxuXG5jb25zdCBtZW51QnRuRWxlbUFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyIGxpJykpO1xubWVudUJ0bkVsZW1BcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cbiAgICAgICAgcmVzZXRNYWluQ29udGVudChlbGVtLmlkKTtcbiAgICAgICAgZm9yKGxldCBpIGluIG1lbnVCdG5FbGVtQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKG1lbnVCdG5FbGVtQXJyYXlbaV0uaWQgPT0gZWxlbS5pZCkge1xuICAgICAgICAgICAgICAgIG1lbnVCdG5FbGVtQXJyYXlbaV0uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZE5hdkJ0bicpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbWVudUJ0bkVsZW1BcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkTmF2QnRuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4vLyBzZXQgZmlyc3QgYnV0dG9uIChsaWtlbHkgaG9tZSkgYXMgaW5pdGlhbCAnY2xpY2snXG5tZW51QnRuRWxlbUFycmF5WzBdLmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWROYXZCdG4nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==