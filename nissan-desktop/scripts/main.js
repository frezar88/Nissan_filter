import { priceRangeSlider } from "./range-slider.js"
import { sideBar } from "./side-bar.js";
// import { asyncAj, response } from "./ajax.js";
// import { ajax } from "./ajax.js";
// import { CreatCarListItem } from "./result-car.js";
priceRangeSlider()
sideBar();

// ajax(response => {
//   new CreatCarListItem(response);
// });


// async function init(){
//   let res = await asyncAj();
// }
// init();

//result-auto
const resultPyramid = document.getElementById("pyramid");
resultPyramid.addEventListener("click", () => {
  resultPyramid.classList.toggle("revers");
});
