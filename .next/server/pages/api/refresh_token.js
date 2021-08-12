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
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/auth */ "./functions/auth.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
async function refresh_token(req, res) {
  if (req.method === 'POST') {
    if (!req.headers.cookie) return res.send({
      ok: false,
      accessToken: ''
    });
    const getToken = cookie__WEBPACK_IMPORTED_MODULE_3___default().parse(req.headers.cookie);
    const token = getToken.refreshToken;
    if (!token) return res.send({
      ok: false,
      accessToken: ''
    });
    let payload = null;

    try {
      payload = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.verify)(token, process.env.REFRESH_TOKEN_SECRET);
      const user = await prisma.user.findUnique({
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
      (0,_functions_auth__WEBPACK_IMPORTED_MODULE_2__.sendRefreshToken)(res, (0,_functions_auth__WEBPACK_IMPORTED_MODULE_2__.createRefreshToken)(user));
      const accessToken = (0,_functions_auth__WEBPACK_IMPORTED_MODULE_2__.createAccessToken)(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9mdW5jdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9wYWdlcy9hcGkvcmVmcmVzaF90b2tlbi5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmlzbW5leHQvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL3ByaXNtbmV4dC9leHRlcm5hbCBcInp1c3RhbmRcIiJdLCJuYW1lcyI6WyJyZWZyZXNoVG9rZW4iLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJ1c2VyIiwic2lnbiIsInVzZXJJZCIsImlkIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJleHBpcmVzSW4iLCJjcmVhdGVSZWZyZXNoVG9rZW4iLCJSRUZSRVNIX1RPS0VOX1NFQ1JFVCIsInNlbmRSZWZyZXNoVG9rZW4iLCJ0b2tlbiIsInNldEhlYWRlciIsImNvb2tpZSIsImh0dHBPbmx5IiwibWF4QWdlIiwicGF0aCIsInByaXNtYSIsIlByaXNtYUNsaWVudCIsInJlZnJlc2hfdG9rZW4iLCJyZXEiLCJoZWFkZXJzIiwic2VuZCIsIm9rIiwiYWNjZXNzVG9rZW4iLCJnZXRUb2tlbiIsInBheWxvYWQiLCJ2ZXJpZnkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzZWxlY3QiLCJmaXJzdE5hbWUiLCJzZWNvbmROYW1lIiwiZW1haWwiLCJlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInVzZVN0b3JlIiwiY3JlYXRlIiwic2V0Iiwic2V0QWNjZXNzVG9rZW4iLCJpbnB1dCIsInN0YXRl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QyxRQUFJLEVBQUMwQztBQUFQLEdBQVosQ0FBRCxDQUxZO0FBTW5DSSxZQUFVLEVBQUUsTUFBTU4sR0FBRyxDQUFDO0FBQUN4QyxRQUFJLEVBQUM7QUFBTixHQUFEO0FBTmMsQ0FBTCxDQUFKLENBQXZCLEM7Ozs7Ozs7Ozs7O0FDRlAsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3JlZnJlc2hfdG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NpZ259IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL3JlZnJlc2hfdG9rZW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtyZXR1cm4gZGF0YX0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbih7IHVzZXJJZDogdXNlci5pZCB9LCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzE1bSdcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZnJlc2hUb2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gc2lnbihcclxuICAgICAgICB7IHVzZXJJZDogdXNlci5pZCB9LHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULHtcclxuICAgICAgICAgICAgZXhwaXJlc0luOiBcIjdkXCJcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRSZWZyZXNoVG9rZW4gPSAocmVzLHRva2VuKSA9PiB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJyxjb29raWUuc2VyaWFsaXplKCdyZWZyZXNoVG9rZW4nLHRva2VuLCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LFxyXG4gICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgfSkpXHJcbn07IiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHtjcmVhdGVBY2Nlc3NUb2tlbiwgc2VuZFJlZnJlc2hUb2tlbiwgY3JlYXRlUmVmcmVzaFRva2VufSBmcm9tICcuLi8uLi9mdW5jdGlvbnMvYXV0aCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnXHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hfdG9rZW4ocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBpZighcmVxLmhlYWRlcnMuY29va2llKSByZXR1cm4gcmVzLnNlbmQoe29rOiBmYWxzZSxhY2Nlc3NUb2tlbjogJyd9KVxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSlcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuLnJlZnJlc2hUb2tlblxyXG5cclxuICAgICAgICBpZighdG9rZW4pIHJldHVybiByZXMuc2VuZCh7b2s6IGZhbHNlLGFjY2Vzc1Rva2VuOiAnJ30pXHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSBudWxsXHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSB2ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcGF5bG9hZC51c2VySWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kTmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnNlbmQoe29rOiBmYWxzZSxhY2Nlc3NUb2tlbjogJyd9KVxyXG5cclxuICAgICAgICAgICAgc2VuZFJlZnJlc2hUb2tlbihyZXMsIGNyZWF0ZVJlZnJlc2hUb2tlbih1c2VyKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gY3JlYXRlQWNjZXNzVG9rZW4odXNlcilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZCh7IG9rOiB0cnVlLCBhY2Nlc3NUb2tlbix1c2VyIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHtvazogZmFsc2UsYWNjZXNzVG9rZW46ICcnfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoKVxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgY3JlYXRlIGZyb20gJ3p1c3RhbmQnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoc2V0ID0+ICh7XHJcbiAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgIHVzZXI6e30sXHJcbiAgICBzZXRBY2Nlc3NUb2tlbjogKGlucHV0KSA9PiBzZXQoKHN0YXRlKSA9PiAoeyBhY2Nlc3NUb2tlbjogaW5wdXQgfSkpLFxyXG4gICAgcmVtb3ZlQWNjZXNzVG9rZW46ICgpID0+IHNldCh7IGFjY2Vzc1Rva2VuOiBudWxsIH0pLFxyXG4gICAgc2V0VXNlcjogKGlucHV0KSA9PiBzZXQoKHN0YXRlKSA9PiAoeyB1c2VyOmlucHV0IH0pKSxcclxuICAgIHJlbW92ZVVzZXI6ICgpID0+IHNldCh7dXNlcjpudWxsfSlcclxufSkpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwienVzdGFuZFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==