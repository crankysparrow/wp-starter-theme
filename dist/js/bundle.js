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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-1 */ \"./src/js/menu-1.js\");\n/* harmony import */ var _menu_1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_1__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  console.log('bundle.js loaded');\n});\n\n//# sourceURL=webpack:///./src/js/bundle.js?");

/***/ }),

/***/ "./src/js/menu-1.js":
/*!**************************!*\
  !*** ./src/js/menu-1.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n(function ($) {\n  var breakpoints = {\n    xs: 375,\n    sm: 575,\n    md: 767,\n    lg: 1024,\n    xl: 1400\n  };\n\n  var Navigation = /*#__PURE__*/function () {\n    function Navigation(topNav) {\n      _classCallCheck(this, Navigation);\n\n      this.topNav = topNav;\n      this.topNavMenu = $('#topnav-menu');\n      this.menuItemLinks = $('#topnav-menu .menu-item a');\n      this.menuItemTopLevel = $('#topnav-menu > .menu-item > a');\n      this.toggleButton = $('.menu-toggle');\n      this.subMenuToggle = $('.sub-menu-toggle');\n      this.subMenuLinks = $('.sub-menu-item');\n      this.menuClosed = $(window).width() < breakpoints.lg;\n      this.mobile = $(window).width() < breakpoints.lg;\n      this.hasSubMenu = $('.menu-item.menu-item-has-children');\n      var self = this;\n\n      if (this.toggleButton.length > 0) {\n        $(this.toggleButton).click(function () {\n          self.toggleButtonClick(this);\n        });\n      }\n\n      if (this.mobile) {\n        this.mobileMenu();\n      } else {\n        this.desktopMenu();\n      }\n\n      if (this.hasSubMenu.length > 0) {\n        this.subMenuToggleInit();\n      }\n\n      if ($('#topnav-menu-right').length) {\n        $('#topnav-menu-right').attr('aria-label', 'Nav Menu Right');\n      }\n\n      if ($('#topnav-menu-left').length) {\n        $('#topnav-menu-left').attr('aria-label', 'Nav Menu Left');\n      }\n\n      this.monitorSize();\n    }\n\n    _createClass(Navigation, [{\n      key: \"mobileMenu\",\n      value: function mobileMenu() {\n        this.hasSubMenu.each(function () {\n          $(this).off('mouseover focusin mouseout focusout');\n        });\n        this.topNavMenu.attr('aria-hidden', 'true');\n        this.menuItemLinks.attr('tabIndex', -1);\n        this.topNav.removeClass('top-nav-open');\n\n        if (this.subMenuToggle.length > 0) {\n          this.subMenuToggle.attr('tabIndex', -1);\n        }\n\n        this.menuClosed = true;\n      }\n    }, {\n      key: \"monitorSize\",\n      value: function monitorSize() {\n        var self = this;\n        $(window).on('resize', function () {\n          if ($(window).width() < breakpoints.lg) {\n            if (!self.mobile) {\n              self.mobileMenu();\n              self.mobile = true;\n            }\n          } else {\n            if (self.mobile) {\n              self.mobile = false;\n              self.desktopMenu();\n            }\n          }\n        });\n      }\n    }, {\n      key: \"desktopMenu\",\n      value: function desktopMenu() {\n        this.topNavMenu.attr('aria-hidden', 'false');\n        this.menuItemTopLevel.attr('tabIndex', 0);\n\n        if (this.subMenuToggle.length > 0) {\n          this.subMenuToggle.attr('tabIndex', 0);\n          this.subMenuHoverInit();\n        }\n      }\n    }, {\n      key: \"toggleButtonClick\",\n      value: function toggleButtonClick(toggle) {\n        if (this.menuClosed) {\n          this.topNav.addClass('top-nav-open');\n          this.topNavMenu.attr('aria-hidden', false);\n          $(toggle).attr('aria-expanded', true);\n          this.menuItemTopLevel.attr('tabIndex', 0);\n          this.subMenuToggle.attr('tabIndex', 0);\n          this.menuClosed = false;\n        } else {\n          this.topNav.removeClass('top-nav-open');\n          this.topNavMenu.attr('aria-hidden', true);\n          $(toggle).attr('aria-expanded', false);\n          this.menuItemTopLevel.attr('tabIndex', -1);\n          this.subMenuToggle.attr('tabIndex', -1);\n          this.menuClosed = true;\n        }\n      }\n    }, {\n      key: \"subMenuHoverInit\",\n      value: function subMenuHoverInit() {\n        this.hasSubMenu.each(function () {\n          var trigger = this;\n          var subMenu = $(this).children('.sub-menu');\n          subMenu.attr('aria-hidden', true);\n          subMenu.attr('aria-label', 'Sub Menu');\n          subMenu.removeClass('sub-menu-open');\n          $(this).attr('aria-expanded', false);\n          var timer;\n          $(this).on('mouseover focusin', function () {\n            subMenu.addClass('sub-menu-open');\n            subMenu.attr('aria-hidden', false);\n            subMenu.find('a').attr('tabIndex', 0);\n            clearTimeout(timer);\n            $(this).attr('aria-expanded', true);\n          });\n          $(this).on('mouseout focusout', function () {\n            timer = setTimeout(function () {\n              $(trigger).attr('aria-expanded', false);\n              subMenu.removeClass('sub-menu-open');\n              subMenu.attr('aria-hidden', true);\n              subMenu.find('a').attr('tabIndex', -1);\n            }, 200);\n          });\n        });\n      }\n    }, {\n      key: \"subMenuToggleInit\",\n      value: function subMenuToggleInit() {\n        this.subMenuToggle.each(function () {\n          var subMenu = $(this).next('.sub-menu');\n          var listId = $(this).attr('aria-controls');\n          subMenu.attr('id', listId);\n          subMenu.attr('aria-hidden', true);\n          subMenu.attr('aria-label', 'Sub Menu');\n          $(this).attr('aria-expanded', false);\n          $(this).click(function () {\n            if ($(this).attr('aria-expanded') == 'false') {\n              subMenu.addClass('sub-menu-open');\n              subMenu.attr('aria-hidden', false);\n              $(this).attr('aria-expanded', true);\n              subMenu.find('a').attr('tabIndex', 0);\n            } else {\n              $(this).attr('aria-expanded', false);\n              subMenu.removeClass('sub-menu-open');\n              subMenu.attr('aria-hidden', true);\n              subMenu.find('a').attr('tabIndex', -1);\n            }\n          });\n        });\n      }\n    }]);\n\n    return Navigation;\n  }();\n\n  var navBar = new Navigation($('.top-nav'));\n  $(document).mouseup(function (e) {\n    var dropdown = $('.menu-item-has-children');\n\n    if (!dropdown.is(e.target) && dropdown.has(e.target).length == 0) {\n      $('.menu-item-has-children input[type=\"checkbox\"]').prop('checked', false);\n    }\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/js/menu-1.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/michelleenos/Local Sites/starter-theme/app/public/wp-content/themes/wp-starter-theme/src/js/bundle.js */\"./src/js/bundle.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/bundle.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });