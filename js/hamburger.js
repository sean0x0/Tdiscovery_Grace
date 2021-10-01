// 全站漢堡選單效果 

$(document).ready(function () {
  $('.hamburger').click(function () {
      $('.hamburger').toggleClass('active');
  })
})

// 只有小版會運作
const hamburger = document.querySelector(".hamburger");
const navbarCollapse = document.querySelector(".navbar-collapse");
const links = document.querySelectorAll(".navbar-collapse li");


hamburger.addEventListener("click", () => { //點擊漢堡icon，選單開啟/收合
  navbarCollapse.classList.toggle("open");
  
  links.forEach((link) => { //點擊漢堡icon，各選項淡出淡入
    link.classList.toggle("fade");
  });
  
});

$(".hamburger").click(function () { //點擊漢堡選單時，小預約按鈕淡出，背景鎖定
  $("#small-booking").fadeToggle(250);
  $("body").toggleClass("overflow-hidden");
});