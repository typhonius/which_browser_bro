(function($) {
  Drupal.behaviors.which_browser_bro = {
    attach: function(context, settings) {
      if ($.browser.webkit == true) {
        if (typeof(chrome) != 'undefined') {
          $('a').addClass('Chrome');
        } else {
          $('a').addClass('Safari');
        }
      } else if ($.browser.mozilla == true) {
        $('a').addClass('Firefox');
      } else if ($.browser.opera == true) {
        $('a').addClass('Opera');
      } else {
        $('a').addClass('For_the_love_of_god_move_off_IE');
      }
    }
  }
})(jQuery);
