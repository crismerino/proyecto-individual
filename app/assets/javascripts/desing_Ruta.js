window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('foto1').addEventListener('dragstart', drag, false);
    document.getElementById('foto2').addEventListener('dragstart', drag, false);
    document.getElementById('foto3').addEventListener('dragstart', drag, false);              
    document.getElementById('recuadro').addEventListener('dragover', permitirDrop, false);        
    document.getElementById('recuadro').addEventListener('drop', drop, false);
    document.getElementById('recuadro').addEventListener('drop', drop, false);
    drag.addEventListener('dragend', handleDragEnd, false);                
}

function drag(ev)
{
    ev.dataTransfer.setData("src",ev.target.id);
}    

function drop(ev)
{
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("src");
    ev.target.appendChild(document.getElementById(dato));
}  


function permitirDrop(ev)
{
    ev.preventDefault();
}
  