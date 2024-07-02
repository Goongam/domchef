import React from "dom-chef";

const handleClick = (e) => {
  window.scrollTo(0, 0);
};

const handleChange = (e) => {
  const value = e.target.value;
  document.querySelector(
    "#primary > ytd-rich-grid-renderer"
  ).style = `--ytd-rich-grid-slim-items-per-row:${value}`;
};
// npm run build  -> bundle.js -> git push ->
/*
var script = document.createElement('script');
script.src = 'https://goongam.github.io/domchef/dist/bundle.js';
document.head.appendChild(script);
코드 삽입
*/
const el = (
  <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
    <input
      style={{ width: "30px" }}
      type="number"
      onChange={handleChange}
    ></input>
    <button className="btn-link" onClick={handleClick}>
      ^
    </button>
  </div>
);

document.body.appendChild(el);
