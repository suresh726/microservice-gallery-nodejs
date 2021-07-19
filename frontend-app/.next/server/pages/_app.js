/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst buildClient = ({\n  req\n}) => {\n  if (true) {\n    // we are on server\n    console.log('server');\n    console.log(req.url);\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: `${process.env.BACKEND_URL}:3001`,\n      headers: req.headers\n    });\n  } else {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hcHAvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiYXhpb3MiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkJBQ0tFTkRfVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWE7QUFDL0IsWUFBbUM7QUFFakM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxHQUFoQjtBQUNBLFdBQU9DLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWSxPQURsQjtBQUVsQkMsYUFBTyxFQUFFVCxHQUFHLENBQUNTO0FBRkssS0FBYixDQUFQO0FBSUQsR0FURCxNQVNPLEVBTU47QUFDRixDQWpCRDs7QUFtQkEsK0RBQWVWLFdBQWYiLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYnVpbGRDbGllbnQgPSAoeyByZXEgfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBcbiAgICAvLyB3ZSBhcmUgb24gc2VydmVyXG4gICAgY29uc29sZS5sb2coJ3NlcnZlcicpO1xuICAgIGNvbnNvbGUubG9nKHJlcS51cmwpO1xuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9OjMwMDFgLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyB3ZSBhcmUgb24gYnJvd3NlclxuICAgIGNvbnNvbGUubG9nKCdicm93c2VyJyk7XG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTH06MzAwMWAsXG4gICAgfSk7IFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ2xpZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\nvar _jsxFileName = \"/Users/riberasolutions/Desktop/Projects/microservice-nodejs/frontend-app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst AppComponent = ({\n  Component,\n  pageProps,\n  currentUser\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({\n      currentUser: currentUser\n    }, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 7\n  }, undefined);\n};\n\nAppComponent.getInitialProps = async appContext => {\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_3__.default)(appContext.ctx);\n  const {\n    data\n  } = await client.get('/api/users/currentuser');\n  console.log(data); // fetching page props\n\n  let pageProps = {};\n\n  if (appContext.Component.getInitialProps) {\n    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data);\n  }\n\n  return _objectSpread({\n    pageProps\n  }, data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hcHAvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0MsV0FBRDtBQUFZQyxXQUFaO0FBQXVCQztBQUF2QixDQUFELEtBQXlDO0FBQzVELHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQVcsaUJBQVcsRUFBRUE7QUFBeEIsT0FBeUNELFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLRCxDQU5EOztBQVFBRixZQUFZLENBQUNJLGVBQWIsR0FBK0IsTUFBTUMsVUFBTixJQUFvQjtBQUNqRCxRQUFNQyxNQUFNLEdBQUdDLDBEQUFXLENBQUNGLFVBQVUsQ0FBQ0csR0FBWixDQUExQjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1ILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLHdCQUFYLENBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBSGlELENBSWpEOztBQUNBLE1BQUlQLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxNQUFJRyxVQUFVLENBQUNKLFNBQVgsQ0FBcUJHLGVBQXpCLEVBQTBDO0FBQ3hDRixhQUFTLEdBQUcsTUFBTUcsVUFBVSxDQUFDSixTQUFYLENBQXFCRyxlQUFyQixDQUFxQ0MsVUFBVSxDQUFDRyxHQUFoRCxFQUFxREYsTUFBckQsRUFBNkRHLElBQTdELENBQWxCO0FBQ0Q7O0FBQ0Q7QUFDRVA7QUFERixLQUVLTyxJQUZMO0FBSUQsQ0FkRDs7QUFlQSwrREFBZVQsWUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnXG5pbXBvcnQgYnVpbGRDbGllbnQgZnJvbSAnLi4vYXBpL2J1aWxkLWNsaWVudCc7XG5cbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyfSkgPT4ge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPENvbXBvbmVudCBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBhcHBDb250ZXh0ID0+IHtcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vIGZldGNoaW5nIHBhZ2UgcHJvcHNcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICBcbiAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCwgY2xpZW50LCBkYXRhKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wcyxcbiAgICAuLi5kYXRhXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();