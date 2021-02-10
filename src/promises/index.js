const somethingWillHappen = () => new Promise((resolve, reject) =>{
    if(true){
        resolve('Hey');
    } else {
        reject(new Error('Chale, salio mal'));
    }
});

//Estructura de una promise
//Llamar a la función
somethingWillHappen()
//then -> bloque de código que se ejecuta después de Llamar
.then(response => console.log(response))
//catch -> el reject, el rechazo, nos lanzará los errores
.catch(error => console.error(error));