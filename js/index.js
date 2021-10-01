// 只吃首頁
$(document).ready(function () {
  
  
  $(window).on("scroll", function (event) {
    

    var yOffset = window.pageYOffset;
    var breakpoint = $("main").position().top - 90;
    var navPos = 110;

    if (yOffset > navPos) { //網頁下拉到文案的地方，文案淡出
      $("#main-title").addClass("fade");
    } else {
      $("#main-title").removeClass("fade");
    }



    if (yOffset > breakpoint) {//網頁下拉到定點，header/nav/logo/小預約按鈕做變化
  
      $("#nav").addClass("active");
      $("#nav-gradient").addClass("show");
      $(".navbar-toggler").removeClass("d-none");
      $(".navbar-nav").removeClass("d-lg-none");
      $("#logo").addClass("shrink");
      $("#small-booking").removeClass("d-none");
    } else {
    
      $("#nav").removeClass("active");
      $("#nav-gradient").removeClass("show");
      $(".navbar-toggler").addClass("d-none");
      $(".navbar-nav").addClass("d-lg-none");

      $("#logo").removeClass("shrink");
      $("#small-booking").addClass("d-none");
    }
  });

  //scroll按鈕
  var main = $("main").position(); 

  $(".scroll-btn").on("click", function (e) { //點擊開始探索scroll時，網頁下滑到主要內容區塊
    $("html, body").animate({ scrollTop: main.top }, 500, "linear");
  });
});
