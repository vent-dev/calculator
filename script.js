let output = document.querySelector(".output p");
let one = document.querySelector(".one").addEventListener("click", function(num){
    output.textContent = num.target.textContent;
})

let two = document.querySelector(".two").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let three = document.querySelector(".three").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let four = document.querySelector(".four").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let five = document.querySelector(".five").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let six = document.querySelector(".six").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let seven = document.querySelector(".seven").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let eight = document.querySelector(".eight").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})

let nine = document.querySelector(".nine").addEventListener("click", function(num){
    output.textContent += num.target.textContent;
})


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

// output.textContent = operate(multiply, 1, 2, 5, 10);