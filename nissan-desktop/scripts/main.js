import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarListBuilder } from "./result-car.js";
import { dataContent, ajaxFetch } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";
import {} from "./filterFunction.js";

priceRangeSlider(10000, 150000);
sideBar();
pyramidSortPrice();
ajaxFetch("https://mitsubishi.by/car-in-stock/get-all-cars", "POST").then(() => {
    let carList = new CarListBuilder(dataContent.cars, ".car-list__wrapper");
    let x = document.querySelectorAll(".count");
    x.forEach(element => {
        element.innerHTML = document.querySelectorAll(".car-list__wrapper .car-list__item").length;
    });
});






