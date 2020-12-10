<!--<nav class="main-nav">-->
<!--	<div class="container-page navbar position-relative row">-->
<!--		<svg class="header__svg" version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"-->
<!--			 viewBox="0 0 1921.2 75.7" style="enable-background:new 0 0 1921.2 75.7;" xml:space="preserve">-->
<!--		<style type="text/css">-->
<!--			.st0{fill:none;stroke:#494043;stroke-width:2.5;stroke-linecap:square;stroke-linejoin:bevel;}-->
<!--		</style>-->
<!--		<path class="path st0" id="Pfad_2730" d="M1919.9,73.1L601.6,74c-12.2,0.1-24.3-2.6-35.4-7.8c-25.9-12.4-28.9-30.9-27.8-43.5-->
<!--			c0.6-8.7,6-16.4,13.9-20c2.8-1.3,5.9-1.8,9-1.4c10.5,1.5,8.6,14.2,8.6,14.2s13-13.7,23.8-8.7c10.5,4.9,1.5,23.9,1.5,23.9-->
<!--			c-4.8,8.5-11.3,16-19,22c-17.6,14.1-39.8,21.4-62.4,21.4L1.2,74.5"/>-->
<!--		</svg>-->
<!--		<div class="col-md-5">-->
<!--			<a href="--><? //= home_url() ?><!--"><img class="img-fluid mh-125 logo-nav" src="--><? //= Utility::getAssetUrl('/img/layout/logo_nav.svg') ?><!--" alt="logo"/></a>-->
<!--		</div>-->
<!--		<div class="col-md-6 menu-items">-->
<!--			--><?php //if (has_nav_menu('landingpage-nav')) : ?>
<!--				--><?php //wp_nav_menu([
//					'theme_location' => 'main-nav',
//					// 'menu_class' => 'main-nav--list',
//					'container' => '',
//					// 'walker' => new CustomMenuWalker()
//				]); ?>
<!--			--><?php //endif; ?>
<!--		</div>-->
<!--		<button type="button" class="navbar-toggler hamburger collapsed" data-toggle="collapse" data-target="--><? //= __('#menu-main-en', 'nill') ?><!--" aria-expanded="false" aria-controls="--><? //= __('menu-main-en', 'nill') ?><!--" aria-label="Toggle navigation">-->
<!--      <span class="hamburger-box">-->
<!--        <span class="hamburger-inner"></span>-->
<!--      </span>-->
<!--    </button>-->
<!--        --><? //= Utility::getWidgets('lang-nav'); ?>
<!--	</div>-->
<!--</nav>-->
<nav class="main-nav">
    <div class="container-page navbar position-relative row">
        <div class="col-md-3 col-8 main-nav--logo">
            <a href="<?= home_url() ?>">
                <img class="img-fluid mh-125 logo-nav" src="<?= Utility::getAssetUrl('/img/icons/logo_small.svg') ?>"
                     alt="Astergut"/>
            </a>
        </div>
        <div class="col-xl-8 menu-items position-static">
            <?php if (has_nav_menu('main-nav')) : ?>
                <?php wp_nav_menu([
                    'theme_location' => 'main-nav',
                    // 'menu_class' => 'main-nav--list',
                    'container' => '',
                    // 'walker' => new CustomMenuWalker()
                ]); ?>
            <?php endif; ?>
        </div>
        <button type="button" class="navbar-toggler hamburger collapsed" data-toggle="collapse"
                data-target="#menu-main"
                aria-expanded="false" aria-controls="menu-main" aria-label="Toggle navigation">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
        </button>
        <nav class="lang-nav col-md-1">

        </nav>
    </div>
</nav>