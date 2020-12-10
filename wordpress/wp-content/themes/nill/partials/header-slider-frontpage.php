<?php $images = Utility::getAcfFakeMedia('header_slider_images'); ?>
<!--  -->
<!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->


<div class="header--fullpage">
	<div class="header__slider container-page position-relative">

		<div class="header__slider--images">
			<!-- <div class="header__slider--images--item mh-75">
				<video width="100%" height="100%" autoplay muted loop>
					<source src="https://p564866.mittwaldserver.info/wp-content/uploads/2020/video/start.mp4" type="video/mp4">
					Your browser does not support the video tag :(.
				</video>
			</div> -->
			<?php foreach ($images as $image) : ?>
				<div class="header__slider--images--item mh-75">
						<?= $image; ?>
						<?php gettype($image) ?>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="header__slider--stoerer">
			<a href="/seekda-online-buchen"><img src="<?= Utility::getAssetUrl(__('/img/layout/best_price-en.svg', 'nill')) ?>" alt="Informativer Button"></a>
		</div>


	</div>
	<div class="header__slogan">
    <!-- <h1>Ankommen.
      <br/>Durchatmen.
      <br/>Glücklich sein.
    </h1> -->
  </div>
</div>
			<div class="col-lg-8 col-xl-9 order-0 order-lg-1 d-none">
				<div class="header-slider--images">
					<?php foreach ($images as $image) : ?>
						<div class="header-slider--images--item mh-75">
							<figure>
								<?= $image; ?>
							</figure>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
