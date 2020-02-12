$(document).ready(function(){
    $('.tab-content>div:not(":first")').hide();
    $('li:first').css('background','white');
    $('.tab-menu li').each(function(i){
        $(this).attr('data-tab','tab'+i);
    });
    $('.tab-content div').each(function(i){
        $(this).attr('data-tab','tab'+i);
    });
    $('.tab-menu li').click(function(){
        
        var dataTab = $(this).data('tab');
        var wrapper = $(this).closest('.wrapper');
        wrapper.find('.tab-content div').hide();
        wrapper.find('li').css('background','grey');
        $(this).css('background','white');
        wrapper.find('.tab-content div[data-tab='+ dataTab +']').show();
    });
});
