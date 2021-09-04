"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/backendApi.ts":
/*!*******************************!*\
  !*** ./src/app/backendApi.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backendApi": () => (/* binding */ backendApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ "@reduxjs/toolkit/query/react");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
 // initialize an empty api service that we'll inject endpoints into later as needed

const backendApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: `/api`
  }),
  endpoints: () => ({})
});

/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_backendApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/backendApi */ "./src/app/backendApi.ts");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    [_app_backendApi__WEBPACK_IMPORTED_MODULE_1__.backendApi.reducerPath]: _app_backendApi__WEBPACK_IMPORTED_MODULE_1__.backendApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(_app_backendApi__WEBPACK_IMPORTED_MODULE_1__.backendApi.middleware)
});

/***/ }),

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ "./src/styles/theme/index.ts");
/* harmony import */ var _styles_Fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Fonts */ "./src/styles/Fonts.tsx");
/* harmony import */ var _styles_Reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Reset */ "./src/styles/Reset.tsx");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/store */ "./src/app/store.ts");

var _jsxFileName = "/home/kovsky/developpement/kovsky-web/next-blog/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _app_store__WEBPACK_IMPORTED_MODULE_7__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {
      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Fonts__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Reset__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
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
    fontWeight: `bold`,
    letterSpacing: `1px`
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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R04sYUFBUSxTQUhGO0FBSU4sYUFBUSxTQUpGO0FBS04sYUFBUSxTQUxGO0FBTU4sYUFBUSxTQU5GO0FBT04sYUFBUSxTQVBGO0FBUU4sYUFBUSxTQVJGO0FBU04sYUFBUSxTQVRGO0FBVU4sYUFBUTtBQVZGLEtBREY7QUFhTkMsSUFBQUEsTUFBTSxFQUFFO0FBQ04sWUFBTyxTQUREO0FBRU4sYUFBUSxTQUZGO0FBR04sYUFBUSxTQUhGO0FBSU4sYUFBUSxTQUpGO0FBS04sYUFBUSxTQUxGO0FBTU4sYUFBUSxTQU5GO0FBT04sYUFBUSxTQVBGO0FBUU4sYUFBUSxTQVJGO0FBU04sYUFBUSxTQVRGO0FBVU4sYUFBUTtBQVZGO0FBYkYsR0FUVjtBQW1DRVgsRUFBQUEsTUFBTUEsNkNBQUFBO0FBbkNSLENBRDhCLEVBc0M5Qkksd0VBQXNCLENBQUM7QUFBRVEsRUFBQUEsV0FBVyxFQUFHO0FBQWhCLENBQUQsQ0F0Q1EsRUF1QzlCUCxtREF2QzhCLENBQXpCOzs7Ozs7Ozs7O0FDVlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL2FwcC9iYWNrZW5kQXBpLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvYXBwL3N0b3JlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9zdHlsZXMvRm9udHMudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL1Jlc2V0LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy90aGVtZS9jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy90aGVtZS9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL3RoZW1lL2NvbmZpZy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy90aGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3RcIiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xuXG4vLyBpbml0aWFsaXplIGFuIGVtcHR5IGFwaSBzZXJ2aWNlIHRoYXQgd2UnbGwgaW5qZWN0IGVuZHBvaW50cyBpbnRvIGxhdGVyIGFzIG5lZWRlZFxuZXhwb3J0IGNvbnN0IGJhY2tlbmRBcGkgPSBjcmVhdGVBcGkoe1xuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogYC9hcGlgIH0pLFxuICBlbmRwb2ludHM6ICgpID0+ICh7fSksXG59KTtcbiIsImltcG9ydCB7IEFjdGlvbiwgY29uZmlndXJlU3RvcmUsIFRodW5rQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBiYWNrZW5kQXBpIH0gZnJvbSAnQC9hcHAvYmFja2VuZEFwaSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIFtiYWNrZW5kQXBpLnJlZHVjZXJQYXRoXTogYmFja2VuZEFwaS5yZWR1Y2VyLFxuICB9LFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYmFja2VuZEFwaS5taWRkbGV3YXJlKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcFRodW5rPFJldHVyblR5cGUgPSB2b2lkPiA9IFRodW5rQWN0aW9uPFxuICBSZXR1cm5UeXBlLFxuICBSb290U3RhdGUsXG4gIHVua25vd24sXG4gIEFjdGlvbjxzdHJpbmc+XG4+O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgRm9udHMgZnJvbSAnQC9zdHlsZXMvRm9udHMnO1xuaW1wb3J0IFJlc2V0IGZyb20gJ0Avc3R5bGVzL1Jlc2V0JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnQC9hcHAvc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEZvbnRzIC8+XG4gICAgICAgIDxSZXNldCAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgRm9udHMgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveSBTZW1pYm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvZ2lscm95L0dpbHJveS1TZW1pYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAgIH1cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95IEV4dHJhYm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvZ2lscm95L0dpbHJveS1FeHRyYWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0FkZWxsZSBSZWd1bGFyJztcbiAgICAgICAgc3JjOiB1cmwoJy9mb250cy9hZGVsbGUvQWRlbGxlU2Fuc0Jhc2ljX1JlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBZGVsbGUgQm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvYWRlbGxlL0FkZWxsZVNhbnNCYXNpY19Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgIH1cbiAgICBgfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9udHM7XG4iLCJpbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgUmVzZXQgPSAoKSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbiAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiA5OTk5cztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogOTk5OXM7XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2V0O1xuIiwiZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHtcbiAgYmFzZVN0eWxlOiB7XG4gICAgZm9udFdlaWdodDogYGJvbGRgLFxuICAgIGxldHRlclNwYWNpbmc6IGAxcHhgLFxuICB9LFxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vQnV0dG9uJztcbiIsImltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiBgZGFya2AsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59O1xuIiwiLy8gMS4gSW1wb3J0IGBleHRlbmRUaGVtZWBcbmltcG9ydCB7XG4gIGV4dGVuZFRoZW1lLFxuICB3aXRoRGVmYXVsdENvbG9yU2NoZW1lLFxuICB0aGVtZSBhcyBiYXNlVGhlbWUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZShcbiAge1xuICAgIC8vIHN0eWxlcyxcbiAgICBmb250czoge1xuICAgICAgaGVhZGluZzogYEdpbHJveSBFeHRyYWJvbGRgLFxuICAgICAgLy8gYm9keTogYEFkZWxsZSBSZWd1bGFyYCxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEJ1dHRvbixcbiAgICB9LFxuICAgIGNvbG9yczoge1xuICAgICAgcHVycGxlOiB7XG4gICAgICAgICc1MCc6IGAjRUZFNUZGYCxcbiAgICAgICAgJzEwMCc6IGAjRDNCOEZGYCxcbiAgICAgICAgJzIwMCc6IGAjQjY4QUZGYCxcbiAgICAgICAgJzMwMCc6IGAjOUE1Q0ZGYCxcbiAgICAgICAgJzQwMCc6IGAjN0QyRUZGYCxcbiAgICAgICAgJzUwMCc6IGAjNjEwMEZGYCxcbiAgICAgICAgJzYwMCc6IGAjNEQwMENDYCxcbiAgICAgICAgJzcwMCc6IGAjM0EwMDk5YCxcbiAgICAgICAgJzgwMCc6IGAjMjcwMDY2YCxcbiAgICAgICAgJzkwMCc6IGAjMTMwMDMzYCxcbiAgICAgIH0sXG4gICAgICB5ZWxsb3c6IHtcbiAgICAgICAgJzUwJzogYCNGRkZFRTVgLFxuICAgICAgICAnMTAwJzogYCNGRkZEQjhgLFxuICAgICAgICAnMjAwJzogYCNGRkZDOEFgLFxuICAgICAgICAnMzAwJzogYCNGRkZBNUNgLFxuICAgICAgICAnNDAwJzogYCNGRkY5MkVgLFxuICAgICAgICAnNTAwJzogYCNGRkY4MDBgLFxuICAgICAgICAnNjAwJzogYCNDQ0M2MDBgLFxuICAgICAgICAnNzAwJzogYCM5OTk1MDBgLFxuICAgICAgICAnODAwJzogYCM2NjYzMDBgLFxuICAgICAgICAnOTAwJzogYCMzMzMyMDBgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbmZpZyxcbiAgfSxcbiAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSh7IGNvbG9yU2NoZW1lOiBgcmVkYCB9KSxcbiAgYmFzZVRoZW1lLFxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJiYWNrZW5kQXBpIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiLCJSZWFjdCIsIlByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIkZvbnRzIiwiUmVzZXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkdsb2JhbCIsImNzcyIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsImV4dGVuZFRoZW1lIiwid2l0aERlZmF1bHRDb2xvclNjaGVtZSIsImJhc2VUaGVtZSIsImZvbnRzIiwiaGVhZGluZyIsImNvbXBvbmVudHMiLCJjb2xvcnMiLCJwdXJwbGUiLCJ5ZWxsb3ciLCJjb2xvclNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=