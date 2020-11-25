(function (window, $) {
	const searchString = decodeURIComponent(window.location.search.substr(1));
	const parameter = searchString.split('&');

	parameter.map(function (keyValuePair) {
		const parts = keyValuePair.split('=');
		const key = parts[0];
		const value = parts[1];

		if (value) {
			const field = $('[name="' + key + '"]');
			const fieldType = field.attr('type');

			switch (fieldType) {
				case 'date':
					var dateParts = value.split('.');
					var inputFormat = dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];

					field.val(inputFormat)
					break;
				case 'text':
				default:
					field.val(value)
					break;
			}
		}
	});
}(window, jQuery));
