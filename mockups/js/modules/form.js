(function(window, $, undefined) {

	const form = $('form');
	const inputs = form.find('[name]');
	const datepickers = form.find('.has-datepicker');
	const lang = $('html').attr('lang');
  
	function handleInputChange(e) {
	  const input = $(this);
	  const value = input.val().trim();
  
	  if (value) input.addClass('has-content');
	  else input.removeClass('has-content');
	}
  
	inputs.on('keyup.handleChange', handleInputChange);
	inputs.on('change.handleChange', handleInputChange);
  
	datepickers.each(function() {
	  const container = $(this);
	  const input = container.find('input');
  
	  input.datepicker({
		format: 'mm.dd.yyyy',
		language: lang,
		autoclose: true,
		weekStart: 1,
		// format: lang === 'de' ? 'dd.mm.yyyy' : 'mm.dd.yyyy',
	  });
	});
	// form.on('submit.parseDates', function (e) {
	//   if (lang !== 'en') {
	//     const checkIn = $('[name="skd-checkin"]');
	//   	const checkOut = $('[name="skd-checkout"]');
	//
	//   	const checkInDate = checkIn.val().split('.');
	//   	const checkOutDate = checkOut.val().split('.');
	//
	//   	checkIn.val(checkInDate[1] + '.' + checkInDate[0] + '.' + checkInDate[2]);
	//   	checkOut.val(checkOutDate[1] + '.' + checkOutDate[0] + '.' + checkOutDate[2]);
	//   }
	// });
	//
	// console.log('test datepicker');
  
  
  }(window, jQuery));
  