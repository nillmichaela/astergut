
		<?php if (has_nav_menu('footer-nav')) : ?>
			<?php wp_nav_menu([
				'theme_location' => 'footer-nav',
				'menu_class' => 'footer-nav--list',
				'container' => '',
				'walker' => new CustomMenuWalker()
			]); ?>
		<?php endif; ?>
