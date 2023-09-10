// Login Form 

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('loginUserName').value;
    const password = document.getElementById('loginPassword').value;

    //check if username and password are valid
    if(username === 'admin' && password === 'password') {

        //successful login
        alert("Successful Login");
    }else{
        //unsuccessful login
        alert("Unsuccessful Login : Invalid Username or Password");
    }
});


// Registration Form

document.getElementById('registerationForm').addEventListener('submit',function(event){
    event.preventDefault();

    const username = document.getElementById('regUserName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
   
    //check all fields are filled
    if(username && email && password && confirmPassword){
        if(password === confirmPassword){
            alert("Registration Successful ")
        
            document.getElementById('registerationForm').reset();
        }
        else
        {
            alert("Password Does'nt Match")
        }
    }
    else
    {
        alert("Please fill in all field");
    }
});