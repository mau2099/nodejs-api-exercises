let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url) {
  return new Promise((resolve, reject) => {
    if (url == '') reject(new Error('url not provided'));
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText));
        } else {
          reject(new Error('Error :-> ' + url));
        }
      }
    };
    xhttp.send();
  });
}

const asyncFetch = async () => {
  try {
    const rdmId = await Math.floor(Math.random() * Math.floor(20));
    const data = await fetchData(API);
    const character = await fetchData(`${API}${data.results[rdmId].id}`);
    const location = await fetchData(`${character.origin.url}`);
    console.log(rdmId);
    console.log('info count -> ', data.info.count);
    console.log('character name ->', character.name);
    console.log('fetching dimension ->', character.origin);
    console.log('dimension -', location.dimension);
  } catch (err) {
    console.log('-->', err);
  }
};

console.log('before async');
asyncFetch();
console.log('after async');
