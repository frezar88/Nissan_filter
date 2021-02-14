export function priceRangeSlider(min, max) {
  const priceSlider = document.getElementById("slider-range");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");
  const inputs = [minPrice, maxPrice];
  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [min + 10000, max - 10000],
      tooltips: true,
      connect: true,
      padding: 0,
      range: {
        min: min,
        max: max,
      },
    });

    priceSlider.noUiSlider.on("update", function (values, handle) {
      let x = Math.round(values[handle]);
      let d = x.toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
      inputs[handle].value = d;
    });
    const setPriceSlider = (i, value) => {
      let arr = [null, null];
      let v = value;
      v = v.replace(/\s+/g, "");
      arr[i] = v;
      priceSlider.noUiSlider.set(arr);
    };
    inputs.forEach((element, index) => {
      element.addEventListener("change", (event) => {
        setPriceSlider(index, event.currentTarget.value);
      });
    });
  }
}
