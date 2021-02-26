import { priceRangeSlider } from "./range-slider.js";
import { sideBar } from "./side-bar.js";
import { CarBuilder } from "./resulCarListBuilder.js";
import { RequestData } from "./ajax.js";
import { pyramidSortPrice } from "./priceSortPiramid.js";
import { Filter } from "./filter.js";
import { CreateElementResultCarAndBtnShowMore } from "./CreateElementResultCarAndBtnShowMore.js";
import { countAuto, callBackCountAut } from "./countAuto.js";


let form = document.querySelector('form');
let getFilters = new RequestData().requestRun("car-in-stock/react-filters", "GET").then((data) => {
    console.log(data)
    let f = new Filter(data.data);
    let modelBlock = document.querySelector('.filter-list__model.filter-list-block')

    modelBlock.setAttribute('style', 'order:-1;')
    sideBar();
    
    priceRangeSlider(10000, 150000, ".slider-range", 0);
    priceRangeSlider(0, 20000, ".slider-range", 1);
    countAuto()

    
    let carinstock = document.querySelector('.cars-in-stock__container')

    carinstock.addEventListener('mouseup', () => {
        let chang = document.querySelector('.change')
        setTimeout(() => {
            chang.click()
        }, 200);

    })
    


});


//TODO: этот обработчик события должен быть вынесен за переменную getFilters. Так же он должен отправлять не только фильтры, для получения обработанных фильтров, но и метож получения тачек. Я его тебе добавил в конец, в переменную getCars.  Посмотри как он работает. По аналогии с фильтрами. Поиграйся с параметрами page and amount,  отредактируй рендеринг тачек.
form.addEventListener("change", function () {
    callBackCountAut()
    
    
    let newFormData = new FormData();

    let models = JSON.stringify(getModels());
    let engine = JSON.stringify(getEngine());
    let years = JSON.stringify(getYears());
    let drive = JSON.stringify(getDrive());
    let color = JSON.stringify(getColor());
    let state = JSON.stringify(getState())
    let price = JSON.stringify(getPrice())
    let tradeIn = JSON.stringify(getTradeIn())
    let transmission = JSON.stringify(getTransmission())
    newFormData.append('model', models);
    newFormData.append('year', years);
    newFormData.append('price', price.replace(/\s+/g, ""));
    newFormData.append('trade-in', tradeIn.replace(/\s+/g, ""));
    newFormData.append('engine', engine);
    newFormData.append('transmission', transmission);
    newFormData.append('drive', drive);
    newFormData.append('state', state);
    newFormData.append('color', color);


    //console.log(tradeIn);

    let setFilters = new RequestData().requestRun("car-in-stock/react-filters", "POST", newFormData).then((newData) => {
        console.log(newData);
        newData.data.forEach((element) => {

            for (const key in element) {

                switch (true) {
                    case element.id == "model":
                        element.options.forEach((option) => {
                            let h4 = document.querySelector('.filter-list__complete-set .filter-list__content h4[name="' + option.category + '"')

                            let input = document.querySelector('input[name="' + element.id + '"][value="' + option.category + '"]');
                            if (option.disabled) {
                                input.parentElement.classList.add("true");
                                if (h4 != null) {
                                    h4.classList.add('true')
                                }
                            } else {
                                input.parentElement.classList.remove("true");
                                if (h4 != null) {
                                    h4.classList.remove('true')
                                }
                            }
                            option.options.forEach(comlect => {
                                let input = document.querySelector('input[name="' + option.category + '"][value="' + comlect.name + '"]');

                                if (!input) {
                                    return
                                } else {
                                    if (comlect.disabled) {
                                        input.parentElement.classList.add("true");
                                    } else {
                                        input.parentElement.classList.remove("true");
                                    }

                                }

                            });


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
                                console.log()
                                let input = document.querySelector('input[name="' + option.category + '"][value="' + element1.name + '"]');

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
    newFormData.append('amount', 15);

    let getCars = new RequestData().requestRun("car-in-stock/get-cars", "POST", newFormData).then((data) => {
        document.querySelector('.car-list__wrapper').innerHTML = '';
        CreateElementResultCarAndBtnShowMore(data.cars, CarBuilder);

    });
});

function getModels() {
    let data = {
        'model': {}
    };
    let complectInput = document.querySelectorAll('.filter-list__complete-set input:checked')
    let models = document.querySelectorAll('input[name="model"]:checked');
    models.forEach(model => {
        data.model[model.defaultValue] = [];
    });
    complectInput.forEach(compl => {
        data.model[compl.name] = []
        for (let i = 0; i < complectInput.length; i++) {
            if (compl.name == complectInput[i].name) {
                data.model[compl.name].push(complectInput[i].defaultValue)
            }
        }
    });
    return data.model;
}

function getEngine() {
    let data = {
        'engine': {}
    };
    let engineValue = document.querySelectorAll('.filter-list__engine input:checked');
    console.log(engineValue)
    engineValue.forEach(engine => {
        data.engine[engine.name] = []
        for (let i = 0; i < engineValue.length; i++) {
            if (engine.name == engineValue[i].name) {
                data.engine[engine.name].push(engineValue[i].defaultValue)
            }
        }
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

function getTradeIn() {
    let data = [];
    let domData = document.querySelectorAll('input[name="trade-in"]');

    for (let i = 0; i < domData.length; i++) {
        let dd = domData[i].value
        if (domData[0].value == 0 && domData[1].value.replace(/\s+/g, "") == 20000) {
            break
        }
        if (domData[0].value.replace(/\s+/g, "") == domData[1].value.replace(/\s+/g, "")) {
            break
        }
        else {
            data.push(dd);
        }
    }
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

pyramidSortPrice();




// let requesCarsList = new RequestData().requestRun("car-in-stock/get-all-cars", "GET").then((data) => {

//     console.log()
//     data.cars.forEach(car => {


//     });
//     CreateElementResultCarAndBtnShowMore(data.cars, CarBuilder);



// });
