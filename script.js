
var screenWidth = function(){
    if (window.innerWidth <= 1024){
        console.log(window.innerWidth);
        return window.innerWidth;
    }
}

var sidebarIsOpen = false;
var pos = $('ul').position();

$(function(){
    
    console.log(pos.top);
    console.log(pos.left);
    $(".navbar").click(function(){
        if(window.innerWidth <= 1024){
            $(".line-burger-1").toggleClass("cross-burger-1")
            ,
            $(".line-burger-2").toggleClass("cross-burger-2")
            ,
            $(".line-burger-3").toggleClass("cross-burger-3")
            ,
            $(".dropdown-menu").toggleClass("sidebar")
        }
        pos = $('ul').position();
        console.log(pos.top);
        console.log(pos.left);
    });
    $(".navbar").hover(function(){
        if(window.innerWidth > 1024){
            $(".line-burger-1").toggleClass("cross-burger-1")
            ,
            $(".line-burger-2").toggleClass("cross-burger-2")
            ,
            $(".line-burger-3").toggleClass("cross-burger-3")
            ,
            $(".dropdown-menu").toggleClass("sidebar")
        }
    });
});

$(window).resize(function(){
    screenWidth();
});