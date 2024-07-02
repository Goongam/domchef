import React from "dom-chef";

const handleClick = (e) => {
  // <button> was clicked
};

const el = (
  <div className="header">
    <button className="btn-link" onClick={handleClick}>
      Download1
    </button>
  </div>
);

document.body.appendChild(el);
