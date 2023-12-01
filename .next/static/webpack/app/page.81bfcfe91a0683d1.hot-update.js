"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SortApp = ()=>{\n    _s();\n    const [numInputs, setNumInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sortedInputs, setSortedInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"asc\");\n    // Bubble sort algorithm\n    const sortInputs = (inputs, order)=>{\n        let sorted = [\n            ...inputs\n        ];\n        for(let i = 0; i < sorted.length; i++){\n            for(let j = 0; j < sorted.length - i - 1; j++){\n                if (order === \"asc\" && sorted[j] > sorted[j + 1] || order === \"desc\" && sorted[j] < sorted[j + 1]) {\n                    [sorted[j], sorted[j + 1]] = [\n                        sorted[j + 1],\n                        sorted[j]\n                    ];\n                }\n            }\n        }\n        return sorted;\n    };\n    // Update sortedInputs whenever inputs or sortOrder changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSortedInputs(sortInputs(inputs, sortOrder));\n    // setInputs(null)\n    }, [\n        inputs,\n        sortOrder\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6 bg-white rounded shadow-md w-80\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none\",\n                    type: \"number\",\n                    onChange: (e)=>setNumInputs(Number(e.target.value)),\n                    placeholder: \"Number of inputs\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                [\n                    ...Array(numInputs)\n                ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none\",\n                        type: \"text\",\n                        onChange: (e)=>setInputs([\n                                ...inputs,\n                                e.target.value\n                            ]),\n                        placeholder: \"Input \".concat(i + 1)\n                    }, i, false, {\n                        fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    className: \"w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none\",\n                    onChange: (e)=>setSortOrder(e.target.value),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"asc\",\n                            children: \"Ascending\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"desc\",\n                            children: \"Descending\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-gray-700\",\n                    children: [\n                        \"Sorted inputs: \",\n                        sortedInputs.join(\", \")\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Clear Sorted Data\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\TestCode\\\\app\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SortApp, \"8Sjz2vPGWWor7x4JtTokh+/J86k=\");\n_c = SortApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SortApp);\nvar _c;\n$RefreshReg$(_c, \"SortApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFFNUMsTUFBTUUsVUFBVTs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFDakQsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0Msd0JBQXdCO0lBQ3hCLE1BQU1XLGFBQWEsQ0FBQ04sUUFBa0JPO1FBQ3BDLElBQUlDLFNBQVM7ZUFBSVI7U0FBTztRQUN4QixJQUFLLElBQUlTLElBQUksR0FBR0EsSUFBSUQsT0FBT0UsTUFBTSxFQUFFRCxJQUFLO1lBQ3RDLElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJSCxPQUFPRSxNQUFNLEdBQUdELElBQUksR0FBR0UsSUFBSztnQkFDOUMsSUFDRSxVQUFXLFNBQVNILE1BQU0sQ0FBQ0csRUFBRSxHQUFHSCxNQUFNLENBQUNHLElBQUksRUFBRSxJQUM1Q0osVUFBVSxVQUFVQyxNQUFNLENBQUNHLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxJQUFJLEVBQUUsRUFDOUM7b0JBQ0EsQ0FBQ0gsTUFBTSxDQUFDRyxFQUFFLEVBQUVILE1BQU0sQ0FBQ0csSUFBSSxFQUFFLENBQUMsR0FBRzt3QkFBQ0gsTUFBTSxDQUFDRyxJQUFJLEVBQUU7d0JBQUVILE1BQU0sQ0FBQ0csRUFBRTtxQkFBQztnQkFDekQ7WUFDRjtRQUNGO1FBQ0EsT0FBT0g7SUFDVDtJQUVBLDJEQUEyRDtJQUMzRFosZ0RBQVNBLENBQUM7UUFFUk8sZ0JBQWdCRyxXQUFXTixRQUFRSTtJQUNuQyxrQkFBa0I7SUFFcEIsR0FBRztRQUFDSjtRQUFRSTtLQUFVO0lBRXRCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NELFdBQVU7b0JBQ1ZFLE1BQUs7b0JBQ0xDLFVBQVUsQ0FBQ0MsSUFBTWxCLGFBQWFtQixPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7b0JBQ25EQyxhQUFZOzs7Ozs7Z0JBRWI7dUJBQUlDLE1BQU14QjtpQkFBVyxDQUFDeUIsR0FBRyxDQUFDLENBQUNDLEdBQUdmLGtCQUM3Qiw4REFBQ0s7d0JBRUNELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xDLFVBQVUsQ0FBQ0MsSUFBTWhCLFVBQVU7bUNBQUlEO2dDQUFRaUIsRUFBRUUsTUFBTSxDQUFDQyxLQUFLOzZCQUFDO3dCQUN0REMsYUFBYSxTQUFlLE9BQU5aLElBQUk7dUJBSnJCQTs7Ozs7OEJBT1QsOERBQUNnQjtvQkFDQ1osV0FBVTtvQkFDVkcsVUFBVSxDQUFDQyxJQUFNWixhQUFhWSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7O3NDQUU1Qyw4REFBQ007NEJBQU9OLE9BQU07c0NBQU07Ozs7OztzQ0FDcEIsOERBQUNNOzRCQUFPTixPQUFNO3NDQUFPOzs7Ozs7Ozs7Ozs7OEJBRXZCLDhEQUFDUjtvQkFBSUMsV0FBVTs7d0JBQWdCO3dCQUNiWCxhQUFheUIsSUFBSSxDQUFDOzs7Ozs7OzhCQUVwQyw4REFBQ0M7OEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0dBOURNL0I7S0FBQUE7QUFnRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNvcnRBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtudW1JbnB1dHMsIHNldE51bUlucHV0c10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtzb3J0ZWRJbnB1dHMsIHNldFNvcnRlZElucHV0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZShcImFzY1wiKTtcblxuICAvLyBCdWJibGUgc29ydCBhbGdvcml0aG1cbiAgY29uc3Qgc29ydElucHV0cyA9IChpbnB1dHM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHNvcnRlZCA9IFsuLi5pbnB1dHNdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNvcnRlZC5sZW5ndGggLSBpIC0gMTsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAob3JkZXIgPT09IFwiYXNjXCIgJiYgc29ydGVkW2pdID4gc29ydGVkW2ogKyAxXSkgfHxcbiAgICAgICAgICAob3JkZXIgPT09IFwiZGVzY1wiICYmIHNvcnRlZFtqXSA8IHNvcnRlZFtqICsgMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIFtzb3J0ZWRbal0sIHNvcnRlZFtqICsgMV1dID0gW3NvcnRlZFtqICsgMV0sIHNvcnRlZFtqXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZDtcbiAgfTtcblxuICAvLyBVcGRhdGUgc29ydGVkSW5wdXRzIHdoZW5ldmVyIGlucHV0cyBvciBzb3J0T3JkZXIgY2hhbmdlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgc2V0U29ydGVkSW5wdXRzKHNvcnRJbnB1dHMoaW5wdXRzLCBzb3J0T3JkZXIpIGFzIG5ldmVyW10pO1xuICAgIC8vIHNldElucHV0cyhudWxsKVxuXG4gIH0sIFtpbnB1dHMsIHNvcnRPcmRlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LW1kIHctODBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtYi00IHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bUlucHV0cyhOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiBpbnB1dHNcIlxuICAgICAgICAvPlxuICAgICAgICB7Wy4uLkFycmF5KG51bUlucHV0cyldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtYi00IHRleHQtZ3JheS03MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRzKFsuLi5pbnB1dHMsIGUudGFyZ2V0LnZhbHVlXSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YElucHV0ICR7aSArIDF9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbWItNCB0ZXh0LWdyYXktNzAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTb3J0T3JkZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFzY1wiPkFzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCI+RGVzY2VuZGluZzwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgU29ydGVkIGlucHV0czoge3NvcnRlZElucHV0cy5qb2luKFwiLCBcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uPkNsZWFyIFNvcnRlZCBEYXRhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTb3J0QXBwIiwibnVtSW5wdXRzIiwic2V0TnVtSW5wdXRzIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwic29ydGVkSW5wdXRzIiwic2V0U29ydGVkSW5wdXRzIiwic29ydE9yZGVyIiwic2V0U29ydE9yZGVyIiwic29ydElucHV0cyIsIm9yZGVyIiwic29ydGVkIiwiaSIsImxlbmd0aCIsImoiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiQXJyYXkiLCJtYXAiLCJfIiwic2VsZWN0Iiwib3B0aW9uIiwiam9pbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});