$(function(){
    $(".slide").slick({
        dots:true,
        arrows:true,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        draggable:true,
        responsive: [{
            breakpoint: 599,
            settings: {
                slidesToShow: 1,
                arrows: true
            }

        }]
    });
})