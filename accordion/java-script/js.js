var accordion = document.getElementsByClassName('accordion');

for(i=0; i<accordion.length; i++){
    accordion[i].onclick = show;
}

function show(event){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
}