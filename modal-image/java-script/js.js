var modal, image, modalContent, caption, close;

modal = document.getElementById('modal');
image = document.getElementsByClassName('image');
modalContent = document.getElementById('modalContent');
caption = document.getElementById('caption');


for(i=0; i<image.length; i++){
    image[i].onclick = showModal;
}

function showModal(){
    modal.style.display="block";
    modalContent.src=this.src;
    caption.innerHTML = this.alt;
}

function closeModal(){
    modal.style.display = "none";
}
