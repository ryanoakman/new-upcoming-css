"use strict";

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
