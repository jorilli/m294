"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wordreverser.js":
/*!*******************************!*\
  !*** ./pages/wordreverser.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wordreverser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* export default function Wordreverser({word}){\r\n    return(\r\n        <p>{word.split('').reverse().join('')}</p>\r\n    )\r\n}\r\n\r\n */ \nvar _s = $RefreshSig$();\n\nfunction Wordreverser() {\n    _s();\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const inputValue = e.target.value;\n        setWord(inputValue);\n    };\n    const handleClick = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: setWord.split(\"\").reverse().join(\"\")\n        }, void 0, false, {\n            fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Wordreverser\"\n            }, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: word,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"reverse Word\"\n            }, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jori/m294/auftrag-react-hooks-1/pages/wordreverser.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Wordreverser, \"KIhUDbJtUcjE+1oNeU7mNfhsQvU=\");\n_c = Wordreverser;\nvar _c;\n$RefreshReg$(_c, \"Wordreverser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3JkcmV2ZXJzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7O0NBTUM7O0FBQzhCO0FBRWhCLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFFakMsTUFBTUksZUFBZSxDQUFDQztRQUNsQixNQUFNQyxhQUFhRCxFQUFFRSxPQUFPQztRQUM1QkwsUUFBUUc7SUFDWjtJQUVBLE1BQU1HLGNBQWM7UUFDaEIscUJBQ0ksOERBQUNDO3NCQUFHUCxRQUFRUSxNQUFNLElBQUlDLFVBQVVDLEtBQUs7Ozs7OztJQUU3QztJQUVBLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNUixPQUFPTjtnQkFBTWUsVUFBVWI7Ozs7OzswQkFDOUIsOERBQUNjO2dCQUFPQyxTQUFTVjswQkFBYTs7Ozs7OzBCQUM5Qiw4REFBQ0M7Ozs7Ozs7Ozs7O0FBR2I7R0F0QndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93b3JkcmV2ZXJzZXIuanM/MzM0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JkcmV2ZXJzZXIoe3dvcmR9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8cD57d29yZC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpfTwvcD5cclxuICAgIClcclxufVxyXG5cclxuICovXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yZHJldmVyc2VyKCl7XHJcbiAgICBjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0V29yZChpbnB1dFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHA+e3NldFdvcmQuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKX08L3A+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPldvcmRyZXZlcnNlcjwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17d29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5yZXZlcnNlIFdvcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiV29yZHJldmVyc2VyIiwid29yZCIsInNldFdvcmQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsImRpdiIsImgzIiwiaW5wdXQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/wordreverser.js\n"));

/***/ })

});