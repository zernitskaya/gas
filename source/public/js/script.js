$(document).ready(function() {
  if($("a[href='#about'")) {/* прокрутка вверх - работает */
    $("a[href='#about']").bind('click',function(event) {
      $('html,body').stop().animate({scrollTop:$("#about").offset().top},'slow');
      event.preventDefault();
      return false;
    });
}
});

$(function () {

  $(".js-range-slider").ionRangeSlider({
      skin: "round",
      min: 12000,
      max: 1000000,
      from: 12000,
      max_postfix: "+",
      postfix: " руб.",
      grid: true,
      onStart: function (data) {
          $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' руб.');
      },
      onChange: function (data) {
          $("#calcResult").text(Math.round((data.from * 0.32) + data.from) + ' руб.');
      },
  });
});
