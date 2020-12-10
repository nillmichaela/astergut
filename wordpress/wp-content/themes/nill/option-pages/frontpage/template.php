<div class="wrap">
	<h1><?= __('Frontpage Options', 'nill'); ?></h1>
	<form method="post" action="options.php">
		<?php
		settings_fields('frontpage_options');
		do_settings_sections('frontpage_options');
		submit_button();
		?>
	</form>
</div>