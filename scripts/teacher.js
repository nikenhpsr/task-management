document.addEventListener("DOMContentLoaded", function () {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user is valid
  const users = storedUsers.find(
    (user) => user.email === email && user.password === password
  );

  // If valid, store the user in session storage
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  // If the user is not valid, redirect to login page
  if (!loggedInUser) {
    window.location.href = "./index.html";
  } else {
    // If valid, store the user in session storage
    sessionStorage.setItem("loggedInUser", JSON.stringify(users));

    // If the user is a teacher, redirect to teacher.html
    if (users.role === "teacher") {
      window.location.href = "./teacher.html";
    }
    // If the user is not a teacher, redirect to student.html
    else {
      window.location.href = "./student.html";
    }
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
