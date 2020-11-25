module.exports = function (args) {
	const arguments = {};
	let i, option, thisOption, currentOption;
	
	for (i = 0; i < args.length; i++) {
		thisOption = args[i].trim();
		option = thisOption.replace(/^-+/, '');
		
		if (option === thisOption) {
			if (currentOption) arguments[currentOption] = option;
			currentOption = null;
		} else {
			currentOption = option;
			arguments[currentOption] = true;
		}
	}
	
	return arguments;
}(process.argv);