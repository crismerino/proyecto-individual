//FUNCION DRAG AND DROP Y SUMA DE TIEMPO Y DINERO//
window.addEventListener('load', inicio, false);
var tiempoActual = 0;
var dineroActual = 0;

function inicio() {
  var fotos = document.getElementsByClassName('fotos')[0];
  var dropbox = document.getElementById('dropbox');
  fotos.addEventListener('dragstart', drag, false);
  dropbox.addEventListener('dragover', permitirDrop, false);
  dropbox.addEventListener('drop', drop, false);
  fotos.addEventListener('dragover',permitirDrop, false);
  fotos.addEventListener('drop', drop, false);
}

function drag(ev){
    ev.dataTransfer.setData("src", ev.target.id);

    ev.dataTransfer.setData("monumentTime", ev.target.dataset.time);
    ev.dataTransfer.setData("monumentPrice", ev.target.dataset.price);

    // var monumentTime = ev.target.dataset.time;
    // console.log(monumentTime);
}

function permitirDrop(ev){
  ev.preventDefault();  
}

function drop(ev){
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("src");
    ev.target.appendChild(document.getElementById(dato));
    var monumentTime = ev.dataTransfer.getData("monumentTime");
    var monumentPrice = ev.dataTransfer.getData("monumentPrice");
    tiempoActual = tiempoActual + monumentTime;
    dineroActual = dineroActual + monumentPrice;
    document.getElementById("printTime").innerHTML = "Tiempo estimado de la visita:" + " " + tiempoActual + " " +"minutos";
    document.getElementById("printPrice").innerHTML = "Dinero:" + " " + dineroActual + "€";
}
