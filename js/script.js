"use strict";
// Script for celsius of a Sphere

// Elements
// Inputs
const fdInput = document.getElementById('fdInput');
// Result Display
const celsiusResult = document.getElementById('celsiusResult');
// Calculate Button
const calculateBtn = document.getElementById('CalculateBtn');

// Code for converting Fahrenheit to Celsius
function Calculate() {

  // Get fahrenheit degrees Input
  let fd = Number(fdInput.value);

  // Calculate Celsius
  let celsius = (fd - 32) * (5/9)

  // Round up to 2 decimal places, if needed
  if (celsius % 1 != 0) {
    celsius = celsius.toFixed(2);
  }

  // Display Result
  celsiusResult.innerHTML = `${celsius} <sup>o</sup>C`;
  return;
}

// Connect button click to the Calculate() function, 
calculateBtn.onclick = Calculate;

// Initial Calculate() call
Calculate();