

export class Filter {

  json = {
    "status": true, "data": [
      {
        "id": "model", "name": "Модель", "type": "ems",
        "options":
          [
            {
              "category": "ASX", "disabled": false,
              "options":
                [
                  { "name": "Intense", "disabled": false },
                  { "name": "Black Edition", "disabled": false },
                  { "name": "Instyle", "disabled": false }
                ]
            },
            {
              "category": "Pajero Sport", "disabled": false, "options":
                [
                  { "name": "Instyle +", "disabled": false },
                  { "name": "Instyle+", "disabled": false }
                ]
            },
            {
              "category": "L200", "disabled": false, "options":
                [
                  { "name": "Invite +", "disabled": false },
                  { "name": "Intense+", "disabled": false }
                ]
            },
            {
              "category": "Outlander", "disabled": false, "options":
                [
                  { "name": "Intense+", "disabled": false },
                  { "name": "Black Edition", "disabled": false },
                  { "name": "Ultimate", "disabled": false },
                  { "name": "Ultimate (7 мест)", "disabled": false },
                  { "name": "Ultimate (beige)", "disabled": false },
                  { "name": "Instyle 4WD", "disabled": false },
                  { "name": "GT", "disabled": false }
                ]
            }
          ]
      },
      {
        "id": "year", "name": "Год", "type": "ms", "options":
          [
            { "name": "2020", "disabled": false },
            { "name": "2021", "disabled": false }
          ]
      },
      {
        "id": "price", "name": "Цена", "type": "rs", "options":
          { "min": "65050", "max": "118000", "valueSign": "BYN", "disabled": false }
      },
      {
        "id": "trade-in", "name": "Выгода по trade-in", "type": "rs", "options":
          { "min": "0", "max": "7000", "valueSign": "BYN", "disabled": false }
      },
      {
        "id": "engine", "name": "Двигатель", "type": "ems", "options":
          [
            {
              "category": "бензин", "disabled": false, "options":
                [
                  { "name": "2,0", "disabled": false },
                  { "name": "2,4", "disabled": false },
                  { "name": "3,0", "disabled": false }
                ]
            },
            {
              "category": "дизель", "disabled": false, "options":
                [
                  { "name": "2,4 турбодизель", "disabled": false }
                ]
            }
          ]
      },
      {
        "id": "transmission", "name": "КПП", "type": "ms", "options":
          [
            { "name": "автомат (CVT)", "disabled": false },
            { "name": "автомат", "disabled": false },
            { "name": "механика", "disabled": false }
          ]
      },
      {
        "id": "drive", "name": "КПП", "type": "ms", "options":
          [
            { "name": "полный привод (4WD)", "disabled": false },
            { "name": "передний привод (2WD)", "disabled": false }
          ]
      },
      {
        "id": "state", "name": "Состояние", "type": "ms", "options":
          [
            { "name": "Новый", "disabled": false }
          ]
      },
      {
        "id": "color", "name": "Цвет", "type": "cs", "options":
          [
            { "name": "синий металлик", "color": "#0000ff", "disabled": false },
            { "name": "коричневый металлик", "color": "#663300", "disabled": false },
            { "name": "оранжевый перламутр", "color": "#ff9900", "disabled": false },
            { "name": "красный металлик", "color": "#ff0000", "disabled": false },
            { "name": "белый базовый", "color": "#ffffff", "disabled": false },
            { "name": "черный металлик", "color": "#000000", "disabled": false },
            { "name": "серый металлик", "color": "#515151", "disabled": false },
            { "name": "белый перламутр", "color": "#FFFAFA", "disabled": false },
            { "name": "серебристый металлик", "color": "#C0C0C0", "disabled": false }
          ]
      }
    ]
  }
  filterContaner;
  generalBlockFilter;
  constructor() {
    this.generalBlockCreate(this.json.data)

    this.assembler()
    this.show(this.filterContaner)

  }

  assembler(data1) {
    this.createGeneralBlock()


    return this.filterContaner
  }

  createElement(settings) {
    let dom = document.createElement(settings.elem);
    this.createElementSettings(dom, settings)

    return dom;
  }

  createElementSettings(dom, settings) {

    for (let key in settings.attributes) {
      dom.setAttribute(key, settings.attributes[key])
    }
    if (typeof settings.inner == "object") {
      settings.inner.forEach(inner => {
        dom.append(this.createElement(inner))
      })
    } else {
      dom.innerText = settings.inner ? settings.inner : '';
    }
  }

  generalBlockCreate(data) {
    data.forEach(element => {
      this.createGeneralBlock(element.name, element.id)
      console.log(element)
      this.append('.filter-list__wrapper form', this.filterContaner)
      
      if (element.name == 'Модель') {
        element.options.forEach(element => {
          this.createCheckBox(element.category)
         this.append('.filter-list__model .filter-list__content', this.filterContaner)
       });
      }
      if (element.name == 'Год') {
        element.options.forEach(element => {
          this.createCheckBox(element.name)
          
          this.append('.filter-list__year .filter-list__content', this.filterContaner)
        });
      }
      if (element.name == 'Цена') {
        for (const key in element.options) {
          if (key == 'min'){
            this.createRange()
            this.append('.filter-list__price .filter-list__content', this.filterContaner)
          }
        }
      }
      
    });
  }

  createGeneralBlock(id, key) {
    return this.filterContaner = this.createElement({
      'elem': 'div',
      'attributes': { 'class': 'filter-list__' + key + ' filter-list-block' },
      'inner': [
        { 'elem': 'span', 'attributes': { 'class': 'accordion' }, 'inner': id },
        { 'elem': 'div', 'attributes': { 'class': 'filter-list__content' }, 'inner': [{ 'elem': 'div', 'attributes': { 'class': 'additionally-close' } }] },
      ]
    });
  }
  createCheckBox(value) {
    return this.filterContaner = this.createElement({
      'elem': 'div',
      'attributes': { 'class': 'filter-list__item' }
      , 'inner': [{
        'elem': 'label',
        'attributes': { 'name': 'model', 'value': value }, 'inner': [{ 'elem': 'input', 'attributes': { type: 'checkbox' } }, { 'elem': 'span', 'inner': value }]
      }]
    })
  }
  createRange() {
    return this.filterContaner = this.createElement({
      'elem': 'div',
      'attributes': {
        'class':'filter-list__item'
      }
      
      
    })
  }










  append(path, content) {
    document.querySelector(path).append(content);
  }
  show(z) {
    console.log(z)

    let xz = document.querySelector('.filter-list__model filter-list-block')
    console.log(xz)


  }
}
