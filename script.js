$(document).ready(function () {
  $(".accordian a").click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass("active")) {
      $(".accordian p").slideUp();
      $(this).next("p").slideToggle();
      $(".accordian a").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).next("p").slideToggle();
      $(this).removeClass("active");
    }
  });

  $(".tab-link").click(function (e) {
    e.preventDefault();

    const index = $(this).parent().index() + 1;
    $(".tab-link").removeClass("active");
    $(this).addClass("active");
    $(".tab-data .tab").fadeOut(0);
    $(`.tab-data .tab:nth-child(${index})`).fadeIn();
  });
});
