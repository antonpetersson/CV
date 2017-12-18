$(document).ready(function(){
    $(".title").animate({marginLeft: "2vw"},{duration: 2000});

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".box1About").animate({marginLeft: "2vw"},{duration: 2000});
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".box2About").animate({marginRight: "2vw"},{duration: 2000});
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $(".box3About").animate({marginLeft: "2vw"},{duration: 2000});
        }
    });


});

