document.getElementById("myForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      event.preventDefault();
      alert("Please fill in all fields.");
    }
  });