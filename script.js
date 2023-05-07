const login = document.getElementById("login");
const signup = document.getElementById("signup");

login.addEventListener("click", ()=> {
    window.location.href = "./login/login.html";
});

signup.addEventListener("click", ()=> {
    window.location.href = "./signup/signup.html";
});

const myCart = document.querySelector(".my-cart");
const myProfile = document.querySelector(".my-profile");

myCart.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});

myProfile.addEventListener("click", ()=> {
    alert('Please login to continue!!!');
});

if (window.localStorage.getItem('currentUser')) {
    window.location.href = "./shop/shop.html";
}