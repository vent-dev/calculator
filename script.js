function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(operator, x, y){
    switch(operator){
        case '+':
            console.log(add(x, y));
            break;
        case '-':
            console.log(subtract(x, y));
            break;
        case '*':
            console.log(multiply(x, y));
            break;
        case '/':
            console.log(divide(x, y));
            break;
    }
}

operate('*', 2, 3);