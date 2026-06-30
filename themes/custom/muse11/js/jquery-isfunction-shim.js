(function ($) {
  if (typeof $.isFunction !== 'function') {
    $.isFunction = function (obj) {
      return typeof obj === 'function';
    };
  }
})(jQuery);