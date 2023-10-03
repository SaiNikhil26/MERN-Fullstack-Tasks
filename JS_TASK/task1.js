let rev = document.querySelector('#reverse');
rev.addEventListener("click", reversenumber);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        reversenumber();
    }
});

function reversenumber() {
    let number = parseInt(document.querySelector("#number").value);
    let reversed = 0;

    while (number !== 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    let result = document.querySelector("#result");
    result.innerHTML = `<span>The reversed number is ${reversed}</span>`;
}
