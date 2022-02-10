$(document).ready(function() {
  if($("a[href='#about'")) {/* прокрутка вверх - работает */
    $("a[href='#about']").bind('click',function(event) {
      $('html,body').stop().animate({scrollTop:$("body").offset().top},'slow');
      event.preventDefault();
      return false;
    });
}
});
