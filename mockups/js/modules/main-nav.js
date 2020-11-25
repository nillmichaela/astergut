(function(window, $, undefined) {

  // Menu - Navigation
  $('.navbar-toggler').click(function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('scrollstop');
    $(this).blur();
  });

  const mainNav = $('.main-nav');
  const toggle = mainNav.find('.main-nav--toggle');
  const html = $('html');
  let lastScrollPos = 0;

  toggle.on('click.mainNav', function(e) {
    const btn = $(this);

    e.preventDefault();

    html.toggleClass('scroll-lock');
    html.toggleClass('main-nav--active');

    if (html.hasClass('main-nav--active')) {
      toggle.removeClass('menu-animation--out').addClass('menu-animation--in');
    } else {
      toggle.removeClass('menu-animation--in').addClass('menu-animation--out');
    }

    btn.blur();
  });

  $(window).on('scroll', function(e) {
    e.preventDefault();

    if (!html.hasClass('scroll-lock')) {
      lastScrollPos = $(window).scrollTop();
    } else {
      $(window).scrollTop(lastScrollPos);
    }

    return false;
  });

}(window, jQuery));