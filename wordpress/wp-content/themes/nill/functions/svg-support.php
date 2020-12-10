<?php
add_action('upload_mimes', function ($fileTypes) {
	$newFileTypes = [];
	$newFileTypes['svg'] = 'image/svg+xml';
	
	$fileTypes = array_merge($fileTypes, $newFileTypes);
	
	return $fileTypes;
});

add_filter('wp_check_filetype_and_ext', function ($checked, $file, $filename, $mimes) {
	if (!$checked['type']) {
		$wpFiletype = wp_check_filetype($filename, $mimes);
		$ext = $wpFiletype['ext'];
		$type = $wpFiletype['type'];
		
		if ($type && strpos($type, 'image/') === 0 && $ext !== 'svg') {
			$ext = $type = FALSE;
		}
		
		$checked = compact('ext', 'type', 'filename');
	}
	
	return $checked;
}, 10, 4);