document.getElementById("submit-btn").addEventListener("click", function () {
  const userMail = document.getElementById("user_email");
  const mailValue = userMail.value;
  const userPass = document.getElementById("user_password");
  const passValue = userPass.value;
  if (mailValue === "mushira@gmail.com" && passValue === "mushira") {
    window.location.href = "bank.html";
  } else {
    alert("can't match try again");
  }
});
