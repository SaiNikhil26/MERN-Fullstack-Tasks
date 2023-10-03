
        function validateForm() {
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const websiteInput = document.getElementById("website");
            const messageInput = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const websiteError = document.getElementById("websiteError");
            const messageError = document.getElementById("messageError");

            let isValid = true;

            // Reset previous error styles
            nameInput.classList.remove("error");
            emailInput.classList.remove("error");
            websiteInput.classList.remove("error");
            messageInput.classList.remove("error");

            nameError.textContent = "";
            emailError.textContent = "";
            websiteError.textContent = "";
            messageError.textContent = "";

            if (!nameInput.value.trim()) {
                nameInput.classList.add("error");
                nameError.textContent = "This field is required";
                isValid = false;
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add("error");
                emailError.textContent = "A valid email address is required";
                isValid = false;
            }

            const websitePattern = /^(http|https):\/\/[^ "]+$/;
            if (!websiteInput.value.trim() || !websitePattern.test(websiteInput.value.trim())) {
                websiteInput.classList.add("error");
                websiteError.textContent = "A valid URL is required";
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                messageInput.classList.add("error");
                messageError.textContent = "This field is required";
                isValid = false;
            }

            return isValid;
        }