/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.js\");\n\n\n\n\nconst Layout = ({ children })=>{\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Determine if the current page is the login page\n    const isLoginPage = router.pathname === \"/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `flex h-screen overflow-hidden ${!isLoginPage ? \"with-sidebar\" : \"\"}`,\n        children: [\n            !isLoginPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n                lineNumber: 14,\n                columnNumber: 30\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `flex-1 flex flex-col ${!isLoginPage ? \"with-sidebar\" : \"\"}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                            style: {\n                                position: \"absolute\",\n                                top: 0,\n                                right: 0,\n                                margin: \"10px\"\n                            },\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"flex-1 overflow-y-auto\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Layout.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDZDtBQUNSO0FBRWhDLE1BQU1JLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR1AsMkRBQVVBO0lBQ3BDLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUV4QixrREFBa0Q7SUFDbEQsTUFBTU8sY0FBY0QsT0FBT0UsUUFBUSxLQUFLO0lBRXhDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsQ0FBQ0gsY0FBYyxpQkFBaUIsR0FBRyxDQUFDOztZQUNoRixDQUFDQSw2QkFBZSw4REFBQ04sZ0RBQU9BOzs7OzswQkFDekIsOERBQUNRO2dCQUFJQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQ0gsY0FBYyxpQkFBaUIsR0FBRyxDQUFDOztrQ0FDeEUsOERBQUNJO2tDQUVJTix5QkFDRyw4REFBQ087NEJBQU9DLFNBQVMsSUFBTWQsd0RBQU9BOzRCQUFJZSxPQUFPO2dDQUFFQyxVQUFVO2dDQUFZQyxLQUFLO2dDQUFHQyxPQUFPO2dDQUFHQyxRQUFROzRCQUFPO3NDQUFHOzs7Ozs7Ozs7OztrQ0FLN0csOERBQUNDO3dCQUFLVCxXQUFVO2tDQUNYUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyB0aGUgbG9naW4gcGFnZVxyXG4gICAgY29uc3QgaXNMb2dpblBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiAkeyFpc0xvZ2luUGFnZSA/ICd3aXRoLXNpZGViYXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgIHshaXNMb2dpblBhZ2UgJiYgPFNpZGViYXIgLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleC0xIGZsZXggZmxleC1jb2wgJHshaXNMb2dpblBhZ2UgPyAnd2l0aC1zaWRlYmFyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogSGVhZGVyIGNvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgb3Igb3RoZXIgZWxlbWVudHMgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJTaWRlYmFyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImlzTG9naW5QYWdlIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFyZ2luIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Sidebar = ()=>{\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.body.classList.toggle(\"sidebar-open\", sidebarOpen);\n    }, [\n        sidebarOpen\n    ]);\n    const closeSidebar = ()=>setSidebarOpen(false);\n    // Navigate and close sidebar\n    const navigateAndCloseSidebar = (path)=>{\n        router.push(path);\n        setSidebarOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20 ${sidebarOpen ? \"\" : \"hidden\"}`,\n                onClick: ()=>setSidebarOpen(false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setSidebarOpen(!sidebarOpen),\n                        className: `hamburger hamburger--spin ${sidebarOpen ? \"is-active\" : \"\"}`,\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"hamburger-box\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"hamburger-inner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sidebar\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col h-full text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    className: \"flex flex-col space-y-4 flex-grow\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"sidebar-link-text\",\n                                            onClick: ()=>navigateAndCloseSidebar(\"/dashboard\"),\n                                            href: \"/dashboard\",\n                                            passHref: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"\\uD83C\\uDFE0\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sidebar-link-text\",\n                                                    children: \"Dashboard\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"sidebar-icon\",\n                                            onClick: ()=>navigateAndCloseSidebar(\"/assets\"),\n                                            href: \"/assets\",\n                                            passHref: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"\\uD83D\\uDCBC\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sidebar-link-text\",\n                                                    children: \"Assets\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4 pb-12\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\components\\\\Sidebar.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNmO0FBQ1c7QUFFeEMsTUFBTUksVUFBVTtJQUNaLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNTyxTQUFTSixzREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ05PLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCTjtJQUNuRCxHQUFHO1FBQUNBO0tBQVk7SUFFaEIsTUFBTU8sZUFBZSxJQUFNTixlQUFlO0lBRTFDLDZCQUE2QjtJQUM3QixNQUFNTywwQkFBMEIsQ0FBQ0M7UUFDN0JQLE9BQU9RLElBQUksQ0FBQ0Q7UUFDWlIsZUFBZTtJQUNuQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ1U7Z0JBQUlDLFdBQVcsQ0FBQywyREFBMkQsRUFBRVosY0FBYyxLQUFLLFNBQVMsQ0FBQztnQkFBRWEsU0FBUyxJQUFNWixlQUFlOzs7Ozs7MEJBQzNJLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFPRCxTQUFTLElBQU1aLGVBQWUsQ0FBQ0Q7d0JBQ25DWSxXQUFXLENBQUMsMEJBQTBCLEVBQUVaLGNBQWMsY0FBYyxHQUFHLENBQUM7d0JBQ3hFZSxNQUFLO2tDQUNMLDRFQUFDQzs0QkFBS0osV0FBVTtzQ0FDWiw0RUFBQ0k7Z0NBQUtKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3hCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNQLDhEQUFDSztvQ0FBSUwsV0FBVTs7c0RBQ1gsOERBQUNmLGtEQUFJQTs0Q0FBQ2UsV0FBVTs0Q0FBb0JDLFNBQVMsSUFBTUwsd0JBQXdCOzRDQUFlVSxNQUFLOzRDQUFhQyxRQUFROzs4REFDaEgsOERBQUNIOzhEQUFLOzs7Ozs7OERBQ04sOERBQUNBO29EQUFLSixXQUFVOzhEQUFvQjs7Ozs7Ozs7Ozs7O3NEQUV4Qyw4REFBQ2Ysa0RBQUlBOzRDQUFDZSxXQUFVOzRDQUFlQyxTQUFTLElBQU1MLHdCQUF3Qjs0Q0FBWVUsTUFBSzs0Q0FBVUMsUUFBUTs7OERBQ3JHLDhEQUFDSDs4REFBSzs7Ozs7OzhEQUNOLDhEQUFDQTtvREFBS0osV0FBVTs4REFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLNUMsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTNDO0FBRUEsaUVBQWViLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NpZGViYXJPcGVuLCBzZXRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1vcGVuJywgc2lkZWJhck9wZW4pO1xyXG4gICAgfSwgW3NpZGViYXJPcGVuXSk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VTaWRlYmFyID0gKCkgPT4gc2V0U2lkZWJhck9wZW4oZmFsc2UpO1xyXG5cclxuICAgIC8vIE5hdmlnYXRlIGFuZCBjbG9zZSBzaWRlYmFyXHJcbiAgICBjb25zdCBuYXZpZ2F0ZUFuZENsb3NlU2lkZWJhciA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2gocGF0aCk7XHJcbiAgICAgICAgc2V0U2lkZWJhck9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTMwIGJhY2tkcm9wLWJsdXItc20gei0yMCAke3NpZGViYXJPcGVuID8gJycgOiAnaGlkZGVuJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3BlbihmYWxzZSl9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2lkZWJhck9wZW4oIXNpZGViYXJPcGVuKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc3BpbiAke3NpZGViYXJPcGVuID8gJ2lzLWFjdGl2ZScgOiAnJ31gfSBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IGZsZXgtZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInNpZGViYXItbGluay10ZXh0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGVBbmRDbG9zZVNpZGViYXIoJy9kYXNoYm9hcmQnKX0gaHJlZj1cIi9kYXNoYm9hcmRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+PoDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lkZWJhci1saW5rLXRleHRcIj5EYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInNpZGViYXItaWNvblwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlQW5kQ2xvc2VTaWRlYmFyKCcvYXNzZXRzJyl9IGhyZWY9XCIvYXNzZXRzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPvCfkrw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGViYXItbGluay10ZXh0XCI+QXNzZXRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQWRkaXRpb25hbCBsaW5rcyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJvdHRvbSBzZWN0aW9uIGZvciBzaWduIG91dCBvciBhZGRpdGlvbmFsIGFjdGlvbnMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBwYi0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMb2dvdXQgb3Igb3RoZXIgYWN0aW9ucyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlUm91dGVyIiwiU2lkZWJhciIsInNpZGViYXJPcGVuIiwic2V0U2lkZWJhck9wZW4iLCJyb3V0ZXIiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbG9zZVNpZGViYXIiLCJuYXZpZ2F0ZUFuZENsb3NlU2lkZWJhciIsInBhdGgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImJ1dHRvbiIsInR5cGUiLCJzcGFuIiwibmF2IiwiaHJlZiIsInBhc3NIcmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_hamburger_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/hamburger.css */ \"./styles/hamburger.css\");\n/* harmony import */ var _styles_hamburger_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_hamburger_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\stephen.huang\\\\my-projects\\\\portal-sample\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDWDtBQUNDO0FBRWhDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNKLDREQUFlQTtRQUFDSyxTQUFTRCxVQUFVQyxPQUFPO2tCQUN6Qyw0RUFBQ0osMERBQU1BO3NCQUNMLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0YWwvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9oYW1idXJnZXIuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/hamburger.css":
/*!******************************!*\
  !*** ./styles/hamburger.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();