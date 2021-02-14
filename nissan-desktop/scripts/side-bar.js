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
        if (window.innerWidth < 768) {
          setTimeout(() => {
            this.scrollIntoView({ block: "center", behavior: "smooth" });
          }, 200);
        }
      }
    });
    if (window.innerWidth > 768) {
      acc[i].click();
    }
  }
 

  function filterColorSetOverflow() {
    let color = document.getElementById("accColor");
    color.addEventListener("click", function () {
      let content = this.nextElementSibling;
      if (color.classList.value == "accordion active") {
        setTimeout(() => {
          content.style.overflow = "unset";
        }, 90);
      }
      if (color.classList.value == "accordion") {
        content.style.overflow = "hidden";
      }
    });
  }
  filterColorSetOverflow();
  //
  function advanseCloseBar() {
    const advansBarClose = document.getElementsByClassName(
      "additionally-close"
    );
    if (window.innerWidth <= 768) {
      for (let i = 0; i < advansBarClose.length; i++) {
        advansBarClose[i].addEventListener("click", function () {
          acc[i].click();
        });
      }
    }
  }
  advanseCloseBar();
  ////////////////
  let filter = document.querySelector(".filter");
  const body = document.querySelector("body");
  function watchFilterStatus() {
    window.addEventListener("resize", () => {
      let x = filter.style.display;
      if (innerWidth > 768 && innerWidth != 768) {
        filter.style.display = "inline-block";
        body.classList.remove("lock-position");
      }
      if (innerWidth <= 768) {
        if (x == "inline-block") {
          filter.style.display = "none";
        }
        if (x == "block") {
          filter.style.display = "block";
        }
      }
    });
  }
  watchFilterStatus();
  const buttonSideBarShowWhiteArrow = document.querySelector(
    ".button__filter-show"
  );
  const sideBar = document.querySelector(".filter");
  const buttonCloseSideBar = document.querySelector(".filter-close img");

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
