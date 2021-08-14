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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_checkAuthClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/checkAuthClient */ "./functions/checkAuthClient.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Code\\Prisma\\test\\pages\\protected.js";






function Protected() {
  const store = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useStore)();
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: isError,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);

  const fetcher = async () => {
    return await axios__WEBPACK_IMPORTED_MODULE_5___default().get('/api/protectedRoute', {
      headers: {
        authorization: `Bearer ${store.accessToken}`
      }
    });
  };

  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()('/api/', fetcher);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (data) setSecret(data.data);
    if (error) setError(error);
    setLoading(false);
  }, [data, error]);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, this);
  } else {
    if (isError) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: "YO! YOU ARE NOT AUTHENTICATED,GET AWAY FROM HERE!!!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: ["Welcome to protected Page, ", secret]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_functions_checkAuthClient__WEBPACK_IMPORTED_MODULE_4__.default)(Protected));

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvY2hlY2tBdXRoQ2xpZW50LmpzIiwid2VicGFjazovL3ByaXNtbmV4dC8uL3BhZ2VzL3Byb3RlY3RlZC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJ6dXN0YW5kXCIiXSwibmFtZXMiOlsid2l0aEF1dGgiLCJDb21wb25lbnQiLCJBdXRoIiwicHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWNjZXNzVG9rZW4iLCJyZXBsYWNlIiwiUHJvdGVjdGVkIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwidXNlU3RhdGUiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoZXIiLCJheGlvcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZGF0YSIsImVycm9yIiwidXNlU1dSIiwidXNlRWZmZWN0IiwiY2hlY2tBdXRoQ2xpZW50IiwiY3JlYXRlIiwic2V0IiwidXNlciIsInNldEFjY2Vzc1Rva2VuIiwiaW5wdXQiLCJzdGF0ZSIsInJlbW92ZUFjY2Vzc1Rva2VuIiwic2V0VXNlciIsInJlbW92ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBR0MsU0FB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QixDOzs7Ozs7Ozs7OztBQ0ZQLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL3Byb3RlY3RlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gQ29tcG9uZW50ID0+IHtcclxuICAgIGNvbnN0IEF1dGggPSAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgICAgIGlmKHN0b3JlLmFjY2Vzc1Rva2VuICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBdXRoO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7IiwiaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmltcG9ydCBjaGVja0F1dGhDbGllbnQgZnJvbSAnLi4vZnVuY3Rpb25zL2NoZWNrQXV0aENsaWVudCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZnVuY3Rpb24gUHJvdGVjdGVkKCkge1xyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXHJcbiAgICBjb25zdCBbc2VjcmV0LCBzZXRTZWNyZXRdID0gdXNlU3RhdGUobnVsbClcclxuICAgIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIFxyXG4gICAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb3RlY3RlZFJvdXRlJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c3RvcmUuYWNjZXNzVG9rZW59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvJywgZmV0Y2hlcilcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihkYXRhKSBzZXRTZWNyZXQoZGF0YS5kYXRhKVxyXG4gICAgICAgIGlmIChlcnJvcikgc2V0RXJyb3IoZXJyb3IpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0sW2RhdGEsZXJyb3JdKVxyXG5cclxuICAgIGlmKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+TG9hZGluZy4uLjwvZGl2PilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoaXNFcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5ZTyEgWU9VIEFSRSBOT1QgQVVUSEVOVElDQVRFRCxHRVQgQVdBWSBGUk9NIEhFUkUhISE8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gcHJvdGVjdGVkIFBhZ2UsIHtzZWNyZXR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tBdXRoQ2xpZW50KFByb3RlY3RlZClcclxuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKHNldCA9PiAoe1xyXG4gICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICB1c2VyOnt9LFxyXG4gICAgc2V0QWNjZXNzVG9rZW46IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgYWNjZXNzVG9rZW46IGlucHV0IH0pKSxcclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuOiAoKSA9PiBzZXQoeyBhY2Nlc3NUb2tlbjogbnVsbCB9KSxcclxuICAgIHNldFVzZXI6IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgdXNlcjppbnB1dCB9KSksXHJcbiAgICByZW1vdmVVc2VyOiAoKSA9PiBzZXQoe3VzZXI6bnVsbH0pXHJcbn0pKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwienVzdGFuZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==