var frmvalidator = new Validator("myform");
  frmvalidator.addValidation("FirstName", "req", "Please enter your First Name");
  frmvalidator.addValidation("FirstName", "maxlen=20", "Max length for First Name is 20");

  frmvalidator.addValidation("LastName", "req");
  frmvalidator.addValidation("LastName", "maxlen=20");

  frmvalidator.addValidation("EMail", "maxlen=50");
  frmvalidator.addValidation("EMail", "req");
  frmvalidator.addValidation("EMail", "email");

  frmvalidator.addValidation("Phone", "maxlen=50");
  frmvalidator.addValidation("Phone", "numeric");

  frmvalidator.addValidation("Username", "req");
  frmvalidator.addValidation("Username", "maxlen=12");

  frmvalidator.addValidation("Password", "req");
  frmvalidator.addValidation("Password", "maxlen=7");
  frmvalidator.addValidation("Password", "regex=^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])");

  frmvalidator.addValidation("Address", "maxlen=50");

  // ZipCode validation for USA
  var countryField = document.getElementById("Country");
  var zipCodeField = document.getElementById("ZipCode");

  countryField.addEventListener("change", function () {
    if (countryField.value === "840") { // Country code for USA is 840
      frmvalidator.addValidation("ZipCode", "req", "Please enter a ZipCode");
    } else {
      frmvalidator.removeValidation("ZipCode");
    }
  var form = document.getElementById("myform");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  if (frmvalidator.validate()) {
    // Form is successfully validated
    window.location.href = "thank_you.html"; // Redirect to thank you page
  }
  });
