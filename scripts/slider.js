let sliders = document.querySelectorAll("#sliders li");
let slidersTotal = sliders.length - 1;
let current = 0;

timer = setInterval(function() {
  sliders[current].className = "";

  if (current && current >= slidersTotal) {
    current = 0;
  } else {
    current++;
  }

  sliders[current].className = "slider-active";
}, 3000);

resetInterval = function() {
  clearInterval(timer);

  timer = setInterval(function() {
    sliders[current].className = "";

    if (current && current >= slidersTotal) {
      current = 0;
    } else {
      current++;
    }

    sliders[current].className = "slider-active";
  }, 3000);
};

document.querySelector(".right-arrow").onclick = function() {
  sliders[current].className = "";

  if (current && current >= slidersTotal) {
    current = 0;
  } else {
    current++;
  }

  sliders[current].className = "slider-active";

  resetInterval();
};

document.querySelector(".left-arrow").onclick = function() {
  sliders[current].className = "";

  if (current) {
    current--;
  } else {
    current = slidersTotal;
  }

  sliders[current].className = "slider-active";

  resetInterval();
};
