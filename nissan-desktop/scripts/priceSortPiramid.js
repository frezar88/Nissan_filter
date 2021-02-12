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
