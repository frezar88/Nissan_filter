export function sideBar() {
  const acc = document.getElementsByClassName("accordion");
  let i = 0;
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
    if (window.innerWidth > 768) {
      acc[i].click();
    }
  }
  //

  function advanseCloseBar() {
    const advansBarClose = document.getElementsByClassName(
      "additionally-close"
    );
    for (let i = 0; i < advansBarClose.length; i++) {
      advansBarClose[i].addEventListener("click", function () {
        acc[i].click();
      });
    }
  }
  advanseCloseBar();
  ////////////////

  const buttonSideBarShowWhiteArrow = document.querySelector(
    ".button__filter-show"
  );
  const sideBar = document.querySelector(".filter");
  const buttonCloseSideBar = document.querySelector(".filter-close span");
  const body = document.querySelector("body");

  function presBtnShowSideBar() {
    buttonSideBarShowWhiteArrow.addEventListener("click", () => {
      sideBar.style.display = "block";
      body.classList.add("lock-position");
    });
    buttonCloseSideBar.addEventListener("click", () => {
      sideBar.style.display = "none";
      body.classList.remove("lock-position");
    });
  }
  presBtnShowSideBar();
}
