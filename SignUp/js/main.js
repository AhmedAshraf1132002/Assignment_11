let SignUpName = document.getElementById("SignName");
let SignUpEmail = document.getElementById("SignEmail");
let SignUpPassword = document.getElementById("SignPassword");
let message = document.getElementById("message");
let User = [];

if (localStorage.getItem("user") != null) {
  User = JSON.parse(localStorage.getItem("user"));
} else {
  User = [];
}

function add() {
  if (
    SignUpName.value == "" ||
    SignUpEmail.value == "" ||
    SignUpPassword.value == ""
  ) {
    message.innerHTML = `<p class ="text-center">All inputs is required</p>`;
  } else {
    let obj = {
      name: SignUpName.value,
      email: SignUpEmail.value,
      password: SignUpPassword.value,
    };
    User.push(obj);
    location.href = "../../Login/index.html";
    localStorage.setItem("user", JSON.stringify(User));
  }
}
