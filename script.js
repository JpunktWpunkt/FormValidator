const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//das überschreibt die Class in parent (höher liegendes Div)
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  console.log("test");
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === " ") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  console.log("submit");
});
