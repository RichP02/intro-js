//* 2. Hacer una funcion que halle el maximo entre tres número
function maxNumber(){
    var number1 = window.prompt("Ingresa el primer número")
    var number2 = window.prompt("Ingresa el segundo número")
    var number3 = window.prompt("Ingresa el tercer número")
    console.log(Math.max(number1, number2, number3));
}
maxNumber()