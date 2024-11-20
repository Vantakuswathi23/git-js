
const loginForm = document.getElementById('loginForm');
const changePasswordForm = document.getElementById('changePasswordForm');
const showSignupFormButton = document.getElementById('showSignupForm');
const showLoginFormButton = document.getElementById('showLoginForm');
const loginSubmitButton = document.querySelector('#myform1 button');
const signupSubmitButton = document.querySelector('#changeForm button');
const passwordfields = document.getElementById('Password');
const tooglefields = document.getElementById('togglePassword');
const eyeicon = document.getElementById('eyeIcon');
const forgotbutton = document.getElementById('forgotpasswordbutton');
const forgotform = document.getElementById('forgotPasswordForm');
const show = document.getElementById('showLoginForm1');



document.getElementById('loginbtn').addEventListener('click', function() {
    // Show the toast message
    var toast = document.getElementById('toast');
    toast.classList.add('show');
  
    // Hide the toast message after 3 seconds
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000); // Hide after 3 seconds
  });




//password eyeslash icon functionality
tooglefields.addEventListener('click', function () {
    
    const type = passwordfields.type === 'password' ? 'text' : 'password';
    passwordfields.type = type;

    
    eyeicon.classList.toggle('fa-eye-slash');
    eyeicon.classList.toggle('fa-eye');
});

// login and signup
showSignupFormButton.addEventListener('click', function () {
    loginForm.style.display = 'none';
    changePasswordForm.style.display = 'block';
});

showLoginFormButton.addEventListener('click', function () {
    changePasswordForm.style.display = 'none';
    loginForm.style.display = 'block';
});

forgotpasswordbutton.addEventListener('click',function(){
    loginForm.style.display = 'none';
    forgotform.style.display = 'block';
});
show.addEventListener('click',function(){
    forgotform.style.display = 'none';
    loginForm.style.display = 'block';
});

//email and password funtionality

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myform1');
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        let emailerror = "";
        let passworderror="";
        message="";

      
        if (email === "") {
            emailerror = "enter email";
        } else if (!validateEmail(email)) {
           alert("Please enter a valid email addres");
        }
      
       
        if (password === "") {
            passworderror = "enter password";
        } else if (password.length < 6) {
            message = "Password must be a 6 digits";
        }

    
        document.getElementById('emailerror').innerText = emailerror;
        document.getElementById('passworderror').innerText = passworderror;

        if (!emailerror && !passworderror) {

             // Trigger the Bootstrap modal
            var myModal = new bootstrap.Modal(document.getElementById('successModal'));
            myModal.show();  // Show the modal
            alert("Successfully submitted");
            console.log("Form submitted successfully");
            console.log("email",email);
            console.log("password",password);

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
           
        }
    });
});
