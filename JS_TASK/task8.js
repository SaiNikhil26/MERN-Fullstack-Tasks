document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const firstName = document.getElementById("validationServer01").value;
    const lastName = document.getElementById("validationServer02").value;
    const email = document.getElementById("validationServerEmail").value;
    const phone = document.getElementById("validationServerPhone").value;
    const address = document.getElementById("validationServerAddress").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("validationServerAge").value;
    const languagesKnown = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
        languagesKnown.push(checkbox.value);
    });
    const state = document.getElementById("validationServerState").value;
    const country = document.getElementById("validationServerCountry").value;

    // Process the data (you can replace this with your own logic)
    // For demonstration purposes, simply display the form data
    const formData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Email": email,
        "Phone": phone,
        "Address": address,
        "Gender": gender ? gender.value : "Not specified",
        "Age": age,
        "Languages Known": languagesKnown.join(", "),
        "State": state,
        "Country": country
    };

    // Display the form data
    alert("Form submitted successfully!\n\n" + JSON.stringify(formData, null, 2));
});