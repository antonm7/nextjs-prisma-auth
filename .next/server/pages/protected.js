(function() {
var exports = {};
exports.id = "pages/protected";
exports.ids = ["pages/protected"];
exports.modules = {

/***/ "./functions/checkAuthClient.js":
/*!**************************************!*\
  !*** ./functions/checkAuthClient.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Code\\Prisma\\test\\functions\\checkAuthClient.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const withAuth = Component => {
  const Auth = props => {
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    if (store.accessToken !== null) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined);
    } else {
      router.replace("/");
      return null;
    }
  };

  return Auth;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./pages/protected.js":
/*!****************************!*\
  !*** ./pages/protected.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_checkAuthClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/checkAuthClient */ "./functions/checkAuthClient.js");

var _jsxFileName = "D:\\Code\\Prisma\\test\\pages\\protected.js";




function Protected() {
  const state = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useStore)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Welcome to protected Page"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_functions_checkAuthClient__WEBPACK_IMPORTED_MODULE_3__.default)(Protected));

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/protected.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvY2hlY2tBdXRoQ2xpZW50LmpzIiwid2VicGFjazovL3ByaXNtbmV4dC8uL3BhZ2VzL3Byb3RlY3RlZC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0L2V4dGVybmFsIFwienVzdGFuZFwiIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwiQ29tcG9uZW50IiwiQXV0aCIsInByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsImFjY2Vzc1Rva2VuIiwicmVwbGFjZSIsIlByb3RlY3RlZCIsInN0YXRlIiwiY2hlY2tBdXRoQ2xpZW50IiwiY3JlYXRlIiwic2V0IiwidXNlciIsInNldEFjY2Vzc1Rva2VuIiwiaW5wdXQiLCJyZW1vdmVBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJyZW1vdmVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLFNBQVMsSUFBSTtBQUMxQixRQUFNQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUNwQixVQUFNQyxLQUFLLEdBQUdDLGdEQUFRLEVBQXRCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxRQUFHSCxLQUFLLENBQUNJLFdBQU4sS0FBc0IsSUFBekIsRUFBK0I7QUFDM0IsMEJBQ0ksOERBQUMsU0FBRCxvQkFBZUwsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBR0gsS0FKRCxNQUlPO0FBQ0hHLFlBQU0sQ0FBQ0csT0FBUCxDQUFlLEdBQWY7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUNKLEdBWEQ7O0FBWUEsU0FBT1AsSUFBUDtBQUNELENBZEg7O0FBZ0JFLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJGO0FBQ0E7QUFDQTs7QUFHQSxTQUFTVSxTQUFULEdBQXFCO0FBQ2pCLFFBQU1DLEtBQUssR0FBR04sZ0RBQVEsRUFBdEI7QUFFQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWVPLG1FQUFlLENBQUNGLFNBQUQsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVPLE1BQU1MLFFBQVEsR0FBR1EsOENBQU0sQ0FBQ0MsR0FBRyxLQUFLO0FBQ25DTixhQUFXLEVBQUUsSUFEc0I7QUFFbkNPLE1BQUksRUFBQyxFQUY4QjtBQUduQ0MsZ0JBQWMsRUFBR0MsS0FBRCxJQUFXSCxHQUFHLENBQUVILEtBQUQsS0FBWTtBQUFFSCxlQUFXLEVBQUVTO0FBQWYsR0FBWixDQUFELENBSEs7QUFJbkNDLG1CQUFpQixFQUFFLE1BQU1KLEdBQUcsQ0FBQztBQUFFTixlQUFXLEVBQUU7QUFBZixHQUFELENBSk87QUFLbkNXLFNBQU8sRUFBR0YsS0FBRCxJQUFXSCxHQUFHLENBQUVILEtBQUQsS0FBWTtBQUFFSSxRQUFJLEVBQUNFO0FBQVAsR0FBWixDQUFELENBTFk7QUFNbkNHLFlBQVUsRUFBRSxNQUFNTixHQUFHLENBQUM7QUFBQ0MsUUFBSSxFQUFDO0FBQU4sR0FBRDtBQU5jLENBQUwsQ0FBSixDQUF2QixDOzs7Ozs7Ozs7OztBQ0ZQLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL3Byb3RlY3RlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gQ29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IEF1dGggPSAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgICAgIGlmKHN0b3JlLmFjY2Vzc1Rva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBdXRoO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7IiwiaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNoZWNrQXV0aENsaWVudCBmcm9tICcuLi9mdW5jdGlvbnMvY2hlY2tBdXRoQ2xpZW50J1xyXG5cclxuXHJcbmZ1bmN0aW9uIFByb3RlY3RlZCgpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlU3RvcmUoKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gcHJvdGVjdGVkIFBhZ2VcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tBdXRoQ2xpZW50KFByb3RlY3RlZClcclxuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKHNldCA9PiAoe1xyXG4gICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICB1c2VyOnt9LFxyXG4gICAgc2V0QWNjZXNzVG9rZW46IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgYWNjZXNzVG9rZW46IGlucHV0IH0pKSxcclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuOiAoKSA9PiBzZXQoeyBhY2Nlc3NUb2tlbjogbnVsbCB9KSxcclxuICAgIHNldFVzZXI6IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgdXNlcjppbnB1dCB9KSksXHJcbiAgICByZW1vdmVVc2VyOiAoKSA9PiBzZXQoe3VzZXI6bnVsbH0pXHJcbn0pKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwienVzdGFuZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==