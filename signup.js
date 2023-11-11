document
        .getElementById("signup-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const userEmail = document.getElementById("userEmail").value;
          const password = document.getElementById("password").value;
          const userMobile = document.getElementById("userMobile").value;
          const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          const mobileNumberPattern = /^\d{10}$/;
          if (!strongPasswordPattern.test(password)) {
            window.alert(
              "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.",
            );
          } else if (!mobileNumberPattern.test(userMobile)) {
            window.alert("Mobile number must be exactly 10 digits.");
          } else {
            localStorage.setItem("userEmail", userEmail);
            localStorage.setItem("password", password);
            window.alert(
              "Signup Success!!! You Will be Redirected to API Data Page!",
            );
            window.location.href = "api.html";
          }
        });
      document
        .getElementById("password")
        .addEventListener("input", function () {
          const password = this.value;
          const strengthText = document.getElementById("strength-text");

          const strongPasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          if (strongPasswordPattern.test(password)) {
            strengthText.textContent = "Strong";
            strengthText.style.color = "green";
          } else {
            strengthText.textContent = "Weak";
            strengthText.style.color = "red";
          }
        });