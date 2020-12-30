<?php if (!Request::isAjax()) { ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <?php echo reFilter(Request::getParam('include_code_top')->value); // Top JS code ?>

        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title><?= Request::getTitle(); ?> | CMS</title>

        <?php if (Request::getKeywords()) { ?>
            <meta content="<?= Request::getKeywords(); ?>" name="keywords">
        <?php } ?>
        <?php if (Request::getDescription()) { ?>
            <meta content="<?= Request::getDescription(); ?>" name="description">
        <?php } ?>

        <script>var site_url = '<?= SITE_URL; ?>';</script>
        <link rel="shortcut icon" href="<?= _SITEDIR_; ?>public/images/favicon.png">

        <?php /*
        $ogImg = 'og_1.png';
        if (CONTROLLER === 'jobs')
            $ogImg = 'og_3.png';
        else if (CONTROLLER === 'blogs')
            $ogImg = 'og_2.png';
        ?>
        <meta property="og:title" content="<?= Request::getTitle(); ?>">
        <meta property="og:url" content="<?= SITE_URL . _URI_; ?>">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="<?= SITE_NAME; ?>">
        <meta property="og:og:description" content="<?= Request::getDescription(); ?>">
        <meta property="og:image" content="<?= SITE_URL; ?>app/public/images/<?= $ogImg; ?>">
        */ ?>

        <?php
         if (CONTROLLER === 'blogs')
            $ogImg = 'og_1.png';
         else
            $ogImg = 'og_2.png';
        ?>
        <meta property="og:image" content="<?= SITE_URL; ?>app/public/images/<?= $ogImg; ?>">

        <!-- Connect CSS & JS files -->

        <link href="<?= _SITEDIR_; ?>public/css/swiper-bundle.min.css" type="text/css"  rel="stylesheet">
        <link href="<?= _SITEDIR_; ?>public/css/style.css" type="text/css" rel="stylesheet" />
        <link href="<?= _SITEDIR_; ?>public/css/additional_styles.css" type="text/css" rel="stylesheet" />

        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="<?= _SITEDIR_; ?>public/js/backend/function.js"></script>
        <script src="<?= _SITEDIR_; ?>public/js/backend/event.js"></script>
        <script src="<?= _SITEDIR_; ?>public/js/swiper-bundle.min.js"></script>
        <script type="module" src="<?= _SITEDIR_; ?>public/js/main.js"></script>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
        <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
        <script src="https://kit.fontawesome.com/1fed320309.js" crossorigin="anonymous"></script>
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

        <!-- /Connect CSS & JS files -->

    </head>
    <body>
    <div id="site">
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="header__logo-wrapper">
                    <a href="{URL:/}"><img src="<?= _SITEDIR_ ?>public/images/parcll-logo.png" alt="parcll-logo" class="header__logo"></a>
                </div>
                  <nav class="header__nav">
                        <ul class="header__menu">
                            <li><span>We</span>
                                <ul>
                                    <li><a href="{URL:about-us}">About Us</a></li>
                                    <li><a href="{URL:vision-and-values}">Vision & Values</a></li>
                                    <li><a href="{URL:blogs}">Blog</a></li>
                                </ul>
                            </li>
                            <li><span>Empower</span>
                                <ul>
                                    <li><a href="delivery">Parcel Delivery</a></li>
                                    <li><a href="{URL:return}">Parcel Return</a></li>
                                    <li><a href="{URL:ddp}">DDP(Delivery Duty Paid)</a></li>
                                </ul>
                            </li>
                            <li><span>Global</span>
                                <ul>
                                    <li><a href="#">Europe Network</a>
                                    </li>
                                    <li><a href="{URL:canada}">Canada</a></li>
                                    <li><a href="{URL:worldwide}">Worldwide</a></li>
                                    <li><a href="{URL:inbound}">USA Inbound</a></li>
                                </ul>
                            </li>
                            <li><span >Ecommerce</span>
                                <ul>
                                    <li><a href="{URL:brand}">Brands</a></li>
                                    <li><a href="{URL:marketplace}">Marketplace Seller</a></li>
                                    <li><a href="{URL:worldwide}">Worldwide</a></li>
                                    <li><a href="{URL:fulfilment}">Fulfilment (3PL)</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a href="{URL:contact-us}" class="btn btn_main header__btn">Contact Us</a>
                    </nav>
                <div class="header__hamburger hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    <div id="content_place" class="content">
<?php } ?>

<?php
echo $this->Load('contentPart'); // Content from view page
?>

<?php if (!Request::isAjax()) { ?>
      <section class="section-text">
            <div class="container">
                <div class="row">
                    <div class="st__subtitle">Save money, save time.</div>
                    <div class="st__title title">Find out how Parcll can help you.</div>
                    <a href="{URL:contact-us}" class="st__btn btn btn_secondary">Contact Us</a>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer__logo-wrapper">
                        <a href="{URL:/}">
                            <img src="<?= _SITEDIR_ ?>public/images/parcll-logo.png" alt="parcll-logo" class="footer__logo">
                        </a>
                    </div>
                    <ul class="footer__lists">
                        <li>
                            <div class="footer__list-title">WE</div>
                            <ul class="footer__list">
                                <li><a href="{URL:about-us}">About Us</a></li>
                                <li><a href="{URL:vision-and-values}">Vision & Values</a></li>
                                <li><a href="{URL:blogs}">Blog</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="footer__list-title">EMPOWER</div>
                            <ul class="footer__list">
                                <li><a href="{URL:delivery}">Parcel Delivery</a></li>
                                <li><a href="{URL:return}">Parcel Return</a></li>
                                <li><a href="{URL:ddp}">DDP</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="footer__list-title">GLOBAL</div>
                            <ul class="footer__list">
                                <li><a href="{URL:network}">Europe Network</a></li>
                                <li><a href="{URL:canada}">Canada</a></li>
                                <li><a href="{URL:worldwide}">Worldwide</a></li>
                                <li><a href="{URL:inbound}">USA Inbound</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="footer__list-title">ECOMMERCE</div>
                            <ul class="footer__list">
                                <li><a href="{URL:brand}">Brands</a></li>
                                <li><a href="{URL:marketplace}">Marketplace Seller</a></li>
                                <li><a href="{URL:fulfilment}">Fulfilment (3PL)</a></li>
                            </ul>
                        </li>

                    </ul>
                    <a href="{URL:contact-us}" class="btn btn_secondary footer__btn">Contact Us</a>
                </div>

                <div class="center pt12">
                    <a href="https://www.boldidentities.com/" target="_blank">
                        <img src="<?= _SITEDIR_ ?>public/images/bold-credit_black_animated_outline.gif" width="164">
                    </a>
                </div>
            </div>
        </footer>
    </div>
    <?php echo reFilter(Request::getParam('include_code_bottom')->value); // Bottom JS code ?>

    </body>
    </html>
<?php } ?>