const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
function send() {
    if (fullname === null) {
        alert("Thanks, message sent!");
    }
    else {
        alert("Fill required field!");
    }
}