
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (service === "") {
      alert("Please select a service.");
      return;
    }

    if (message === "") {
      alert("Please enter your message.");
      return;
    }

    alert("Form submitted successfully!");
  });

