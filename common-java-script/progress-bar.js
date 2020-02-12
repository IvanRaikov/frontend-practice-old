var width, bar, label;

function move(){
     width = 0;
     bar = document.getElementById('bar');
     label = document.getElementById('label');
    var id = setInterval(frame, 10);
    
    function frame(){
        if(width>=100){
            clearInterval(id);
            document.getElementById('progress-container').style.display='none';
            document.getElementById('mainContent').style.display='block';
        }
        bar.style.width = width+'%';
        label.innerHTML = width+'%';
        width++;
    }
}
