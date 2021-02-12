const renderJedi = (name) =>{
    let h3 = document.createElement('h3');
    h3.innerHTML=name;
    document.body.appendChild(h3);
}
fetch('https://swapi.dev/api/people/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json() )
.then(data => {
    const count = document.querySelector('#people');
    count.innerHTML = `Characters: ${data.count}`;
    const characters = data.results;
    characters.forEach(e => renderJedi(e.name) );
})