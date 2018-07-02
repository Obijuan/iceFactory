//-- IceFactory
//-- (C) 2018 Juan Gonzalez-Gomez (Obijuan)
//-- LICENCIA LGPL

let fs = require('fs');


//-- Table parameters
let N = 2;
let M = 1;

console.log("Welcome to the IceFactory!");

//-- Read the icestudio template for the constant
let obj = JSON.parse(fs.readFileSync('tabla-2-2.ice', 'utf8'));

//-- Change the block properties
obj.package.name = "mi-tabla-" + N + "-" + M;
obj.package.version = "0.2"
obj.package.description = "Circuito combinacional de " + N + " entradas y " + M + " salidas"
obj.package.author = "IceFactory 0.1"

//-- Set the input size

let ipins = [];
for (i = 0; i < N; i++) {
  let ipin = {
    index: i,
    name: "",
    value: "0"
  }
  ipins.push(ipin);
}
console.log(ipins);

obj.design.graph.blocks[0].data.pins = ipins;

let irange =  "[" + (N-1) + ":0]"; //-- Input range
let isize = N;
obj.design.graph.blocks[0].data.range = irange;
obj.design.graph.wires[1].size = isize;
obj.design.graph.blocks[3].data.ports.in[0].range = irange;
obj.design.graph.blocks[3].data.ports.in[0].size = isize;

//-- Set the output size

let opins = [];
for (i = 0; i < M; i++) {
  let opin = {
    index: i,
    name: "",
    value: "0"
  }
  opins.push(opin);
}
console.log(opins);

obj.design.graph.blocks[1].data.pins = opins;


let orange = "[" + (M-1) + ":0]";
let osize = M;
obj.design.graph.blocks[1].data.range = orange;
obj.design.graph.wires[2].size = osize;
obj.design.graph.blocks[3].data.ports.out[0].range = orange;
obj.design.graph.blocks[3].data.ports.out[0].size = osize;



//-- Set the Verilog code
let verilog_code = obj.design.graph.blocks[3].data.code
verilog_code = verilog_code.replace("N = 2","N = " + N);
verilog_code = verilog_code.replace("M = 2","M = " + M);
console.log(verilog_code);
obj.design.graph.blocks[3].data.code = verilog_code;



//-- Debug
console.log("Input size: " + obj.design.graph.blocks[0].data.range);
console.log("Output size: " + obj.design.graph.blocks[1].data.range);


console.log("JSON: " + obj.package.name)


const OUTPUT_FILENAME = "tabla-" + N + "-" + M + "-output.ice";

//-- Write the icestudio block
let json = JSON.stringify(obj);
fs.writeFile(OUTPUT_FILENAME, json, (err) => {
  if (err)
    console.log("Error writing file: ");
});
