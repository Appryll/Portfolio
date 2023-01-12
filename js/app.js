$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 1){
            $("nav").addClass('color');
        }else{
            $("nav").removeClass('color');
        }
    })
    
})