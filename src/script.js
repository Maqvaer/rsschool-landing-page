const button = document.querySelector(".switch-theme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    document.getElementById('light-theme').classList.remove('action-theme');
  } else {
    localStorage.setItem("theme", "light");
    document.getElementById('light-theme').classList.add('action-theme');
  }
});