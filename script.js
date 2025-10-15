(function () {
  "use strict";

  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.id === "registrationForm") {
          const password = form.querySelector("#password").value;
          const confirmPassword = form.querySelector("#confirmPassword").value;
          if (password !== confirmPassword) {
            form
              .querySelector("#confirmPassword")
              .setCustomValidity("Passwords must match.");
          } else {
            form.querySelector("#confirmPassword").setCustomValidity("");
          }
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
