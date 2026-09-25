const loginForm = document.getElementById("loginForm");

const password =
    document.getElementById("password");

const showPassword =
    document.getElementById("showPassword");

const loginButton =
    document.getElementById("loginButton");

const buttonText =
    document.getElementById("buttonText");


// ================================
// SHOW / HIDE PASSWORD
// ================================

showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showPassword.textContent = "🙈";

    } else {

        password.type = "password";

        showPassword.textContent = "👁️";

    }

});


// ================================
// LOGIN
// ================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    buttonText.textContent = "⏳ Memproses...";

    loginButton.disabled = true;


    setTimeout(function () {

        buttonText.textContent = "✅ Berhasil!";

        setTimeout(function () {

            window.location.href = "index.html";

        }, 700);

    }, 1200);

});