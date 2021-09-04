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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R04sYUFBUSxTQUhGO0FBSU4sYUFBUSxTQUpGO0FBS04sYUFBUSxTQUxGO0FBTU4sYUFBUSxTQU5GO0FBT04sYUFBUSxTQVBGO0FBUU4sYUFBUSxTQVJGO0FBU04sYUFBUSxTQVRGO0FBVU4sYUFBUTtBQVZGLEtBREY7QUFhTkMsSUFBQUEsTUFBTSxFQUFFO0FBQ04sWUFBTyxTQUREO0FBRU4sYUFBUSxTQUZGO0FBR04sYUFBUSxTQUhGO0FBSU4sYUFBUSxTQUpGO0FBS04sYUFBUSxTQUxGO0FBTU4sYUFBUSxTQU5GO0FBT04sYUFBUSxTQVBGO0FBUU4sYUFBUSxTQVJGO0FBU04sYUFBUSxTQVRGO0FBVU4sYUFBUTtBQVZGO0FBYkYsR0FUVjtBQW1DRVgsRUFBQUEsTUFBTUEsNkNBQUFBO0FBbkNSLENBRDhCLEVBc0M5Qkksd0VBQXNCLENBQUM7QUFBRVEsRUFBQUEsV0FBVyxFQUFHO0FBQWhCLENBQUQsQ0F0Q1EsRUF1QzlCUCxtREF2QzhCLENBQXpCOzs7Ozs7Ozs7O0FDVlA7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL2FwcC9iYWNrZW5kQXBpLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvYXBwL3N0b3JlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9zdHlsZXMvRm9udHMudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvLi9zcmMvc3R5bGVzL1Jlc2V0LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy90aGVtZS9jb21wb25lbnRzL0J1dHRvbi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyLy4vc3JjL3N0eWxlcy90aGVtZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci8uL3NyYy9zdHlsZXMvdGhlbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3R5cGVzY3JpcHQtbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcblxuLy8gaW5pdGlhbGl6ZSBhbiBlbXB0eSBhcGkgc2VydmljZSB0aGF0IHdlJ2xsIGluamVjdCBlbmRwb2ludHMgaW50byBsYXRlciBhcyBuZWVkZWRcbmV4cG9ydCBjb25zdCBiYWNrZW5kQXBpID0gY3JlYXRlQXBpKHtcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6IGAvYXBpYCB9KSxcbiAgZW5kcG9pbnRzOiAoKSA9PiAoe30pLFxufSk7XG4iLCJpbXBvcnQgeyBBY3Rpb24sIGNvbmZpZ3VyZVN0b3JlLCBUaHVua0FjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgYmFja2VuZEFwaSB9IGZyb20gJ0AvYXBwL2JhY2tlbmRBcGknO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBbYmFja2VuZEFwaS5yZWR1Y2VyUGF0aF06IGJhY2tlbmRBcGkucmVkdWNlcixcbiAgfSxcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGJhY2tlbmRBcGkubWlkZGxld2FyZSksXG59KTtcblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5leHBvcnQgdHlwZSBBcHBUaHVuazxSZXR1cm5UeXBlID0gdm9pZD4gPSBUaHVua0FjdGlvbjxcbiAgUmV0dXJuVHlwZSxcbiAgUm9vdFN0YXRlLFxuICB1bmtub3duLFxuICBBY3Rpb248c3RyaW5nPlxuPjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQC9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IEZvbnRzIGZyb20gJ0Avc3R5bGVzL0ZvbnRzJztcbmltcG9ydCBSZXNldCBmcm9tICdAL3N0eWxlcy9SZXNldCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0AvYXBwL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxGb250cyAvPlxuICAgICAgICA8UmVzZXQgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IEZvbnRzID0gKCkgPT4gKFxuICA8R2xvYmFsXG4gICAgc3R5bGVzPXtjc3NgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3kgU2VtaWJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL2dpbHJveS9HaWxyb3ktU2VtaWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgICB9XG5cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0dpbHJveSBFeHRyYWJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL2dpbHJveS9HaWxyb3ktRXh0cmFib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgICAgfVxuXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBZGVsbGUgUmVndWxhcic7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvYWRlbGxlL0FkZWxsZVNhbnNCYXNpY19SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgIH1cblxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQWRlbGxlIEJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL2FkZWxsZS9BZGVsbGVTYW5zQmFzaWNfQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICB9XG4gICAgYH1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRzO1xuIiwiaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlc2V0ID0gKCkgPT4gKFxuICA8R2xvYmFsXG4gICAgc3R5bGVzPXtjc3NgXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsLFxuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4gICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogOTk5OXM7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDk5OTlzO1xuICAgICAgfVxuICAgIGB9XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXNldDtcbiIsImV4cG9ydCBjb25zdCBCdXR0b24gPSB7XG4gIGJhc2VTdHlsZToge1xuICAgIGZvbnRXZWlnaHQ6IGBib2xkYCxcbiAgICBsZXR0ZXJTcGFjaW5nOiBgMXB4YCxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgY29uZmlnOiBUaGVtZUNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogYGRhcmtgLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxufTtcbiIsIi8vIDEuIEltcG9ydCBgZXh0ZW5kVGhlbWVgXG5pbXBvcnQge1xuICBleHRlbmRUaGVtZSxcbiAgd2l0aERlZmF1bHRDb2xvclNjaGVtZSxcbiAgdGhlbWUgYXMgYmFzZVRoZW1lLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzL3RoZW1lL3N0eWxlcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL3N0eWxlcy90aGVtZS9jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoXG4gIHtcbiAgICAvLyBzdHlsZXMsXG4gICAgZm9udHM6IHtcbiAgICAgIGhlYWRpbmc6IGBHaWxyb3kgRXh0cmFib2xkYCxcbiAgICAgIC8vIGJvZHk6IGBBZGVsbGUgUmVndWxhcmAsXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBCdXR0b24sXG4gICAgfSxcbiAgICBjb2xvcnM6IHtcbiAgICAgIHB1cnBsZToge1xuICAgICAgICAnNTAnOiBgI0VGRTVGRmAsXG4gICAgICAgICcxMDAnOiBgI0QzQjhGRmAsXG4gICAgICAgICcyMDAnOiBgI0I2OEFGRmAsXG4gICAgICAgICczMDAnOiBgIzlBNUNGRmAsXG4gICAgICAgICc0MDAnOiBgIzdEMkVGRmAsXG4gICAgICAgICc1MDAnOiBgIzYxMDBGRmAsXG4gICAgICAgICc2MDAnOiBgIzREMDBDQ2AsXG4gICAgICAgICc3MDAnOiBgIzNBMDA5OWAsXG4gICAgICAgICc4MDAnOiBgIzI3MDA2NmAsXG4gICAgICAgICc5MDAnOiBgIzEzMDAzM2AsXG4gICAgICB9LFxuICAgICAgeWVsbG93OiB7XG4gICAgICAgICc1MCc6IGAjRkZGRUU1YCxcbiAgICAgICAgJzEwMCc6IGAjRkZGREI4YCxcbiAgICAgICAgJzIwMCc6IGAjRkZGQzhBYCxcbiAgICAgICAgJzMwMCc6IGAjRkZGQTVDYCxcbiAgICAgICAgJzQwMCc6IGAjRkZGOTJFYCxcbiAgICAgICAgJzUwMCc6IGAjRkZGODAwYCxcbiAgICAgICAgJzYwMCc6IGAjQ0NDNjAwYCxcbiAgICAgICAgJzcwMCc6IGAjOTk5NTAwYCxcbiAgICAgICAgJzgwMCc6IGAjNjY2MzAwYCxcbiAgICAgICAgJzkwMCc6IGAjMzMzMjAwYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb25maWcsXG4gIH0sXG4gIHdpdGhEZWZhdWx0Q29sb3JTY2hlbWUoeyBjb2xvclNjaGVtZTogYHJlZGAgfSksXG4gIGJhc2VUaGVtZSxcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNyZWF0ZUFwaSIsImZldGNoQmFzZVF1ZXJ5IiwiYmFja2VuZEFwaSIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwicmVkdWNlciIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwiUmVhY3QiLCJQcm92aWRlciIsIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJGb250cyIsIlJlc2V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJHbG9iYWwiLCJjc3MiLCJCdXR0b24iLCJiYXNlU3R5bGUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJleHRlbmRUaGVtZSIsIndpdGhEZWZhdWx0Q29sb3JTY2hlbWUiLCJiYXNlVGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJjb21wb25lbnRzIiwiY29sb3JzIiwicHVycGxlIiwieWVsbG93IiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9