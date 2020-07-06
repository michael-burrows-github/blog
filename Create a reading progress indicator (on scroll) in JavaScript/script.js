const progressBar = document.getElementById("progress-bar");

const setProgressBar = () => {
  let scrollDist = document.documentElement.scrollTop || document.body.scrollTop;
  let progressWidth = (scrollDist / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
  progressBar.style.width = progressWidth + "%";
};

if (progressBar) {
  window.addEventListener("scroll", setProgressBar);  
}
