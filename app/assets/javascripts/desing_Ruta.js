//MODAL
var sacaModal = document.getElementsByClassName('fotos')[0].children;
for (i=0; i<sacaModal.length; i++){
  sacaModal[i].addEventListener('click', openModal);
};
function openModal (event){
        $("#myModal").modal('show');
};

