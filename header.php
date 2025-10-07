<?php
/**
 * The header for our theme
 *
 * @package Oromo_Resource_Centre
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e('Skip to content', 'oromo-resource-centre'); ?></a>

    <header id="masthead" class="site-header" role="banner">
        <!-- Top Language Bar -->
        <div class="language-bar">
            <div class="container">
                <div class="language-selector">
                    <span><?php esc_html_e('Language —', 'oromo-resource-centre'); ?></span>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="active"><?php esc_html_e('English', 'oromo-resource-centre'); ?></a>
                    <span>|</span>
                    <a href="<?php echo esc_url(home_url('/om/')); ?>"><?php esc_html_e('Oromo', 'oromo-resource-centre'); ?></a>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <div class="main-header-wrapper">
            <div class="container">
                <!-- Quick Links Row -->
                <div class="quick-links-row">
                    <div class="quick-links-left">
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('membership'))); ?>" class="quick-link">
                            <i class="fas fa-users"></i>
                            <span><?php esc_html_e('BECOME A MEMBER', 'oromo-resource-centre'); ?></span>
                        </a>
                        <a href="#contact" class="quick-link">
                            <i class="fas fa-map-marker-alt"></i>
                            <span><?php esc_html_e('CHAPTER LOCATOR', 'oromo-resource-centre'); ?></span>
                        </a>
                    </div>
                    <div class="quick-links-right">
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('community-services'))); ?>" class="quick-badge">
                            <?php esc_html_e('ANNUAL REPORT 2024', 'oromo-resource-centre'); ?>
                        </a>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('membership'))); ?>" class="quick-badge">
                            <i class="fas fa-calculator"></i>
                            <?php esc_html_e('MEMBERSHIP CALCULATOR', 'oromo-resource-centre'); ?>
                        </a>
                    </div>
                </div>

                <!-- Main Navigation Row -->
                <div class="main-header">
                    <div class="site-branding">
                        <?php
                        $custom_logo_id = get_theme_mod('custom_logo');
                        if ($custom_logo_id) :
                            $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                        ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" class="custom-logo-link" rel="home">
                                <img src="<?php echo esc_url($logo[0]); ?>" alt="<?php bloginfo('name'); ?>" class="custom-logo">
                            </a>
                        <?php else : ?>
                            <div class="default-logo">
                                <i class="fas fa-community"></i>
                            </div>
                        <?php endif; ?>
                        
                        <div class="site-info">
                            <?php
                            if (is_front_page() && is_home()) :
                                ?>
                                <h1 class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></h1>
                                <?php
                            else :
                                ?>
                                <p class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></p>
                                <?php
                            endif;
                            $oromo_description = get_bloginfo('description', 'display');
                            if ($oromo_description || is_customize_preview()) :
                                ?>
                                <p class="site-description"><?php echo $oromo_description; /* phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped */ ?></p>
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav id="site-navigation" class="main-navigation desktop-nav" role="navigation">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'nav-menu',
                            'fallback_cb'    => 'oromo_default_menu',
                        ));
                        ?>
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('donate'))); ?>" class="btn btn-primary donate-btn">
                            <?php esc_html_e('DONATE', 'oromo-resource-centre'); ?>
                        </a>
                    </nav>

                    <!-- Mobile menu button -->
                    <button class="menu-toggle mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span class="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="screen-reader-text"><?php esc_html_e('Primary Menu', 'oromo-resource-centre'); ?></span>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <nav class="mobile-navigation" role="navigation">
                    <div class="mobile-quick-links">
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('membership'))); ?>" class="quick-link">
                            <i class="fas fa-users"></i>
                            <span><?php esc_html_e('BECOME A MEMBER', 'oromo-resource-centre'); ?></span>
                        </a>
                        <a href="#contact" class="quick-link">
                            <i class="fas fa-map-marker-alt"></i>
                            <span><?php esc_html_e('CHAPTER LOCATOR', 'oromo-resource-centre'); ?></span>
                        </a>
                    </div>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'mobile-primary-menu',
                        'menu_class'     => 'mobile-nav-menu',
                        'fallback_cb'    => 'oromo_default_menu',
                    ));
                    ?>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('donate'))); ?>" class="btn btn-primary mobile-donate-btn">
                        <?php esc_html_e('DONATE', 'oromo-resource-centre'); ?>
                    </a>
                </nav>
            </div>
        </div>
    </header>

<?php
/**
 * Fallback menu if no menu is set
 */
function oromo_default_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">' . esc_html__('HOME', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#about">' . esc_html__('ABOUT', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#what-we-do">' . esc_html__('WHAT WE DO', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#support">' . esc_html__('SUPPORT US', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="' . esc_url(get_permalink(get_page_by_path('volunteer'))) . '">' . esc_html__('GET INVOLVED', 'oromo-resource-centre') . '</a></li>';
    echo '</ul>';
}
?>