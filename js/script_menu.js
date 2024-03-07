$(function(){
     //탭메뉴
     $(".menu_btn li").click(function(){
        // console.log("sdfsdfsdf");
        $(".menu_btn li").removeClass("on");
        $(this).addClass("on");

        var n = $(this).index();

        $("#section > div").hide();
        $("#section > div").eq(n).css({display:"flex"})
    })//

})