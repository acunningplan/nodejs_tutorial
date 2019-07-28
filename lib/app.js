"use strict";

require("dotenv");

// import "core-js/stable";
// import "regenerator-runtime/runtime";
console.log("Hello World from Nodejs");

const func = async () => {
  return await console.log("Arrow function!");
};

func();