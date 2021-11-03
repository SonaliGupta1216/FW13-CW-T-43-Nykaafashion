var scrollBtn = document.querySelector("#scrollTop");
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

var womenS = document.getElementById("Women");
var subMenu = document.getElementById("subMenu");
var More = document.getElementById("More");

More.addEventListener("mouseenter", function () {
  subMenu.style.display = "none";
  womenS.style.borderBottom = "none";
  womenS.style.color =  "black";
})


womenS.addEventListener("mouseenter", function () {
  subMenu.style.display = "block";
  womenS.style.borderBottom = "2px solid #fd7685";
  womenS.style.color =  "#fd7685";
});
