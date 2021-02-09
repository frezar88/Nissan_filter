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
  const buttonSideBarShowWhiteArrow = document.querySelector(
    ".button__filter-show"
  );
  const sideBar = document.querySelector(".filter");
  const buttonCloseSideBar = document.querySelector(".filter-close span");
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
}
