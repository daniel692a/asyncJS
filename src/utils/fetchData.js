let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = uri => new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', uri, true);
    xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4){
            (xhttp.status === 200)
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error(`Chale salio mal: ${uri}`));
        }
    });
    xhttp.send();
});

module.exports = fetchData;