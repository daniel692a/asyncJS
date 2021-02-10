const somethingWillHappen = () => new Promise((resolve, reject) =>{
    if(true){
        resolve('Hey');
    } else {
        reject(new Error('Chale, salio mal'));
    }
});

//Estructura de una promise
//Llamar a la función
//somethingWillHappen()
//then -> bloque de código que se ejecuta después de Llamar
//.then(response => console.log(response))
//catch -> el reject, el rechazo, nos lanzará los errores
//.catch(error => console.error(error));

const somethingWillHappen2 = () => new Promise((resolve, reject) => {
    if(true){
        setTimeout(() => {
            resolve('Todo correcto parce');
        }, 3000);
    } else {
        reject( new Error('Chale, salio mal'));
    }
});

//somethingWillHappen2()
//    .then(response => console.log(response))
//    .catch(error => console.error(error));

//Ejecutar varias promises al mismo tiempo
//Va a esperar que termine mi promise del timeout y mostrará el de ambos
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(error => console.error(error));