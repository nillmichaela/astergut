<div class="wrap">
	<h1><?= __('Contact Options', 'nill'); ?></h1>
	<form method="post" action="options.php">
		<?php
		settings_fields('contact_options');
		do_settings_sections('contact_options');
		submit_button();
		?>
	</form>
</div>
