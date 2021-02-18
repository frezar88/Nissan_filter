import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarBuilder } from "./resulCarListBuilder.js";
import { RequestData } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";

import { Filter } from "./filter.js";


// priceRangeSlider(10000, 150000);

let f = new Filter();
pyramidSortPrice();
sideBar();

let requesCarsList = new RequestData().requestRun("car-in-stock/get-all-cars", "GET").then((data) => {
    
    data.cars.forEach((car) => {
        let carList = new CarBuilder(car, ".car-list__wrapper", ['id', 'style', 'class', 'data', 'src', 'href', 'alt']);
    });
})










