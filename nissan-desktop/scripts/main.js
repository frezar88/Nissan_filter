import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarBuilder } from "./resulCarListBuilder.js";
import { RequestData } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";
import { Filter } from "./filter.js";
import { btnShowMore } from "./buttonShowMoreCars.js";
pyramidSortPrice();


let form = document.querySelector('form');
let getFilters = new RequestData().requestRun("car-in-stock/react-filters", "GET").then((data) => {
    let f = new Filter(data.data);
    sideBar();
    priceRangeSlider(10000, 150000, ".slider-range", 0);
    priceRangeSlider(0, 700, ".slider-range", 1);


    let tradeInblock = document.querySelector('.filter-list__trade-in .filter-list__content')
    let priceBlock = document.querySelector('.filter-list__price .filter-list__content')
    tradeInblock.addEventListener('mouseup', () => {
        let chang = document.querySelector('.change')
        chang.click()
    })
    priceBlock.addEventListener('mouseup', () => {
        let chang = document.querySelector('.change')
        chang.click()
    })

});


//TODO: этот обработчик события должен быть вынесен за переменную getFilters. Так же он должен отправлять не только фильтры, для получения обработанных фильтров, но и метож получения тачек. Я его тебе добавил в конец, в переменную getCars.  Посмотри как он работает. По аналогии с фильтрами. Поиграйся с параметрами page and amount,  отредактируй рендеринг тачек.
form.addEventListener("change", function () {




    let newFormData = new FormData();

    let models = JSON.stringify(getModels());
    let engine = JSON.stringify(getEngine());
    let years = JSON.stringify(getYears());
    let drive = JSON.stringify(getDrive());
    let color = JSON.stringify(getColor());
    let state = JSON.stringify(getState())
    let price = JSON.stringify(getPrice())
    let transmission = JSON.stringify(getTransmission())
    newFormData.append('model', models);
    newFormData.append('year', years);
    newFormData.append('price', price.replace(/\s+/g, ""));
    newFormData.append('trade-in', []);
    newFormData.append('engine', engine);
    newFormData.append('transmission', transmission);
    newFormData.append('drive', drive);
    newFormData.append('state', state);
    newFormData.append('color', color);


    console.log(transmission);

    let setFilters = new RequestData().requestRun("car-in-stock/react-filters", "POST", newFormData).then((newData) => {
        console.log(newData);
        newData.data.forEach((element) => {

            for (const key in element) {
                switch (true) {
                    case element.id == "model":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.category + '"]');
                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                            } else {
                                input.parentElement.classList.remove("true");
                            }
                        });
                        break;
                    case element.id == "year":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.name + '"]');

                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                            } else {
                                input.parentElement.classList.remove("true");
                            }
                        });
                        break;
                    case element.id == "engine":
                        element.options.forEach((option) => {
                            option.options.forEach(element1 => {

                                let input = document.querySelector('input[name="' + element.id + '"][value="' + element1.name + '"]');

                                if (option.disabled || element1.disabled) {
                                    input.parentElement.classList.add("true");
                                } else {
                                    input.parentElement.classList.remove("true");
                                }
                            });
                        });
                        break;
                    case element.id == "transmission":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.name + '"]');

                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                            } else {
                                input.parentElement.classList.remove("true");
                            }
                        });
                        break;
                    case element.id == "drive":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.name + '"]');

                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                            } else {
                                input.parentElement.classList.remove("true");
                            }
                        });
                        break;
                    case element.id == "state":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.name + '"]');

                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                            } else {
                                input.parentElement.classList.remove("true");
                            }
                        });
                        break;
                    case element.id == "color":
                        element.options.forEach((option) => {

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.name + '"]');

                            if (option.disabled) {
                                input.parentElement.style.display = "none"
                            } else {
                                input.parentElement.style.display = "flex"
                            }
                        });
                        break;

                    default:
                        break;
                }
            }
        });
    });



    //TODO: перед отправкой запроса на тачки ОБЯЗАТЕЛЬНО в фильтры добавить 2 новых параметра. Поиграйся с ними.
    newFormData.append('page', 0);
    newFormData.append('amount', 20);

    let getCars = new RequestData().requestRun("car-in-stock/get-cars", "POST", newFormData).then((data) => {
        document.querySelector('.car-list__wrapper').innerHTML = '';
        btnShowMore(data.cars, 10, CarBuilder);
    });
});

function getModels() {
    let data = {
        'model': {}
    };
    let models = document.querySelectorAll('input[name="model"]:checked');
    models.forEach(model => {
        data.model[model.defaultValue] = [];
    });
    return data.model;
}

function getEngine() {
    let data = {
        'engine': {}
    };
    let engineValue = document.querySelectorAll('input[name="engine"]:checked');
    engineValue.forEach(engine => {
        if (engine.defaultValue == '1.5 дизель' || engine.defaultValue == '1.6 дизель' || engine.defaultValue == '2,4 турбодизель') {
            data.engine['дизель'] = [];
            data.engine['дизель'].push(engine.defaultValue)
        } else {
            data.engine['бензин'] = [];
            data.engine['бензин'].push(engine.defaultValue)}


    });
    return data.engine;
}

//TODO: Саня как видишь, методы, которые гкнерируют массив, идентичны. Попробуй сделать следующим образом. Создай метод, который будет принимать на вход параметр для ренерации, например function getArrayTypeData(array), где array - это year, drive, state, color and etc. дальше проверь, какой тип фильтра тебе надо свормировать, и если это массив, гони этот метод, с нужным параметром.  типа getArrayTypeData('year'), getArrayTypeData('drive')


function getYears() {
    let data = [];
    let domData = document.querySelectorAll('input[name="year"]:checked');
    domData.forEach(datum => {
        data.push(datum.defaultValue);
    });
    return data;
}
function getState() {
    let data = [];
    let domData = document.querySelectorAll('input[name="state"]:checked');
    domData.forEach(datum => {
        data.push(datum.defaultValue);
    });
    return data;
}
function getDrive() {
    let data = [];
    let domData = document.querySelectorAll('input[name="drive"]:checked');
    domData.forEach(datum => {
        data.push(datum.defaultValue);
    });
    return data;
}
function getColor() {
    let data = [];
    let domData = document.querySelectorAll('input[name="color"]:checked');
    domData.forEach(datum => {
        data.push(datum.defaultValue);
    });
    return data;
}
function getPrice() {
    let data = [];
    let domData = document.querySelectorAll('input[name="price"]');

    domData.forEach(datum => {
        data.push(datum.value);
    });
    return data;
}
function getTransmission() {
    let data = [];
    let domData = document.querySelectorAll('input[name="transmission"]:checked');

    domData.forEach(datum => {
        data.push(datum.value);
    });
    return data;
}




let requesCarsList = new RequestData().requestRun("car-in-stock/get-all-cars", "GET").then((data) => {

    console.log()
    data.cars.forEach(car => {

    });


    btnShowMore(data.cars, 15, CarBuilder);


});
