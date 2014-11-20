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
}

function drag(ev){
    ev.dataTransfer.setData("src",ev.target.id);
}    
function permitirDrop(ev){
    ev.preventDefault();  
}
function drop(ev){
    ev.preventDefault();
    var dato=ev.dataTransfer.getData("src");
    ev.target.appendChild(document.getElementById(dato));
}  

//MODAL
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
    $("#foto5").click(function() { 
        $("#myModal5").modal('show')
    });
    $("#foto6").click(function() { 
        $("#myModal6").modal('show')
    });
    $("#foto7").click(function() { 
        $("#myModal7").modal('show')
    });
});

  