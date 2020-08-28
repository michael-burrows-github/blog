document.addEventListener("DOMContentLoaded", function () {
  const userCookieName = "returningVisitor";
  checkUserCookie(userCookieName);
});

function checkUserCookie(userCookieName) {
  const regEx = new RegExp(userCookieName, "g");
  const cookieExists = document.cookie.match(regEx);
  if (cookieExists != null) {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div id="welcome">Welcome back friend! Check out our latest thing <a href="#">HERE</a></div>'
    );
  } else {
    createUserCookie(userCookieName);
  }
}

function createUserCookie(userCookieName) {
  const userCookieValue = "Yes";
  const userCookieDays = 7;
  let expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + userCookieDays);
  document.cookie = userCookieName + "=" + userCookieValue +"; expires=" + expiryDate.toGMTString() + "path=/";
}
