const doSomethingAsync = () => new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Todo correcto parce'), 3000)
    : reject(new Error('Chale, salio mal'));
});

const doSomething = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    } catch (err) {
        console.error(err);
    }
}
console.log('Before');
doSomething();
console.log('After');