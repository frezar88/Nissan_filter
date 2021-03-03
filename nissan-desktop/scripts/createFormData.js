export function CreateFormData() {
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
    // console.log(tradeIn)


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

        for (let i = 0; i < domData.length; i++) {
            let dd = domData[i].value
            if (domData[0].value.replace(/\s+/g, "") == 10000 && domData[1].value.replace(/\s+/g, "") == 150000) {
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

    function getTradeIn() {
        let data = [];
        let domData = document.querySelectorAll('input[name="trade-in"]');

        for (let i = 0; i < domData.length; i++) {
            let dd = domData[i].value
            if (domData[0].value == 0 && domData[1].value.replace(/\s+/g, "") == 7000) {
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
    return newFormData
}