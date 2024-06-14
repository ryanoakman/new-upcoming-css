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

const ilText = document.querySelector(".il-text-example");
const ilGrowBtn = document.querySelector(".il-grow");

ilGrowBtn.addEventListener("click", function () {
  ilText.classList.toggle("grow-text");
  ilGrowBtn.textContent =
    ilGrowBtn.textContent === "Grow Text" ? "Shrink Text" : "Grow Text";
});

// navigation transitions

// element grabs
const ryanDvu = document.getElementById("ryan-dvu");
const gusOvb = document.getElementById("gus-ovb");
const marcTwb = document.getElementById("marc-twb");
const marcIl = document.getElementById("marc-il");

const ryanSect = document.querySelector(".dynamin-viewport-units");
const gusSect = document.querySelector(".object-view-box");
const marcSect = document.querySelector(".text-wrap-balance");
const marcSect2 = document.querySelector(".initial-letter");

// checks
ryanDvu.addEventListener("click", function () {
  console.log("ryan-dvu clicked");
});

gusOvb.addEventListener("click", function () {
  console.log("gus-ovb clicked");
});

marcTwb.addEventListener("click", function () {
  console.log("marc-twb clicked");
});

marcIl.addEventListener("click", function () {
  console.log("marc-il clicked");
});

// functions
ryanDvu.addEventListener("click", function () {
  ryanSect.style.display = "block";
  gusSect.style.display = "none";
  marcSect.style.display = "none";
  marcSect2.style.display = "none";
});

gusOvb.addEventListener("click", function () {
  ryanSect.style.display = "none";
  gusSect.style.display = "block";
  marcSect.style.display = "none";
  marcSect2.style.display = "none";
});

marcTwb.addEventListener("click", function () {
  ryanSect.style.display = "none";
  gusSect.style.display = "none";
  marcSect.style.display = "block";
  marcSect2.style.display = "none";
});

marcIl.addEventListener("click", function () {
  ryanSect.style.display = "none";
  gusSect.style.display = "none";
  marcSect.style.display = "none";
  marcSect2.style.display = "block";
});
