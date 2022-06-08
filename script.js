const add = (x, y) => parseInt(x) + parseInt(y);
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let oper;
let x;
let y;
let displayValue;

const operate = function(oper, x, y) {
    if(oper === '+') return add(x, y);
    if(oper === '-') return subtract(x, y); 
    if(oper === '*') return multiply(x, y); 
    if(oper === '/') return divide(x, y); 
};

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {

        if(button.textContent === 'dlt') {
            display.textContent = display.textContent.substring(0, (display.textContent.length - 1));
            displayValue = display.textContent;
            console.log(displayValue);
            console.log(x);
            console.log(oper);
            console.log(y);

        } else if(button.textContent === 'clr') {
            display.textContent = '';
            x = '';
            y = '';
            displayValue = display.textContent;
            console.log(displayValue);
            console.log(x);
            console.log(oper);
            console.log(y);

        } else if((button.textContent === '+') || (button.textContent === '-') || (button.textContent === '*') || (button.textContent === '/')) {
            
            oper = button.textContent;

            if(x === undefined) {
                x = display.textContent;
            } else {
                y = display.textContent;
            };

            display.textContent = '';
            displayValue = display.textContent;
            
            console.log(displayValue);
            console.log(x);
            console.log(oper);
            console.log(y);
        
        } else if(button.textContent === '=') {

            if(x === undefined) {
                x = display.textContent;
            } else {
                y = display.textContent;
            };

            display.textContent = `${operate(oper, x, y)}`;

            console.log(displayValue);
            console.log(x);
            console.log(oper);
            console.log(y);

        } else {
            display.textContent += button.textContent;
            displayValue = display.textContent;
            console.log(displayValue);
        }; 
    });
});






