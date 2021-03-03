

export class CarBuilder {
  carContainer;
  path;
  car;
  
  constructor(car, path) {
    this.path = path;
    this.car = car;
    
    this.carContainer = this.createCar(this.car, this.path);
    this.append(path, this.carContainer);
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

  createCar() {

    this.createItem(this.car.id);
    this.addImg(this.car.image);
    this.addTitle(this.car.name, this.car.year, this.car.win ? this.car.win : "");
    this.addFeatures(this.car.engine_capacity, this.car.power, this.car.transmission, this.car.drive);
    this.addStatus('В наличии');
    this.addPrice(this.car.price);
    this.addAdvansedPrice();
    this.addLocation(this.car.location ? this.car.location : 'Минск');
    return this.carContainer;
  }
  createItem(id) {
    return this.carContainer = this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__item',
        'data-car-id': id
      },
    });
  }
  addImg(image) {
    return this.carContainer.append(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__img'
      },
      'inner': [{
        'elem': 'img',
        'attributes': {
          'src': 'http://dev.mitsubishi.by/'+ image
        },
      }]
    }))
  }
  addTitle(CarName, year, win) {
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__title'
      },
      'inner': [{
        'elem': 'h3',
        'inner': CarName,
      }, {
        'elem': 'div',
        'inner': [{ 'elem': 'span', 'inner': year },
        { 'elem': 'span', 'inner': win }]
      }],
    }))
  }
  addFeatures(engine_capacity, power, transmission, drive) {
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class':'car-list__features'
      }, 'inner': [{
        'elem': 'div',
        'inner': [{
          'elem': 'img',
          'attributes': {
            'src': 'img/car-list-item/malfunction-indicador.svg',
            'alt':'#'
          }
        }, {
            'elem': 'p',
            'inner': engine_capacity + ' л., ' + power + ' л.с, Бензин' 
        }]
      }, {
          'elem': 'div',
          'inner': [{
            'elem': 'img',
            'attributes': {
              'src': 'img/car-list-item/manual-transmission.svg',
              'alt': '#'
            }
          }, {
            'elem': 'p',
              'inner': transmission 
          }]
        }, {
          'elem': 'div',
          'inner': [{
            'elem': 'img',
            'attributes': {
              'src': 'img/car-list-item/axle.svg',
              'alt': '#'
            }
          }, {
            'elem': 'p',
              'inner': drive
          }]
      }]
    }))
  }
  
  addStatus(status) {
    //if (status) this.carContainer.innerHTML += "<div class='car-list__in-stock car-list__status'><span></span><span>" + status + "</span></div>";
    //else this.carContainer.innerHTML += "<div class='car-list__in-stock car-list__status'><span style='background:red;'></span><span>" + 'Нет в наличии' + "</span></div>";
    let stat;
    if (status) {
      stat = {'elem': 'div','attributes': {'class': 'car-list__in-stock car-list__status'}, 'inner': [{'elem': 'span'}, {'elem': 'span','inner': status}]}
    } else { stat = { 'elem': 'div', 'attributes': { 'class': 'car-list__in-stock car-list__status' }, 'inner': [{ 'elem': 'span','attributes':{'style':`background:red`} }, { 'elem': 'span', 'inner': 'Нет в наличии' }] }}
    return this.carContainer.appendChild(this.createElement(stat))
  }
  addPrice(price) {
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__price car-list__price'
      },
      'inner': [{
        'elem': 'div',
        'attributes': {
          'class': 'car-list__price car-list__price-from'
        }, 'inner': [{
          'elem': 'span',
          'inner': ' от '
        }, {
          'elem': 'span',
          'inner': price
        }, {
          'elem': 'span',
          'inner': ' BYN '
        }
        ]
      }, {
        'elem': 'div',
        'attributes': {
          'class': 'car-list__price car-list__price-to'
        }, 'inner': [{
          'elem': 'span',
          'inner': 'до '
        }, {
          'elem': 'span',
          'inner': (price - 10000)
        }, {
          'elem': 'span',
          'inner': ' BYN '
        }]
      }],
    }))
  }

  addAdvansedPrice() {
    //<p>Подробнее о цене</p></a></div>';
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__more-price'
      },
      'inner': [{
        'elem': 'a',
        'attributes': {
          'href': '#'
        },
        'inner': [{
          'elem': 'img',
          'attributes': {
            'src': 'img/round-info-button.svg',
            'alt':'#'
          }
        }, {
            'elem': 'p',
            'inner': 'Подробнее о цене'
        }],
      }],
    }))
  }

  addLocation(location) {
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__location'
      }, 'inner': [{
        'elem': 'img',
        'attributes': {
          'src': 'img/ArrowLocation.png',
          'alt':'#'
        }
      }, {
          'elem': 'span',
          'inner': location
      }]
    }))
  }
 
 append(path, content) {
   document.querySelector(path).appendChild(content);
  }
  
  

}