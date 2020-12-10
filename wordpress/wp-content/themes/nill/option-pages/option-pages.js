(function (window, $, undefined) {
	
	var input = null;
	var preview = null;
	var uploaderSetMedia = null;
	var uploaderSetGallery = null;
	
	$(function () {
		$(document).on('click.setMedia', '.button-set-media', function (e) {
			var button = $(this);
			
			e.preventDefault();
			
			input = $(button.data('input'));
			preview = $(button.data('preview'));
			
			if (!uploaderSetMedia) {
				uploaderSetMedia = wp.media({frame: 'post', state: 'insert', multiple: false});
				
				uploaderSetMedia.on('open', function () {
					var id = input.val();
					var attachment = wp.media.attachment(id);
					var selection = uploaderSetMedia.state().get('selection');
					
					attachment.fetch();
					selection.add(attachment ? [attachment] : []);
				});
				
				uploaderSetMedia.on('insert', function () {
					var attachment = uploaderSetMedia.state().get('selection').first().toJSON();
					var url = attachment.url;
					
					if (attachment.sizes.thumbnail.url) url = attachment.sizes.thumbnail.url;
					
					input.val(attachment.id);
					preview.html('<img src="' + url + '" alt="' + attachment.alt + '">')
				});
			}
			
			uploaderSetMedia.open();
			button.blur();
		});
		
		$(document).on('click.setGallery', '.button-set-gallery', function (e) {
			var button = $(this);
			
			e.preventDefault();
			
			input = $(button.data('input'));
			preview = $(button.data('preview'));
			
			if (!uploaderSetGallery) {
				uploaderSetGallery = wp.media({frame: 'post', state: 'gallery', multiple: true});
				
				uploaderSetGallery.on('open', function () {
					var ids = input.val().split(',');
					var selection = uploaderSetGallery.state().get('selection');
					
					ids.map(function (id) {
						var attachment = wp.media.attachment(id);
						
						attachment.fetch();
						selection.add(attachment ? [attachment] : []);
					});
				});
				
				uploaderSetGallery.on('update', function () {
					var models = uploaderSetGallery.state().attributes.library.models;
					var value = '';
					
					preview.html('');
					
					models.map(function (model) {
						var url = model.attributes.url;
						value += ',' + model.attributes.id;
						
						if (model.attributes.sizes.thumbnail.url) url = model.attributes.sizes.thumbnail.url;
						
						preview.append('<img src="' + url + '" alt="' + model.attributes.alt + '">');
					});
					
					value = value.substr(1);
					input.val(value);
				});
			}
			
			uploaderSetGallery.open();
			button.blur();
		});
	});
	
}(window, jQuery));