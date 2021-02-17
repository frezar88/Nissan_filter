// class Dom{
// static  craet(ele){
//     return document.createElement(ele)
//   }
// }
// console.log(Dom.craet('sdr'))


export class CarBuilder {
  carContainer;
  path;
  car;
  acceptAtributsList;
  constructor(car, path,acceptKeys) {
    this.path = path;
    this.car = car;
    this.acceptAtributsList = acceptKeys
    this.carContainer = this.createCar(this.car, this.path);
    this.append(path, this.carContainer);
  }

  createElement(settings) {
    let dom = document.createElement(settings.elem);
    this.createElementSettings(dom, settings)
    console.log(this.carContainer);
    return dom;
  }

  createElementSettings(dom, settings) {


    for (let key in settings.attributes) {
      this.acceptAtributsList.includes(key) ? dom.setAttribute(key, settings.attributes[key]) : console.log('Введен неизвестный атрибут')

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

    this.createItem();
    this.addImg(this.car.image);
    this.addTitle(this.car.name, this.car.year, this.car.win ? this.car.win : "");
    // this.addFeatures(this.car.engine_capacity, this.car.power, this.car.transmission, this.car.drive);
    // this.addStatus(this.car.status ? this.car.status : '');
    this.addPrice(this.car.price);
    // this.addAdvansedPrice();
    // this.addLocation(this.car.location ? this.car.location : 'Минск');
    return this.carContainer;
  }
  createItem() {
    // let div = document.createElement("div");
    // div.classList.add("car-list__item");
    return this.carContainer = this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__item'
      },
    });
  }
  addImg(image) {

    //this.carContainer.innerHTML += "<div class='car-list__img'><img src='http://dev.mitsubishi.by" + image + "'></div>";
    return this.carContainer.append(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__img'
      },
      'inner': [{
        'elem': 'img',
        'attributes': {
          'src': 'http://dev.mitsubishi.by' + image
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
    this.carContainer.innerHTML += '<div class="car-list__features"><div><img src="img/car-list-item/malfunction-indicador.svg" alt="#"><p>' + engine_capacity + ' л.,' + power + ' л.с, Бензин </p></div><div><img src="img/car-list-item/manual-transmission.svg" alt="#"><p>' + transmission + ' </p></div><div><img src="img/car-list-item/axle.svg" alt="#"><p>' + drive + '</p></div></div>';
    return this.carContainer;
  }
  addStatus(status) {
    if (status) this.carContainer.innerHTML += "<div class='car-list__in-stock car-list__status'><span></span><span>" + status + "</span></div>";
    else this.carContainer.innerHTML += "<div class='car-list__in-stock car-list__status'><span style='background:red;'></span><span>" + 'Нет в наличии' + "</span></div>";

    return this.carContainer;
  }
  addPrice(price) {
    //this.carContainer.innerHTML += '<div class="car-list__price"><div class="car-list__price-from">от <span>' + price + '</span> BYN</div><div class="car-list__price-to">до <span>' + (price - 25000) + '</span> BYN</div></div>';
    return this.carContainer.appendChild(this.createElement({
      'elem': 'div',
      'attributes': {
        'class': 'car-list__price'
      },
      'inner': [{
        'elem': 'h3',
        'inner': '',
      }, {
        'elem': 'div',
        'inner': [{ 'elem': 'span', 'inner': '' },
        { 'elem': 'span', 'inner': '' }]
      }],
    }))
  }

  addAdvansedPrice() {
    this.carContainer.innerHTML += '<div class="car-list__more-price"><a href="#"><img src="img/round-info-button.svg" alt="#"><p>Подробнее о цене</p></a></div>';
    return this.carContainer;
  }
  addLocation(location) {
    this.carContainer.innerHTML += '<div class="car-list__location"><img src="img/ScreenShot4.png" alt="#"><span>' + location + '</span></div>';
    return this.carContainer;
  }
  append(path, content) {
    document.querySelector(path).appendChild(content);
  }

}