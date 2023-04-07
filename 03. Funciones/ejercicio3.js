//*3. Hacer una funcion que muestre los primeros 10 digitos de la seria Fibonnacci
//* La secesion de Fibonacci es la sucesion de numeros: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function fibonacci() {
    let num1 = 0
    let num2 = 1
    let fibonacci = [num1, num2]

    for (let i = 2; i < 10; i++) {
        let nextNum = num1 + num2
        fibonacci.push(nextNum)
        num1 = num2
        num2 = nextNum
    }
    console.log(fibonacci)
}
fibonacci()