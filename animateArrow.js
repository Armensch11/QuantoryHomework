function animateArrow() {
  // e.stopPropagation();
  const arrow = document.getElementById("arrow");
  let posX = 0;
  let id = setInterval(move, 130);
  function move() {
    if (posX < 26) {
      arrow.style.left = posX + "px";
      posX += 5;
    } else {
      posX = 0;
    }
  }
}
