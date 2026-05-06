
let dias;
let mes2="marzo";

switch (mes2) {
  case "enero": case "marzo": case "mayo": case "julio": case "agosto": case "octubre": case "diciembre":
    dias = "tiene 31";
    break;
  case "abril": case "junio": case "septiembre": case "noviembre":
    dias = "tiene 30 dias";
    break;
  case "febrero":
    dias = "28 o 29 (año bisiesto)";
    break;
  default:
    dias = "Mes no válido";
}
console.log(mes2+" "+dias); 