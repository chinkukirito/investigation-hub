function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === "kannalu") {

        window.location.href = "home.html";

    } else {

        document.getElementById("message").innerHTML =
        "❌ Access Denied! Incorrect Password.";

    }

}
