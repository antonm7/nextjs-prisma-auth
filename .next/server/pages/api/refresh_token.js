(function() {
var exports = {};
exports.id = "pages/api/refresh_token";
exports.ids = ["pages/api/refresh_token"];
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

/***/ "./functions/initPrisma.js":
/*!*********************************!*\
  !*** ./functions/initPrisma.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const Prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (Prisma);

/***/ }),

/***/ "./pages/api/refresh_token.js":
/*!************************************!*\
  !*** ./pages/api/refresh_token.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ refresh_token; }
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/auth */ "./functions/auth.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_initPrisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/initPrisma */ "./functions/initPrisma.js");




async function refresh_token(req, res) {
  if (req.method === 'POST') {
    if (!req.headers.cookie) return res.send({
      ok: false,
      accessToken: ''
    });
    const getToken = cookie__WEBPACK_IMPORTED_MODULE_2___default().parse(req.headers.cookie);
    const token = getToken.refreshToken;
    if (!token) return res.send({
      ok: false,
      accessToken: ''
    });
    let payload = null;

    try {
      payload = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, process.env.REFRESH_TOKEN_SECRET);
      const user = await _functions_initPrisma__WEBPACK_IMPORTED_MODULE_3__.default.user.findUnique({
        where: {
          id: payload.userId
        },
        select: {
          id: true,
          firstName: true,
          secondName: true,
          email: true
        }
      });
      if (!user) return res.send({
        ok: false,
        accessToken: ''
      });
      (0,_functions_auth__WEBPACK_IMPORTED_MODULE_1__.sendRefreshToken)(res, (0,_functions_auth__WEBPACK_IMPORTED_MODULE_1__.createRefreshToken)(user));
      const accessToken = (0,_functions_auth__WEBPACK_IMPORTED_MODULE_1__.createAccessToken)(user);
      return res.send({
        ok: true,
        accessToken,
        user
      });
    } catch (e) {
      console.log(e);
      return res.send({
        ok: false,
        accessToken: ''
      });
    }
  } else {
    res.status(500).send();
  }
}

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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/refresh_token.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvaW5pdFByaXNtYS5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9wYWdlcy9hcGkvcmVmcmVzaF90b2tlbi5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcInp1c3RhbmRcIiJdLCJuYW1lcyI6WyJyZWZyZXNoVG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJ1c2VyIiwic2lnbiIsInVzZXJJZCIsImlkIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJleHBpcmVzSW4iLCJjcmVhdGVSZWZyZXNoVG9rZW4iLCJSRUZSRVNIX1RPS0VOX1NFQ1JFVCIsInNlbmRSZWZyZXNoVG9rZW4iLCJ0b2tlbiIsInNldEhlYWRlciIsImNvb2tpZSIsImh0dHBPbmx5IiwibWF4QWdlIiwicGF0aCIsIlByaXNtYSIsIlByaXNtYUNsaWVudCIsInJlZnJlc2hfdG9rZW4iLCJyZXEiLCJoZWFkZXJzIiwic2VuZCIsIm9rIiwiYWNjZXNzVG9rZW4iLCJnZXRUb2tlbiIsInBheWxvYWQiLCJ2ZXJpZnkiLCJ3aGVyZSIsInNlbGVjdCIsImZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJlbWFpbCIsImUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwidXNlU3RvcmUiLCJjcmVhdGUiLCJzZXQiLCJzZXRBY2Nlc3NUb2tlbiIsImlucHV0Iiwic3RhdGUiLCJyZW1vdmVBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJyZW1vdmVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDOUIsU0FBT0MsS0FBSyxDQUFDLG9CQUFELEVBQXVCO0FBQy9CQyxVQUFNLEVBQUUsTUFEdUI7QUFFL0JDLGVBQVcsRUFBRTtBQUZrQixHQUF2QixDQUFMLENBR0pDLElBSEksQ0FHQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFIUixFQUlORixJQUpNLENBSURHLElBQUksSUFBSTtBQUFDLFdBQU9BLElBQVA7QUFBWSxHQUpwQixDQUFQO0FBS0gsQ0FOTTtBQVFBLE1BQU1DLGlCQUFpQixHQUFJQyxJQUFELElBQVU7QUFDdkMsU0FBT0Msa0RBQUksQ0FBQztBQUFFQyxVQUFNLEVBQUVGLElBQUksQ0FBQ0c7QUFBZixHQUFELEVBQXNCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQWxDLEVBQXVEO0FBQ2hFQyxhQUFTLEVBQUU7QUFEcUQsR0FBdkQsQ0FBWDtBQUdELENBSkk7QUFNRSxNQUFNQyxrQkFBa0IsR0FBSVIsSUFBRCxJQUFVO0FBQzFDLFNBQU9DLGtEQUFJLENBQ1A7QUFBRUMsVUFBTSxFQUFFRixJQUFJLENBQUNHO0FBQWYsR0FETyxFQUNhQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUksb0JBRHpCLEVBQzhDO0FBQ2pERixhQUFTLEVBQUU7QUFEc0MsR0FEOUMsQ0FBWDtBQUtILENBTlE7QUFRRixNQUFNRyxnQkFBZ0IsR0FBRyxDQUFDZCxHQUFELEVBQUtlLEtBQUwsS0FBZTtBQUMzQ2YsS0FBRyxDQUFDZ0IsU0FBSixDQUFjLFlBQWQsRUFBMkJDLHVEQUFBLENBQWlCLGNBQWpCLEVBQWdDRixLQUFoQyxFQUF1QztBQUM5REcsWUFBUSxFQUFFLElBRG9EO0FBRTlEQyxVQUFNLEVBQUUsS0FB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TyxFQUFHSCxLQUFELElBQVdGLEdBQUcsQ0FBRUcsS0FBRCxLQUFZO0FBQUUxQyxRQUFJLEVBQUN5QztBQUFQLEdBQVosQ0FBRCxDQUxZO0FBTW5DSSxZQUFVLEVBQUUsTUFBTU4sR0FBRyxDQUFDO0FBQUN2QyxRQUFJLEVBQUM7QUFBTixHQUFEO0FBTmMsQ0FBTCxDQUFKLENBQXZCLEM7Ozs7Ozs7Ozs7O0FDRlAsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3JlZnJlc2hfdG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpZ259IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL3JlZnJlc2hfdG9rZW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtyZXR1cm4gZGF0YX0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbih7IHVzZXJJZDogdXNlci5pZCB9LCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzE1bSdcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZnJlc2hUb2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbihcclxuICAgICAgICB7IHVzZXJJZDogdXNlci5pZCB9LHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULHtcclxuICAgICAgICAgICAgZXhwaXJlc0luOiBcIjdkXCJcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRSZWZyZXNoVG9rZW4gPSAocmVzLHRva2VuKSA9PiB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJyxjb29raWUuc2VyaWFsaXplKCdyZWZyZXNoVG9rZW4nLHRva2VuLCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LFxyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgfSkpXHJcbn07IiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmNvbnN0IFByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpc21hIiwiaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQge2NyZWF0ZUFjY2Vzc1Rva2VuLCBzZW5kUmVmcmVzaFRva2VuLCBjcmVhdGVSZWZyZXNoVG9rZW59IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9hdXRoJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSdcclxuaW1wb3J0IFByaXNtYSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvaW5pdFByaXNtYSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZWZyZXNoX3Rva2VuKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgaWYoIXJlcS5oZWFkZXJzLmNvb2tpZSkgcmV0dXJuIHJlcy5zZW5kKHtvazogZmFsc2UsYWNjZXNzVG9rZW46ICcnfSlcclxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUpXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbi5yZWZyZXNoVG9rZW5cclxuXHJcbiAgICAgICAgaWYoIXRva2VuKSByZXR1cm4gcmVzLnNlbmQoe29rOiBmYWxzZSxhY2Nlc3NUb2tlbjogJyd9KVxyXG4gICAgICAgIGxldCBwYXlsb2FkID0gbnVsbFxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYXlsb2FkID0gdmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5SRUZSRVNIX1RPS0VOX1NFQ1JFVClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBQcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBheWxvYWQudXNlcklkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZE5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zZW5kKHtvazogZmFsc2UsYWNjZXNzVG9rZW46ICcnfSlcclxuXHJcbiAgICAgICAgICAgIHNlbmRSZWZyZXNoVG9rZW4ocmVzLCBjcmVhdGVSZWZyZXNoVG9rZW4odXNlcikpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHVzZXIpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoeyBvazogdHJ1ZSwgYWNjZXNzVG9rZW4sdXNlciB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZCh7b2s6IGZhbHNlLGFjY2Vzc1Rva2VuOiAnJ30pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKClcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKHNldCA9PiAoe1xyXG4gICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICB1c2VyOnt9LFxyXG4gICAgc2V0QWNjZXNzVG9rZW46IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgYWNjZXNzVG9rZW46IGlucHV0IH0pKSxcclxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuOiAoKSA9PiBzZXQoeyBhY2Nlc3NUb2tlbjogbnVsbCB9KSxcclxuICAgIHNldFVzZXI6IChpbnB1dCkgPT4gc2V0KChzdGF0ZSkgPT4gKHsgdXNlcjppbnB1dCB9KSksXHJcbiAgICByZW1vdmVVc2VyOiAoKSA9PiBzZXQoe3VzZXI6bnVsbH0pXHJcbn0pKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInp1c3RhbmRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=