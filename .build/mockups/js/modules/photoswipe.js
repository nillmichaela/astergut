(function (window, $) {
	
	const pswp = $('.pswp');
	const pswpElement = pswp.length ? pswp.get(0) : null;
	const lightboxSelector = '.photoswipe';
	const galleries = {};
	const settings = {
		index: 0,
		loop: false
	};
	
	function getGalleries() {
		let index = 0;
		
		if (pswpElement) {
			const links = $(lightboxSelector);
			
			links.each(function () {
				const link = $(this);
				const img = link.find('img');
				let rel = link.attr('rel');
				rel = rel ? rel : 'gallery-' + link.index();
				
				if (!galleries.hasOwnProperty(rel)) {
					galleries[rel] = {
						links: [],
						items: []
					};
				}
				
				galleries[rel].links.push(link);
				
				galleries[rel].items.push({
					title: link.attr('title') || link.data('title') || img.attr('alt'),
					src: link.attr('href') || img.attr('src'),
					w: link.data('width') || img.get(0).naturalWidth || img.parents('figure').outerWidth(),
					h: link.data('height') || img.get(0).naturalHeight || img.parents('figure').outerHeight()
				});
				
				index++;
			});
		} else {
			console.error('Photoswipe: .pswp element missing!');
		}
	}
	
	function initializeGalleries() {
		Object.keys(galleries).map(function (key) {
			const links = galleries[key].links;
			const items = galleries[key].items;
			
			links.map(function (link, linkIndex) {
				link.on('click.photoswipe', function (e) {
					e.preventDefault();
					
					settings.index = linkIndex;
					
					const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, settings);
					gallery.init();
				});
			});
		});
	}
	
	$(window).on('load.photoswipe', function () {
		getGalleries();
		initializeGalleries();
	});
	
}(window, jQuery));