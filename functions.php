<?php
/**
 * Oromo Resource Centre functions and definitions
 *
 * @package Oromo_Resource_Centre
 */

if (!defined('_S_VERSION')) {
    define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function oromo_resource_centre_setup() {
    // Make theme available for translation
    load_theme_textdomain('oromo-resource-centre', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');
    
    // Set default thumbnail sizes
    set_post_thumbnail_size(1200, 600, true);
    add_image_size('oromo-featured-large', 1200, 600, true);
    add_image_size('oromo-featured-medium', 800, 400, true);
    add_image_size('oromo-featured-small', 400, 200, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'oromo-resource-centre'),
        'footer'  => esc_html__('Footer Menu', 'oromo-resource-centre'),
    ));

    // Switch default core markup for search form, comment form, and comments
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for core custom logo
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 80,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add support for wide alignment
    add_theme_support('align-wide');

    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');

    // Add support for custom background
    add_theme_support('custom-background', array(
        'default-color' => 'f8f9fa',
    ));
}
add_action('after_setup_theme', 'oromo_resource_centre_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 */
function oromo_resource_centre_content_width() {
    $GLOBALS['content_width'] = apply_filters('oromo_resource_centre_content_width', 1200);
}
add_action('after_setup_theme', 'oromo_resource_centre_content_width', 0);

/**
 * Register widget area.
 */
function oromo_resource_centre_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'oromo-resource-centre'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'oromo-resource-centre'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 1', 'oromo-resource-centre'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here for the first footer column.', 'oromo-resource-centre'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 2', 'oromo-resource-centre'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here for the second footer column.', 'oromo-resource-centre'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 3', 'oromo-resource-centre'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add widgets here for the third footer column.', 'oromo-resource-centre'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'oromo_resource_centre_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function oromo_resource_centre_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('oromo-resource-centre-style', get_stylesheet_uri(), array(), _S_VERSION);
    
    // Enqueue Google Fonts
    wp_enqueue_style('oromo-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Enqueue Font Awesome for icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');

    // Enqueue main JavaScript
    wp_enqueue_script('oromo-resource-centre-navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), _S_VERSION, true);
    
    // Enqueue smooth scrolling script
    wp_enqueue_script('oromo-resource-centre-smooth-scroll', get_template_directory_uri() . '/js/smooth-scroll.js', array('jquery'), _S_VERSION, true);

    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    // Localize scripts for AJAX
    wp_localize_script('oromo-resource-centre-navigation', 'oromo_ajax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('oromo_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'oromo_resource_centre_scripts');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Add custom post types for Oromo Resource Centre
 */
function oromo_register_post_types() {
    // Register Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'oromo-resource-centre'),
            'singular_name' => __('Service', 'oromo-resource-centre'),
            'menu_name' => __('Services', 'oromo-resource-centre'),
            'add_new' => __('Add New Service', 'oromo-resource-centre'),
            'add_new_item' => __('Add New Service', 'oromo-resource-centre'),
            'edit_item' => __('Edit Service', 'oromo-resource-centre'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'services'),
    ));

    // Register Events Post Type
    register_post_type('events', array(
        'labels' => array(
            'name' => __('Events', 'oromo-resource-centre'),
            'singular_name' => __('Event', 'oromo-resource-centre'),
            'menu_name' => __('Events', 'oromo-resource-centre'),
            'add_new' => __('Add New Event', 'oromo-resource-centre'),
            'add_new_item' => __('Add New Event', 'oromo-resource-centre'),
            'edit_item' => __('Edit Event', 'oromo-resource-centre'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'events'),
    ));
}
add_action('init', 'oromo_register_post_types');

/**
 * Custom excerpt length
 */
function oromo_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'oromo_excerpt_length');

/**
 * Custom excerpt more
 */
function oromo_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'oromo_excerpt_more');

/**
 * Add custom body classes
 */
function oromo_body_classes($classes) {
    // Add a class if we're viewing the front page
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    
    // Add a class for the sidebar
    if (is_active_sidebar('sidebar-1')) {
        $classes[] = 'has-sidebar';
    } else {
        $classes[] = 'no-sidebar';
    }

    return $classes;
}
add_filter('body_class', 'oromo_body_classes');

/**
 * Enqueue admin styles
 */
function oromo_admin_styles() {
    wp_enqueue_style('oromo-admin-styles', get_template_directory_uri() . '/css/admin.css', array(), _S_VERSION);
}
add_action('admin_enqueue_scripts', 'oromo_admin_styles');