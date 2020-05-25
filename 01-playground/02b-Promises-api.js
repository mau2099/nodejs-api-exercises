let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';
function fetchData(url) {
  return new Promise((resolve, reject), () => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          reject(new Error('Error: ' + url));
        }
      }
    };
    xhttp.send();
  });
}

fetchData(API, function (error1, data1) {
  if (error1) return console.log(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.log(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.log(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
