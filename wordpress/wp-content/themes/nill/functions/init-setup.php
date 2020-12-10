<?php
add_action('init', function () {
	register_post_type('slider_content', [
		'labels' => [
			'name' => __('Content Slider Items', 'nill'),
			'singular_name' => __('Content Slider Item', 'nill')
		],
		'public' => FALSE,
		'show_ui' => TRUE,
		'has_archive' => FALSE,
		'show_in_rest' => TRUE,
		'taxonomies' => ['slider_category'],
		'supports' => ['title', 'editor', 'thumbnail', 'custom-fields']
	]);
	
	register_taxonomy('slider_category', ['slider_content'], [
		'labels' => [
			'name' => __('Categories', 'nill'),
			'singular_name' => __('Category', 'nill')
		],
		'public' => FALSE,
		'show_ui' => TRUE,
		'hierarchical' => TRUE,
		'show_in_rest' => TRUE
	]);
	
	add_editor_style('assets/css/editor.css');
});

add_action('after_setup_theme', function () {
	add_theme_support('title-tag');
	add_theme_support('editor-style');
	add_theme_support('editor-styles');
	add_theme_support('post-thumbnails');
	add_theme_support('html5', ['comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script']);
	
	register_nav_menus([
		'landingpage-nav' => __('Landingpage Nav', 'nill'),
		'main-nav' => __('Main Nav', 'nill'),
		'footer-nav' => __('Footer Nav', 'nill'),
		'social-nav' => __('Social Nav', 'nill')
	]);
});

add_action('widgets_init', function () {
	register_sidebar([
		'name' => __('Lang Nav', 'nill'),
		'id' => 'lang-nav',
		'description' => '',
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '',
		'after_title' => ''
	]);
});

add_action('wp_enqueue_scripts', function () {
	$assets = get_template_directory_uri() . '/assets/';
	
	wp_enqueue_style('main', $assets . 'css/main.min.css');
	wp_enqueue_style('fonts', $assets . 'css/fonts.min.css');
	wp_enqueue_style('main-data', $assets . 'css/main.data.css');
	
	wp_enqueue_script('head', $assets . 'js/head.min.js');
	wp_enqueue_script('main', $assets . 'js/main.min.js', [], NULL, TRUE);
});

add_action('admin_enqueue_scripts', function () {
	wp_enqueue_media();
	wp_enqueue_script('option-pages', get_template_directory_uri() . '/option-pages/option-pages.js', ['jquery'], NULL);
	wp_enqueue_script('acf-faked-media-field', get_template_directory_uri() . '/acf-faked-media-field.js', ['jquery'], NULL);
	wp_set_script_translations('acf-faked-media-field', 'nill');
	
	wp_enqueue_script('nill-icon-block-editor', get_template_directory_uri() . '/nill-icon-block-editor.js', ['wp-editor'], NULL);
});

add_filter('document_title_parts', function ($parts) {
	if (isset($parts['title']) && mb_strtolower($parts['title']) === 'landingpage') {
		$parts['title'] = '';
	}
	
	return $parts;
});

add_filter('wpcf7_form_elements', function ($content) {
	// remove .wpcf7-form-control-wrap span
	$content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
	
	return $content;
});

add_filter('wpcf7_form_elements', function ($content) {
	// remove unnecessary html from checkboxes and radios
	preg_match_all('#\<span class\=\"wpcf7\-form-control wpcf7\-acceptance\"\>(.*)\<\/span\>#', $content, $matches);
	preg_match('#\<input.*?type\=\"submit\".*?value\=\"(.*?)\".*?\>#', $content, $submitMatches);
	
	if (count($matches)) {
		$matches = $matches[0];
		
		foreach ($matches as $match) {
			preg_match('#\<input.*?type\=\"checkbox\".*?\>#', $match, $inputMatches);
			preg_match('#\<span.*?class\=\"wpcf7\-list\-item\-label\"\>(.*?)\<\/span\>#', $match, $spanMatches);
			
			if (count($inputMatches) && count($spanMatches) > 1) {
				$input = $inputMatches[0];
				preg_match('#name\=\"(.*?)\"#', $input, $idMatches);
				
				if (count($idMatches) > 1) {
					$privacyLink = get_permalink(get_option('wp_page_for_privacy_policy'));
					
					$id = $idMatches[1];
					//$id = str_replace('id:', '', $idMatches[1]);
					$input = str_replace('name="id:' . $id . '"', 'id="' . $id . '" name="' . $id . '"', $input);
					$span = '<label for="' . $id . '">' . $spanMatches[1] . '</label>';
					$span = preg_replace('#href\=\".*?\"#', 'href="' . $privacyLink . '"', $span);
					
					$content = str_replace($match, $input . $span, $content);
				}
			}
		}
	}
	
	if (count($submitMatches) > 1) {
		$search = $submitMatches[0];
		$label = $submitMatches[1];
		
		$content = str_replace($search, '<button type="submit" class="btn btn-outline-dark">' . $label . '</button>', $content);
	}
	
	return $content;
});
