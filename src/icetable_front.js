
function iceTable_gen() {

  //-- Default Table parameters
  //let N = 8;  //-- Number of input bits
  //let M = 16;  //-- Number of output bits

  console.log("Welcome to the IceFactory!");


  //-- Get the number of inputs from the user (html)
  let entry_N = document.getElementById("Value_N");
  N = entry_N.value;
  console.log("Entradas: " + N)

  //-- Get the number of outputs from the user (html)
  let entry_M = document.getElementById("Value_M");
  M = entry_M.value;
  console.log("Salidas: " + M)


  //-- Generated the icestudio object for the NxM table
  obj = iceTable(N, M);

  //--- Write the object into a file
  const OUTPUT_FILENAME = "tabla-" + N + "-" + M + ".ice";
  console.log("File generated: " + OUTPUT_FILENAME)

  let json = JSON.stringify(obj);

  // creas el fichero con la API File
  var file = new File([json],OUTPUT_FILENAME,{type:"text/plain;charset=utf-8"});

  // obtienes una URL para el fichero que acabas de crear
  var url  = window.URL.createObjectURL(file);

  console.log(url);

  // creas un enlace y lo añades al documento
  //var a = document.createElement("a");
  //document.body.appendChild(a);
  var a = document.getElementById("obj_file");

  // actualizas los parámetros del enlace para descargar el fichero creado
  a.href = url;
  a.innerHTML = "Descargar fichero";
  a.download = file.name;
}
