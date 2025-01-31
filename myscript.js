var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Python Developer", "Cyber Security Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
  });
      function sendEmail() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      const mailtoLink = `mailto:thejayaram4567@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(Name: ${name}\nEmail: ${email}\nMessage: ${message})}`;
  
      // Create a temporary form
      const tempForm = document.createElement("form");
      tempForm.setAttribute("action", mailtoLink);
      tempForm.setAttribute("method", "POST");
      tempForm.setAttribute("target", "emailFrame"); // Target the hidden iframe
      document.body.appendChild(tempForm);
  
      // Submit the form to open email client
      tempForm.submit();
  
      // Clean up
      document.body.removeChild(tempForm);
  }