var ok = [
  "Marzo",
  "Diciembre",
  "Abril",
  "Junio",
  "Julio",
  "Noviembre",
  "Enero",
  "Mayo",
  "Febrero",
];

var array = ["Enero", "Marzo", "Noviembre", "Febrero", "Junio"];
var notOk = ["Marzo", "Diciembre", "Julio", "Noviembre"];

function mesesDelAño(array) {
  //   ✕ Debe retornar el mensaje si alguno de los meses no se encuentra en el arreglo (1 ms)
  var x;
  if (
    array.includes("Enero") === false ||
    array.includes("Marzo") === false ||
    array.includes("Noviembre") === false
  )
    return x = "No se encontraron los meses pedidos";
  
  var nuevoArray = [];
  array.forEach((item) => {
    if (item === "Enero" || item === "Marzo" || item === "Noviembre")
      nuevoArray.push(item);
  });
  return x;
}

console.log(mesesDelAño(notOk));

function breakStatement(num) {
  var arreglo = [];

  for (let index = 0; index < 10; index++) {
    num += 2;
    arreglo.push(num);
    if (index === num) {
      arreglo = "Se interrumpió la ejecución";
      break;
    }
  }
  return arreglo;
}

// console.log(breakStatement(-5));
