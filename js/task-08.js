const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields!");
  }

  const userInfo = `Email: ${email.value}, Password: ${password.value}`
  console.log(userInfo);

  event.currentTarget.reset();
}
