$(function () {
  $('.popupArea').hide();

  $('.ragBtn').click(function () {
    $('.popupArea').fadeIn();
  });

  $('.xBtn').click(function () {
    $('.popupArea').fadeOut();
  });
});

$(function () {
  $('.addFood').hide();

  $('.insert').click(function () {
    $('.addFood').fadeIn();
  });

  $('.addFoodBtn').click(function () {
    $('.addFood').fadeOut();
  });
});
