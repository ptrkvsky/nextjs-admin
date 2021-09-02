"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/theme */ "./src/styles/theme/index.ts");
/* harmony import */ var _styles_Fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Fonts */ "./src/styles/Fonts.tsx");
/* harmony import */ var _styles_Reset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Reset */ "./src/styles/Reset.tsx");


var _jsxFileName = "/home/kovsky/developpement/kovsky-web/next-blog/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Fonts__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Reset__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/Fonts.tsx":
/*!******************************!*\
  !*** ./src/styles/Fonts.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/kovsky/developpement/kovsky-web/next-blog/src/styles/Fonts.tsx";


const Fonts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
      @font-face {
        font-family: 'Gilroy Semibold';
        src: url('/fonts/gilroy/Gilroy-Semibold.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Gilroy Extrabold';
        src: url('/fonts/gilroy/Gilroy-Extrabold.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Adelle Regular';
        src: url('/fonts/adelle/AdelleSansBasic_Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Adelle Bold';
        src: url('/fonts/adelle/AdelleSansBasic_Bold.woff') format('woff');
      }
    `
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fonts);

/***/ }),

/***/ "./src/styles/Reset.tsx":
/*!******************************!*\
  !*** ./src/styles/Reset.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/kovsky/developpement/kovsky-web/next-blog/src/styles/Reset.tsx";


const Reset = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-transition-delay: 9999s;
        transition-delay: 9999s;
      }
    `
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reset);

/***/ }),

/***/ "./src/styles/theme/components/Button.ts":
/*!***********************************************!*\
  !*** ./src/styles/theme/components/Button.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
const Button = {
  baseStyle: {
    fontWeight: 'bold',
    letterSpacing: '1px'
  }
};

/***/ }),

/***/ "./src/styles/theme/components/index.ts":
/*!**********************************************!*\
  !*** ./src/styles/theme/components/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/styles/theme/components/Button.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Button__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Button__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/styles/theme/config.ts":
/*!************************************!*\
  !*** ./src/styles/theme/config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
  initialColorMode: `dark`,
  useSystemColorMode: false
};

/***/ }),

/***/ "./src/styles/theme/index.ts":
/*!***********************************!*\
  !*** ./src/styles/theme/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/theme/components */ "./src/styles/theme/components/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/styles/theme/config.ts");
// 1. Import `extendTheme`



const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  // styles,
  fonts: {
    heading: `Gilroy Extrabold` // body: `Adelle Regular`,

  },
  components: {
    Button: _styles_theme_components__WEBPACK_IMPORTED_MODULE_1__.Button
  },
  colors: {
    purple: {
      '50': `#EFE5FF`,
      '100': `#D3B8FF`,
      '200': `#B68AFF`,
      '300': `#9A5CFF`,
      '400': `#7D2EFF`,
      '500': `#6100FF`,
      '600': `#4D00CC`,
      '700': `#3A0099`,
      '800': `#270066`,
      '900': `#130033`
    },
    yellow: {
      '50': `#FFFEE5`,
      '100': `#FFFDB8`,
      '200': `#FFFC8A`,
      '300': `#FFFA5C`,
      '400': `#FFF92E`,
      '500': `#FFF800`,
      '600': `#CCC600`,
      '700': `#999500`,
      '800': `#666300`,
      '900': `#333200`
    }
  },
  config: _config__WEBPACK_IMPORTED_MODULE_2__.config
}, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.withDefaultColorScheme)({
  colorScheme: `red`
}), _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy9Gb250cy50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9zdHlsZXMvUmVzZXQudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9zdHlsZXMvdGhlbWUvY29uZmlnLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL3RoZW1lL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lJztcbmltcG9ydCBGb250cyBmcm9tICdAL3N0eWxlcy9Gb250cyc7XG5pbXBvcnQgUmVzZXQgZnJvbSAnQC9zdHlsZXMvUmVzZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Rm9udHMgLz5cbiAgICAgICAgPFJlc2V0IC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgRm9udHMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveSBTZW1pYm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvZ2lscm95L0dpbHJveS1TZW1pYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgIH1cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95IEV4dHJhYm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvZ2lscm95L0dpbHJveS1FeHRyYWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0FkZWxsZSBSZWd1bGFyJztcbiAgICAgICAgc3JjOiB1cmwoJy9mb250cy9hZGVsbGUvQWRlbGxlU2Fuc0Jhc2ljX1JlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBZGVsbGUgQm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvYWRlbGxlL0FkZWxsZVNhbnNCYXNpY19Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgIH1cbiAgICBgfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9udHM7XG4iLCJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgUmVzZXQgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbiAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiA5OTk5cztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogOTk5OXM7XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0O1xuIiwiZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHtcbiAgYmFzZVN0eWxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGxldHRlclNwYWNpbmc6ICcxcHgnLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQnV0dG9uJztcbiIsImltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiBgZGFya2AsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59O1xuIiwiLy8gMS4gSW1wb3J0IGBleHRlbmRUaGVtZWBcbmltcG9ydCB7XG4gIGV4dGVuZFRoZW1lLFxuICB3aXRoRGVmYXVsdENvbG9yU2NoZW1lLFxuICB0aGVtZSBhcyBiYXNlVGhlbWUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZShcbiAge1xuICAgIC8vIHN0eWxlcyxcbiAgICBmb250czoge1xuICAgICAgaGVhZGluZzogYEdpbHJveSBFeHRyYWJvbGRgLFxuICAgICAgLy8gYm9keTogYEFkZWxsZSBSZWd1bGFyYCxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEJ1dHRvbixcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgcHVycGxlOiB7XG4gICAgICAgICc1MCc6IGAjRUZFNUZGYCxcbiAgICAgICAgJzEwMCc6IGAjRDNCOEZGYCxcbiAgICAgICAgJzIwMCc6IGAjQjY4QUZGYCxcbiAgICAgICAgJzMwMCc6IGAjOUE1Q0ZGYCxcbiAgICAgICAgJzQwMCc6IGAjN0QyRUZGYCxcbiAgICAgICAgJzUwMCc6IGAjNjEwMEZGYCxcbiAgICAgICAgJzYwMCc6IGAjNEQwMENDYCxcbiAgICAgICAgJzcwMCc6IGAjM0EwMDk5YCxcbiAgICAgICAgJzgwMCc6IGAjMjcwMDY2YCxcbiAgICAgICAgJzkwMCc6IGAjMTMwMDMzYCxcbiAgICAgIH0sXG4gICAgICB5ZWxsb3c6IHtcbiAgICAgICAgJzUwJzogYCNGRkZFRTVgLFxuICAgICAgICAnMTAwJzogYCNGRkZEQjhgLFxuICAgICAgICAnMjAwJzogYCNGRkZDOEFgLFxuICAgICAgICAnMzAwJzogYCNGRkZBNUNgLFxuICAgICAgICAnNDAwJzogYCNGRkY5MkVgLFxuICAgICAgICAnNTAwJzogYCNGRkY4MDBgLFxuICAgICAgICAnNjAwJzogYCNDQ0M2MDBgLFxuICAgICAgICAnNzAwJzogYCM5OTk1MDBgLFxuICAgICAgICAnODAwJzogYCM2NjYzMDBgLFxuICAgICAgICAnOTAwJzogYCMzMzMyMDBgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbmZpZyxcbiAgfSxcbiAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7IGNvbG9yU2NoZW1lOiBgcmVkYCB9KSxcbiAgYmFzZVRoZW1lLFxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJGb250cyIsIlJlc2V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJHbG9iYWwiLCJjc3MiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJleHRlbmRUaGVtZSIsIndpdGhEZWZhdWx0Q29sb3JTY2hlbWUiLCJiYXNlVGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJjb21wb25lbnRzIiwiY29sb3JzIiwicHVycGxlIiwieWVsbG93IiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9