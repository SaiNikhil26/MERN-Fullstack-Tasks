let multiply = document.querySelector("#multiply")
let divide = document.querySelector("#divide")

multiply.addEventListener("click",mul);
divide.addEventListener("click",div);

let num1 = document.querySelector("#number-1");
let num2 = document.querySelector("#number-2");

function mul()
{
    let res = num1.value * num2.value;
    let result = document.querySelector("#result");
    result.innerHTML = `<span>The result of multiplication is ${res}</span>`;
}

function div()
{
    let res = num1.value / num2.value;
    let result = document.querySelector("#result");
    result.innerHTML = `<span>The result of division is ${res}</span>`;
}