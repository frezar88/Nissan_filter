import { priceRangeSlider, priceSlider, updateRangeInput } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarBuilder } from "./resulCarListBuilder.js";
import { RequestData } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";
import { Filter } from "./filter.js";
import { CreateElementResultCarAndBtnShowMore } from "./CreateElementResultCarAndBtnShowMore.js";
import { countAuto, callBackCountAut } from "./countAuto.js";
import { CreateFormData } from "./createFormData.js"
import { blockedFilters } from "./BlockedNoActiveFilters.js"
let page=0

let form = document.querySelector('form');
let getFilters = new RequestData().requestRun("car-in-stock/react-filters", "GET").then((data) => {
    let createFilters = new Filter(data.data);
    // console.log(data.data)
    sideBar();
    priceRangeSlider(10000, 400000, ".slider-range", 0);
    priceRangeSlider(0, 7000, ".slider-range", 1);
    countAuto()
    updateRangeInput(0, data.data[2].options.min, data.data[2].options.max)
    priceSlider[0].noUiSlider.reset()
    updateRangeInput(1, data.data[3].options.min, data.data[3].options.max)
    priceSlider[1].noUiSlider.reset()
 
 });

form.addEventListener("change", function () {
    let inpMin = document.querySelectorAll('.minPrice')
    let inpMax = document.querySelectorAll('.maxPrice')
    
    callBackCountAut()
    let newFormData = CreateFormData();
    let postFilters = new RequestData().requestRun("car-in-stock/react-filters", "POST", newFormData).then((newData) => {
        console.log(newData.data)
        
        blockedFilters(newData.data)
        // 
        newData.data.forEach(element => {
            for (const key in element) {
                // if (element.id == 'price') {
                //     priceSlider[0].noUiSlider.reset()
                //     updateRangeInput(0, newData.data[2].options.min, newData.data[2].options.max)
                // }
        //         if (element.id == 'trade-in') {
                     
        //             updateRangeInput(1, newData.data[3].options.min, newData.data[3].options.max)
        //         }
            }
        });
      
        let inputs = document.querySelectorAll('.filter__wrapper input[class="inp"]:checked')
        inputs.forEach(element => {
            element.addEventListener('click', function () {
                setTimeout(() => {
                    priceSlider[0].noUiSlider.reset()
                    priceSlider[1].noUiSlider.reset()
                }, 400);
                
            })
        });
        // if (!inputs.length) {
        //     priceSlider[0].noUiSlider.reset()
        //     priceSlider[1].noUiSlider.reset()
        // }
        
        priceSlider[0].noUiSlider.set([+inpMin[0].value.replace(/\s+/g, ""), +inpMax[0].value.replace(/\s+/g, "")]);
        priceSlider[1].noUiSlider.set([+inpMin[1].value.replace(/\s+/g, ""), +inpMax[1].value.replace(/\s+/g, "")]);
        
    });
    
    newFormData.append('page', page);
    newFormData.append('amount', 15);
    
    let getCars = new RequestData().requestRun("car-in-stock/get-cars", "POST", newFormData).then((data) => {
        

        let inputsState = document.querySelectorAll('.filter-list__state input')

        inputsState.forEach(element => {
            if (element.defaultValue == 'Новый' && element.checked == true) {
                let fdsfds = document.querySelectorAll('.true')
                fdsfds.forEach(element => {
                    element.classList.add('bu')

                });

            }
            if (element.defaultValue == 'Б/У' && element.checked == true) {
                let fdsfds = document.querySelectorAll('.true')
                fdsfds.forEach(element => {
                    element.classList.add('new')
                });
            }

        });



        let carsArray = data.cars
        console.log(carsArray)
        if (page==0) {
            document.querySelector('.car-list__wrapper').innerHTML = ''; 
        }
        CreateElementResultCarAndBtnShowMore(carsArray, CarBuilder);
        if (data.cars.length!=15) {
            page=0
        }
        return page

    });
});
let btnMore = document.querySelector('.result-footer button')
btnMore.addEventListener('mousedown', () => {
    
    let chang = document.querySelector('.change')
    setTimeout(() => {
        chang.click()
    }, 500);
    page++
    
})
pyramidSortPrice();



        





    



