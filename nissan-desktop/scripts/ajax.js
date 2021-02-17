
export class RequestData {
  constructor() {
  }
  async requestRun(url, method) {
    let domain = 'https://mitsubishi.by/' + url,
      meth = method
    let response = await fetch(domain, {
      method: method,
    })
    if (!response.ok) return console.error("Error");
    return response.json();
  }
}


// export async function ajaxFetch(url, method) {
//   let domain = "https://mitsubishi.by/" + url
//   let response = await fetch(domain, {
//     method: method,
//   });
//   if (!response.ok) return console.error("Error");
//   return response.json();
// }