
//Funciones anonimas



//Funciones tradicionales
// let num1 = 5;
// let num2 = 3;
// let total;

// function suma(a, b){
//     let resultado = a+b;
//   alert(resultado)

//     return resultado;
// }

// total = suma(num1, num2);

// console.log("Este es el retorno" + total)

//Funciones Flecha / arrow

// const afterClass = (saludo) => {

//     alert(saludo + "Bienvenidos al afterClass de funciones!!!!")

// }

// afterClass("Hola Coders ");


//Calculo de IVA


let total = 0;
let tipoImpuesto;
let precio;

function solicitarDatos () {
 precio = Number (prompt ("Ingrese el importe para calcular el iva"));

 tipoImpuesto = prompt("Ingrese si desea IVA 21% o IVA 10%");

verificacion(precio);
}


function verificacion (precio) {
if (tipoImpuesto == 21) {
    total = precio + precio * 0.21;
    if(total > 650000){
        alert ("Guau cuanta plata");
    }
}
else if (tipoImpuesto == 10){
    total = precio + precio * 0.1;
}
else {

    alert ("La opcion ingresada no es correcta.")
}
imprimirDatos(total);
}



function imprimirDatos (total) {

alert ( "El total con IVA incluido es: "+total);
}



solicitarDatos();
