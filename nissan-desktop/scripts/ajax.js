
export let response = "";
// export function ajax(callback) {
//   let request = new XMLHttpRequest();

//   request.open("GET", "https://mitsubishi.by/car-in-stock/get-all-cars", true);

//   request.addEventListener("readystatechange", function () {
//     if (request.readyState == 4 && request.status == 200) {
//       response = JSON.parse(request.responseText);
      
//       function callback(response){};
//     }
//   });
//   request.send();
// }



export function ajax() {
  var request = new XMLHttpRequest();
  let response = "";
  request.open("GET", "https://mitsubishi.by/car-in-stock/get-all-cars", true);

  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      // console.log(request);
      // console.log(JSON.parse(request.responseText));
      response = JSON.parse(request.responseText);
      
      
    } 
  });
  request.send();
  return response;
}


// export async function asyncAj() {
//   return new Promise((res, rej) => {
//     let request = new XMLHttpRequest();

//     request.open(
//       "GET",
//       "https://mitsubishi.by/car-in-stock/get-all-cars",
     
//     );
    
//     request.addEventListener("readystatechange", function () {
//       if (request.readyState == 4 && request.status == 200) {
//         response = JSON.parse(request.responseText);
//         res(response);
//       } else {
//         rej(request.status);
//       }
//     });
//     request.send();
//   });
// }
