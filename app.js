var buttons = document.querySelectorAll(".rate");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
    });
  });