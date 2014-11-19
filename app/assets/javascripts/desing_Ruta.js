//SLIDER CON PODIBILIDAD DE ARRASTRE
setInterval('avanzaSlide()',5000);//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
var arrayImagenes = new Array(".img1",".img2",".img3");//array con las clases para las diferentes imagenes
var contador = 0;//variable que nos permitirá saber qué imagen se está mostrando

function mostrar(img){//hace un efecto fadeIn para mostrar una imagen
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeIn(1500);        
    });
}

function ocultar(img){//hace un efecto fadeOut para ocultar una imagen
    $(img).ready(function(){                
         $(arrayImagenes[contador]).fadeOut(1500);        
    });
}

function avanzaSlide(){//función principal
       //se oculta la imagen actual
    ocultar(arrayImagenes[contador]);
       //aumentamos el contador en una unidad
    contador = (contador + 1) % 3;
       //mostramos la nueva imagen
    mostrar(arrayImagenes[contador]);
}



//FUNCION DRAG AND DROP
window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('foto1').addEventListener('dragstart', drag, false);
    document.getElementById('foto2').addEventListener('dragstart', drag, false);
    document.getElementById('foto3').addEventListener('dragstart', drag, false);
    document.getElementById('foto4').addEventListener('dragstart', drag, false);
    document.getElementById('foto5').addEventListener('dragstart', drag, false);
    document.getElementById('foto6').addEventListener('dragstart', drag, false);
    document.getElementById('foto7').addEventListener('dragstart', drag, false);
    document.getElementById('recuadro').addEventListener('dragover', permitirDrop, false);        
    document.getElementById('recuadro').addEventListener('drop', drop, false);
    document.getElementById('fotos').addEventListener('dragover', permitirDrop, false);  
    document.getElementById('fotos').addEventListener('drop', drop, false);

//  document.getElementById('recuadro').addEventListener('drop', drop, false);
//  document.getElementById('foto1').addEventListener('dragend', soltar, false);   
//  document.getElementById('foto2').addEventListener('dragend', soltar, false);  
//  document.getElementById('foto3').addEventListener('dragend', soltar, false);                 
}


function drag(ev)
{
    ev.dataTransfer.setData("src",ev.target.id);
   // var miDiv = document.getElementById('recuadro');
   // miDiv.classList.add('cambiar');
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


//MODAL
//var pepito = function (){
//    $('#myModal').modal('show')
//}


$(document).ready(function(){
    $("#foto1").click(function() { 
        $("#myModal1").modal('show')
    });
    $("#foto2").click(function() { 
        $("#myModal2").modal('show')
    });
    $("#foto3").click(function() { 
        $("#myModal3").modal('show')
    });
    $("#foto4").click(function() { 
        $("#myModal4").modal('show')
    });
});

  