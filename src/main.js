//-- IceFactory
//-- (C) 2018 Juan Gonzalez-Gomez (Obijuan)
//-- LICENCIA LGPL

var fs = require('fs');


//-- Constant to generate
let K = 0;

console.log("Welcome to the IceFactory!");

//-- Read the icestudio template for the constant
var obj = JSON.parse(fs.readFileSync('1bk-template.json', 'utf8'));

console.log("JSON: " + obj.package.name)

//-- Change the block name
obj.package.name = K;

//-- Write the icestudio block
var json = JSON.stringify(obj);
fs.writeFile('1b1.ice', json, (err) => {
  if (err)
    console.log("Error writing file: ");
});
