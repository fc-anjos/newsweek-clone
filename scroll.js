$(window).on("scroll", function() {
  if ($(this).scrollTop() < 130) {
    $(".header-alt").addClass("transparent");
  } else {
    $(".header-alt").removeClass("transparent");
  }
});
