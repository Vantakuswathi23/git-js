document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myform');
    
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
            alert("Successfully submitted");
            console.log("Form submitted successfully");
            console.log("email",email);
            console.log("password",password);

            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
           
        }
    });
});
