const pwd = document.getElementById("password-input");
const pwdStrength = document.getElementById("password-strength");

pwd.addEventListener("input", function () {
  const pwdVal = pwd.value;
  let result = zxcvbn(pwdVal);  
  pwdStrength.className = "strength-" + result.score;  
});
