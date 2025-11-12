// LOGIN VALIDATION
$(document).on("submit", "#loginForm", function(e) {
  e.preventDefault();
  let username = $("#username").val().trim();
  let password = $("#password").val().trim();

  if (username === "" || password === "") {
    alert("Please fill in both fields!");
  } else if (username === "admin" && password === "1234") {
    $.mobile.changePage("#home");
  } else {
    alert("Invalid credentials. Try again!");
  }
});

// BOOKING VALIDATION + POPUP
$(document).on("submit", "#bookingForm", function(e) {
  e.preventDefault();
  let name = $("#fullname").val().trim();
  let dest = $("#destination").val();
  let date = $("#date").val();

  if (name === "" || dest === "" || date === "") {
    alert("Please complete all fields!");
  } else {
    alert(`Booking Confirmed!\n\nName: ${name}\nDestination: ${dest}\nDate: ${date}`);
    this.reset();
  }
});

