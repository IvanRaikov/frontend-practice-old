$(document).ready(function(){
    $('.trigger-menu').click(function(){
        $('nav ul').slideToggle(500);
        
    });
    $(window).resize(function(){
            if($(window).width() > 500){
                $('nav ul').css('display','block');
            }
        });
    
});

