const add = (x, y) => parseInt(x) + parseInt(y);
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let oper;
let x;
let y;
let lastResult;

const operate = function(oper, x, y) {
    
    if(y === '0') {
        alert('Nuh-uh-uh!');
        return clear();

    } else if(oper === '+') {
        let sum = add(x, y);
        return (sum.toString().length >= 12) ? sum.toExponential() : sum;

    } else if(oper === '-') {
        let sub = subtract(x, y);
        return (sub.toString().length >= 12) ? sub.toExponential() : sub;

    } else if(oper === '*') {
        let mult = multiply(x, y);
        return (mult.toString().length >= 12) ? mult.toExponential() : mult;

    } else if(oper === '/') {
        let divi = divide(x, y);
        return (divi.toString().length >= 12) ? divi.toExponential() : divi;
    };
};

const clear = function() {
    display.textContent = '';
    x = undefined;
    y = undefined;
    oper = undefined;
    lastResult = undefined;
};

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {

        if(button.textContent === 'dlt') {
            display.textContent = display.textContent.substring(0, (display.textContent.length - 1));

        } else if(button.textContent === 'clr') {
            clear();

        } else if((button.textContent === '+') || (button.textContent === '-') || (button.textContent === '*') || (button.textContent === '/')) {

            if(x === undefined && y === undefined && lastResult !== undefined && oper !== undefined) {
                x = lastResult;
                y = display.textContent;
                display.textContent = operate(oper, x, y);
                lastResult = display.textContent;
                x = undefined;
                y = undefined;
                oper = button.textContent;
            } else if(x === undefined) {
                x = display.textContent;
                display.textContent = '';
                oper = button.textContent;
            } else if(y === undefined) {
                y = display.textContent;
                display.textContent = operate(oper, x, y);
                lastResult = display.textContent;
                x = undefined;
                y = undefined;
                oper = button.textContent;
            };
        
        } else if(button.textContent === '=') {

            if(x === undefined && y === undefined && lastResult !== undefined && oper !== undefined) {
                x = lastResult;
                y = display.textContent;
                display.textContent = operate(oper, x, y);
            } else if(y === undefined) {
            
            y = display.textContent;

            display.textContent = operate(oper, x, y);
            lastResult = display.textContent;
            x = undefined;
            y = undefined;
            };

        } else {

            if(display.textContent === lastResult) {
                display.textContent = '';
                display.textContent += button.textContent;
            } else {
            display.textContent += button.textContent;
            };
        }; 
    });
});






