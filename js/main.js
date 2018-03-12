$(document).ready(function() {
  $(document).imagesLoaded(function() {
    $(".pre-loader").fadeOut(1000);
  });

  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 600) {
      $(".float-btn").addClass("view");
    } else {
      $(".float-btn").removeClass("view");
    }
  });

  $(".float-btn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
