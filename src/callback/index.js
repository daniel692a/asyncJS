const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(2, 4, sum));

const date = callback => {
    console.log(new Date);
    setTimeout(() => {
        callback(new Date);
    }, 3000);
}
const printDate = dateNow => console.log(dateNow);

date(printDate);