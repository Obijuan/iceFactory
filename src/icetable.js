
//-- Generic table template (read from the table-template.ice)
//-- It is a 2-input, 2-output table, created directly from Icestudio
//-- This program reads this table as an object and change its properties
//-- acording to the parameters N and M parameters
//--  N = Number of inputs bits
//-- M = Number of outputs bits

const BLOCK_NAME = "mi-tabla";
const BLOCK_VERSION = "0.1";
const BLOCK_AUTHOR = "IceFactory 0.1";

let table_template = {
  "version": "1.1",
  "package": {
    "name": "Tabla 3x2",
    "version": "0.1",
    "description": "Circuito combinacional de 3 entradas y 2 salidas",
    "author": "Juan González Gómez y Jesús Arroyo",
    "image": "%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22184.803%22%20height=%22197.944%22%20viewBox=%220%200%20173.25325%20185.57257%22%3E%3Cg%20transform=%22translate(-181.933%20-240.254)%22%20stroke=%22#000%22%20stroke-linecap=%22square%22%20stroke-linejoin=%22round%22%3E%3Crect%20width=%22170.253%22%20height=%22182.573%22%20x=%22183.433%22%20y=%22241.754%22%20ry=%2219.969%22%20fill=%22#3e8db8%22%20stroke-width=%223%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22274.019%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22274.413%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22274.413%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22309.826%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22310.219%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22310.219%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22346.025%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22346.419%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22346.419%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22196.408%22%20y=%22381.832%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22246.344%22%20y=%22382.225%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3Crect%20width=%2244.038%22%20height=%2231.478%22%20x=%22296.415%22%20y=%22382.225%22%20ry=%220%22%20fill=%22#e6e6e6%22%20stroke-width=%222%22/%3E%3C/g%3E%3C/svg%3E"
  },
  "design": {
    "board": "icezum",
    "graph": {
      "blocks": [
        {
          "id": "186c4116-7846-4c8e-98a0-7376675105f1",
          "type": "basic.input",
          "data": {
            "name": "i",
            "range": "[1:0]",
            "pins": [
              {
                "index": "1",
                "name": "",
                "value": "0"
              },
              {
                "index": "0",
                "name": "",
                "value": "0"
              }
            ],
            "virtual": true,
            "clock": false
          },
          "position": {
            "x": -8,
            "y": 424
          }
        },
        {
          "id": "f9c58d8f-75fc-4483-b0d2-d584a555b1c5",
          "type": "basic.output",
          "data": {
            "name": "q",
            "range": "[1:0]",
            "pins": [
              {
                "index": "1",
                "name": "",
                "value": "0"
              },
              {
                "index": "0",
                "name": "",
                "value": "0"
              }
            ],
            "virtual": true
          },
          "position": {
            "x": 632,
            "y": 424
          }
        },
        {
          "id": "c71c44ac-0500-4eb5-9c1c-4ea21cd78377",
          "type": "basic.memory",
          "data": {
            "name": "",
            "list": "0\n0\n0\n0",
            "local": false
          },
          "position": {
            "x": 328,
            "y": 96
          },
          "size": {
            "width": 96,
            "height": 104
          }
        },
        {
          "id": "48c38eba-4e12-44d9-a55b-a93def6a27db",
          "type": "basic.code",
          "data": {
            "code": "\n//-- Bits del bus de entrada\nlocalparam N = 2;\n\n//-- Bits del bus de salida\nlocalparam M = 2;\n\n//-- Calcular tamaño de la tabla\n//-- (filas) segun los bits de entrada\nlocalparam TAM = 2 ** N;\n\n//-- Definición de la tabla\n//-- Tabla de TAM elementos de M bits\nreg [M-1:0] tabla[0:TAM-1];\n\n//-- Read the table\nassign q = tabla[i];\n\n//-- Init table from DATA parameters\ninitial begin\n  if (DATA) $readmemh(DATA, tabla);\nend",
            "params": [
              {
                "name": "DATA"
              }
            ],
            "ports": {
              "in": [
                {
                  "name": "i",
                  "range": "[1:0]",
                  "size": 2
                }
              ],
              "out": [
                {
                  "name": "q",
                  "range": "[1:0]",
                  "size": 2
                }
              ]
            }
          },
          "position": {
            "x": 176,
            "y": 264
          },
          "size": {
            "width": 392,
            "height": 384
          }
        }
      ],
      "wires": [
        {
          "source": {
            "block": "c71c44ac-0500-4eb5-9c1c-4ea21cd78377",
            "port": "memory-out"
          },
          "target": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "DATA"
          }
        },
        {
          "source": {
            "block": "186c4116-7846-4c8e-98a0-7376675105f1",
            "port": "out"
          },
          "target": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "i"
          },
          "size": 2
        },
        {
          "source": {
            "block": "48c38eba-4e12-44d9-a55b-a93def6a27db",
            "port": "q"
          },
          "target": {
            "block": "f9c58d8f-75fc-4483-b0d2-d584a555b1c5",
            "port": "in"
          },
          "size": 2
        }
      ]
    }
  },
  "dependencies": {}
}


//-- Generate and array of the pins
function pins(size) {
  let apins = [];
  for (i = 0; i < size; i++) {

    //-- Empty pin
    let pin = {
      index: i,
      name: "",
      value: "0"
    }

    //-- Add the pin to the array
    apins.push(pin);
  }

  return apins;
}

function iceTable(N, M) {
  console.log("IceTable: Inputs: " + N + "; Outputs: " + M);

  //-- Debug: read the template from a file
  //let obj = JSON.parse(fs.readFileSync('table-template', 'utf8'));

  obj = table_template;

  //-- Change the block properties
  obj.package.name = BLOCK_NAME + N + "-" + M;
  obj.package.version = BLOCK_VERSION;
  obj.package.description = "Circuito combinacional de " + N + " entradas y " + M + " salidas"
  obj.package.author = BLOCK_AUTHOR;


  //-------------------- Set the input size
  obj.design.graph.blocks[0].data.pins = pins(N);

  //-- Change more properties for making the input to have N inputs

  let irange =  "[" + (N-1) + ":0]"; //-- Input range
  let isize = N;
  obj.design.graph.blocks[0].data.range = irange;
  obj.design.graph.wires[1].size = isize;
  obj.design.graph.blocks[3].data.ports.in[0].range = irange;
  obj.design.graph.blocks[3].data.ports.in[0].size = isize;

  //----------------- Set the output size

  obj.design.graph.blocks[1].data.pins = pins(M);

  //-- Change more properties for making the input to have M outputs
  let orange = "[" + (M-1) + ":0]";
  let osize = M;
  obj.design.graph.blocks[1].data.range = orange;
  obj.design.graph.wires[2].size = osize;
  obj.design.graph.blocks[3].data.ports.out[0].range = orange;
  obj.design.graph.blocks[3].data.ports.out[0].size = osize;

  //-- Set the Verilog code
  //-- Replace the assignment of the N and M constant in the code:
  //--  N=2,  M=2, by the actual values of N and M
  let verilog_code = obj.design.graph.blocks[3].data.code
  verilog_code = verilog_code.replace("N = 2;", "N = " + N + ";");
  verilog_code = verilog_code.replace("M = 2;", "M = " + M + ";");
  //console.log(verilog_code);
  obj.design.graph.blocks[3].data.code = verilog_code;

  return obj;
}


module.exports = iceTable;
