const myCart = document.querySelector(".my-cart");
const myProfile = document.querySelector(".my-profile");

myCart.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});

myProfile.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});



const home = document.querySelector(".home");

home.addEventListener("click", () => {
    if (localStorage.getItem('currentUser')) {
        window.location.href = '../shop/shop.html';
    }
    else {
        window.location.href = '../index.html';
    }
});


const email = document.getElementById("login-email");
const password = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

const users = JSON.parse(localStorage.getItem('users'));
const currentUser = {};



loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let countEmail = 0;
    users.map(data => {
        if (data.email === email.value && data.password === password.value) {
            countEmail++;
            currentUser.email = data.email;
            currentUser.name = data.name;
            currentUser.password = data.password;
        }
        if (countEmail == 0) {
            alert("Invalid email or password!!!");
            return false;
        }
        else {
            currentUser.token = generateToken();
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = '../shop/shop.html';
        }
    });

})




if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../shop/shop.html';
}

function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}