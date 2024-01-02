document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("confirm-pwd").value;

    // Validate email, password, and confirm password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailErrorMessage = "";
    let passwordErrorMessage = "";
    let confirmPasswordErrorMessage = "";

    if (!emailRegex.test(email)) {
      emailErrorMessage = "Invalid email format";
    }
    if (password.length < 6) {
      passwordErrorMessage = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      confirmPasswordErrorMessage = "Passwords do not match";
    }

    // Display error messages or register user
    if (
      !emailErrorMessage &&
      !passwordErrorMessage &&
      !confirmPasswordErrorMessage
    ) {
      // Check if the email already exists in local storage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = storedUsers.find((user) => user.email === email);

      if (existingUser) {
        alert("Email already registered");
      } else {
        // Register the new user
        const newUser = { email, password };
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
        alert("Registration successful!");
        window.location.href = "./index.html"; // Redirect to login page after successful registration
      }
    } else {
      // Display error messages
      document.querySelector(".emailError").textContent = emailErrorMessage;
      document.querySelector(".emailError").style.color = "red";
      document.querySelector(".passwordError").textContent =
        passwordErrorMessage;
      document.querySelector(".passwordError").style.color = "red";
      document.querySelector(".confirmPasswordError").textContent =
        confirmPasswordErrorMessage;
      document.querySelector(".confirmPasswordError").style.color = "red";
    }
  });
