<?php
add_action('admin_menu', function () {
	add_options_page(
		__('Landingpage', 'nill'),
		__('Landingpage', 'nill'),
		'manage_options',
		'landingpage_options',
		'landingpage_options_callback'
	);
});

add_action('admin_init', function () {
	$sections = [
		'winzervilla' => __('Winzervilla', 'nill'),
		'appartement' => __('Appartement', 'nill')
	];
	$fields = [
		'title' => __('Title', 'nill'),
		'subtitle' => __('Subtitle', 'nill'),
		'url' => __('URL', 'nill'),
		'target' => __('Target', 'nill'),
		'image' => __('Image', 'nill')
	];
	
	foreach ($sections as $sId => $sLabel) {
		add_settings_section($sId, $sLabel, NULL, 'landingpage_options');
		
		foreach ($fields as $fId => $fLabel) {
			$fieldId = $sId . '_' . $fId;
			
			add_settings_field($fieldId, $fLabel, 'landingpage_options_field_' . $fieldId, 'landingpage_options', $sId);
			register_setting('landingpage_options', $fieldId);
		}
	}
});

function landingpage_options_callback()
{
	wp_enqueue_media();
	wp_enqueue_script('option-pages', get_template_directory_uri() . '/option-pages/option-pages.js', ['jquery'], 1);
	
	ob_start();
	include __DIR__ . '/template.php';
	$html = ob_get_contents();
	ob_end_clean();
	
	echo $html;
}

function landingpage_options_field_winzervilla_title()
{
	$value = get_option('winzervilla_title');
	echo '<textarea id="winzervilla_title" class="regular-text" name="winzervilla_title">' . $value . '</textarea>';
}

function landingpage_options_field_winzervilla_subtitle()
{
	$value = get_option('winzervilla_subtitle');
	echo '<input type="text" id="winzervilla_subtitle" class="regular-text" name="winzervilla_subtitle" value="' . $value . '">';
}

function landingpage_options_field_winzervilla_url()
{
	$value = get_option('winzervilla_url');
	echo '<input type="text" id="winzervilla_url" class="regular-text" name="winzervilla_url" value="' . $value . '">';
}

function landingpage_options_field_winzervilla_target()
{
	$value = get_option('winzervilla_target');
	$isDefaultActive = $value === '' ? ' selected' : '';
	$isBlankActive = $value === '_blank' ? ' selected' : '';
	
	echo '<select id="winzervilla_target" name="winzervilla_target">';
	echo '<option value=""' . $isDefaultActive . '>' . __('same Window', 'nill') . '</option>';
	echo '<option value="_blank"' . $isBlankActive . '>' . __('new Window', 'nill') . '</option>';
	echo '</select>';
}

function landingpage_options_field_winzervilla_image()
{
	$value = get_option('winzervilla_image');
	echo '<div id="winzervilla_image_preview">' . wp_get_attachment_image($value) . '</div>';
	echo '<input type="hidden" id="winzervilla_image" class="regular-text" name="winzervilla_image" value="' . $value . '">';
	echo '<button type="button" class="button-primary button-set-media" data-input="#winzervilla_image" data-preview="#winzervilla_image_preview">' . __('choose Image', 'nill') . '</button>';
}

function landingpage_options_field_appartement_title()
{
	$value = get_option('appartement_title');
	echo '<textarea id="appartement_title" class="regular-text" name="appartement_title">' . $value . '</textarea>';
}

function landingpage_options_field_appartement_subtitle()
{
	$value = get_option('appartement_subtitle');
	echo '<input type="text" id="appartement_subtitle" class="regular-text" name="appartement_subtitle" value="' . $value . '">';
}

function landingpage_options_field_appartement_url()
{
	$value = get_option('appartement_url');
	echo '<input type="text" id="appartement_url" class="regular-text" name="appartement_url" value="' . $value . '">';
}

function landingpage_options_field_appartement_target()
{
	$value = get_option('appartement_target');
	$isDefaultActive = $value === '' ? ' selected' : '';
	$isBlankActive = $value === '_blank' ? ' selected' : '';
	
	echo '<select id="appartement_target" name="appartement_target">';
	echo '<option value=""' . $isDefaultActive . '>' . __('same Window', 'nill') . '</option>';
	echo '<option value="_blank"' . $isBlankActive . '>' . __('new Window', 'nill') . '</option>';
	echo '</select>';
}

function landingpage_options_field_appartement_image()
{
	$value = get_option('appartement_image');
	echo '<div id="appartement_image_preview">' . wp_get_attachment_image($value) . '</div>';
	echo '<input type="hidden" id="appartement_image" class="regular-text" name="appartement_image" value="' . $value . '">';
	echo '<button type="button" class="button-primary button-set-media" data-input="#appartement_image" data-preview="#appartement_image_preview">' . __('choose Image', 'nill') . '</button>';
}