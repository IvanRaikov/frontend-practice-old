var position = 0;
function move(){
    if(position === 0){
        down();
    }else{
        up();
    }
}

function down(){
    var square = document.getElementById('square');
    
    var id = setInterval(frame, 7);
    function frame(){
        if(position == 350){
            clearInterval(id);
        }else{
            position ++;
            square.style.backgroundColor = setColor(position);
            square.style.top=position +'px';
            square.style.left=position +'px';
        }
    }
}
function up(){
    var square = document.getElementById('square');
    
    var id = setInterval(frame, 7);
    function frame(){
        if(position === 0){
            clearInterval(id);
        }else{
            position --;
            square.style.backgroundColor = setColor(position);
            square.style.top=position +'px';
            square.style.left=position +'px';
        }
    }
}

function setColor(position){
    return '#'+position;
}