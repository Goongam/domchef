/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dom_chef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-chef */ \"./node_modules/dom-chef/index.js\");\n\nvar handleClick = function handleClick(e) {\n  window.scrollTo(0, 0);\n};\n// npm run build  -> bundle.js -> git push ->\n/*\r\nvar script = document.createElement('script');\r\nscript.src = 'https://goongam.github.io/domchef/dist/bundle.js';\r\ndocument.head.appendChild(script);\r\n코드 삽입\r\n*/\nvar el = /*#__PURE__*/dom_chef__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n  style: {\n    position: \"fixed\",\n    bottom: \"10px\",\n    right: \"10px\"\n  },\n  className: \"btn-link\",\n  onClick: handleClick\n}, \"^\");\ndocument.body.appendChild(el);\n\n//# sourceURL=webpack://domtest/./src/index.jsx?");

/***/ }),

/***/ "./node_modules/dom-chef/index.js":
/*!****************************************!*\
  !*** ./node_modules/dom-chef/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fragment: () => (/* binding */ Fragment),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   h: () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var svg_tag_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-tag-names */ \"./node_modules/svg-tag-names/index.js\");\n\nconst svgTags = new Set(svg_tag_names__WEBPACK_IMPORTED_MODULE_0__.svgTagNames);\nsvgTags.delete('a');\nsvgTags.delete('audio');\nsvgTags.delete('canvas');\nsvgTags.delete('iframe');\nsvgTags.delete('script');\nsvgTags.delete('video');\n// Copied from Preact\n// https://github.com/preactjs/preact/blob/1bbd687c13c1fd16f0d6393e79ea6232f55fbec4/src/constants.js#L3\nconst IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;\nconst isFragment = (type) => type === DocumentFragment;\nconst setCSSProps = (element, style) => {\n    for (const [name, value] of Object.entries(style)) {\n        if (name.startsWith('-')) {\n            element.style.setProperty(name, value);\n        }\n        else if (typeof value === 'number' && !IS_NON_DIMENSIONAL.test(name)) {\n            element.style[name] = `${value}px`;\n        }\n        else {\n            element.style[name] = value;\n        }\n    }\n};\nconst create = (type) => {\n    if (typeof type === 'string') {\n        if (svgTags.has(type)) {\n            return document.createElementNS('http://www.w3.org/2000/svg', type);\n        }\n        return document.createElement(type);\n    }\n    if (isFragment(type)) {\n        return document.createDocumentFragment();\n    }\n    return type(type.defaultProps);\n};\nconst setAttribute = (element, name, value) => {\n    if (value === undefined || value === null) {\n        return;\n    }\n    // Naive support for xlink namespace\n    // Full list: https://github.com/facebook/react/blob/1843f87/src/renderers/dom/shared/SVGDOMPropertyConfig.js#L258-L264\n    if (/^xlink[AHRST]/.test(name)) {\n        element.setAttributeNS('http://www.w3.org/1999/xlink', name.replace('xlink', 'xlink:').toLowerCase(), value);\n    }\n    else {\n        element.setAttribute(name, value);\n    }\n};\nconst addChildren = (parent, children) => {\n    for (const child of children) {\n        if (child instanceof Node) {\n            parent.appendChild(child);\n        }\n        else if (Array.isArray(child)) {\n            addChildren(parent, child);\n        }\n        else if (typeof child !== 'boolean'\n            && typeof child !== 'undefined'\n            && child !== null) {\n            parent.appendChild(document.createTextNode(child));\n        }\n    }\n};\n// These attributes allow \"false\" as a valid value\n// https://github.com/facebook/react/blob/3f8990898309c61c817fbf663f5221d9a00d0eaa/packages/react-dom/src/shared/DOMProperty.js#L288-L322\nconst booleanishAttributes = new Set([\n    // These attributes allow \"false\" as a valid value\n    'contentEditable',\n    'draggable',\n    'spellCheck',\n    'value',\n    // SVG-specific\n    'autoReverse',\n    'externalResourcesRequired',\n    'focusable',\n    'preserveAlpha',\n]);\nconst h = (type, attributes, ...children) => {\n    var _a;\n    const element = create(type);\n    addChildren(element, children);\n    if (element instanceof DocumentFragment || !attributes) {\n        return element;\n    }\n    // Set attributes\n    for (let [name, value] of Object.entries(attributes)) {\n        if (name === 'htmlFor') {\n            name = 'for';\n        }\n        if (name === 'class' || name === 'className') {\n            const existingClassname = (_a = element.getAttribute('class')) !== null && _a !== void 0 ? _a : '';\n            setAttribute(element, 'class', (existingClassname + ' ' + String(value)).trim());\n        }\n        else if (name === 'style') {\n            setCSSProps(element, value);\n        }\n        else if (name.startsWith('on')) {\n            const eventName = name.slice(2).toLowerCase().replace(/^-/, '');\n            element.addEventListener(eventName, value);\n        }\n        else if (name === 'dangerouslySetInnerHTML' && '__html' in value) {\n            element.innerHTML = value.__html;\n        }\n        else if (name !== 'key' && (booleanishAttributes.has(name) || value !== false)) {\n            setAttribute(element, name, value === true ? '' : value);\n        }\n    }\n    return element;\n};\n// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ur rong.\nconst Fragment = (typeof DocumentFragment === 'function' ? DocumentFragment : () => { });\n// Improve TypeScript support for DocumentFragment\n// https://github.com/Microsoft/TypeScript/issues/20469\nconst React = {\n    createElement: h,\n    Fragment,\n};\n// Improve CJS support\nconst createElement = h;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React);\n\n\n//# sourceURL=webpack://domtest/./node_modules/dom-chef/index.js?");

/***/ }),

/***/ "./node_modules/svg-tag-names/index.js":
/*!*********************************************!*\
  !*** ./node_modules/svg-tag-names/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   svgTagNames: () => (/* binding */ svgTagNames)\n/* harmony export */ });\n/**\n * List of known SVG tag names.\n *\n * @type {Array<string>}\n */\nconst svgTagNames = [\n  'a',\n  'altGlyph',\n  'altGlyphDef',\n  'altGlyphItem',\n  'animate',\n  'animateColor',\n  'animateMotion',\n  'animateTransform',\n  'animation',\n  'audio',\n  'canvas',\n  'circle',\n  'clipPath',\n  'color-profile',\n  'cursor',\n  'defs',\n  'desc',\n  'discard',\n  'ellipse',\n  'feBlend',\n  'feColorMatrix',\n  'feComponentTransfer',\n  'feComposite',\n  'feConvolveMatrix',\n  'feDiffuseLighting',\n  'feDisplacementMap',\n  'feDistantLight',\n  'feDropShadow',\n  'feFlood',\n  'feFuncA',\n  'feFuncB',\n  'feFuncG',\n  'feFuncR',\n  'feGaussianBlur',\n  'feImage',\n  'feMerge',\n  'feMergeNode',\n  'feMorphology',\n  'feOffset',\n  'fePointLight',\n  'feSpecularLighting',\n  'feSpotLight',\n  'feTile',\n  'feTurbulence',\n  'filter',\n  'font',\n  'font-face',\n  'font-face-format',\n  'font-face-name',\n  'font-face-src',\n  'font-face-uri',\n  'foreignObject',\n  'g',\n  'glyph',\n  'glyphRef',\n  'handler',\n  'hkern',\n  'iframe',\n  'image',\n  'line',\n  'linearGradient',\n  'listener',\n  'marker',\n  'mask',\n  'metadata',\n  'missing-glyph',\n  'mpath',\n  'path',\n  'pattern',\n  'polygon',\n  'polyline',\n  'prefetch',\n  'radialGradient',\n  'rect',\n  'script',\n  'set',\n  'solidColor',\n  'stop',\n  'style',\n  'svg',\n  'switch',\n  'symbol',\n  'tbreak',\n  'text',\n  'textArea',\n  'textPath',\n  'title',\n  'tref',\n  'tspan',\n  'unknown',\n  'use',\n  'video',\n  'view',\n  'vkern'\n]\n\n\n//# sourceURL=webpack://domtest/./node_modules/svg-tag-names/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.jsx");
/******/ 	
/******/ })()
;