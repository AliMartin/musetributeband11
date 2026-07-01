(function (Drupal) {
  Drupal.behaviors.iosBackgroundFix = {
    attach: function (context) {
      if (context !== document) {
        return;
      }
      var bodyStyle = window.getComputedStyle(document.body);
      var bgImage = bodyStyle.backgroundImage;
      if (bgImage && bgImage !== 'none') {
        document.body.style.setProperty('--bg-image', bgImage);
      }
    }
  };
})(Drupal);