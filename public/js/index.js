// menu
$(".menu").click(function () {
  $("header").children("div").children("nav").slideDown(300);
});
$(".menu-close").click(function () {
  $("header").children("div").children("nav").slideUp(300);
});

// 單選
$(".single-choice")
  .children("div")
  .click(function () {
    $(".single-choice").children("div").removeClass("active");
    $(this).addClass("active");
  });

// 輪播圖
var Rswiper = new Swiper("#banner", {
  loop: true,
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#banner-pag",
    clickable: true,
  },
  navigation: {
    nextEl: ".Snext", // 上一頁按鈕物件
    prevEl: ".Sprev", // 下一頁按鈕物件
  },
});
// 滑鼠滑入後停止輪播
$("#banner").mouseenter(function () {
  Rswiper.autoplay.stop();
});
$("#banner").mouseleave(function () {
  Rswiper.autoplay.start();
});

// 輪播圖
var Bswiper = new Swiper(".blog-banner", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination: {
  // 	el: "#blog-pag",
  // 	clickable: true,
  // },
  // navigation: {
  // 	nextEl: ".Bnext",
  // 	prevEl: ".Bprev",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
// 滑鼠滑入後停止輪播
$(".blog-banner").mouseenter(function () {
  Bswiper.autoplay.stop();
});
$(".blog-banner").mouseleave(function () {
  Bswiper.autoplay.start();
});

// 輪播圖
var Nswiper = new Swiper("#new", {
  loop: true,
  slidesPerView: 1,
  direction: "vertical",
  // spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination: {
  // 	el: "#blog-pag",
  // 	clickable: true,
  // },
  navigation: {
    nextEl: ".Nnext",
    prevEl: ".Nprev",
  },
});
// 滑鼠滑入後停止輪播
$(".blog-banner").mouseenter(function () {
  Bswiper.autoplay.stop();
});
$(".blog-banner").mouseleave(function () {
  Bswiper.autoplay.start();
});

// go to top
  $(".goto-top").click(function () { 
    $("html,body").animate({scrollTop:0},parseInt(300));
  });
