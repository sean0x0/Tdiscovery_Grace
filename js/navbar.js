$(document).ready(function () {


  // 選單下滑變換效果         
  $(window).on("scroll", function (event) {
    var yOffset = window.pageYOffset;
    var breakpoint = $('main').position().top - 100;
    var halfWindow = $(window).height() / 2 + 70;

    if (yOffset > breakpoint) { //網頁下滾到主要內容區塊，header和nav出現
      $("#nav").addClass("active");
      $("#nav-gradient").addClass("show");
    } else {
      $("#nav").removeClass("active");
      $("#nav-gradient").removeClass("show");
    }

    if (yOffset > halfWindow) { //網頁下滾到主要內容區塊，主logo縮小
      $("#logo").addClass("shrink").animate(3000);
    }

  });


});
