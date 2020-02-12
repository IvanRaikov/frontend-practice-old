document.getElementById('nav').onmouseover=function (event){
    var target=event.target;
    if(target.className ==='menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = "block";
        target.style.background = "red";
        s[0].style.background = "red";
    }
};

document.onmouseover=function (event){
    if(event.target.className !== 'menu-item' && event.target.className !== 'submenu'){
        closeMenu();
    }
};

function closeMenu(){
    var arrSubmenu = document.getElementsByClassName('submenu');
    var menuItem = document.getElementsByClassName('menu-item');
    
    for(i=0; i<arrSubmenu.length; i++){
        arrSubmenu[i].style.display='none';
        menuItem[i].style.background = "green";
        arrSubmenu[i].style.background='green';
    }
    }; 