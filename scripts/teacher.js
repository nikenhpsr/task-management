document.addEventListener("DOMContentLoaded", function () {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user is valid
  const loggedInUser = storedUsers.find(
    (user) => user.email === email && user.password === password
  );

  // If valid, store the user in session storage
  if (loggedInUser) {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    // If the user is a teacher, redirect to teacher.html
    if (loggedInUser.role === "teacher") {
      window.location.href = "./teacher.html";
    }
    // If the user is not a teacher, redirect to student.html
    else {
      window.location.href = "./student.html";
    }
  }
  // If the user is not valid, redirect to login page
  else {
    window.location.href = "./index.html";
  }
});

// Function for displaying the task creation form when button is clicked
document
  .getElementById("createTaskButton")
  .addEventListener("click", function () {
    const taskForm = document.getElementById("taskForm");
    if (taskForm.style.display === "none") {
      taskForm.style.display = "block";
    } else {
      taskForm.style.display = "none";
    }
  });

// Function to close the task creation form
function closeForm() {
  document.getElementById("taskForm").style.display = "none";
}

function logout() {
  // Clear sessionStorage or perform logout operations
  sessionStorage.removeItem("loggedInUser");
  // Redirect to the login page after logout
  window.location.href = "./index.html";
}
