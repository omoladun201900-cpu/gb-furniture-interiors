emailjs.init("fJMqGK_u5zRy0zupi");

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  var templateParams = {
    name: name,
    email: email,
    phone: phone,
    message: message
  };

  emailjs.send("service_ynsvu05", "template_4dvadty", templateParams)
    .then(function() {
      alert("Thank you " + name + "! Your message has been sent!");
    }, function(error) {
      alert("Oops! Something went wrong. Please try again.");
    });
}
