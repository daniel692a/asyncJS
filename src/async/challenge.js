const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const consumeAPI = async(uri) =>{
    try {
        const data = await fetchData(uri);
        const character = await fetchData(`${uri}${data.results[0].id}`);
        const origin = await fetchData(`${character.origin.url}`);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension, origin.name);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
consumeAPI(API);
console.log('After');