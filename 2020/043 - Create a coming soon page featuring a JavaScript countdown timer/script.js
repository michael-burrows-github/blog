(() => {

  const sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24;

  const end = new Date("Dec 25, 2020 00:00:00").getTime();

  const int = setInterval(() => {
    const current = new Date().getTime();
    const remaining = end - current;
    document.getElementById("days").innerText = Math.floor(remaining / day);
    document.getElementById("hours").innerText = Math.floor( (remaining % day) / hour );
    document.getElementById("minutes").innerText = Math.floor( (remaining % hour) / min );
    document.getElementById("seconds").innerText = Math.floor( (remaining % min) / sec );
    if (remaining < 0) {
      document.querySelector("h1").innerText = "We Have Arrived!";
      document.querySelector("p").innerHTML = "The big day is finally here - view our <a href=https://www.website.com>website<a/> for more information.";
      const digit = document.querySelectorAll("span");
      digit.forEach((digit) => {
        digit.innerText = "0";
      });
      clearInterval(int);
    }
  }, 1000);

})();
