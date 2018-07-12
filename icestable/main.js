//-- IceFactory
//-- (C) 2018 Juan Gonzalez-Gomez (Obijuan)
//-- LICENCIA LGPL(

let iceTable = require('./icetable.js')

//-- Table parameters
let N = 8;  //-- Number of input bits
let M = 16;  //-- Number of output bits

console.log("Welcome to the IceFactory!");

//-- Generated the icestudio object for the NxM table
obj = iceTable(N, M);

//--- Write the object into a file
const OUTPUT_FILENAME = "tabla-" + N + "-" + M + ".ice";
console.log("File generated: " + OUTPUT_FILENAME)

let fs = require('fs');

//-- Write the icestudio block into a file
let json = JSON.stringify(obj);
fs.writeFile(OUTPUT_FILENAME, json, (err) => {
  if (err)
    console.log("Error writing file: ");
});
