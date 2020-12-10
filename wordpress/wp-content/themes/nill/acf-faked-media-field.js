(function(window, $, i18n, undefined) {

  var __ = i18n.__;

  $(function() {
    var fieldContainer = $('[data-name="header_slider_images"]');

    if (fieldContainer.length) {
      var fieldId = 'acf-' + fieldContainer.data('key');
      var field = fieldContainer.find('input');
      var ids = field.val().split(',');

      var preview = $('<div id="header_slider_images_preview"></div>');
      var setGalleryButton = $('<button type="button" class="button-primary button-set-gallery" data-input="#' + fieldId + '" data-preview="#header_slider_images_preview">' + __('choose Images', 'nill') + '</button>');

      ids.map(function(id) {
        var attachment = wp.media.attachment(id);

        attachment.fetch().done(function() {
          var url = attachment.attributes.url;
          if (attachment.attributes.sizes.thumbnail.url) url = attachment.attributes.sizes.thumbnail.url;

          preview.append('<img class="mh-75" src="' + url + '" alt="' + attachment.attributes.alt + '">');
        });
      });

      fieldContainer.append(preview);
      fieldContainer.append(setGalleryButton);
      field.attr('type', 'hidden');
    }
  });

}(window, jQuery, wp.i18n));