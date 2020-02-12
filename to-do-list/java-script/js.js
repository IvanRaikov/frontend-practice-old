var nodeList = document.getElementsByTagName('li');

for(i=0; i<nodeList.length; i++){
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.classList.add('button');
    span.appendChild(txt);
    span.onclick=close;
    nodeList[i].appendChild(span);

}
for(i=0; i<nodeList.length; i++){
    var done =  document.createElement('span');
    var txt = document.createTextNode('+');
    done.classList.add('button');
    done.appendChild(txt);
    done.onclick = marckCompleted;
    nodeList[i].appendChild(done);
}

function close(){
    this.parentElement.style.display="none";
}

function marckCompleted(){
    this.parentElement.classList.toggle('checked');
}

function addNewElement(){
    var input = document.getElementById('input');
    var ul = document.getElementById('ul');
    var li = document.createElement('li');
    var text = document.createTextNode(input.value);
    
    if(input.value === ''){
        alert('поле не может быть пустым');
    }else{
    
    var done =  document.createElement('span');
    var txt = document.createTextNode('+');
    done.classList.add('button');
    done.appendChild(txt);
    done.onclick = marckCompleted;
    
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.classList.add('button');
    span.appendChild(txt);
    span.onclick=close;
    
    li.appendChild(span);
    li.appendChild(done);
    li.appendChild(text);
    ul.appendChild(li);
    }
}