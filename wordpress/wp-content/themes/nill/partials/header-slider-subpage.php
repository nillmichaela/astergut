<?php $images = Utility::getAcfFakeMedia('header_slider_images'); ?>
<?php $title = Utility::getAcfFakeMedia('header_slider_title'); ?>
<?php $hasImage = Utility::getAcfFakeMedia('has_image'); ?>
<?php if($hasImage) :?>
<!--  -->
<!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <div class="header-slider--subpage">
        <div class="header-slider--subpage--images">
            <?php foreach ($images as $image) : ?>
                <div class="header-slider--subpage--images--item">
                    <?= $image; ?>
                    <?php gettype($image) ?>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="header-slider--subpage--text">
            <h1><?= the_field('header_slider_title'); ?></h1>
        </div>
        <?php if(get_field('header_stoerer_strong') || get_field('header_stoerer_light')) : ?>
        <a href="#">
            <div class="header-slider--subpage--stoerer">
                <div class="header-slider--subpage--stoerer--border">
                    <div class="header-slider--subpage--stoerer--text">
                        <strong><?= the_field('header_stoerer_strong'); ?></strong>
                        <br/>
                        <?= the_field('header_stoerer_light'); ?>
                    </div>
                </div>
            </div>
        </a>
        <?php endif; ?>
    </div>
<?php else : ?>

    <div class="header-slider--subpage--noimage">
        <div class="header-slider--subpage--noimage--text">
            <div class="col-xl-6">
                <h1 class="h2"><?= the_field('header_slider_title'); ?></h1>
                <p><?= the_field('header_slider_description'); ?></p>
                <a href="" class="btn btn--primary"><?= the_field('header_button_text'); ?></a>
            </div>
        </div>
    </div>

<?php endif; ?>