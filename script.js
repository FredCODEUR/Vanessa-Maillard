
var screenWidth = function(){
    if (window.innerWidth <= 1024){
        console.log(window.innerWidth);
        return window.innerWidth;
    }
}

$(function(){
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
    $(".society").hover(function(){
        $(".name h1").toggleClass("selection")
        ,
        $(".name h3").toggleClass("selection")
    });
    $(".specialities a").hover(function(){
        $(this).addClass("selection");
        },
        function(){
            $(this).removeClass("selection");
    });
});

$(window).resize(function(){
    screenWidth();
});