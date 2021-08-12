(function() {
var exports = {};
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  if (req.method === 'POST') {
    //deletes refresh token
    res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize('refreshToken', '', {
      httpOnly: true,
      maxAge: 0,
      path: '/'
    }));
    res.status(200).send();
  }
});

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9wYWdlcy9hcGkvbG9nb3V0LmpzIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImNvb2tpZVwiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsImNvb2tpZSIsImh0dHBPbmx5IiwibWF4QWdlIiwicGF0aCIsInN0YXR1cyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLCtEQUFlLENBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0FELE9BQUcsQ0FBQ0UsU0FBSixDQUFjLFlBQWQsRUFBMkJDLHVEQUFBLENBQWlCLGNBQWpCLEVBQWdDLEVBQWhDLEVBQW9DO0FBQzNEQyxjQUFRLEVBQUUsSUFEaUQ7QUFFM0RDLFlBQU0sRUFBRSxDQUZtRDtBQUczREMsVUFBSSxFQUFFO0FBSHFELEtBQXBDLENBQTNCO0FBS0FOLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCO0FBQ0g7QUFDSixDQVZELEU7Ozs7Ozs7Ozs7O0FDREEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xyXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcclxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIC8vZGVsZXRlcyByZWZyZXNoIHRva2VuXHJcbiAgICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsY29va2llLnNlcmlhbGl6ZSgncmVmcmVzaFRva2VuJywnJywge1xyXG4gICAgICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgbWF4QWdlOiAwLFxyXG4gICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICB9KSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=