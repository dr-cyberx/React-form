webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _media_drcyberx_drcyberx_drive_2_Web_Development_Projects_reactproj_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/media/drcyberx/drcyberx/drive 2/Web Development/Projects/reactproj/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_media_drcyberx_drcyberx_drive_2_Web_Development_Projects_reactproj_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar initalState = {\n  loading: false,\n  tableData: [{\n    horseName: 'A graham Neighton',\n    result: 'a',\n    lockResult: false\n  }, {\n    horseName: 'v graham Neighton',\n    result: 'a',\n    lockResult: false\n  }, {\n    horseName: 'R graham Neighton',\n    result: 'a',\n    lockResult: false\n  }, {\n    horseName: 'X graham Neighton',\n    result: 'a',\n    lockResult: false\n  }]\n};\n\nfunction MyApp(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(initalState),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"].Provider, {\n    value: {\n      user: user,\n      setUser: setUser\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, this);\n}\n\n_s(MyApp, \"e/muy0Jb/1fpfVG5f30GW7oUPws=\");\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbImluaXRhbFN0YXRlIiwibG9hZGluZyIsInRhYmxlRGF0YSIsImhvcnNlTmFtZSIsInJlc3VsdCIsImxvY2tSZXN1bHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ25CQyxTQUFPLEVBQUUsS0FEVTtBQUVuQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsYUFBUyxFQUFFLG1CQURiO0FBRUVDLFVBQU0sRUFBRSxHQUZWO0FBR0VDLGNBQVUsRUFBRTtBQUhkLEdBRFMsRUFNVDtBQUNFRixhQUFTLEVBQUUsbUJBRGI7QUFFRUMsVUFBTSxFQUFFLEdBRlY7QUFHRUMsY0FBVSxFQUFFO0FBSGQsR0FOUyxFQVdUO0FBQ0VGLGFBQVMsRUFBRSxtQkFEYjtBQUVFQyxVQUFNLEVBQUUsR0FGVjtBQUdFQyxjQUFVLEVBQUU7QUFIZCxHQVhTLEVBZ0JUO0FBQ0VGLGFBQVMsRUFBRSxtQkFEYjtBQUVFQyxVQUFNLEVBQUUsR0FGVjtBQUdFQyxjQUFVLEVBQUU7QUFIZCxHQWhCUztBQUZRLENBQXBCOztBQXlCQSxTQUFTQyxLQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFBQSxrQkFDZkMsc0RBQVEsQ0FBQ1QsV0FBRCxDQURPO0FBQUEsTUFDaENVLElBRGdDO0FBQUEsTUFDMUJDLE9BRDBCOztBQUV2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxzQkFDQSxxRUFBQywrREFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVBLFVBQUksRUFBSkEsSUFBRjtBQUFRQyxhQUFPLEVBQVBBO0FBQVIsS0FBN0I7QUFBQSwyQkFDQSxxRUFBQyxTQUFELG9CQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFJRDs7R0FQUUYsSzs7S0FBQUEsSztBQVNNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcbmltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpbml0YWxTdGF0ZSA9IHtcbiBsb2FkaW5nOiBmYWxzZSxcbiB0YWJsZURhdGE6IFtcbiAgIHtcbiAgICAgaG9yc2VOYW1lOiAnQSBncmFoYW0gTmVpZ2h0b24nLFxuICAgICByZXN1bHQ6ICdhJyxcbiAgICAgbG9ja1Jlc3VsdDogZmFsc2VcbiAgIH0sXG4gICB7XG4gICAgIGhvcnNlTmFtZTogJ3YgZ3JhaGFtIE5laWdodG9uJyxcbiAgICAgcmVzdWx0OiAnYScsXG4gICAgIGxvY2tSZXN1bHQ6IGZhbHNlXG4gICB9LFxuICAge1xuICAgICBob3JzZU5hbWU6ICdSIGdyYWhhbSBOZWlnaHRvbicsXG4gICAgIHJlc3VsdDogJ2EnLFxuICAgICBsb2NrUmVzdWx0OiBmYWxzZVxuICAgfSxcbiAgIHtcbiAgICAgaG9yc2VOYW1lOiAnWCBncmFoYW0gTmVpZ2h0b24nLFxuICAgICByZXN1bHQ6ICdhJyxcbiAgICAgbG9ja1Jlc3VsdDogZmFsc2VcbiAgIH0sXG4gXVxufVxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGluaXRhbFN0YXRlKVxuICBjb25zb2xlLmxvZyh1c2VyKVxuICByZXR1cm4gKFxuICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciB9fT5cbiAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})