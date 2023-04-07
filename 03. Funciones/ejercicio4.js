//* 4. Hacer una funcion que guarde en un array los 20 primeros numeros pares
function parNumber(){
    let par = []
    let number = 2

    for(i=0;i<20;i++){
        par.push(number)
        number += 2
    }
    console.log(par)
}
parNumber()