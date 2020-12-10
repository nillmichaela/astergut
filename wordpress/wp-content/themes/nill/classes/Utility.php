<?php

class Utility
{
	/**
	 * @param string $string
	 * @return string
	 */
	public static function slash($string)
	{
		return rtrim($string, '/') . '/';
	}
	
	/**
	 * @param string $string
	 * @return string
	 */
	public static function unSlash($string)
	{
		return rtrim($string, '/');
	}
	
	/**
	 * @param string $delimiter
	 * @param string $string
	 * @return array
	 */
	public static function trimExplode($delimiter, $string)
	{
		$parts = explode($delimiter, $string);
		$result = [];
		
		foreach ($parts as $part) if (trim($part)) $result[] = trim($part);
		
		return $result;
	}
	
	/**
	 * @return bool
	 */
	public static function isContactPage()
	{
		if (is_page()) {
			$id = (string)get_the_ID();
			$contactPages = get_option('contact_pages');
			
			return in_array($id, $contactPages);
		}
		
		return FALSE;
	}
	
	/**
	 * @param string $file
	 * @return string
	 */
	public static function getAssetUrl($file = '')
	{
		$templateUrl = self::slash(get_template_directory_uri());
		$path = $templateUrl . 'assets/';
		
		return $path . $file;
	}
	
	/**
	 * @param string $block
	 * @param string $file
	 * @return string
	 */
	public static function getBlockUrl($block, $file = '')
	{
		$templateUrl = self::slash(get_template_directory_uri());
		$path = $templateUrl . 'blocks/' . $block . '/';
		
		return $path . $file;
	}
	
	/**
	 * @param string $file
	 * @return string
	 */
	public static function getPartial($file = '')
	{
		if (mb_strpos($file, '.php') === FALSE) $file .= '.php';
		$template = self::slash(get_template_directory()) . 'partials/' . $file;
		$html = '<!-- Partial: [' . $file . '] not found! -->';
		
		if (is_file($template)) {
			ob_start();
			include $template;
			$html = ob_get_contents();
			ob_end_clean();
		}
		
		return $html;
	}
	
	/**
	 * @param string $position
	 * @return string
	 */
	public static function getWidgets($position)
	{
		$html = '<!-- WidgetArea: [' . $position . '] not found! -->';
		
		if (is_active_sidebar($position)) {
			ob_start();
			dynamic_sidebar($position);
			$html = ob_get_contents();
			ob_end_clean();
		}
		
		return $html;
	}
	
	/**
	 * @param string $field
	 * @return array
	 */
	public static function getAcfFakeMedia($field)
	{
		$value = self::trimExplode(',', get_field($field));
		$media = [];
		
		foreach ($value as $id) {
			$media[] = wp_get_attachment_image($id, 'full');
		}
		
		return $media;
	}
	
	/**
	 * @param string $additionalClasses
	 * @return string
	 */
	public static function getBodyClasses($additionalClasses = '')
	{
		$classes = get_body_class();
		if (in_array('home', $classes)) $classes[] = 'frontpage';
		else $classes[] = 'subpage';
		
		return implode(' ', $classes) . $additionalClasses;
	}
	
	/**
	 * @return array
	 */
	public static function getPagesSelectOptions()
	{
		$options = [];
		$pages = get_pages();
		
		$options['0'] = __('Select Page', 'nill');
		foreach ($pages as $page) $options[$page->ID] = $page->post_title;
		
		return $options;
	}
}
