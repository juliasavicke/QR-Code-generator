"use strict";
console.log("main.js");

const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenetareSubmit = (event) => {
  event.preventDefault();
  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;

  console.log(url, size);
};

form.addEventListener("submit", onGenetareSubmit);
