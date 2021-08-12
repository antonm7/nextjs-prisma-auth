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
    fetch('/api/createUser', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsInNlY29uZE5hbWUiLCJzZXRTZWNvbmROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwiYXV0aCIsInNldEF1dGgiLCJzdG9yZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiYWNjZXNzVG9rZW4iLCJzaWdudXAiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImRhdGEiLCJzZXRBY2Nlc3NUb2tlbiIsInNldFVzZXIiLCJ1c2VyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzaWduSW4iLCJsb2dPdXQiLCJjcmVkZW50aWFscyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUN2QkMsU0FEdUI7QUFBQSxNQUNaQyxZQURZOztBQUFBLG1CQUVNRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRXZCRyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsbUJBR0pKLCtDQUFRLENBQUMsRUFBRCxDQUhKO0FBQUEsTUFHdkJLLEtBSHVCO0FBQUEsTUFHaEJDLFFBSGdCOztBQUFBLG1CQUlFTiwrQ0FBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSXZCTyxRQUp1QjtBQUFBLE1BSWJDLFdBSmE7O0FBQUEsbUJBS1lSLCtDQUFRLENBQUMsRUFBRCxDQUxw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QSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGtCQUFRLEVBQUUsa0JBQUFlLENBQUM7QUFBQSxtQkFBSXRCLGFBQWEsQ0FBQ3NCLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUEsV0FBbEI7QUFBcUQscUJBQVcsRUFBQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBTyxrQkFBUSxFQUFFLGtCQUFBUCxDQUFDO0FBQUEsbUJBQUl4QixnQkFBZ0IsQ0FBQ3dCLENBQUMsQ0FBQ00sTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsV0FBbEI7QUFBd0QscUJBQVcsRUFBQyxVQUFwRTtBQUErRSxjQUFJLEVBQUM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSixNQUFNLEVBQVo7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBOUZ1QnRDLEs7VUFTUmlCLDRDOzs7S0FUUWpCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg0OWM2MWJkYjI5NzcwYjU1ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWNvbmROYW1lLCBzZXRTZWNvbmROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbG9naW5QYXNzd29yZCwgc2V0TG9naW5QYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2xvZ2luRW1haWwsIHNldExvZ2luRW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoc3RvcmUuYWNjZXNzVG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHNldEF1dGgodHJ1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRBdXRoKGZhbHNlKVxuICAgIH1cbiAgfSxbc3RvcmUuYWNjZXNzVG9rZW5dKVxuXG5cbiAgZnVuY3Rpb24gc2lnbnVwKCkge1xuICAgIGZldGNoKCcvYXBpL2NyZWF0ZVVzZXInLHtcbiAgICAgIG1ldGhvZDonUE9TVCcsXG4gICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgc2Vjb25kTmFtZSxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgaWYocmVzLnN0YXR1cyA9PT0gNDA5KSB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugb3RoZXIgZW1haWwnKVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgc3RvcmUuc2V0QWNjZXNzVG9rZW4oZGF0YS5hY2Nlc3NUb2tlbilcbiAgICAgIHN0b3JlLnNldFVzZXIoZGF0YS51c2VyKVxuICAgIH0pXG4gICAgLmNhdGNoKGUgPT4ge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGUpXG4gICAgfSlcbiAgfVxuICBcbiAgZnVuY3Rpb24gc2lnbkluKCkge1xuICAgIGZldGNoKCcvYXBpL3NpZ25JbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogbG9naW5FbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6bG9naW5QYXNzd29yZFxuICAgICAgfSlcbiAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgc3RvcmUuc2V0QWNjZXNzVG9rZW4oZGF0YS5hY2Nlc3NUb2tlbilcbiAgICAgIHN0b3JlLnNldFVzZXIoZGF0YS51c2VyKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgZmV0Y2goJy9hcGkvbG9nb3V0Jywge1xuICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHN0b3JlLnNldEFjY2Vzc1Rva2VuKG51bGwpXG4gICAgICBzdG9yZS5zZXRVc2VyKG51bGwpXG5cbiAgICB9KVxuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7YXV0aCA9PT0gdHJ1ZSA/IFxuICAgICAgICA8ZGl2PiBcbiAgICAgICAgICBIZWxsbyB7c3RvcmUudXNlci5maXJzdE5hbWV9LCB5b3UgYXJlIGF1dGhlbnRpY2F0ZWQgc28geW91IGNhbiB2aXNpdCA8TGluayBocmVmPVwiL3Byb3RlY3RlZFwiPiBwcm90ZWN0ZWQgcGFnZTwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJnaW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIj48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHNldFNlY29uZE5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlNlY29uZCBOYW1lXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiZW1haWxcIj48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ251cCgpfT5TaWduVXA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmdpblwiPlxuICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZSA9PiBzZXRMb2dpbkVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4gc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKSAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==