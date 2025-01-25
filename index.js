document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector(".btn");
    const emailInput = document.querySelector(".input-box");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const progressBar = document.getElementById("progress-bar");
  
    // Disable the submit button initially
    submitButton.disabled = true;
    submitButton.style.opacity = "0.5";
  
    // Enable/Disable submit button based on input
    emailInput.addEventListener("input", () => {
      if (emailInput.value.trim() === "") {
        submitButton.disabled = true;
        submitButton.style.opacity = "0.5";
      } else {
        submitButton.disabled = false;
        submitButton.style.opacity = "1";
      }
    });
  
    // Check email validity when submitting
    submitButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      if (email) {
        displayPopup("Checking...");
  
        // Simulate email validation and fake email check
        setTimeout(() => {
          if (isValidEmail(email)) {
            displayPopup("Email is valid!");
          } else if (isTemporaryEmail(email)) {
            displayPopup("Temporary fake email detected!");
          } else {
            displayPopup("Email is invalid!");
          }
        }, 1000); // simulate 1 second delay
      }
    });
  
    // Function to show popup
    function displayPopup(message) {
      popupMessage.textContent = message;
      popup.style.display = "flex";
      progressBar.style.width = "100%"; // start progress bar animation
  
      // Hide the popup after 3 seconds
      setTimeout(() => {
        popup.style.display = "none";
        progressBar.style.width = "0%"; // reset progress bar
      }, 3000); // Hide after 3 seconds
    }
  
    // Function to validate email (basic regex)
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    }
  
    // Function to check for temporary/fake emails (check domains)
    function isTemporaryEmail(email) {
      const fakeEmailDomains = [
        "tempmail.com", "10minutemail.com", "mailinator.com", "yopmail.com", "guerrillamail.com", 
        "sharklasers.com", "maildrop.cc", "throwawaymail.com", "getnada.com", "temp-mail.org", 
        "dispostable.com", "fakeinbox.com", "trashmail.com", "receive-sms-online.com", "nomail.ga", 
        "maonyn.com", "sexebe7248@maonyn.com", "mailnesia.com", "mailcatch.com", "mailforspam.com", 
        "mailforspam.net", "mailme.ir", "mailnull.com", "mailtothis.com", "mailzilla.com", "mytrashmail.com", 
        "no-spam.ws", "nospam.ze.tc", "nospam4.us", "oneoffmail.com", "onewaymail.com", "opayq.com", 
        "outlook.com", "pookmail.com", "protonmail.com", "quickinbox.com", "rhyta.com", "safetymail.info", 
        "safetymail.net", "shortmail.com", "simplemail.eu", "slipmail.net", "spam.la", "spambob.com", 
        "spambob.net", "spambob.org", "spamfree24.org", "spamgourmet.com", "spamhole.com", "spamify.com", 
        "spamkill.info", "spaml.com", "spamly.com", "spamobox.com", "spamsome.com"
      ];
  
      const domain = email.split("@")[1].toLowerCase();
      return fakeEmailDomains.includes(domain);
    }
  });
  