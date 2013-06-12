/**
 * Show sticky form only when scrolling down. Only works if there's a rendered #sticky-form,
 * ignore
 */
(function () {

  function showHideSticky ($sticky) {
    var start_after_pixels = $('#js-stiky-target').data('stiky-height') || 300;

    if ($(window).scrollTop() > start_after_pixels) {
      if ($sticky.hasClass('hidden')) {
        $sticky.hide().removeClass('hidden').fadeIn();
      }
    } else if (!$sticky.hasClass('hidden')) {
      $sticky.addClass('hidden').show().fadeOut();
    }
  }


  $(function () {
    var $sticky = $('#sticky-form');

    var onscroll = _.throttle(function () {
      showHideSticky($sticky);
    }, 250);

    if ($sticky.length) {
      $(window).scroll(onscroll);
    }
  });

}());
