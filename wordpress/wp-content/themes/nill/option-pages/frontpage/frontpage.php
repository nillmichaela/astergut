<?php
add_action('admin_menu', function () {
	add_options_page(
		__('Frontpage', 'nill'),
		__('Frontpage', 'nill'),
		'manage_options',
		'frontpage_options',
		'frontpage_options_callback'
	);
});

add_action('admin_init', function () {
	add_settings_section('general', __('General', 'nill'), NULL, 'frontpage_options');
	
	add_settings_field('frontpage_title', __('Title', 'nill'), 'frontpage_options_field_frontpage_title', 'frontpage_options', 'general');
	register_setting('frontpage_options', 'frontpage_title');
	
	add_settings_field('frontpage_subtitle', __('Subtitle', 'nill'), 'frontpage_options_field_frontpage_subtitle', 'frontpage_options', 'general');
	register_setting('frontpage_options', 'frontpage_subtitle');
	
	add_settings_field('frontpage_url_booking', __('URL Booking', 'nill'), 'frontpage_options_field_frontpage_url_booking', 'frontpage_options', 'general');
	register_setting('frontpage_options', 'frontpage_url_booking');
	
	add_settings_field('frontpage_url_inquiry', __('URL Inquiry', 'nill'), 'frontpage_options_field_frontpage_url_inquiry', 'frontpage_options', 'general');
	register_setting('frontpage_options', 'frontpage_url_inquiry');
});

function frontpage_options_callback()
{
	wp_enqueue_media();
	wp_enqueue_script('option-pages', get_template_directory_uri() . '/option-pages/option-pages.js', ['jquery'], 1);
	
	ob_start();
	include __DIR__ . '/template.php';
	$html = ob_get_contents();
	ob_end_clean();
	
	echo $html;
}

function frontpage_options_field_frontpage_title()
{
	$value = get_option('frontpage_title');
	echo '<textarea id="frontpage_title" class="regular-text" name="frontpage_title">' . $value . '</textarea>';
}

function frontpage_options_field_frontpage_subtitle()
{
	$value = get_option('frontpage_subtitle');
	echo '<input type="text" id="frontpage_subtitle" class="regular-text" name="frontpage_subtitle" value="' . $value . '">';
}

function frontpage_options_field_frontpage_url_booking()
{
	$value = get_option('frontpage_url_booking');
	echo '<input type="text" id="frontpage_url_booking" class="regular-text" name="frontpage_url_booking" value="' . $value . '">';
}

function frontpage_options_field_frontpage_url_inquiry()
{
	$value = get_option('frontpage_url_inquiry');
	echo '<input type="text" id="frontpage_url_inquiry" class="regular-text" name="frontpage_url_inquiry" value="' . $value . '">';
}