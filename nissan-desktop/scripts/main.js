import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarListBuilder } from "./result-car.js";
import { response, ajax } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";
// import { ajax } from "./ajax.js";
priceRangeSlider(10000, 60000);
sideBar();
pyramidSortPrice();
ajax();


// ajax(response => {
//   new CreatCarListItem(response);
// });

// async function init(){
//   let res = await asyncAj();
// }
// init();

//result-auto
