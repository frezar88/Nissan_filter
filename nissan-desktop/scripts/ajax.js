
export class RequestData {
  constructor() {
  }
  async requestRun(url, method,body) {
    let domain = 'http://dev.mitsubishi.by/'+ url,
      meth = method
    let response = await fetch(domain, {
      method: method,
      headers: {
                
            },
      body: body,
    })
    if (!response.ok) return console.error("Error");
    return response.json();
  }
}

