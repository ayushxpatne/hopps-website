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
            // if (!response.ok) {
            //     throw new Error("Network response was not ok");
            // }
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
          name: form.name.value,
          email: form.email.value,
          contactNumber: form.contactNumber.value,
          city: form.city.value
      };
  
      // Send data to the specified URL
      fetch("https://script.google.com/macros/s/AKfycbzeF0m00e1lpqad_FIE5sCYI-us_6AkaSF0N3zRtcUoVLLTeUMQ9acncutBxpC6MbLmMg/exec", {
          method: "POST",
          mode: 'no-cors',
          headers: {
              "Content-Type": "text/plain"
          },
              body: JSON.stringify(data)
          })
          .then(response => {
              if (!response.ok) {
                  console.error("Network response was not ok");
              }
              return response.text(); // Parse response as plain text
          })
          .then(text => {
              lastSubmissionTime = now; // Update last submission time
              window.location.href = "thankyou.html"; // Redirect to confirmation page
          })
          // .catch(error => {
          //     alert("There was an error. Please try again.");
          //     console.error('Error!', error.message);
          // })
          .finally(() => {
              // Hide loading spinner and show button text again
              document.getElementById("buttonText").classList.remove("hidden");
              document.getElementById("spinner").classList.add("hidden");
              form.reset(); // Reset the form after submission
          });
      }
      
      // Bind the submitForm function to the button click event
      document.getElementById('submitButton').addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default form submission behavior
          submitForm(); // Call the submitForm function
      });

    

    // // Bind the submitForm function to the form submission event
    // document.getElementById('contactForm').addEventListener('submit', function(event) {
       
    //     submitForm(); // Call the submitForm function
    // });
});
