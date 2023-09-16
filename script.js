
$(function(){

    /* HEADER *******************************************************************/

    $("#activities a span").hover(function () {
        $(this).addClass("selection")
        }, 
        function () {
            $(this).removeClass("selection")
        }
    );
    $("#society").hover(function () {
        $("#society a span").addClass("selection")
        ,
        $("#society img").addClass("selection")
        }, 
        function () {
            $("#society a span").removeClass("selection")
            ,
            $("#society img").removeClass("selection")
        }
    );
    $("#menu").hover(function () {
        $("#title-menu").addClass("selection")
        ,
        $("#burger-icon").addClass("selection")
        ,
        $(".line-burger").removeClass("line-burger")
        ,
        $("#burger-icon span").addClass("burger-selection");
        }, 
        function () {
            $("#title-menu").removeClass("selection")
            ,
            $("#burger-icon").removeClass("selection")
            ,
            $("#burger-icon span").removeClass("burger-selection")
            ,
            $("#burger-icon span").addClass("line-burger");
        }
    );
    
    /***********************************************************************************/
});
