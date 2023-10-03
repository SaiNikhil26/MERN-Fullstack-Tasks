// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("login-form");
//     const username = document.getElementById("username");
//     const password = document.getElementById("password");
//     const usernameError = document.getElementById("username-error");
//     const passwordError = document.getElementById("password-error");

//     form.addEventListener("submit", function (event) {
//         let valid = true;

//         if (username.value.trim() === "") {
//             usernameError.textContent = "Username is required.";
//             valid = false;
//         } else {
//             usernameError.textContent = "";
//         }

//         if (password.value.trim() === "") {
//             passwordError.textContent = "Password is required.";
//             valid = false;
//         } else {
//             passwordError.textContent = "";
//         }

//         if (!valid) {
//             event.preventDefault();
//         }
//     });
// });

let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        document.write('<h1 style="color: blue; text-align: center;">Thanks for Logging</h1>');
    });
}


