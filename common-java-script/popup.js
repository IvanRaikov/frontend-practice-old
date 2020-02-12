var li = document.getElementsByTagName('li');
var span = document.getElementsByTagName('span');

for(i=0;i<li.length;i++){
    li[i].onmouseover = showHelp;
    li[i].onmouseout = hiddenHelp;
}
function showHelp(event){
    if(event.target.tagName == 'A' || event.target.tagName == 'LI'){
        var target = event.target.parentElement.getElementsByTagName('span')[0];
        target.classList.add('showhelp');
        target.classList.remove('hidden');
        console.log(target);
    }
}


function hiddenHelp(event){
    for(i=0; i<span.length; i++){
            span[i].classList.remove('showhelp');
            span[i].classList.add('hidden');
        }
}
