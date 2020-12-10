<?php get_header(); ?>
<div class="quicklinks--sticky">
	<a href="<?= __('/en/getting-there', 'nill'); ?>"><div class="quicklinks--sticky__wrapper quicklinks--sticky__wrapper--bell">

	</div></a>
	<a href="tel:+43654272123"><div class="quicklinks--sticky__wrapper quicklinks--sticky__wrapper--phone">

	</div></a>
	<a href="mailto:info@landhotel-martha.at"><div class="quicklinks--sticky__wrapper quicklinks--sticky__wrapper--mail">

	</div></a>
</div>

<main class="page-content">
		<div class="">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post() ?>
					<?php if (!is_page()) : ?>
						<header class="element element--header h1 text-left">
							<span></span>
							<h1><?php the_title(); ?></h1>
						</header>
					<?php endif; ?>
					<?php the_content(); ?>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</main>
<?php get_footer(); ?>
