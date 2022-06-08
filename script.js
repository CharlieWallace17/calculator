const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const multiply = function(x, y) {
    return x * y;
};

const divide = function(x, y) {
    return x / y;
};

const operate = function(x, y, oper) {

    if(oper === '+') return add(x, y);
    if(oper === '-') return subtract(x, y); 
    if(oper === '*') return multiply(x, y); 
    if(oper === '/') return divide(x, y); 
};