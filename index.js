$(".download-button").hover(function() {
  $(".title-QR").addClass("shake_effect");
  setTimeout(function() {
    $(".title-QR").removeClass("shake_effect");
  }, 500)
});



$(document).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('.main').addClass('active');
    $('.reveal-main').addClass('activetwo');
  } else {
    $('.main').removeClass('active');
    $('.reveal-main').removeClass('activetwo');
  }

});
