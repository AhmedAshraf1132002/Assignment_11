let signUp=document.querySelector('.signUp');
let Second=document.querySelector('.secondGroupe');


all=[];


function displayData()
{

    let cartona='';
    for(var i=0;i<all.length;i++)
        {
           
            
            cartona+=`
            <div class="container my-5 text-center " >
                <div class=" second-Groupe  w-75 p-5 m-auto">
                    <h1>Smart Login System
                    </h1>
                    <input id="signupName" type="text" class="form-control my-3" type="text" placeholder="Enter your Name" />
                    <input id="signupEmail" type="text" class="form-control my-3" type="text" placeholder="Enter your email" />
                    <input id="signupPassword" type="text" class="form-control my-3" type="password"
                        placeholder="Enter your password" />
                    <p id="inCorrect"></p>
                    <button class="btn btn-outline-info my-3 w-100" id="SignupButton">Sign Up</button>
                    <p class="text-white">
                        Don’t have an account?
                        <a class="text-white" href="#" id="signIn">Sign In</a>
                    </p>
                </div>
            </div>
            `
        }

        document.getElementById("demo").innerHTML = cartona;
}

  
signUp.addEventListener('click',function()
{
    displayData()
    Second.nextElementSibling.classList.replace('d-none','d-block')
})