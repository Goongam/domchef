"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import React from 'dom-chef';

// const handleClick = e => {
// 	// <button> was clicked
// };

// const el = (
// 	<div className="header">
// 		<button className="btn-link" onClick={handleClick}>
// 			Download
// 		</button>
// 	</div>
// );
// console.log('asd');
// document.body.appendChild(el);

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hello, Babel with JSX!"));
};
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById("root"));