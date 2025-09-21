/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack://irama-english/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack://irama-english/./node_modules/@babel/runtime/helpers/esm/createClass.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack://irama-english/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack://irama-english/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack://irama-english/./node_modules/@babel/runtime/helpers/esm/typeof.js?\n}");

/***/ }),

/***/ "./src/assets/js/irama-homepage.js":
/*!*****************************************!*\
  !*** ./src/assets/js/irama-homepage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n// iRAMA Homepage JavaScript\nvar IramaHomepage = /*#__PURE__*/function () {\n  function IramaHomepage() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, IramaHomepage);\n    this.currentLanguage = 'en';\n    this.init();\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(IramaHomepage, [{\n    key: \"init\",\n    value: function init() {\n      this.setupLanguageToggle();\n      this.setupScrollAnimations();\n      this.setupCounterAnimations();\n      this.setupHeroAnimations();\n      this.setupSmoothScrolling();\n    }\n  }, {\n    key: \"setupLanguageToggle\",\n    value: function setupLanguageToggle() {\n      var _this = this;\n      // Language switching functionality\n      var languageToggle = document.querySelector('[data-language-toggle]');\n      if (languageToggle) {\n        languageToggle.addEventListener('click', function () {\n          _this.toggleLanguage();\n        });\n      }\n\n      // Auto-detect language from store settings or browser\n      this.detectLanguage();\n      this.updateLanguageContent();\n    }\n  }, {\n    key: \"detectLanguage\",\n    value: function detectLanguage() {\n      // Check if Salla store has language setting\n      if (typeof salla !== 'undefined' && salla.config && salla.config.locale) {\n        this.currentLanguage = salla.config.locale.startsWith('ar') ? 'ar' : 'en';\n      } else {\n        // Fallback to browser language\n        var browserLang = navigator.language || navigator.userLanguage;\n        this.currentLanguage = browserLang.startsWith('ar') ? 'ar' : 'en';\n      }\n    }\n  }, {\n    key: \"toggleLanguage\",\n    value: function toggleLanguage() {\n      this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';\n      this.updateLanguageContent();\n\n      // Update body direction\n      document.body.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';\n      document.documentElement.lang = this.currentLanguage;\n    }\n  }, {\n    key: \"updateLanguageContent\",\n    value: function updateLanguageContent() {\n      var _this2 = this;\n      // Hide all language content\n      document.querySelectorAll('[data-lang]').forEach(function (element) {\n        element.classList.add('hidden');\n      });\n\n      // Show current language content\n      document.querySelectorAll(\"[data-lang=\\\"\".concat(this.currentLanguage, \"\\\"]\")).forEach(function (element) {\n        element.classList.remove('hidden');\n      });\n\n      // Update elements with data attributes\n      document.querySelectorAll('[data-en][data-ar]').forEach(function (element) {\n        var text = element.getAttribute(\"data-\".concat(_this2.currentLanguage));\n        if (text) {\n          element.textContent = text;\n        }\n      });\n    }\n  }, {\n    key: \"setupScrollAnimations\",\n    value: function setupScrollAnimations() {\n      // Intersection Observer for scroll animations\n      var observerOptions = {\n        threshold: 0.1,\n        rootMargin: '0px 0px -50px 0px'\n      };\n      var observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('animate-in');\n          }\n        });\n      }, observerOptions);\n\n      // Observe all sections\n      document.querySelectorAll('section').forEach(function (section) {\n        section.classList.add('animate-on-scroll');\n        observer.observe(section);\n      });\n\n      // Observe individual items\n      document.querySelectorAll('.benefit-item, .product-card, .stat-item').forEach(function (item) {\n        item.classList.add('animate-on-scroll');\n        observer.observe(item);\n      });\n    }\n  }, {\n    key: \"setupCounterAnimations\",\n    value: function setupCounterAnimations() {\n      var _this3 = this;\n      var counters = document.querySelectorAll('[data-count]');\n      var observerOptions = {\n        threshold: 0.5\n      };\n      var counterObserver = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.isIntersecting) {\n            _this3.animateCounter(entry.target);\n            counterObserver.unobserve(entry.target);\n          }\n        });\n      }, observerOptions);\n      counters.forEach(function (counter) {\n        counterObserver.observe(counter);\n      });\n    }\n  }, {\n    key: \"animateCounter\",\n    value: function animateCounter(element) {\n      var target = parseInt(element.getAttribute('data-count'));\n      var duration = 2000; // 2 seconds\n      var start = performance.now();\n      var startValue = 0;\n      var _animate = function animate(currentTime) {\n        var elapsed = currentTime - start;\n        var progress = Math.min(elapsed / duration, 1);\n\n        // Easing function for smooth animation\n        var easeOutQuart = 1 - Math.pow(1 - progress, 4);\n        var current = Math.floor(startValue + (target - startValue) * easeOutQuart);\n        element.textContent = current.toLocaleString();\n        if (progress < 1) {\n          requestAnimationFrame(_animate);\n        } else {\n          element.textContent = target.toLocaleString();\n        }\n      };\n      requestAnimationFrame(_animate);\n    }\n  }, {\n    key: \"setupHeroAnimations\",\n    value: function setupHeroAnimations() {\n      // Hero background animation\n      var heroSection = document.querySelector('.irama-hero');\n      if (heroSection) {\n        var heroBackground = heroSection.querySelector('.hero-bg-animation');\n        if (heroBackground) {\n          // Create animated background\n          this.createHeroBackground(heroBackground);\n        }\n      }\n\n      // Parallax effect for hero content\n      window.addEventListener('scroll', function () {\n        var scrolled = window.pageYOffset;\n        var heroContent = document.querySelector('.irama-hero .relative');\n        if (heroContent) {\n          var rate = scrolled * -0.5;\n          heroContent.style.transform = \"translateY(\".concat(rate, \"px)\");\n        }\n      });\n    }\n  }, {\n    key: \"createHeroBackground\",\n    value: function createHeroBackground(container) {\n      // Create animated hydroponic farm visualization\n      container.innerHTML = \"\\n            <div class=\\\"hero-animation-container\\\">\\n                <div class=\\\"floating-plants\\\">\\n                    <div class=\\\"plant plant-1\\\">\\uD83C\\uDF31</div>\\n                    <div class=\\\"plant plant-2\\\">\\uD83C\\uDF3F</div>\\n                    <div class=\\\"plant plant-3\\\">\\uD83C\\uDF43</div>\\n                    <div class=\\\"plant plant-4\\\">\\uD83C\\uDF31</div>\\n                    <div class=\\\"plant plant-5\\\">\\uD83C\\uDF3F</div>\\n                </div>\\n                <div class=\\\"water-drops\\\">\\n                    <div class=\\\"drop drop-1\\\">\\uD83D\\uDCA7</div>\\n                    <div class=\\\"drop drop-2\\\">\\uD83D\\uDCA7</div>\\n                    <div class=\\\"drop drop-3\\\">\\uD83D\\uDCA7</div>\\n                </div>\\n            </div>\\n        \";\n\n      // Add CSS animations\n      var style = document.createElement('style');\n      style.textContent = \"\\n            .hero-animation-container {\\n                position: absolute;\\n                top: 0;\\n                left: 0;\\n                width: 100%;\\n                height: 100%;\\n                overflow: hidden;\\n            }\\n            \\n            .floating-plants .plant {\\n                position: absolute;\\n                font-size: 2rem;\\n                opacity: 0.3;\\n                animation: float 6s ease-in-out infinite;\\n            }\\n            \\n            .plant-1 { top: 20%; left: 10%; animation-delay: 0s; }\\n            .plant-2 { top: 60%; left: 80%; animation-delay: 1s; }\\n            .plant-3 { top: 40%; left: 15%; animation-delay: 2s; }\\n            .plant-4 { top: 70%; left: 70%; animation-delay: 3s; }\\n            .plant-5 { top: 30%; left: 85%; animation-delay: 4s; }\\n            \\n            .water-drops .drop {\\n                position: absolute;\\n                font-size: 1.5rem;\\n                opacity: 0.4;\\n                animation: dropFall 4s linear infinite;\\n            }\\n            \\n            .drop-1 { left: 25%; animation-delay: 0s; }\\n            .drop-2 { left: 50%; animation-delay: 1.5s; }\\n            .drop-3 { left: 75%; animation-delay: 3s; }\\n            \\n            @keyframes float {\\n                0%, 100% { transform: translateY(0px); }\\n                50% { transform: translateY(-20px); }\\n            }\\n            \\n            @keyframes dropFall {\\n                0% { top: -10%; opacity: 0; }\\n                10% { opacity: 0.4; }\\n                90% { opacity: 0.4; }\\n                100% { top: 110%; opacity: 0; }\\n            }\\n        \";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"setupSmoothScrolling\",\n    value: function setupSmoothScrolling() {\n      // Smooth scrolling for internal links\n      document.querySelectorAll('a[href^=\"#\"]').forEach(function (anchor) {\n        anchor.addEventListener('click', function (e) {\n          e.preventDefault();\n          var target = document.querySelector(this.getAttribute('href'));\n          if (target) {\n            target.scrollIntoView({\n              behavior: 'smooth',\n              block: 'start'\n            });\n          }\n        });\n      });\n    }\n  }]);\n}(); // Additional CSS animations\nvar additionalStyles = \"\\n    <style>\\n        .animate-on-scroll {\\n            opacity: 0;\\n            transform: translateY(50px);\\n            transition: all 0.8s ease-out;\\n        }\\n        \\n        .animate-on-scroll.animate-in {\\n            opacity: 1;\\n            transform: translateY(0);\\n        }\\n        \\n        .hero-slogan {\\n            animation: heroTextFade 2s ease-out;\\n        }\\n        \\n        .hero-subheading {\\n            animation: heroTextFade 2s ease-out 0.5s both;\\n        }\\n        \\n        .hero-cta {\\n            animation: heroTextFade 2s ease-out 1s both;\\n        }\\n        \\n        @keyframes heroTextFade {\\n            from {\\n                opacity: 0;\\n                transform: translateY(30px);\\n            }\\n            to {\\n                opacity: 1;\\n                transform: translateY(0);\\n            }\\n        }\\n        \\n        .benefit-item:hover .icon-wrapper {\\n            transform: scale(1.1);\\n            transition: transform 0.3s ease;\\n        }\\n        \\n        .product-card:hover {\\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\\n        }\\n        \\n        .partner-logo:hover {\\n            transform: scale(1.05);\\n        }\\n        \\n        /* RTL Specific Styles */\\n        [dir=\\\"rtl\\\"] .hero-cta {\\n            flex-direction: row-reverse;\\n        }\\n        \\n        [dir=\\\"rtl\\\"] .about-content {\\n            text-align: right;\\n        }\\n        \\n        [dir=\\\"rtl\\\"] .benefits-grid {\\n            direction: rtl;\\n        }\\n        \\n        /* Responsive adjustments */\\n        @media (max-width: 768px) {\\n            .hero-slogan {\\n                font-size: 2.5rem !important;\\n            }\\n            \\n            .hero-subheading {\\n                font-size: 1.25rem !important;\\n            }\\n            \\n            .benefits-grid {\\n                grid-template-columns: repeat(2, 1fr) !important;\\n            }\\n            \\n            .products-grid {\\n                grid-template-columns: 1fr !important;\\n            }\\n        }\\n    </style>\\n\";\n\n// Inject additional styles\ndocument.head.insertAdjacentHTML('beforeend', additionalStyles);\n\n// Initialize when DOM is ready\nif (document.readyState === 'loading') {\n  document.addEventListener('DOMContentLoaded', function () {\n    new IramaHomepage();\n  });\n} else {\n  new IramaHomepage();\n}\n\n//# sourceURL=webpack://irama-english/./src/assets/js/irama-homepage.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/irama-homepage.js");
/******/ 	
/******/ })()
;