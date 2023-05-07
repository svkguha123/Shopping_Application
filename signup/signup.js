const myCart = document.querySelector(".my-cart");
const myProfile = document.querySelector(".my-profile");

myCart.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});

myProfile.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});



const firstName = document.getElementById("signup-first-name");
const lastName = document.getElementById("signup-last-name");
const email = document.getElementById("signup-email");
const password = document.getElementById("signup-password");
const confirmPassword = document.getElementById("signup-confirm-password");
const signupBtn = document.getElementById("signup-btn");


let users = [];
localStorage.getItem('users') ? users = JSON.parse(localStorage.getItem('users')) : [];


signupBtn.addEventListener("click", (e)=> {
    e.preventDefault();


    ///Email Validation
    if(email.value.indexOf('@')<2){
        alert("Please enter valid email address!!!");
        return false;
    }
    else if(email.value.lastIndexOf('.')!==email.value.length-4 && email.value.lastIndexOf('.')!==email.value.length-3){
        alert("Please enter valid email address!!!");
        return false;
    }

    let userArr = []
    
    if(localStorage.getItem('users')){
        userArr = JSON.parse(localStorage.getItem('users'))
        if(userArr.filter(user => user.email==email.value).length!=0){
            alert('Email already exists!!! Try another email address!!!');
            return false;
        }
    }
    //Password Validation
    if(!password.value.match(/[a-z]/)){
        alert('Password must contains at least one lower case letter!!!');
        return false;
    }
    if(!password.value.match(/[A-Z]/)){
        alert('Password must contains at least one upper case letter!!!');
        return false;
    }
    if(!password.value.match(/[0-9]/)){
        alert('Password must contains at least number!!!');
        return false;
    }
    if(!password.value.match(/[!/@/#/$/%/^/&/*/(/)/+/_/</>/]/)){
        alert('Password must contains at least one symbol!!!');
        return false;
    }
    if(password.value.length<8 || password.value.length>16){
        alert('Password length must be between 8 and 16 characters!!!');
        return false;
    }
    
    //Confirm password validation
    if(password.value!==confirmPassword.value){
        alert("Password and Confirm Password should not be same!!!");
    }

    const userData = {
        FirstName : firstName.value,
        LastName : lastName.value,
        email : email.value,
        password : password.value,
    }
    users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "../login/login.html";
        alert('Signed up successfully!!! Please login to continue!!!');
});

if(window.localStorage.getItem('currentUser')){
    window.location.href = '../shop/shop.html';
}

