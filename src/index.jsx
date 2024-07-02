import React from "dom-chef";

const handleClick = (e) => {
  window.scrollTo(0, 0);
};
// npm run build  -> bundle.js -> git push ->
/*
var script = document.createElement('script');
script.src = 'https://goongam.github.io/domchef/dist/bundle.js';
document.head.appendChild(script);
코드 삽입
*/
const el = (
  <button
    style={{ position: "fixed", bottom: "10px", right: "10px" }}
    className="btn-link"
    onClick={handleClick}
  >
    ^
  </button>
);

document.body.appendChild(el);
