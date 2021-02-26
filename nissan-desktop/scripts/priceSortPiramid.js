export function pyramidSortPrice() {
  let x = [""];
  const resultPyramid = document.getElementById("pyramid");
  resultPyramid.addEventListener("click", () => {
    if (x.length < 3) {
      x.push("1");
    } else x = [""];
    function classAdd() {
      if (x.length == 2) {
        resultPyramid.classList.toggle("pyramid-activ");
        let priceCar = document.querySelectorAll('.car-list__price .car-list__price-from span:nth-child(2)')
        for (let i = 0; i < priceCar.length; i++) {
          
          let ell = priceCar[i].parentNode.parentNode.parentNode
          let or=0
          or--
          
          ell.style.order = or
          console.log(ell)
        }
        
        
      }
      if (x.length == 3) {
        resultPyramid.classList.toggle("pyramid-revers");
      }
      if (x.length == 1) {
        resultPyramid.classList.toggle("pyramid-activ");
        resultPyramid.classList.toggle("pyramid-revers");
      }
    }
    classAdd();
  });
}
