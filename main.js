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
/* harmony export */   contactPageList: () => (/* binding */ contactPageList),
/* harmony export */   menuList: () => (/* binding */ menuList)
/* harmony export */ });


const menuItem = (title, description) => {
    return {title, description};
}

const menuCategory = (title, image, items) => {
    return {title, image, items};
}

const menuList = [
    menuCategory(
        'timeless pies',
        'menu_images/amirali-mirhashemian-XtLPfib7OuM-unsplash.jpg',
        [
            menuItem(
                'Pepperoni',
                'hand tossed dough | mozzarella | pepperoni',
            ),
            menuItem(
                'Caprese',
                'olive oil | fresh basil | cherry tomatoes | mozzarella',
            ),
            menuItem(
                'Margherita',
                'San Marzano tomatoes | mozzarella | fresh basil',
            ),
            menuItem(
                'Capricciosa',
                'artichokes | mushrooms | olives | prosciutto | mozzarella',
            ),
        ],
    ),
    menuCategory(
        'new age pies',
        'menu_images/pexels-narda-yescas-1566837.jpg',
        [
            menuItem(
                'Mashed Potato',
                'mashed potato | white pie | mozzarella | bacon',
            ),
            menuItem(
                'Vegan',
                'red onion | mushroom | artichoke | argula | vegan cheese',
            ),
            menuItem(
                'Spicy Honey',
                'jalapenos | pepperoni | hot honey',
            ),
            menuItem(
                'BBQ Chicken',
                'BBQ chicken | pepperoni | pepperoncini | mozzarella',
            ),
        ],
    ),
];

const contactPageList = [
    {
        title: 'Hours',
        description: [
            'Sunday-Wednesday: 11am - 9pm',
            'Thursday-Saturday: 11am - 10pm',
        ],
    },
    {
        title: 'Address',
        description: [
            '700 E Pine St Seattle, Washington 98122',
        ],
    },
    {
        title: 'Contact',
        description: [
            'Phone: 123-456-7890',
            'Email: fauxmama@fakeemail.com',
        ],
    },
    {
        title: 'Credit',
        description: [
            'checkout the real resturant this is based on',
            {
                link: 'https://www.hot-mamaspizza.com/',
            },
            'checkout my github repository for credit and more',
        ],
    }
];





/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactElem: () => (/* binding */ contactElem),
/* harmony export */   footerElem: () => (/* binding */ footerElem),
/* harmony export */   homePageElem: () => (/* binding */ homePageElem),
/* harmony export */   menuPageElem: () => (/* binding */ menuPageElem),
/* harmony export */   navbarElem: () => (/* binding */ navbarElem)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/config.js");


// Home Page (landing page)
const homePageElem = () => {

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('home');

    // background image


    // resturant name
    const header = document.createElement('h1');
    header.textContent = 'FAUX MAMA\'S PIZZA';
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

    const menuPageDiv = document.createElement('div');
    menuPageDiv.classList.add('menu');

    // each category
    _config_js__WEBPACK_IMPORTED_MODULE_0__.menuList.forEach(category => {

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryTitleElem = document.createElement('h1');
        categoryTitleElem.textContent = category.title;

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
}

// Contact Page
const contactElem = () => {
    const contactPageDiv = document.createElement('div');
    contactPageDiv.classList.add('contact');

    // map (google api)
    const map = document.createElement('div');
    map.classList.add('map');
    map.textContent = 'map';
    contactPageDiv.appendChild(map);

    // contact
    _config_js__WEBPACK_IMPORTED_MODULE_0__.contactPageList.forEach(elem => {

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
}

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
const main = document.createElement('div');
main.classList.add('main');
main.style.backgroundImage = "url(dylan-mullins-ykFYIojIbVw-unsplash.jpg)";
contentDiv.appendChild(main);
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
        mainContent.appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_0__.contactElem)());
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IG1lbnVJdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9ufTtcbn1cblxuY29uc3QgbWVudUNhdGVnb3J5ID0gKHRpdGxlLCBpbWFnZSwgaXRlbXMpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBpbWFnZSwgaXRlbXN9O1xufVxuXG5jb25zdCBtZW51TGlzdCA9IFtcbiAgICBtZW51Q2F0ZWdvcnkoXG4gICAgICAgICd0aW1lbGVzcyBwaWVzJyxcbiAgICAgICAgJ21lbnVfaW1hZ2VzL2FtaXJhbGktbWlyaGFzaGVtaWFuLVh0TFBmaWI3T3VNLXVuc3BsYXNoLmpwZycsXG4gICAgICAgIFtcbiAgICAgICAgICAgIG1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICdQZXBwZXJvbmknLFxuICAgICAgICAgICAgICAgICdoYW5kIHRvc3NlZCBkb3VnaCB8IG1venphcmVsbGEgfCBwZXBwZXJvbmknLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1lbnVJdGVtKFxuICAgICAgICAgICAgICAgICdDYXByZXNlJyxcbiAgICAgICAgICAgICAgICAnb2xpdmUgb2lsIHwgZnJlc2ggYmFzaWwgfCBjaGVycnkgdG9tYXRvZXMgfCBtb3p6YXJlbGxhJyxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICAgICAnTWFyZ2hlcml0YScsXG4gICAgICAgICAgICAgICAgJ1NhbiBNYXJ6YW5vIHRvbWF0b2VzIHwgbW96emFyZWxsYSB8IGZyZXNoIGJhc2lsJyxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICAgICAnQ2FwcmljY2lvc2EnLFxuICAgICAgICAgICAgICAgICdhcnRpY2hva2VzIHwgbXVzaHJvb21zIHwgb2xpdmVzIHwgcHJvc2NpdXR0byB8IG1venphcmVsbGEnLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICApLFxuICAgIG1lbnVDYXRlZ29yeShcbiAgICAgICAgJ25ldyBhZ2UgcGllcycsXG4gICAgICAgICdtZW51X2ltYWdlcy9wZXhlbHMtbmFyZGEteWVzY2FzLTE1NjY4MzcuanBnJyxcbiAgICAgICAgW1xuICAgICAgICAgICAgbWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgJ01hc2hlZCBQb3RhdG8nLFxuICAgICAgICAgICAgICAgICdtYXNoZWQgcG90YXRvIHwgd2hpdGUgcGllIHwgbW96emFyZWxsYSB8IGJhY29uJyxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICAgICAnVmVnYW4nLFxuICAgICAgICAgICAgICAgICdyZWQgb25pb24gfCBtdXNocm9vbSB8IGFydGljaG9rZSB8IGFyZ3VsYSB8IHZlZ2FuIGNoZWVzZScsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgJ1NwaWN5IEhvbmV5JyxcbiAgICAgICAgICAgICAgICAnamFsYXBlbm9zIHwgcGVwcGVyb25pIHwgaG90IGhvbmV5JyxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtZW51SXRlbShcbiAgICAgICAgICAgICAgICAnQkJRIENoaWNrZW4nLFxuICAgICAgICAgICAgICAgICdCQlEgY2hpY2tlbiB8IHBlcHBlcm9uaSB8IHBlcHBlcm9uY2luaSB8IG1venphcmVsbGEnLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICApLFxuXTtcblxuY29uc3QgY29udGFjdFBhZ2VMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdIb3VycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgICAnU3VuZGF5LVdlZG5lc2RheTogMTFhbSAtIDlwbScsXG4gICAgICAgICAgICAnVGh1cnNkYXktU2F0dXJkYXk6IDExYW0gLSAxMHBtJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBZGRyZXNzJyxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICAgICc3MDAgRSBQaW5lIFN0IFNlYXR0bGUsIFdhc2hpbmd0b24gOTgxMjInLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgICAgJ1Bob25lOiAxMjMtNDU2LTc4OTAnLFxuICAgICAgICAgICAgJ0VtYWlsOiBmYXV4bWFtYUBmYWtlZW1haWwuY29tJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDcmVkaXQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgICAgJ2NoZWNrb3V0IHRoZSByZWFsIHJlc3R1cmFudCB0aGlzIGlzIGJhc2VkIG9uJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuaG90LW1hbWFzcGl6emEuY29tLycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NoZWNrb3V0IG15IGdpdGh1YiByZXBvc2l0b3J5IGZvciBjcmVkaXQgYW5kIG1vcmUnLFxuICAgICAgICBdLFxuICAgIH1cbl07XG5cbmV4cG9ydCB7bWVudUxpc3QsIGNvbnRhY3RQYWdlTGlzdH07XG5cbiIsImltcG9ydCB7IG1lbnVMaXN0LCBjb250YWN0UGFnZUxpc3QgfSBmcm9tIFwiLi9jb25maWcuanNcIjtcblxuLy8gSG9tZSBQYWdlIChsYW5kaW5nIHBhZ2UpXG5jb25zdCBob21lUGFnZUVsZW0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBob21lUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIC8vIGJhY2tncm91bmQgaW1hZ2VcblxuXG4gICAgLy8gcmVzdHVyYW50IG5hbWVcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdGQVVYIE1BTUFcXCdTIFBJWlpBJztcbiAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICc3MDAgRSBQaW5lIFN0IFNlYXR0bGUsIFdhc2hpbmd0b24gOTgxMjInO1xuICAgIGhvbWVQYWdlRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIG9yZGVyIG5vdyBidXR0b25cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJvcmRlciBub3dcIjtcbiAgICBob21lUGFnZURpdi5hcHBlbmRDaGlsZChvcmRlckJ0bik7XG5cbiAgICByZXR1cm4gaG9tZVBhZ2VEaXY7XG59XG5cblxuLy8gVE9ETzogTWVudSBQYWdlXG5jb25zdCBtZW51UGFnZUVsZW0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtZW51UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIC8vIGVhY2ggY2F0ZWdvcnlcbiAgICBtZW51TGlzdC5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGVnb3J5Jyk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlUaXRsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjYXRlZ29yeVRpdGxlRWxlbS50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlO1xuXG4gICAgICAgIGNhdGVnb3J5VGl0bGVFbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2NhdGVnb3J5LmltYWdlfVwiKWA7XG5cbiAgICAgICAgY2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZUVsZW0pO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIGl0ZW0gaW4gdGhhdCBjYXRlZ29yeVxuICAgICAgICBjb25zdCBpdGVtc0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXNMaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWxpc3QnKTtcbiAgICAgICAgY2F0ZWdvcnkuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBpdGVtc0xpc3REaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gICAgICAgIH0pO1xuICAgICAgICBjYXRlZ29yeURpdi5hcHBlbmRDaGlsZChpdGVtc0xpc3REaXYpO1xuXG4gICAgICAgIG1lbnVQYWdlRGl2LmFwcGVuZENoaWxkKGNhdGVnb3J5RGl2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51UGFnZURpdjtcbn1cblxuLy8gQ29udGFjdCBQYWdlXG5jb25zdCBjb250YWN0RWxlbSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIC8vIG1hcCAoZ29vZ2xlIGFwaSlcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwJyk7XG4gICAgbWFwLnRleHRDb250ZW50ID0gJ21hcCc7XG4gICAgY29udGFjdFBhZ2VEaXYuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIC8vIGNvbnRhY3RcbiAgICBjb250YWN0UGFnZUxpc3QuZm9yRWFjaChlbGVtID0+IHtcblxuICAgICAgICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWl0ZW0nKTtcblxuICAgICAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBlbGVtLnRpdGxlO1xuICAgICAgICBjb250YWN0VGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICAgICAgY29udGFjdEl0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgICAgICBlbGVtLmRlc2NyaXB0aW9uLmZvckVhY2goZGVzYyA9PiB7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBsaW5rXG4gICAgICAgICAgICBpZih0eXBlb2YgZGVzYyAhPT0gJ3N0cmluZycpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gZGVzYy5saW5rO1xuICAgICAgICAgICAgICAgIGEuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xuICAgICAgICAgICAgICAgIGEudGl0bGUgPSBkZXNjLmxpbms7XG4gICAgICAgICAgICAgICAgYS5ocmVmID0gZGVzYy5saW5rO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RJdGVtLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgaXQncyBwbGFpbiB0ZXh0XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0SXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdEl0ZW1EZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgICAgICAgICAgICAgICBjb250YWN0SXRlbS5hcHBlbmRDaGlsZChjb250YWN0SXRlbURlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFjdFBhZ2VEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RQYWdlRGl2O1xufVxuXG5jb25zdCBuYXZiYXJFbGVtID0gKCkgPT4ge1xuXG4gICAgLy8gbmF2YmFyXG4gICAgY29uc3QgbmF2YmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyRGl2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBsMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBcbiAgICBsZXQgbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGwyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuICAgIGwyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgbGV0IGwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgICBsMy50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGwxKTtcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGwyKTtcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGwzKTtcbiAgICBuYXZiYXJEaXYuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgICByZXR1cm4gbmF2YmFyRGl2O1xufVxuXG5jb25zdCBmb290ZXJFbGVtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyB0ZXh0XG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9ICdEZXZlbG9wZWQgYnkgQ2FzaHRvbiBIb2xiZXJ0JztcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cbiAgICAvLyBnaXRodWIgbG9nb1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9jYXNoaG9sYi9yZXN0dXJhbnQtcGFnZSc7XG4gICAgY29uc3QgZ2l0aHViSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnaXRodWJJbWFnZS5zcmMgPSAnLi9naXRodWItbWFyay5wbmcnO1xuICAgIGdpdGh1YkltYWdlLmFsdCA9ICdnaXRodWIgbG9nbyBpbWFnZSB0aGUgbGlua3MgdG8gdGhlIGdpdGh1YiByZXBvc2l0b3J5JztcbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1YkltYWdlKTtcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyRGl2O1xufVxuXG5cbmV4cG9ydCB7aG9tZVBhZ2VFbGVtLCBtZW51UGFnZUVsZW0sIGNvbnRhY3RFbGVtLCBmb290ZXJFbGVtLCBuYXZiYXJFbGVtfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aG9tZVBhZ2VFbGVtLCBtZW51UGFnZUVsZW0sIGNvbnRhY3RFbGVtLCBmb290ZXJFbGVtLCBuYXZiYXJFbGVtfSBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5sZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbi8vIGluaXRpYWxpemUgdGhlIHdlYnNpdGUgb24gdGhlIGxhbmRpbmdDb250ZW50IHBhZ2VcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2YmFyRWxlbSgpKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xubWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChkeWxhbi1tdWxsaW5zLXlrRllJb2pJYlZ3LXVuc3BsYXNoLmpwZylcIjtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbik7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlckVsZW0oKSk7XG5cbi8vIG5hdmJhciBvbiBjbGljayBmdW5jdGlvbmFsaXR5XG5jb25zdCByZXNldE1haW5Db250ZW50ID0gKGNvbnRlbnQpID0+IHtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICAgIGlmKGNvbnRlbnQgPT0gJ2hvbWUnKSB7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlRWxlbSgpKTtcbiAgICB9ZWxzZSBpZihjb250ZW50ID09ICdtZW51Jykge1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51UGFnZUVsZW0oKSk7XG4gICAgfWVsc2UgaWYoY29udGVudCA9PSAnY29udGFjdCcpe1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RWxlbSgpKTtcbiAgICB9XG59XG5cbmNvbnN0IG1lbnVCdG5FbGVtQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXIgbGknKSk7XG5tZW51QnRuRWxlbUFycmF5LmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblxuICAgICAgICByZXNldE1haW5Db250ZW50KGVsZW0uaWQpO1xuICAgICAgICBmb3IobGV0IGkgaW4gbWVudUJ0bkVsZW1BcnJheSkge1xuICAgICAgICAgICAgaWYobWVudUJ0bkVsZW1BcnJheVtpXS5pZCA9PSBlbGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgbWVudUJ0bkVsZW1BcnJheVtpXS5jbGFzc0xpc3QuYWRkKCdjbGlja2VkTmF2QnRuJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBtZW51QnRuRWxlbUFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NsaWNrZWROYXZCdG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbi8vIHNldCBmaXJzdCBidXR0b24gKGxpa2VseSBob21lKSBhcyBpbml0aWFsICdjbGljaydcbnJlc2V0TWFpbkNvbnRlbnQoJ2hvbWUnKTtcbm1lbnVCdG5FbGVtQXJyYXlbMF0uY2xhc3NMaXN0LmFkZCgnY2xpY2tlZE5hdkJ0bicpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9