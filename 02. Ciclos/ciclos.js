//? https://dev.to/lissy93/fun-with-consolelog-3i59


//alert("Hola desde Js")
console.log("Hola desde el navegador de la consola")


//* EJEMPLOS DE CICLOS

//* WHILE
let index = 0
while(index<11){
    console.log("Voy en el número: " + index)
    index++
}

//* EJEMPLOS DE TABLAS DE MULTIPLICAR CON CICLO WHILE Y FOR
console.log("\nEjemplo con while");
var indexDos = 1
while(indexDos<11){
    console.log(indexDos + " x 2 = " + (indexDos*2))
    indexDos++
}

console.log("\nEjemplo con for");
var numero = 5
for(let i = 1;i<11; i++ ){
    console.log("5 x " + i + " : " + i*numero)
}


//* EJEMPLO DE UNA CONTRASEÑA
/*let contraseña = "gatito"
let input
do{
    //Preguntar por al contraseña
    input = prompt("Contraseña: ")
}while(input != contraseña)

alert("Bienvenido!")*/


//*EJEMPLPI DE CONTRASEÑA CON 3 INTENTOS
var contraseñaDos = "patito"
let input = ""
let intentos = 0

do {
    //Mientras tengas intentos pregunta, si no le manda error
    //Estructura de control
    if (intentos >= 3){
        throw Error("Acceso denegado")
    }
    input = prompt("Contraseña: ")
    intentos++
}while(input != contraseñaDos)
alert("Bienvenido!")
