function submitForm() {

  // GET INPUT VALUES
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // CHECK IF FIELDS ARE EMPTY
  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    message === ""
  ) {

    alert("Please complete all fields before submitting.");

  } else {

    alert(
      "Thank you, " +
      name +
      "! Your message has been received successfully. We will contact you shortly."
    );

  }
}