let imageIndex = 1;

function updateMargin() {
  const margin = `-${(imageIndex - 1) * 740}px`;
  document.querySelector(".images").style.marginLeft = margin;
}

function updateCircle() {
  const allCircles = document.querySelectorAll(".circle");
  allCircles.forEach((circle) => {
    circle.classList.remove("active");
  });

  const newActiveCircle = document.querySelector(
    `.circle[data-index="${imageIndex}"]`
  );
  newActiveCircle.classList.add("active");
}

function goLeft() {
  if (imageIndex > 1) {
    imageIndex -= 1;
    updateMargin();
    updateCircle();
  }
}

function goRight() {
  if (imageIndex < 8) {
    imageIndex += 1;
    updateMargin();
    updateCircle();
  }
}

function handleCircleClick(event) {
  const circle = event.target.dataset.index;

  imageIndex = parseInt(circle);

  updateMargin();
  updateCircle();
}

function onload() {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const circles = document.querySelectorAll(".circle");

  leftArrow.addEventListener("click", goLeft);
  rightArrow.addEventListener("click", goRight);
  circles.forEach((circle) => {
    circle.addEventListener("click", handleCircleClick);
  });
}

document.addEventListener("DOMContentLoaded", onload);
