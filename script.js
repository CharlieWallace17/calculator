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
        return (sum.toString().length >= 12) ? sum.toExponential(2) : sum;

    } else if(oper === '-') {
        let sub = subtract(x, y);
        return (sub.toString().length >= 12) ? sub.toExponential(2) : sub;

    } else if(oper === '*') {
        let mult = multiply(x, y);
        return (mult.toString().length >= 12) ? mult.toExponential(2) : mult;

    } else if(oper === '/') {
        let divi = divide(x, y);
        return (divi.toString().length >= 12) ? divi.toExponential(2) : divi;
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
                x = undefined;
                y = undefined;
                oper = undefined;

            } else if(y === undefined) {
                y = display.textContent;
                display.textContent = operate(oper, x, y);
                lastResult = display.textContent;
                x = undefined;
                y = undefined;
                oper = undefined;
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

const keys = document.addEventListener('keydown', event => {
    if(event.key === 'Backspace') {
        display.textContent = display.textContent.substring(0, (display.textContent.length - 1));

    } else if(event.key === 'Escape') {
        clear();

    } else if((event.key === '+') || (event.key === '-') || (event.key === '*') || (event.key === '/')) {

        if(x === undefined && y === undefined && lastResult !== undefined && oper !== undefined) {
            x = lastResult;
            y = display.textContent;
            display.textContent = operate(oper, x, y);
            lastResult = display.textContent;
            x = undefined;
            y = undefined;
            oper = event.key;

        } else if(x === undefined) {
            x = display.textContent;
            display.textContent = '';
            oper = event.key;

        } else if(y === undefined) {
            y = display.textContent;
            display.textContent = operate(oper, x, y);
            lastResult = display.textContent;
            x = undefined;
            y = undefined;
            oper = event.key;
        };
        
    } else if(event.key === '=' || event.key === 'Enter') {

        if(x === undefined && y === undefined && lastResult !== undefined && oper !== undefined) {
            x = lastResult;
            y = display.textContent;
            display.textContent = operate(oper, x, y);
            x = undefined;
            y = undefined;
            oper = undefined;

        } else if(y === undefined) {
            y = display.textContent;
            display.textContent = operate(oper, x, y);
            lastResult = display.textContent;
            x = undefined;
            y = undefined;
            oper = undefined;
        };

    } else if(event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '.') {

        if(display.textContent === lastResult) {
            display.textContent = '';
            display.textContent += event.key;

        } else {
        display.textContent += event.key;
        };
    }; 
 });

// document.addEventListener('keydown', (event) => {
//     console.log("event.key = " + event.key + "  " + "event.code = " + event.code);
// });

