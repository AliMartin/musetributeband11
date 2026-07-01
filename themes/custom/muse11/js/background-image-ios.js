(function (Drupal) {
  Drupal.behaviors.iosBackgroundFix = {
    attach: function (context) {
      if (context !== document) {
        return;
      }
      var bgImage = window.getComputedStyle(document.body).backgroundImage;
      if (bgImage && bgImage !== 'none') {
        document.body.style.setProperty('--bg-image', bgImage);
      }
    }
  };
})(Drupal);