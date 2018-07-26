
function iceTable_gen() {

  //-- Default Table parameters
  //let N = 8;  //-- Number of input bits
  //let M = 16;  //-- Number of output bits

  console.log("Welcome to the IceFactory!");


  //-- Get the number of inputs from the user (html)
  let entry_N = document.getElementById("Value_N");
  let N = Number(entry_N.value);
  console.log("Entradas: " + N);

  //-- Get the number of outputs from the user (html)
  let entry_M = document.getElementById("Value_M");
  let = M = Number(entry_M.value);
  console.log("Salidas: " + M);

  //-- Get the data format from the user (html)
  let entry_F = document.querySelectorAll('input[type=radio]:checked')[0];
  let F = entry_F.value;
  console.log("Formato: " + F);


  //------------ Generate the icestudio object for the NxM table
  obj = iceTable(N, M, F);

  //-------------- Generate the icestudio file
  const OUTPUT_FILENAME = "tabla-" + N + "-" + M + ".ice";
  console.log("File generated: " + OUTPUT_FILENAME);

  //-- json object to plain ascii text
  let json = JSON.stringify(obj);

  // Write a temporal file in the browser
  var file = new File([json],OUTPUT_FILENAME,{type:"text/plain;charset=utf-8"});

  // Get the URL of the temporal file created
  var url  = window.URL.createObjectURL(file);

  //console.log(url);

  //-------------- Add the link to the icestudio file
  var a = document.getElementById("obj_file");
  a.href = url;
  a.innerHTML = "Descargar fichero: " + OUTPUT_FILENAME;
  a.download = file.name;
}
