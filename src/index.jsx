import React from "dom-chef";

const handleClick = (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleChange = (e) => {
  const value = e.target.value;
  document.querySelector(
    "#primary > ytd-rich-grid-renderer"
  ).style = `--ytd-rich-grid-slim-items-per-row:${value}`;
};

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
