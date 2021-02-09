export function priceRangeSlider() {
  const priceSlider = document.getElementById("slider-range");

  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [2000, 5000],
      tooltips: true,
      connect: true,
      padding: 0,
      range: {
        min: 1000,
        max: 6000,
      },
    });

    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const inputs = [minPrice, maxPrice];

    priceSlider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
    const setPriceSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      priceSlider.noUiSlider.set(arr);
    };
    inputs.forEach((element, index) => {
      element.addEventListener("change", (event) => {
        setPriceSlider(index, event.currentTarget.value);
      });
    });
  }
}