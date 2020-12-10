<?php

class CustomMenuWalker extends Walker_Nav_Menu
{
	public function start_lvl(&$output, $depth = 0, $args = NULL)
	{
		$output .= '<ul>';
	}
	
	public function start_el(&$output, $item, $depth = 0, $args = NULL, $id = 0)
	{
		$siteUrl = get_option('siteurl');
		$classes = $this->getItemClasses($item);
		$classAttribute = $classes ? ' class="' . $classes . '"' : '';
		
		if (strpos($item->url, $siteUrl) === 0) $item->url = substr($item->url, strlen($siteUrl));
		
		$output .= '<li' . $classAttribute . '><a href="' . $this->getItemUrl($item) . '">' . $item->title . '</a>';
	}
	
	public function end_lvl(&$output, $depth = 0, $args = NULL)
	{
		$output .= '</ul>';
	}
	
	public function end_el(&$output, $item, $depth = 0, $args = NULL)
	{
		$output .= '</li>';
	}
	
	protected function getItemClasses($item)
	{
		$classes = [];
		
		// remap wordpress classes to custom classes
		if ($item->type !== 'custom') {
			if (in_array('current-menu-item', $item->classes)) $classes[] = 'is-active';
			else if (in_array('current-menu-parent', $item->classes)) $classes[] = 'is-active';
			else if (in_array('current-post-parent', $item->classes)) $classes[] = 'is-active';
		}
		
		// special active state for categories page
		if ($item->object === 'page' && $item->ID === 93 && is_category()) {
			$queriedObject = get_queried_object();
			$excluded = ['empfehlungen', 'videos', 'persoenlichkeiten'];
			$active = FALSE;
			
			if ($queriedObject->taxonomy === 'category') {
				if (!in_array($queriedObject->slug, $excluded)) $active = TRUE;
			} else $active = TRUE;
			
			if ($active) $classes[] = 'is-active';
		}
		
		// special active stat for search / search-results page
		if ($item->object === 'custom' && $item->ID = 105 && is_search()) {
			$classes[] = 'is-active';
		}
		
		return implode(' ', $classes);
	}
	
	protected function getItemUrl($item)
	{
		$siteUrl = get_option('siteurl');
		$url = $item->url;
		
		if (strpos($url, $siteUrl) === 0) $url = substr($url, strlen($siteUrl));
		
		return $url;
	}
}