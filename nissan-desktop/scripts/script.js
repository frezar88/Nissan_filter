// side-bar
const acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//
const buttonSideBarShowWhiteArrow = document.querySelector(
  ".button__side-bar-show"
);
const sideBar = document.querySelector(".side-bar");
const buttonCloseSideBar = document.querySelector(".side-bar-close");
const html = document.querySelector("html");

function presBtnShowSideBar() {
  buttonSideBarShowWhiteArrow.addEventListener("click", () => {
    sideBar.style.display = "block";
    html.style.overflow = "hidden";
  });
  buttonCloseSideBar.addEventListener("click", () => {
    sideBar.style.display = "none";
    html.style.overflow = "unset";
  });
}
presBtnShowSideBar();

//result-auto
const resultPyramid = document.getElementById("pyramid");

resultPyramid.addEventListener("click", () => {
  resultPyramid.classList.toggle("revers");
});
