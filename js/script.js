$(function(){
    //메인비쥬얼(슬라이드)영역
    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false,
    })


    //팝업 영역
    $(".close").click(function(){
        $(".pop").hide();
    })

})