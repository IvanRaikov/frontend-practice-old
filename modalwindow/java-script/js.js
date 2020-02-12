var myBtn = document.getElementById('myBtn');
var myModal = document.getElementById('myModal');
var close = document.getElementsByClassName('close')[0];

myBtn.onclick=function(){
    myModal.style.display='block';
}

close.onclick=function(){
    myModal.style.display='none';
}

