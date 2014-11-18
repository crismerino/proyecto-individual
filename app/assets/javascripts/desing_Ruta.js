window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('foto1').addEventListener('dragstart', drag, false);
    document.getElementById('foto2').addEventListener('dragstart', drag, false);
    document.getElementById('foto3').addEventListener('dragstart', drag, false);              
    document.getElementById('recuadro').addEventListener('dragover', permitirDrop, false);        
    document.getElementById('recuadro').addEventListener('drop', drop, false);
    document.getElementById('recuadro').addEventListener('drop', drop, false);
//    document.getElementById('foto1').addEventListener('dragend', soltar, false);   
//    document.getElementById('foto2').addEventListener('dragend', soltar, false);  
//    document.getElementById('foto3').addEventListener('dragend', soltar, false);                 
}


function drag(ev)
{
    ev.dataTransfer.setData("src",ev.target.id);
    var miDiv = document.getElementById('recuadro');
    miDiv.classList.add('cambiar');
    console.log("drag");
}    
function permitirDrop(ev)
{
    ev.preventDefault();
    console.log("permite log");
}
//function soltar(ev){
//    var miDiv = document.getElementById('recuadro');
//    miDiv.classList.remove('cambiar');
//}
function drop(ev)
{
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("src");
    ev.target.appendChild(document.getElementById(dato));
    console.log("drop");
}  



  