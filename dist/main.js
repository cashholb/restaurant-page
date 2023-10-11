/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPageContent: () => (/* binding */ aboutPageContent),
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   navbar: () => (/* binding */ navbar)
/* harmony export */ });
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



const menuBtns = ['about', 'menu', 'contact'];

// initialize the website on the landingContent page
(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.navbar)();
(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.aboutPageContent)();
(0,_content_js__WEBPACK_IMPORTED_MODULE_0__.footer)();
console.log('hello from index.js');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044RDs7O0FBRzlEOztBQUVBO0FBQ0EsbURBQU07QUFDTiw2REFBZ0I7QUFDaEIsbURBQU07QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYm91dCBQYWdlIChsYW5kaW5nIHBhZ2UpXG5jb25zdCBhYm91dFBhZ2VDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIC8vIGJhY2tncm91bmQgaW1hZ2VcbiAgICBtYWluRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKGR5bGFuLW11bGxpbnMteWtGWUlvakliVnctdW5zcGxhc2guanBnKVwiO1xuXG4gICAgLy8gcmVzdHVyYW50IG5hbWVcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdIT1QgTUFNQVxcJ1MgUElaWkEnO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnNzAwIEUgUGluZSBTdCBTZWF0dGxlLCBXYXNoaW5ndG9uIDk4MTIyJztcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIG9yZGVyIG5vdyBidXR0b25cbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gXCJvcmRlciBub3dcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG9yZGVyQnRuKTtcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG59XG5cbi8vIFRPRE86IE1lbnUgUGFnZVxuXG4vLyBUT0RPOiBDb25hY3QgUGFnZVxuXG5jb25zdCBuYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgLy8gbmF2YmFyXG4gICAgY29uc3QgbmF2YmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyRGl2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgY29uc3QgdW5vcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGV0IGwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBsZXQgbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGwyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGxldCBsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbDMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMSk7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMik7XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChsMyk7XG4gICAgbmF2YmFyRGl2LmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZiYXJEaXYpO1xufVxuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cblxuICAgIC8vIGZvb3RlclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBieSBKb2UgTWFtYSc7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xufVxuXG5cblxuZXhwb3J0IHthYm91dFBhZ2VDb250ZW50LCBmb290ZXIsIG5hdmJhcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2Fib3V0UGFnZUNvbnRlbnQsIGZvb3RlciwgbmF2YmFyfSBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5cbmNvbnN0IG1lbnVCdG5zID0gWydhYm91dCcsICdtZW51JywgJ2NvbnRhY3QnXTtcblxuLy8gaW5pdGlhbGl6ZSB0aGUgd2Vic2l0ZSBvbiB0aGUgbGFuZGluZ0NvbnRlbnQgcGFnZVxubmF2YmFyKCk7XG5hYm91dFBhZ2VDb250ZW50KCk7XG5mb290ZXIoKTtcbmNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIGluZGV4LmpzJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=