"use strict";

const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");
const clearBtn = document.querySelector(".clear-btn");
const calculateBtn = document.querySelector(".calculate-btn");

function appendToDisplay(e) {
  display.value += e.target.textContent;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    console.log("🚀 ~ calculate ~ error:", error);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", appendToDisplay);
});
clearBtn.addEventListener("click", clearDisplay);
calculateBtn.addEventListener("click", calculate);
