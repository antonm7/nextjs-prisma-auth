(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./functions/auth.js":
/*!***************************!*\
  !*** ./functions/auth.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshToken": function() { return /* binding */ refreshToken; },
/* harmony export */   "createAccessToken": function() { return /* binding */ createAccessToken; },
/* harmony export */   "createRefreshToken": function() { return /* binding */ createRefreshToken; },
/* harmony export */   "sendRefreshToken": function() { return /* binding */ sendRefreshToken; }
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store/index.js");



const refreshToken = () => {
  return fetch('/api/refresh_token', {
    method: "POST",
    credentials: "include"
  }).then(res => res.json()).then(data => {
    return data;
  });
};
const createAccessToken = user => {
  return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)({
    userId: user.id
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m'
  });
};
const createRefreshToken = user => {
  return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)({
    userId: user.id
  }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  });
};
const sendRefreshToken = (res, token) => {
  res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize('refreshToken', token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  }));
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/auth */ "./functions/auth.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.js");

var _jsxFileName = "D:\\Code\\Prisma\\test\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  const store = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useStore)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    //initial funciton
    (0,_functions_auth__WEBPACK_IMPORTED_MODULE_3__.refreshToken)().then(data => {
      if (data.ok) {
        store.setAccessToken(data.accessToken);
        store.setUser(data.user);
      }

      setLoading(false);
    }); //starts silent refreshes

    setInterval(() => {
      (0,_functions_auth__WEBPACK_IMPORTED_MODULE_3__.refreshToken)().then(data => {
        if (data.ok) {
          store.setAccessToken(data.accessToken);
          store.setUser(data.user);
        }
      });
    }, 600000);
  }, []);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 22
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ "zustand");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const useStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()(set => ({
  accessToken: null,
  user: {},
  setAccessToken: input => set(state => ({
    accessToken: input
  })),
  removeAccessToken: () => set({
    accessToken: null
  }),
  setUser: input => set(state => ({
    user: input
  })),
  removeUser: () => set({
    user: null
  })
}));

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("zustand");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ByaXNtbmV4dC8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0L2V4dGVybmFsIFwienVzdGFuZFwiIl0sIm5hbWVzIjpbInJlZnJlc2hUb2tlbiIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInVzZXIiLCJzaWduIiwidXNlcklkIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOX1NFQ1JFVCIsImV4cGlyZXNJbiIsImNyZWF0ZVJlZnJlc2hUb2tlbiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIiwic2VuZFJlZnJlc2hUb2tlbiIsInRva2VuIiwic2V0SGVhZGVyIiwiY29va2llIiwiaHR0cE9ubHkiLCJtYXhBZ2UiLCJwYXRoIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9rIiwic2V0QWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZSIsInNldCIsImlucHV0Iiwic3RhdGUiLCJyZW1vdmVBY2Nlc3NUb2tlbiIsInJlbW92ZVVzZXIiXSwibWFw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VSw4Q0FBTSxDQUFDQyxHQUFHLEtBQUs7QUFDbkNKLGFBQVcsRUFBRSxJQURzQjtBQUVuQzVCLE1BQUksRUFBQyxFQUY4QjtBQUduQzJCLGdCQUFjLEVBQUdNLEtBQUQsSUFBV0QsR0FBRyxDQUFFRSxLQUFELEtBQVk7QUFBRU4sZUFBVyxFQUFFSztBQUFmLEdBQVosQ0FBRCxDQUhLO0FBSW5DRSxtQkFBaUIsRUFBRSxNQUFNSCxHQUFHLENBQUM7QUFBRUosZUFBVyxFQUFFO0FBQWYsR0FBRCxDQUpPO0FBS25DQyxTQUFPLEVBQUdJLEtBQUQsSUFBV0QsR0FBRyxDQUFFRSxLQUFELEtBQVk7QUFBRWxDLFFBQUksRUFBQ2lDO0FBQVAsR0FBWixDQUFELENBTFk7QUFNbkNHLFlBQVUsRUFBRSxNQUFNSixHQUFHLENBQUM7QUFBQ2hDLFFBQUksRUFBQztBQUFOLEdBQUQ7QUFOYyxDQUFMLENBQUosQ0FBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2lnbn0gZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvcmVmcmVzaF90b2tlbicsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIlxyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge3JldHVybiBkYXRhfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBzaWduKHsgdXNlcklkOiB1c2VyLmlkIH0sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHtcclxuICAgICAgZXhwaXJlc0luOiAnMTVtJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHVzZXIpID0+IHtcclxuICAgIHJldHVybiBzaWduKFxyXG4gICAgICAgIHsgdXNlcklkOiB1c2VyLmlkIH0scHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQse1xyXG4gICAgICAgICAgICBleHBpcmVzSW46IFwiN2RcIlxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFJlZnJlc2hUb2tlbiA9IChyZXMsdG9rZW4pID0+IHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ1NldC1Db29raWUnLGNvb2tpZS5zZXJpYWxpemUoJ3JlZnJlc2hUb2tlbicsdG9rZW4sIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsXHJcbiAgICAgICAgcGF0aDogJy8nXHJcbiAgICB9KSlcclxufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZWZyZXNoVG9rZW59IGZyb20gJy4uL2Z1bmN0aW9ucy9hdXRoJ1xuaW1wb3J0IHt1c2VTdG9yZX0gZnJvbSAnLi4vc3RvcmUnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9pbml0aWFsIGZ1bmNpdG9uXG4gICAgcmVmcmVzaFRva2VuKCkudGhlbihkYXRhID0+IHtcbiAgICAgIGlmKGRhdGEub2spIHtcbiAgICAgICAgc3RvcmUuc2V0QWNjZXNzVG9rZW4oZGF0YS5hY2Nlc3NUb2tlbilcbiAgICAgICAgc3RvcmUuc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgICB9XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG5cbiAgICAvL3N0YXJ0cyBzaWxlbnQgcmVmcmVzaGVzXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcmVmcmVzaFRva2VuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYoZGF0YS5vaykge1xuICAgICAgICAgIHN0b3JlLnNldEFjY2Vzc1Rva2VuKGRhdGEuYWNjZXNzVG9rZW4pXG4gICAgICAgICAgc3RvcmUuc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSw2MDAwMDApXG4gIH0sW10pXG5cbiAgaWYobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi48L2Rpdj5cblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICBcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gJ3p1c3RhbmQnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoc2V0ID0+ICh7XHJcbiAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgIHVzZXI6e30sXHJcbiAgICBzZXRBY2Nlc3NUb2tlbjogKGlucHV0KSA9PiBzZXQoKHN0YXRlKSA9PiAoeyBhY2Nlc3NUb2tlbjogaW5wdXQgfSkpLFxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW46ICgpID0+IHNldCh7IGFjY2Vzc1Rva2VuOiBudWxsIH0pLFxyXG4gICAgc2V0VXNlcjogKGlucHV0KSA9PiBzZXQoKHN0YXRlKSA9PiAoeyB1c2VyOmlucHV0IH0pKSxcclxuICAgIHJlbW92ZVVzZXI6ICgpID0+IHNldCh7dXNlcjpudWxsfSlcclxufSkpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6dXN0YW5kXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9