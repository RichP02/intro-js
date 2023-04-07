/*
document -> DOM
wiindow -> Api Navegator
*/

const selectById = document.getElementById("main-title")
console.log(selectById);

const selectByTagName = document.getElementsByTagName("p")
console.log(selectByTagName);

const selectByClassName = document.getElementsByClassName("title")
console.log(selectByClassName);


const selectQueryByTagName = document.querySelector("p")
console.log(selectQueryByTagName);

const selectQueryByClassName = document.querySelector(".title")
console.log(selectQueryByClassName);

const selectQueryById = document.querySelector("#main-title")
console.log(selectQueryById);


const selectQueryAll = document.querySelectorAll(".title")
console.log(selectQueryAll);


// Modificar el texto de una etiqueta
selectById.textContent = "Rich"
// Agregar clases desde js
selectQueryById.className = "text-orange"
// Agregar estilos de js
selectQueryById.style.fontSize = "24px"
selectQueryById.style.color = "purple"


//console.log(typeof selectByTagName);