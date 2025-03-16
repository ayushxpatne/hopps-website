document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("citySelect");

    // Path to the cities.json file in Firebase Storage
    const citiesUrl = "https://firebasestorage.googleapis.com/v0/b/hopps-in/o/cities.json?alt=media&token=22f9dd50-ec87-41be-82e5-e5bb26010308";

    // Show loading option
    const loadingOption = document.createElement("option");
    loadingOption.textContent = "Loading cities...";
    loadingOption.disabled = true;
    loadingOption.selected = true;
    dropdown.appendChild(loadingOption);

    // Fetch cities data from Firebase Storage JSON file
    fetch(citiesUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const cities = data.cities;

            // Clear loading option
            dropdown.innerHTML = '<option value="" disabled selected>Select your city</option>';

            // Add city options to the dropdown
            cities.forEach((city) => {
                const option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                dropdown.appendChild(option);
            });
        })
        .catch((error) => {
            console.error("Error fetching the cities:", error);
            dropdown.innerHTML = '<option value="" disabled selected>Error loading cities</option>';
        });

    // Form submission functionality
    let lastSubmissionTime = 0;
    const RATE_LIMIT = 60 * 1000; // 1 minute in milliseconds

    function submitForm() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        const now = Date.now();

        // Rate limiting: Prevents multiple submissions in a short time
        if (now - lastSubmissionTime < RATE_LIMIT) {
            alert("Please wait a minute before submitting again.");
            return;
        }

        // Form validation: Check if all fields are filled correctly
        if (!form.reportValidity()) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Show loading spinner and hide the button text
        document.getElementById("buttonText").classList.add("hidden");
        document.getElementById("spinner").classList.remove("hidden");

        // Create data object from form inputs
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            contactNumber: '+91 ' + formData.get('contactNumber'),
            city: formData.get('city')
        };

        // Send data to the specified URL
        fetch("https://script.google.com/macros/s/AKfycbxjnoB9zbpkjTYykMUUsNcqNYbFn1ZyNhUjR8B7mvpaGorNq1z6qrs4EZUEAriR0kYOew/exec", {
            mode: 'no-cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            // Check if the response is okay and return JSON data
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            lastSubmissionTime = now; // Update last submission time
            window.location.href = "thankyou.html"; // Redirect to confirmation page
        })
        .catch(error => {
            alert("There was an error. Please try again.");
            console.error('Error!', error.message);
        })
        .finally(() => {
            // Hide loading spinner and show button text again
            document.getElementById("buttonText").classList.remove("hidden");
            document.getElementById("spinner").classList.add("hidden");
            form.reset(); // Reset the form after submission
        });
    }
       // Bind the submitForm function to the button click event
       document.getElementById('submitButton').addEventListener('click', function() {
        event.preventDefault(); // Prevent default form submission behavior
        submitForm(); // Call the submitForm function
    });

    // // Bind the submitForm function to the form submission event
    // document.getElementById('contactForm').addEventListener('submit', function(event) {
       
    //     submitForm(); // Call the submitForm function
    // });
});
