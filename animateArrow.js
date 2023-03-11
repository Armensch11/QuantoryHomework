function animateArrow() {
  const arrow = document.getElementsByClassName("arrow");
  for (let i = 0; i < arrow.length; i++) {
    (function () {
      setTimeout(() => {
        arrow[i].style.display = "none";
      }, i * 300);
    })();
  }
  for (let i = 0; i < arrow.length; i++) {
    (function () {
      setTimeout(() => {
        arrow[i].style.display = "";
      }, i * 400 + 900);
    })();
  }
  setTimeout(animateArrow, 3000);
}
