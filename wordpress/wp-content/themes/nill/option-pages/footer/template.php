<div class="wrap">
	<h1><?= __('Footer Options', 'nill'); ?></h1>
	<form method="post" action="options.php">
		<?php
		settings_fields('footer_options');
		do_settings_sections('footer_options');
		submit_button();
		?>
	</form>
</div>