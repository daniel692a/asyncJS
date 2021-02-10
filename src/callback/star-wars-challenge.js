const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://swapi.dev/api/people/';

const fetchData = (uri, callback) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', uri, true);//->Para conectarse a la API
    xhttp.onreadystatechange = event => {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Chale salio mal ${uri}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}
//Callbacks
fetchData(API, (error1, data1) => {
    if(error1) return console.error(error1);
    console.log(data1.results[0].url);
    console.log('Que la fuerza te acompañe perro');
});