let output = document.querySelector(".output p");
let numbers = [];
let operator;

document.querySelectorAll(".number").forEach(item => {
    item.addEventListener("click", function(e){
        output.textContent += Number(e.target.textContent);
    })
})

document.querySelectorAll(".operator").forEach(item => {
    item.addEventListener("click", function(e){
        operator = e.target.textContent;
        numbers.push(Number(output.textContent));
        output.textContent = "";
    })
})

document.querySelector(".equals").addEventListener("click",  function(){
    numbers.push(Number(output.textContent));
    output.textContent = operate();
});

document.querySelector(".clear").addEventListener("click", function(){
    output.textContent = "";
    numbers = [];
});

function add(){
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function subtract(){
    return numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
}

function multiply(){
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
}

function divide(){
    return numbers.reduce((accumulator, currentValue) => accumulator / currentValue);
}

function operate(){
    if (operator == "+"){
        return add();
    }

    if (operator == "-"){
        return subtract();
    }

    if (operator == "/"){
        return divide();
    }

    if (operator == "*"){
        return multiply();               
    }
}