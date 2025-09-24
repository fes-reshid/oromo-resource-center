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
        <div class="header-overlay">
            <div class="header-background">
                <?php 
                $header_bg = get_theme_mod('oromo_header_background_image');
                if ($header_bg) : ?>
                    <img src="<?php echo esc_url($header_bg); ?>" alt="Header Background" class="header-bg-image">
                <?php endif; ?>
            </div>
            
            <div class="container">
                <!-- Top contact bar -->
                <div class="top-contact-bar">
                    <div class="contact-info">
                        <span class="location">
                            <i class="fas fa-map-marker-alt"></i>
                            <?php echo esc_html(get_theme_mod('oromo_contact_location', 'Victoria')); ?>
                        </span>
                        <span class="phone">
                            <i class="fas fa-phone"></i>
                            <?php 
                            $phone = get_theme_mod('oromo_contact_phone', 'Contact Us');
                            if ($phone) {
                                echo esc_html($phone);
                            }
                            ?>
                        </span>
                    </div>
                </div>

                <!-- Main header -->
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
                        <a href="<?php echo esc_url(get_permalink(get_page_by_path('volunteer'))); ?>" class="btn btn-primary volunteer-btn">
                            <?php esc_html_e('Volunteer', 'oromo-resource-centre'); ?>
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
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'mobile-primary-menu',
                        'menu_class'     => 'mobile-nav-menu',
                        'fallback_cb'    => 'oromo_default_menu',
                    ));
                    ?>
                    <a href="<?php echo esc_url(get_permalink(get_page_by_path('volunteer'))); ?>" class="btn btn-primary mobile-volunteer-btn">
                        <?php esc_html_e('Volunteer', 'oromo-resource-centre'); ?>
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
    echo '<li><a href="' . esc_url(home_url('/')) . '">' . esc_html__('Home', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#about">' . esc_html__('About', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#services">' . esc_html__('Services', 'oromo-resource-centre') . '</a></li>';
    echo '<li><a href="#contact">' . esc_html__('Contact', 'oromo-resource-centre') . '</a></li>';
    echo '</ul>';
}
?>