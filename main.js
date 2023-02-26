'use strict'

let num1 = +prompt('Введіть значення NUM1',0);
let num2 = +prompt('Введіть значення NUM2',0);
let sign = prompt('Введіть знак арифметичної операції (+ , - , / , *)');

const sum = () => num1 + num2;
const mul = () => num1 * num2;
const div = () => num1 / num2;
const sub = () => num1 - num2;

const calculateFunction = () => {
    switch(sign){
        case '+':
            if(!isNaN(num1) && !isNaN(num2)) alert(sum());
            else alert('Error');
        break;
        case '-':
            if(!isNaN(num1) && !isNaN(num2)) alert(sub());
            else alert('Error');
        break;
        case '*':
            if(!isNaN(num1) && !isNaN(num2)) alert(mul());
            else alert('Error');
        break;
        case '/':
            if(!isNaN(num1) && !isNaN(num2) && num2 != 0) alert(div());
            else alert('Error');
        break;
        default:
            alert('Ooops');
    }
}
calculateFunction();