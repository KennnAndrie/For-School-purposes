document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submittedData = document.getElementById("submittedData");
    const backButton = document.getElementById("backButton");

    // Log to ensure the script is working
    console.log("JavaScript loaded!");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the form from submitting normally

        try {
           
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

           
            console.log("First Name: ", firstName);
            console.log("Last Name: ", lastName);
            console.log("Email: ", email);
            console.log("Message: ", message);

            // Check if all fields are filled
            if (!firstName || !lastName || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }

            // Display the submitted data
            document.getElementById("displayFirstName").innerText = firstName;
            document.getElementById("displayLastName").innerText = lastName;
            document.getElementById("displayEmail").innerText = email;
            document.getElementById("displayMessage").innerText = message;

            // Show confirmation display
            contactForm.style.display = "none";
            submittedData.style.display = "block";
        } catch (error) {
            console.error("Error during form submission: ", error);
        }
    });

    backButton.addEventListener("click", function () {
        // Ask if user wants to submit another
        const submitAgain = confirm("Do you want to submit again?");
        if (submitAgain) {
            contactForm.reset();
            submittedData.style.display = "none";
            contactForm.style.display = "block";
        } else {
            // Redirect to home
            window.location.href = "../index.html";
        }
    });
});
