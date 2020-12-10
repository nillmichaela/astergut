<?php
add_action('admin_menu', function () {
	add_options_page(
		__('Contact', 'nill'),
		__('Contact', 'nill'),
		'manage_options',
		'contact_options',
		'contact_options_callback'
	);
});

add_action('admin_init', function () {
	add_settings_section('general', __('General', 'nill'), NULL, 'contact_options');
	
	add_settings_field('contact_pages', __('Pages', 'nill'), 'contact_options_field_contact_pages', 'contact_options', 'general');
	register_setting('contact_options', 'contact_pages');
	
	add_settings_field('contact_lat', __('Latitude', 'nill'), 'contact_options_field_contact_lat', 'contact_options', 'general');
	register_setting('contact_options', 'contact_lat');
	
	add_settings_field('contact_lng', __('Longitude', 'nill'), 'contact_options_field_contact_lng', 'contact_options', 'general');
	register_setting('contact_options', 'contact_lng');
	
	add_settings_field('contact_info_window', __('Info Window', 'nill'), 'contact_options_field_contact_info_window', 'contact_options', 'general');
	register_setting('contact_options', 'contact_info_window');
});

function contact_options_callback()
{
	wp_enqueue_media();
	wp_enqueue_script('option-pages', get_template_directory_uri() . '/option-pages/option-pages.js', ['jquery'], 1);
	
	ob_start();
	include __DIR__ . '/template.php';
	$html = ob_get_contents();
	ob_end_clean();
	
	echo $html;
}

function contact_options_field_contact_pages()
{
	$value = get_option('contact_pages');
	$options = Utility::getPagesSelectOptions();
	
	echo '<select id="contact_pages" name="contact_pages[]" class="regular-text" style="height:250px;" multiple>';
	foreach ($options as $optionValue => $label) {
		if (in_array($optionValue, $value)) echo '<option value="' . $optionValue . '" selected>' . $label . '</option>';
		else echo '<option value="' . $optionValue . '">' . $label . '</option>';
	}
	echo '</select>';
}

function contact_options_field_contact_lat()
{
	$value = get_option('contact_lat');
	echo '<input type="text" id="contact_lat" class="regular-text" name="contact_lat" value="' . $value . '" />';
}

function contact_options_field_contact_lng()
{
	$value = get_option('contact_lng');
	echo '<input type="text" id="contact_lng" class="regular-text" name="contact_lng" value="' . $value . '" />';
}

function contact_options_field_contact_info_window()
{
	$value = get_option('contact_info_window');
	echo '<textarea id="contact_info_window" class="large-text code" name="contact_info_window" rows="10">' . $value . '</textarea>';
}
