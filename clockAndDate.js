function startTime() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  const month = today.toLocaleString("default", { month: "long" });
  const dayIndex = today.getDay();
  const day = weekDays[dayIndex];
  const date = today.getDate();
  m = checkTime(m);

  const clock = document.getElementById("clock");
  const dateFull = document.getElementById("date");

  clock.style.color = "#fff";
  clock.style.fontSize = "55px";
  clock.style.fontWeight = 100;
  dateFull.style.color = "#fff";
  dateFull.style.fontSize = "12px";
  dateFull.style.fontWeight = 400;

  dateFull.innerHTML = day + ", " + date + " " + month;
  clock.innerHTML = h + ":" + m;

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };
}
function animateCharge() {
  const charge = document.getElementById("battery-charge");
  charge.style.width = "0px";
  for (let i = 1; i <= 12; i++) {
    if (i > 2) {
      (function (i) {
        setTimeout(() => {
          console.log(i);
          charge.style.width = `${i}px`;
          charge.style.backgroundColor = "#0dd81e";
        }, 500 * i);
      })(i);
    } else {
      (function (i) {
        setTimeout(() => {
          console.log(i);
          charge.style.width = `${i}px`;
          charge.style.backgroundColor = "#e83616";
        }, 500 * i);
      })(i);
    }
  }
}
