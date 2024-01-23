//AGARRANDO UN ELEMENTO HTML POR ID:

let elemento = document.getElementById("miDiv");


// AGARRANDO UN ELEMENTO MEDIANTE SELECTOR DE CSS

let elementoPorSelector = document.querySelector(".parrafo");


// AGARRANDO TODOS LOS ELEMENTOS QUE COINCIDAN CON EL SELECTOR, ESTA DEVOLCERÁ UNA LISTA DE NODOS

let elementos = document.querySelectorAll(".parrafo");


// NODOS

let divNode = document.getElementById("miDiv"); // Nodo de elemento
let textNode = divNode.firstChild; // Nodo de texto dentro del div




// ESTILOS MEDIANTE JS

let miElemento = document.getElementById("miDiv");

// Manipular el estilo del elemento
miElemento.style.backgroundColor = "green";
miElemento.style.width = "300px";
miElemento.style.height = "150px";
miElemento.style.color = "white";
miElemento.style.fontSize = "18px";



// DOM TRAVERSING

 // Obtener el nodo padre
 let padre = document.getElementById("padre");

 // Obtener el primer hijo del nodo padre
 let primerHijo = padre.firstChild;

 // Obtener el siguiente hermano del primer hijo
 let siguienteHermano = primerHijo.nextSibling;


 // createElement 

 let nuevoParrafo = document.createElement("p");

// innerHTML

 document.body.innerHTML = "<h1>HOLA</h1>"; // Reemplaza el contenido de <body> con un titulo
