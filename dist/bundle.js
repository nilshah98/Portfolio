/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n // ===================================== All selectors go here ====================================\n\nvar body = document.body;\nvar html = document.documentElement;\nvar navElements = document.getElementsByClassName(\"nav__items--item\");\nvar greet = document.getElementsByClassName(\"about__greet\")[0];\nvar root = document.documentElement;\nvar toggle = document.querySelectorAll(\"input[type=checkbox]\")[0];\nvar resume = document.getElementsByClassName(\"resume\")[0];\nvar height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);\nvar currHeight = 0; // ===================================== All helper functions go here =============================\n\nvar activate = function activate(num) {\n  for (var i = 0; i < navElements.length; i++) {\n    navElements[i].classList.remove(\"active\");\n  }\n\n  navElements[num - 1].classList.add(\"active\");\n};\n\nvar mode = function mode(_mode) {\n  if (_mode == \"morning\") {\n    root.style.setProperty('--color-white', '#fff');\n    root.style.setProperty('--color-black', '#222');\n    toggle.checked = false;\n  } else {\n    root.style.setProperty('--color-white', '#222');\n    root.style.setProperty('--color-black', '#fff');\n    toggle.checked = true;\n  }\n}; // ===================================== All event listeners go here ==============================\n\n\nwindow.addEventListener(\"scroll\", function (e) {\n  currHeight = window.pageYOffset;\n\n  if (currHeight >= 0 && currHeight <= height / 8) {\n    // Section 1\n    activate(1);\n  } else if (currHeight > height / 8 * 1 && currHeight <= height / 8 * 3) {\n    // Section 2\n    activate(2);\n  } else if (currHeight > height / 8 * 3 && currHeight <= height / 8 * 5) {\n    // Section 3\n    activate(3);\n  } else {\n    // Sectio  4\n    activate(4);\n  }\n});\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  var today = new Date();\n  var hour = today.getHours();\n\n  if (hour >= 6 && hour < 12) {\n    greet.textContent = \"Hey, good morning, early riser 🌅\";\n    mode(\"morning\");\n  } else if (hour >= 12 && hour < 18) {\n    greet.textContent = \"Hola, good afternoon, visitor 🌞\";\n    mode(\"morning\");\n  } else if (hour >= 18) {\n    greet.textContent = \"Hello, good evening, traveller 🌙\";\n    mode(\"night\");\n  } else if (hour >= 0 && hour < 6) {\n    greet.textContent = \"Hey, good early morning, night owl 🦉\";\n    mode(\"night\");\n  }\n});\ndocument.addEventListener('visibilitychange', function (e) {\n  if (document.hidden) {\n    document.title = \"Notice me!\";\n  } else {\n    document.title = \"nilshah98 Portfolio\";\n  }\n});\ntoggle.addEventListener(\"change\", function (e) {\n  if (toggle.checked) {\n    mode(\"night\");\n  } else {\n    mode(\"morning\");\n  }\n});\nresume.addEventListener(\"click\", function (e) {\n  window.open('../src/assets/nilshah98-resume.pdf');\n}); // ============================================ Everything else ===================================\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });