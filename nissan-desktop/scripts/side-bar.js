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
        content.style.maxHeight = content.scrollHeight+50+"px";
        
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
    let color = document.querySelector(".filter-list__color .accordion");
    color.addEventListener("click", function () {
      let content = this.nextElementSibling;
      if (color.classList.value == "accordion active") {
        setTimeout(() => {
          content.style.overflow = "unset";
        }, 90);
      }
      if (color.classList.value == "accordion") {
        content.style.overflow = "hidden";
      };
      
    });
    let colorr = document.querySelector(
      ".filter-list__color .filter-list__content"
    );
    
    window.addEventListener("resize", () => {
      if (colorr.classList.value == "accordion") {
        coll.style.overflow = "hidden";
      }
      
    })
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
  

  function presBtnCloseSideBarAndpresBtnShowSideBar() {
    const sideBar = document.querySelector(".filter");
    const buttonCloseSideBar = document.querySelector(".filter-close img");
    const buttonAddaptivShowCar = document.querySelector('.btn-show')
    buttonSideBarShowWhiteArrow.addEventListener("click", () => {
      sideBar.style.display = "block";
      body.classList.add("lock-position");
    });
    
    buttonAddaptivShowCar.addEventListener("click", () => {
      sideBar.style.display = "none";
      body.classList.remove("lock-position");
    });
    buttonCloseSideBar.addEventListener("click", () => {
      sideBar.style.display = "none";
      body.classList.remove("lock-position");
    });
  }
  presBtnCloseSideBarAndpresBtnShowSideBar();

  let resetBtn = document.querySelector('.filter-list__clearbtn button')
  resetBtn.addEventListener('click', function () {
    let allCheckFilter = document.querySelectorAll('.form input[type="checkbox"]:checked')
    allCheckFilter.forEach(element => {
      element.click()
    });
  })
}
