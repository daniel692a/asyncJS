const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/api/people/';

const fetchData = uri => new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', uri, true);
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error(`Chale, salio mal: ${uri}`));
        }
    }
    xhttp.send();
});

fetchData(API)
    .then(response => {
        console.log(response.count);
        return fetchData(response.results[0].url);
    })
    .then(response => {
        console.log(response.name);
    })
    .catch(error => console.error(error));

