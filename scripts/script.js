"use strict";

const originalBtn = document.getElementById("original-btn");
const croplBtn = document.getElementById("crop-btn");
const zoomlBtn = document.getElementById("zoom-btn");

const originalDisplay = document.getElementById("original-display");
const cropDisplay = document.getElementById("crop-display");
const zoomDisplay = document.getElementById("zomm-display");

cropDisplay.style.display = "none";
zoomDisplay.style.display = "none";

croplBtn.addEventListener("click", () => {
  originalDisplay.style.display = "none";
  zoomDisplay.style.display = "none";
  cropDisplay.style.display = "block";
});

zoomlBtn.addEventListener("click", () => {
  originalDisplay.style.display = "none";
  zoomDisplay.style.display = "block";
  cropDisplay.style.display = "none";
});

originalBtn.addEventListener("click", () => {
  originalDisplay.style.display = "block";
  zoomDisplay.style.display = "none";
  cropDisplay.style.display = "none";
});

// Marc's example button text-wrap balance

const btn35 = document.querySelector(".button-35");
const btn35Text = document.getElementById("tw-balance-text");

// add function to toggle remove text-wrap style
btn35.addEventListener("click", function () {
  btn35Text.classList.toggle("text-balance");
  if (btn35Text.classList.contains("text-balance")) {
    btn35.textContent = "Remove Balance";
  } else btn35.textContent = "Balance Text";
});

// end of Marc's button text-wrap balance
