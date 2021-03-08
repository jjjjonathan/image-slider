let imageIndex = 1;

function updateMargin() {
  const margin = `-${(imageIndex - 1) * 740}px`;
  document.querySelector(".images").style.marginLeft = margin;
}

function goLeft() {
  if (imageIndex > 1) {
    imageIndex -= 1;
    updateMargin();
  }
}

function goRight() {
  if (imageIndex < 8) {
    imageIndex += 1;
    updateMargin();
  }
}

function handleCircleClick(event) {
  const circle = event.target.id;

  console.log(circle);
}

function onload() {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const circles = document.querySelectorAll(".circles");

  leftArrow.addEventListener("click", goLeft);
  rightArrow.addEventListener("click", goRight);
  circles.forEach((circle) => {
    circle.addEventListener("click", handleCircleClick);
  });
}

document.addEventListener("DOMContentLoaded", onload);
