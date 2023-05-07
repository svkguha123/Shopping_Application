const home = document.querySelector('.home');

const logout = document.querySelector('.logout');
const logoutBtn = document.getElementById('logout-btn');



home.addEventListener("click", () => {
    if (localStorage.getItem('currentUser')) {
        window.location.href = '../shop/shop.html';
    }
    else {
        window.location.href = '../index.html';
    }
});


logout.addEventListener("click", () => {
    window.location.href = "../login/login.html";
    localStorage.removeItem('currentUser');
});

logoutBtn.addEventListener("click", () => {
    window.location.href = "../login/login.html";
    localStorage.removeItem('currentUser');
});