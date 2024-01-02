document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    // Validate email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailErrorMessage = "";
    let passwordErrorMessage = "";

    if (!emailRegex.test(email)) {
      emailErrorMessage = "Invalid email format";
    }
    if (password.length < 6) {
      passwordErrorMessage = "Password must be at least 6 characters";
    }

    // Retrieve user accounts from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered email and password match any stored user account
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    // Display error messages or perform login
    if (!emailErrorMessage && !passwordErrorMessage) {
      if (foundUser) {
        if (foundUser.role === "teacher") {
          window.location.href = "./teacher.html"; // Redirect to teacher page for a valid teacher login
        } else {
          window.location.href = "./student.html"; // Redirect to student page for a valid student login
        }
      } else {
        document.getElementById("loginError").textContent =
          "Invalid email or password";
        document.getElementById("loginError").style.color = "red";
      }
    } else {
      document.getElementById("emailError").textContent = emailErrorMessage;
      document.getElementById("emailError").style.color = "red";
      document.getElementById("passwordError").textContent =
        passwordErrorMessage;
      document.getElementById("passwordError").style.color = "red";
    }
  });
