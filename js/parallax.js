$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 5) + "%",
        //top: -(scroll / 10) + "%",
        //"-webkit-filter": "blur(" + (scroll / 100) + "px)",
        //filter: "blur(" + (scroll / 100) + "px)"
    });
    $("video").css({
        
        top: -(scroll / 10) + "%",
        //"-webkit-filter": "blur(" + (scroll / 100) + "px)",
        //filter: "blur(" + (scroll / 100) + "px)"
        height: (100 + scroll / 20) + "%",
    });
    
});