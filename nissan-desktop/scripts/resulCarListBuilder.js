
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
  createCar() {
    this.createItem();
    this.addImg(this.car.image);
    this.addTitle(this.car.name, this.car.year, this.car.win ? this.car.win : "");
    this.addFeatures(this.car.engine_capacity, this.car.power, this.car.transmission, this.car.drive);
    this.addStatus(this.car.status ? this.car.status : '');
    this.addPrice(this.car.price);
    this.addAdvansedPrice();
    this.addLocation(this.car.location ? this.car.location : 'Минск');
    return this.carContainer;
  }

  createItem() {
    let div = document.createElement("div");
    div.classList.add("car-list__item");
    return (this.carContainer = div);
  }
  addImg(image) {
    this.carContainer.innerHTML += "<div class='car-list__img'><img src='http://dev.mitsubishi.by" + image + "'></div>";
    return this.carContainer;
  }
  addTitle(CarName, year, win) {
    this.carContainer.innerHTML += '<div class="car-list__title"><h3>' + CarName + '</h3><div><span>' + year + '</span><span>' + win + '</span></div></div>';
    return this.carContainer;
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
    this.carContainer.innerHTML += '<div class="car-list__price"><div class="car-list__price-from">от <span>' + price + '</span> BYN</div><div class="car-list__price-to">до <span>' + (price - 25000) + '</span> BYN</div></div>';
    return this.carContainer;
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
