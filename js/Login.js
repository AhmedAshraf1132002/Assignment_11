//Global array
let User = [];

User = JSON.parse(localStorage.getItem("user"));

let SignLoginEmail = document.getElementById("SignEmail");
let SignLoginPassword = document.getElementById("SignPassword");
let LoginBtn = document.getElementById("LoginBtn");
let message = document.getElementById("message");
let SignUpBtn = document.getElementById("SignUpBtn");

LoginBtn.addEventListener("click", function () {
  if (SignLoginEmail.value == "" || SignLoginPassword.value == "") {
    message.innerHTML = `<p class ="text-center">inputs is required</p>`;
  } else {
    checkUser();
  }
});

function checkUser() {
  for (let i = 0; i < User.length; i++) {
    if (
      SignLoginEmail.value == User[i].email &&
      SignLoginPassword.value == User[i].password
    ) {
      let nameOfUser = User[i].name;
      localStorage.setItem("userName", nameOfUser);
      location.href = "./home.html";
      break;
    }else{
      message.innerHTML = `<p class ="text-center">incorrect email or password</p>`;
    }
  }
}

