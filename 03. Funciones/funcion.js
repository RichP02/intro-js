/*function sumaNumero (x,y){
    let suma = x + y
    console.log("La suma es: " + suma)
}
sumaNumero(2,2)*/

//? Mantra de funciones
    //1) Declarar nuestra funcion
    //2) Invocar nuestra funcion

function Sumar(a,b){
    let resultado = a + b
    console.log(`La suma es ${resultado}`) //Template string (`) cadenas strings + datos (variables)
    //console.log("La suma es: " + suma)
}
Sumar(2,2)


function table(x){
    for(let i=1;i<11;i++){
        console.log(x +" x " + i + " : " + (i*x))
    }
}
table(4)


//* Hacer una funcion que pida a un usuario su edad
//* Y saber si es mayor o menor de edad
/*function getAge(){
    var num = window.prompt("¿Cuatos años tienes?")
    if(edad < 18){
        console.log("Eres menor de edad");
    } else if(edad >= 18){
        console.log("Mayor de edad");
    } else {
        console.log("Edad no valida");
    }
}
getAge()*/
