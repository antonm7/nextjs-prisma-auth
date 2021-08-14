(function() {
var exports = {};
exports.id = "pages/api/protectedRoute";
exports.ids = ["pages/api/protectedRoute"];
exports.modules = {

/***/ "./pages/api/middleware/checkAuthServer.js":
/*!*************************************************!*\
  !*** ./pages/api/middleware/checkAuthServer.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);


const checkAuth = handler => {
  return async (req, res) => {
    try {
      const authorization = req.headers["authorization"];
      if (!authorization) throw new Error("not authenticated");
      const token = authorization.split(" ")[1];
      (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, process.env.ACCESS_TOKEN_SECRET);
      return handler(req, res);
    } catch (e) {
      console.log(e);
      res.status(401).send();
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (checkAuth);

/***/ }),

/***/ "./pages/api/protectedRoute.js":
/*!*************************************!*\
  !*** ./pages/api/protectedRoute.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_checkAuthServer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./middleware/checkAuthServer */ "./pages/api/middleware/checkAuthServer.js");


const protectedRoute = async (req, res) => {
  if (req.method === 'GET') {
    //secret data
    res.send('Hey, keep it in secret!');
  }
}; //authentication middleware


/* harmony default export */ __webpack_exports__["default"] = ((0,_middleware_checkAuthServer__WEBPACK_IMPORTED_MODULE_0__.default)(protectedRoute));

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/protectedRoute.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9wYWdlcy9hcGkvbWlkZGxld2FyZS9jaGVja0F1dGhTZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vcHJpc21uZXh0Ly4vcGFnZXMvYXBpL3Byb3RlY3RlZFJvdXRlLmpzIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIl0sIm5hbWVzIjpbImNoZWNrQXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsIkVycm9yIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIiwicHJvdGVjdGVkUm91dGUiLCJtZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLE9BQUQsSUFBYTtBQUMzQixTQUFPLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN2QixRQUFJO0FBQ0EsWUFBTUMsYUFBYSxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWSxlQUFaLENBQXRCO0FBQ0EsVUFBSSxDQUFDRCxhQUFMLEVBQW9CLE1BQU0sSUFBSUUsS0FBSixDQUFVLG1CQUFWLENBQU47QUFFcEIsWUFBTUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBZDtBQUNBQywwREFBTSxDQUFDRixLQUFELEVBQVFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBcEIsQ0FBTjtBQUVBLGFBQU9YLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLENBQWQ7QUFDSCxLQVJELENBUUUsT0FBT1UsQ0FBUCxFQUFVO0FBQ1JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FWLFNBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCO0FBQ0g7QUFDSixHQWJEO0FBY0gsQ0FmRDs7QUFpQkEsK0RBQWVqQixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBRUEsTUFBTWtCLGNBQWMsR0FBRyxPQUFPaEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3ZDLE1BQUdELEdBQUcsQ0FBQ2lCLE1BQUosS0FBZSxLQUFsQixFQUF5QjtBQUNyQjtBQUNBaEIsT0FBRyxDQUFDYyxJQUFKLENBQVMseUJBQVQ7QUFDSDtBQUNKLENBTEQsQyxDQVFBOzs7QUFDQSwrREFBZWpCLG9FQUFTLENBQUNrQixjQUFELENBQXhCLEU7Ozs7Ozs7Ozs7O0FDWEEsMEMiLCJmaWxlIjoicGFnZXMvYXBpL3Byb3RlY3RlZFJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuY29uc3QgY2hlY2tBdXRoID0gKGhhbmRsZXIpID0+IHtcclxuICAgIHJldHVybiBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gcmVxLmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdXHJcbiAgICAgICAgICAgIGlmICghYXV0aG9yaXphdGlvbikgdGhyb3cgbmV3IEVycm9yKFwibm90IGF1dGhlbnRpY2F0ZWRcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zcGxpdChcIiBcIilbMV1cclxuICAgICAgICAgICAgdmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tBdXRoIiwiaW1wb3J0IGNoZWNrQXV0aCBmcm9tICcuL21pZGRsZXdhcmUvY2hlY2tBdXRoU2VydmVyJ1xyXG5cclxuY29uc3QgcHJvdGVjdGVkUm91dGUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgLy9zZWNyZXQgZGF0YVxyXG4gICAgICAgIHJlcy5zZW5kKCdIZXksIGtlZXAgaXQgaW4gc2VjcmV0IScpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2F1dGhlbnRpY2F0aW9uIG1pZGRsZXdhcmVcclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tBdXRoKHByb3RlY3RlZFJvdXRlKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==