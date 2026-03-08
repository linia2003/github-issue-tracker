//Login part
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const loginDiv = document.getElementById('login-page');
    const dashboardDiv = document.getElementById('main-dashboard');

    if (user === 'admin' && pass === 'admin123') {
        loginDiv.classList.add('hidden');
        dashboardDiv.classList.remove('hidden');
        console.log("Access Granted");
    } else {
        // password vul hole.
        alert("Invalid Username or Password! Please use admin / admin123");
    }
}