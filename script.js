let output = document.querySelector(".output p");

function add(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function subtract(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
}

function multiply(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function divide(...numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator / currentValue);
}

function operate(operator, ...numbers){
    return (operator(...numbers));
}

output.textContent = operate(multiply, 1, 2, 5, 10);