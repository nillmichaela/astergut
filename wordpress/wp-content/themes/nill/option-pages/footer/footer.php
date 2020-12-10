<?php
add_action('admin_menu', function () {
	add_options_page(
		__('Footer', 'nill'),
		__('Footer', 'nill'),
		'manage_options',
		'footer_options',
		'footer_options_callback'
	);
});

add_action('admin_init', function () {
	add_settings_section('general', __('General', 'nill'), NULL, 'footer_options');
	
	add_settings_field('footer_address_title', __('Address Title', 'nill'), 'footer_options_field_footer_address_title', 'footer_options', 'general');
	register_setting('footer_options', 'footer_address_title');
	
	add_settings_field('footer_address_1', __('Address Line 1', 'nill'), 'footer_options_field_footer_address_1', 'footer_options', 'general');
	register_setting('footer_options', 'footer_address_1');
	
	add_settings_field('footer_address_2', __('Address Line 2', 'nill'), 'footer_options_field_footer_address_2', 'footer_options', 'general');
	register_setting('footer_options', 'footer_address_2');
	
	add_settings_field('footer_phone', __('Phone', 'nill'), 'footer_options_field_footer_phone', 'footer_options', 'general');
	register_setting('footer_options', 'footer_phone');
	
	add_settings_field('footer_phone_link', __('Phone (Link)', 'nill'), 'footer_options_field_footer_phone_link', 'footer_options', 'general');
	register_setting('footer_options', 'footer_phone_link');
	
	add_settings_field('footer_email', __('E-Mail Address', 'nill'), 'footer_options_field_footer_email', 'footer_options', 'general');
	register_setting('footer_options', 'footer_email');
});

function footer_options_callback()
{
	wp_enqueue_media();
	wp_enqueue_script('option-pages', get_template_directory_uri() . '/option-pages/option-pages.js', ['jquery'], 1);
	
	ob_start();
	include __DIR__ . '/template.php';
	$html = ob_get_contents();
	ob_end_clean();
	
	echo $html;
}

function footer_options_field_footer_address_title()
{
	$value = get_option('footer_address_title');
	echo '<input type="text" id="footer_address_title" class="regular-text" name="footer_address_title" value="' . $value . '">';
}

function footer_options_field_footer_address_1()
{
	$value = get_option('footer_address_1');
	echo '<input type="text" id="footer_address_1" class="regular-text" name="footer_address_1" value="' . $value . '">';
}

function footer_options_field_footer_address_2()
{
	$value = get_option('footer_address_2');
	echo '<input type="text" id="footer_address_2" class="regular-text" name="footer_address_2" value="' . $value . '">';
}

function footer_options_field_footer_phone()
{
	$value = get_option('footer_phone');
	echo '<input type="text" id="footer_phone" class="regular-text" name="footer_phone" value="' . $value . '">';
}

function footer_options_field_footer_phone_link()
{
	$value = get_option('footer_phone_link');
	echo '<input type="text" id="footer_phone_link" class="regular-text" name="footer_phone_link" value="' . $value . '">';
}

function footer_options_field_footer_email()
{
	$value = get_option('footer_email');
	echo '<input type="text" id="footer_email" class="regular-text" name="footer_email" value="' . $value . '">';
}