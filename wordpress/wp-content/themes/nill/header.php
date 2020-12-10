<!doctype html>
<html lang="de" class="no-js">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?= Utility::getPartial('meta'); ?>
    <?php wp_head(); ?>
</head>
<body class="<?= Utility::getBodyClasses(); ?> container-main">
<div class="page-wrap">
    <header class="page-header">
                    <?= Utility::getPartial('main-nav'); ?>
    </header>

