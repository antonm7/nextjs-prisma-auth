self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Code\\Prisma\\test\\pages\\index.js",
    _s = $RefreshSig$();




function Index() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      firstName = _useState[0],
      setFirstName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      secondName = _useState2[0],
      setSecondName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      loginPassword = _useState5[0],
      setLoginPassword = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      loginEmail = _useState6[0],
      setLoginEmail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      auth = _useState7[0],
      setAuth = _useState7[1];

  var store = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (store.accessToken !== null) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [store.accessToken]);

  function signup() {
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        firstName: firstName,
        secondName: secondName,
        password: password
      })
    }).then(function (res) {
      if (res.status === 409) throw new Error('Please use other email');
      return res.json();
    }).then(function (data) {
      store.setAccessToken(data.accessToken);
      store.setUser(data.user);
    })["catch"](function (e) {
      return console.log(e);
    });
  }

  function signIn() {
    fetch('/api/signIn', {
      method: 'POST',
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      store.setAccessToken(data.accessToken);
      store.setUser(data.user);
    });
  }

  function logOut() {
    fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(function () {
      store.setAccessToken(null);
      store.setUser(null);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: auth === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: ["Hello ", store.user.firstName, ", you are authenticated so you can visit ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/protected",
        children: " protected page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 80
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return logOut();
        },
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "margin",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "margin",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setFirstName(e.target.value);
          },
          placeholder: "First Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setSecondName(e.target.value);
          },
          placeholder: "Second Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          placeholder: "password",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            return signup();
          },
          children: "SignUp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "margin",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setLoginEmail(e.target.value);
          },
          placeholder: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: function onChange(e) {
            return setLoginPassword(e.target.value);
          },
          placeholder: "Password",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            return signIn();
          },
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

_s(Index, "tMZmvtnlFDb02rfz50m14gBtFZc=", false, function () {
  return [_store__WEBPACK_IMPORTED_MODULE_1__.useStore];
});

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJzZXRTZWNvbmROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwiYXV0aCIsInNldEF1dGgiLCJzdG9yZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJzaWdudXAiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImRhdGEiLCJzZXRBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJ1c2VyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzaWduSW4iLCJsb2dPdXQiLCJjcmVkZW50aWFscyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUFBLG1CQUVNRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRXZCRyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsbUJBR0pKLCtDQUFRLENBQUMsRUFBRCxDQUhKO0FBQUEsTUFHdkJLLEtBSHVCO0FBQUEsTUFHaEJDLFFBSGdCOztBQUFBLG1CQUlFTiwrQ0FBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSXZCTyxRQUp1QjtBQUFBLE1BSWJDLFdBSmE7O0FBQUEsbUJBS1lSLCtDQUFRLENBQUMsRUFBRCxDQUxw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QU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sa0JBQVEsRUFBRSxrQkFBQWUsQ0FBQztBQUFBLG1CQUFJdEIsYUFBYSxDQUFDc0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxXQUFsQjtBQUFxRCxxQkFBVyxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFPLGtCQUFRLEVBQUUsa0JBQUFQLENBQUM7QUFBQSxtQkFBSXhCLGdCQUFnQixDQUFDd0IsQ0FBQyxDQUFDTSxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxXQUFsQjtBQUF3RCxxQkFBVyxFQUFDLFVBQXBFO0FBQStFLGNBQUksRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLE1BQU0sRUFBWjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7R0E5RnVCdEMsSztVQVNSaUIsNEM7OztLQVRRakIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZTcwY2RiZThkNjQwNDZjZDIwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlY29uZE5hbWUsIHNldFNlY29uZE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzdG9yZS5hY2Nlc3NUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgc2V0QXV0aCh0cnVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEF1dGgoZmFsc2UpXG4gICAgfVxuICB9LFtzdG9yZS5hY2Nlc3NUb2tlbl0pXG5cblxuICBmdW5jdGlvbiBzaWdudXAoKSB7XG4gICAgZmV0Y2goJy9hcGkvc2lnbnVwJyx7XG4gICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIHNlY29uZE5hbWUsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDQwOSkgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIG90aGVyIGVtYWlsJylcbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIHN0b3JlLnNldEFjY2Vzc1Rva2VuKGRhdGEuYWNjZXNzVG9rZW4pXG4gICAgICBzdG9yZS5zZXRVc2VyKGRhdGEudXNlcilcbiAgICB9KVxuICAgIC5jYXRjaChlID0+IHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzaWduSW4oKSB7XG4gICAgZmV0Y2goJy9hcGkvc2lnbkluJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBsb2dpbkVtYWlsLFxuICAgICAgICBwYXNzd29yZDpsb2dpblBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBzdG9yZS5zZXRBY2Nlc3NUb2tlbihkYXRhLmFjY2Vzc1Rva2VuKVxuICAgICAgc3RvcmUuc2V0VXNlcihkYXRhLnVzZXIpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICBmZXRjaCgnL2FwaS9sb2dvdXQnLCB7XG4gICAgICBtZXRob2Q6J1BPU1QnLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc3RvcmUuc2V0QWNjZXNzVG9rZW4obnVsbClcbiAgICAgIHN0b3JlLnNldFVzZXIobnVsbClcblxuICAgIH0pXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHthdXRoID09PSB0cnVlID8gXG4gICAgICAgIDxkaXY+IFxuICAgICAgICAgIEhlbGxvIHtzdG9yZS51c2VyLmZpcnN0TmFtZX0sIHlvdSBhcmUgYXV0aGVudGljYXRlZCBzbyB5b3UgY2FuIHZpc2l0IDxMaW5rIGhyZWY9XCIvcHJvdGVjdGVkXCI+IHByb3RlY3RlZCBwYWdlPC9MaW5rPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gc2V0U2Vjb25kTmFtZShlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiU2Vjb25kIE5hbWVcIj48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbnVwKCl9PlNpZ25VcDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFyZ2luXCI+XG4gICAgICAgICAgICA8aDE+TG9naW48L2gxPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHNldExvZ2luRW1haWwoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBzZXRMb2dpblBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIEluPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICApICBcbn0iXSwic291cmNlUm9vdCI6IiJ9