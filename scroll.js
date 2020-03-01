$(window).on("scroll", function() {
  if ($(this).scrollTop() < 170) {
    $(".header-alt").addClass("transparent");
  } else {
    $(".header-alt").removeClass("transparent");
  }
});
