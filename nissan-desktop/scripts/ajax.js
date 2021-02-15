export let dataContent = {};
export async function ajaxFetch(url, method) {
  let response = await fetch(url, {
    method: method,
  });
  if (!response.ok) return console.error("Error");
  let data = await response.json();

  return new Promise(function (respone, reject) {
    dataContent = data;
    respone()
  })
}


