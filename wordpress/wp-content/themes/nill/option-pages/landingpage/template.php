<div class="wrap">
	<h1><?= __('Laningpage Options', 'nill'); ?></h1>
	<form method="post" action="options.php">
		<?php
		settings_fields('landingpage_options');
		do_settings_sections('landingpage_options');
		submit_button();
		?>
	</form>
</div>