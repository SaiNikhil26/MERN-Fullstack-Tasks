let submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", sortString);

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        sortString();
    }
});

function sortString() {
    const inputString = document.querySelector("#string").value;
    const charArray = inputString.split('');
    const sortedArray = charArray.sort();
    const sortedString = sortedArray.join('');
    let result = document.querySelector("#result");
    result.innerHTML = `<h3>The alphabetical order string is:</h3><span>${sortedString}</span>`;
}
