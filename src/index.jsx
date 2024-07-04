import React from "dom-chef";

const handleClick = (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const el = (
  <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
    <img className="thum" src="" />
    <button className="btn-link" onClick={handleClick}>
      ^
    </button>
  </div>
);

document.addEventListener("mousemove", function (event) {
  let target = event.target;
  if (target.tagName.toLowerCase() === "img") {
    document.querySelector(".thum").src = target.src;
  } else {
    document.querySelector(".thum").src = "";
  }
});

document.body.appendChild(el);
