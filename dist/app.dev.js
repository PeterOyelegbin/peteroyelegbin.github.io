"use strict";

var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var message = document.getElementById("message");

function send() {
  if (fullname === null) {
    alert("Thanks, message sent!");
  } else {
    alert("Fill required field!");
  }
}