"use strict";

const originalBtn = document.getElementById("original-btn");
const croplBtn = document.getElementById("crop-btn");
const zoomlBtn = document.getElementById("zoom-btn");

const originalDisplay = document.getElementById("original-display");
const cropDisplay = document.getElementById("crop-display");
const zoomDisplay = document.getElementById("zomm-display");

if (cropDisplay) {
  cropDisplay.style.display = "none";
}

if (zoomDisplay) {
  zoomDisplay.style.display = "none";
}

if (croplBtn) {
  croplBtn.addEventListener("click", () => {
    originalDisplay.style.display = "none";
    zoomDisplay.style.display = "none";
    cropDisplay.style.display = "block";
  });
}

if (zoomlBtn) {
  zoomlBtn.addEventListener("click", () => {
    originalDisplay.style.display = "none";
    zoomDisplay.style.display = "block";
    cropDisplay.style.display = "none";
  });
}

if (originalBtn) {
  originalBtn.addEventListener("click", () => {
    originalDisplay.style.display = "block";
    zoomDisplay.style.display = "none";
    cropDisplay.style.display = "none";
  });
}

// Marc's example button text-wrap balance

const btn35 = document.querySelector(".button-35");
const btn35Text = document.getElementById("tw-balance-text");

// add function to toggle remove text-wrap style
if (btn35) {
  btn35.addEventListener("click", function () {
    btn35Text.classList.toggle("text-balance");
    if (btn35Text.classList.contains("text-balance")) {
      btn35.textContent = "Remove Balance";
    } else btn35.textContent = "Balance Text";
  });
}

// end of Marc's button text-wrap balance

const ilText = document.querySelector(".il-text-example");
const ilGrowBtn = document.querySelector(".il-grow");

if (ilGrowBtn) {
  ilGrowBtn.addEventListener("click", function () {
    ilText.classList.toggle("grow-text");
    ilGrowBtn.textContent =
      ilGrowBtn.textContent === "Grow Text" ? "Shrink Text" : "Grow Text";
  });
}

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
if (ryanDvu) {
  ryanDvu.addEventListener("click", function () {
    console.log("ryan-dvu clicked");
  });

  ryanDvu.addEventListener("click", function () {
    ryanSect.style.display = "block";
    gusSect.style.display = "none";
    marcSect.style.display = "none";
    marcSect2.style.display = "none";
  });

  // ryanDvu
  ryanDvu.addEventListener("click", function () {
    ryanDvu.classList.add("nav-btn-active");
    gusOvb.classList.remove("nav-btn-active");
    marcTwb.classList.remove("nav-btn-active");
    marcIl.classList.remove("nav-btn-active");
    console.log("ryan-dvu clicked");
  });
}

if (gusOvb) {
  gusOvb.addEventListener("click", function () {
    console.log("gus-ovb clicked");
  });
  gusOvb.addEventListener("click", function () {
    ryanSect.style.display = "none";
    gusSect.style.display = "block";
    marcSect.style.display = "none";
    marcSect2.style.display = "none";
  });
  // gusOvb
  gusOvb.addEventListener("click", function () {
    ryanDvu.classList.remove("nav-btn-active");
    gusOvb.classList.add("nav-btn-active");
    marcTwb.classList.remove("nav-btn-active");
    marcIl.classList.remove("nav-btn-active");
    console.log("gus-ovb clicked");
  });
}

if (marcTwb) {
  marcTwb.addEventListener("click", function () {
    console.log("marc-twb clicked");
  });
  marcTwb.addEventListener("click", function () {
    ryanSect.style.display = "none";
    gusSect.style.display = "none";
    marcSect.style.display = "block";
    marcSect2.style.display = "none";
  });
  marcTwb.addEventListener("click", function () {
    ryanDvu.classList.remove("nav-btn-active");
    gusOvb.classList.remove("nav-btn-active");
    marcTwb.classList.add("nav-btn-active");
    marcIl.classList.remove("nav-btn-active");
    console.log("marc-twb clicked");
  });
}

if (marcIl) {
  marcIl.addEventListener("click", function () {
    console.log("marc-il clicked");
  });
  marcIl.addEventListener("click", function () {
    ryanSect.style.display = "none";
    gusSect.style.display = "none";
    marcSect.style.display = "none";
    marcSect2.style.display = "block";
  });
  marcIl.addEventListener("click", function () {
    ryanDvu.classList.remove("nav-btn-active");
    gusOvb.classList.remove("nav-btn-active");
    marcTwb.classList.remove("nav-btn-active");
    marcIl.classList.add("nav-btn-active");
    console.log("marc-il clicked");
  });
}

// functions

// navigation button active state

// marcTwb

// marcIl

// Ryan's DVH page example
const lvhBtn = document.getElementById("lvh-btn");
const svhBtn = document.getElementById("svh-btn");
const dvhBtn = document.getElementById("dvh-btn");
const vhBtn = document.getElementById("vh-btn");
const heroImg = document.getElementById("hero-img");

if (lvhBtn) {
  function switchToDvh() {
    heroImg.style.height = "100dvh";
  }
  function switchToLvh() {
    heroImg.style.height = "100lvh";
  }
  function switchToSvh() {
    heroImg.style.height = "100svh";
  }
  function switchToVh() {
    heroImg.style.height = "100vh";
  }

  dvhBtn.addEventListener("click", switchToDvh);
  lvhBtn.addEventListener("click", switchToLvh);
  svhBtn.addEventListener("click", switchToSvh);
  vhBtn.addEventListener("click", switchToVh);
}
