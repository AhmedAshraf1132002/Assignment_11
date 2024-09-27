let userName = document.getElementById("userName");
let logOutBtn = document.getElementById("logOutBtn");

userName.innerHTML = localStorage.getItem("userName");

logOutBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");
});
