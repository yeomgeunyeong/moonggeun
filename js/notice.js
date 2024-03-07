$(function(){

    $(".noti_list").click(function(){

        var me=$(this).children("h2") //펼침
        var frid=$(this).siblings().children("h2") //닫힘

        if(me.hasClass("on")==true){
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
        }else{
            me.addClass("on");
            me.prev().fadeIn();
            me.next().slideDown();

            frid.removeClass("on");
            frid.prev().fadeOut();
            frid.next().slideUp();
        }//if

    })//click
})//jquery