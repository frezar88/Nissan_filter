let response = "";
export function ajax(callback) {
  let request = new XMLHttpRequest();

  request.open("GET", "https://mitsubishi.by/car-in-stock/get-all-cars", true);
  request.send();
  request.addEventListener("readystatechange", function() {
    if (request.readyState == 4 && request.status == 200) {
      response = JSON.parse(request.responseText);
      callback(response);
    }

  });
}

export async function asyncAj(callback) {

  return new Promise((res, rej) => {
    let request = new XMLHttpRequest();

    request.open("GET", "https://mitsubishi.by/car-in-stock/get-all-cars", true);
    request.send();
    request.addEventListener("readystatechange", function () {
      if (request.readyState == 4 && request.status == 200) {
        response = JSON.parse(request.responseText);
        res(response);
      } else {
        rej(request.status);
      }
    });

  });
  
}

