const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/api/people/';

const fetchData = uri => new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', uri, true);
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error(`Chale salio mal: ${uri}`));
        }
    }
    xhttp.send();
});

const consumeAPI = async(uri) => {
    try {
        const data = await fetchData(uri);
        const character = await fetchData(data.results[9].url)
        console.log(data.count);
        console.log(character.vehicles);
    } catch (error) {
        console.error(error)
    }
}
console.log('Hola');
consumeAPI(API);
