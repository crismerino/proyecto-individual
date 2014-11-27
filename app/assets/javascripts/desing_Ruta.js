//FUNCION DRAG AND DROP Y SUMA DE TIEMPO Y DINERO//
window.addEventListener('load', inicio, false);
var tiempoActual = 0;
var dineroActual = 0;

function inicio() {
  var fotos = document.getElementsByClassName('fotos')[0];
  var dropbox = document.getElementById('dropbox');

  // Permitir Drag and Drop desde la zona superior al recuadro, sumando tiempos y dinero
  fotos.addEventListener('dragstart', drag, false);
  dropbox.addEventListener('dragover', permitirDrop, false);
  dropbox.addEventListener('drop', dropSuma, false);

  // Permitir Drag and Drop desde el recuadro a la zona superior, restando tiempos y dinero
  dropbox.addEventListener('dragstart', drag, false); // drag inverso xo no funciona porque suma
  fotos.addEventListener('dragover',permitirDrop, false);
  fotos.addEventListener('drop', dropResta, false);

  console.log("drag");
}

function drag(ev){
    ev.dataTransfer.setData("src", ev.target.id);
    ev.dataTransfer.setData("monumentTime", ev.target.dataset.time);
    ev.dataTransfer.setData("monumentPrice", ev.target.dataset.price);

    // var monumentTime = ev.target.dataset.time;   
}

function permitirDrop(ev){
  ev.preventDefault(); 
  console.log("permite drop"); 
}

// Esta función llama a moveImage para mover la imagen, después suma los tiempos y dinero, y después muestra el resultado
function dropSuma(ev){
  moveImage(ev);

  var monumentTime = ev.dataTransfer.getData("monumentTime");
  var monumentPrice = ev.dataTransfer.getData("monumentPrice");

  tiempoActual = tiempoActual + parseInt(monumentTime, 10);
  dineroActual = dineroActual + parseInt(monumentPrice, 10);

  document.getElementById("printTime").innerHTML = "Tiempo estimado de la visita:" + " " + tiempoActual + " " +"minutos";
  document.getElementById("printPrice").innerHTML = "Dinero:" + " " + dineroActual + "€";

  console.log("drop");
}

// Esta función llama a moveImage para mover la imagen, después resta los tiempos y dinero, y después muestra el resultado
function dropResta(ev){
  moveImage(ev);

  var monumentTime = ev.dataTransfer.getData("monumentTime");
  var monumentPrice = ev.dataTransfer.getData("monumentPrice");

  tiempoActual = tiempoActual - parseInt(monumentTime, 10);
  dineroActual = dineroActual - parseInt(monumentPrice, 10);

  document.getElementById("printTime").innerHTML = "Tiempo estimado de la visita:" + " " + tiempoActual + " " +"minutos";
  document.getElementById("printPrice").innerHTML = "Dinero:" + " " + dineroActual + "€";

  console.log("drop");
}

// Esta función cambia la imagen de un lugar a otro
function moveImage(ev){
  ev.preventDefault();
  var dato = ev.dataTransfer.getData("src");
  ev.target.appendChild(document.getElementById(dato));
}
