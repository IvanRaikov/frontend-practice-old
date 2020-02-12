var navPos, winPos;
navPos = $('nav').offset().top ;


$(window).scroll(function (){
    
    winPos = $(window).scrollTop();
    if(navPos <= winPos){
        $('nav').addClass('fixed');
        $('nav').addClass('shadow');
    }else{
        $('nav').removeClass('shadow');
        $('nav').removeClass('fixed');
    }
});