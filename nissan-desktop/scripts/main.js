import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarBuilder } from "./resulCarListBuilder.js";
import { RequestData } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";

// import { Filter } from "./filter.js";


priceRangeSlider(10000, 150000);
sideBar();
// let f = new Filter();
pyramidSortPrice();

let requesCarsList = new RequestData().requestRun("car-in-stock/get-all-cars", "GET").then((data) => {
    let carList = new CarBuilder(data.cars[0], ".car-list__wrapper", ['id', 'style', 'class', 'data', 'src', 'href']);
    data.cars.forEach((car) => {
        
    });
})










