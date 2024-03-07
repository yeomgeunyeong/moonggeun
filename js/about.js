$(function(){
    $(".a_list img").each(function(i){
    setTimeout(function(){ $(".a_list img").eq(i).addClass("ani")}, i*1500)
    // setInterval(function(){ $(".list img").eq(i).toggleClass("ani")}, i*1000)
     })
})