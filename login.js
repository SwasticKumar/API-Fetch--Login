document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const enteredUsername = document.getElementById("userEmail").value;
    const enteredPassword = document.getElementById("password").value;
    const savedUsername = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("password");
    if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
        alert("Your Successfully Verified Username and Password!");
        window.location.href = "api.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});