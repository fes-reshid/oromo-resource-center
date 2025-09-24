<?php
/**
 * Oromo Resource Centre Theme Customizer
 *
 * @package Oromo_Resource_Centre
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 */
function oromo_resource_centre_customize_register($wp_customize) {
    $wp_customize->get_setting('blogname')->transport         = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport  = 'postMessage';
    $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial('blogname', array(
            'selector'        => '.site-title a',
            'render_callback' => 'oromo_resource_centre_customize_partial_blogname',
        ));
        $wp_customize->selective_refresh->add_partial('blogdescription', array(
            'selector'        => '.site-description',
            'render_callback' => 'oromo_resource_centre_customize_partial_blogdescription',
        ));
    }

    /**
     * Hero Section
     */
    $wp_customize->add_section('oromo_hero_section', array(
        'title'    => __('Hero Section', 'oromo-resource-centre'),
        'priority' => 30,
    ));

    // Hero Background Image
    $wp_customize->add_setting('oromo_hero_background_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'oromo_hero_background_image', array(
        'label'    => __('Hero Background Image', 'oromo-resource-centre'),
        'section'  => 'oromo_hero_section',
        'settings' => 'oromo_hero_background_image',
    )));

    // Hero Title
    $wp_customize->add_setting('oromo_hero_title', array(
        'default'           => 'Building Community,',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_hero_title', array(
        'label'    => __('Hero Title', 'oromo-resource-centre'),
        'section'  => 'oromo_hero_section',
        'type'     => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('oromo_hero_subtitle', array(
        'default'           => 'Preserving Culture',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_hero_subtitle', array(
        'label'    => __('Hero Subtitle', 'oromo-resource-centre'),
        'section'  => 'oromo_hero_section',
        'type'     => 'text',
    ));

    // Hero Description
    $wp_customize->add_setting('oromo_hero_description', array(
        'default'           => 'The Oromo Resource Center serves Melbourne\'s western communities with Saturday education programs, cultural activities, and Islamic burial services. Together, we strengthen our heritage and support our families.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('oromo_hero_description', array(
        'label'    => __('Hero Description', 'oromo-resource-centre'),
        'section'  => 'oromo_hero_section',
        'type'     => 'textarea',
    ));

    /**
     * About Section
     */
    $wp_customize->add_section('oromo_about_section', array(
        'title'    => __('About Section', 'oromo-resource-centre'),
        'priority' => 35,
    ));

    // About Title
    $wp_customize->add_setting('oromo_about_title', array(
        'default'           => 'About Our Community',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_about_title', array(
        'label'    => __('About Section Title', 'oromo-resource-centre'),
        'section'  => 'oromo_about_section',
        'type'     => 'text',
    ));

    // About Description
    $wp_customize->add_setting('oromo_about_description', array(
        'default'           => 'Discover our rich heritage and commitment to serving the Oromo community in Victoria.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('oromo_about_description', array(
        'label'    => __('About Section Description', 'oromo-resource-centre'),
        'section'  => 'oromo_about_section',
        'type'     => 'textarea',
    ));

    // About Mission
    $wp_customize->add_setting('oromo_about_mission', array(
        'default'           => 'We are dedicated to preserving Oromo culture, language, and Islamic values while supporting our community through education, cultural activities, and essential services.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('oromo_about_mission', array(
        'label'    => __('Mission Statement', 'oromo-resource-centre'),
        'section'  => 'oromo_about_section',
        'type'     => 'textarea',
    ));

    // About Image
    $wp_customize->add_setting('oromo_about_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'oromo_about_image', array(
        'label'    => __('About Section Image', 'oromo-resource-centre'),
        'section'  => 'oromo_about_section',
        'settings' => 'oromo_about_image',
    )));

    /**
     * Contact Information
     */
    $wp_customize->add_section('oromo_contact_section', array(
        'title'    => __('Contact Information', 'oromo-resource-centre'),
        'priority' => 40,
    ));

    // Contact Location
    $wp_customize->add_setting('oromo_contact_location', array(
        'default'           => 'Victoria',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_contact_location', array(
        'label'    => __('Location', 'oromo-resource-centre'),
        'section'  => 'oromo_contact_section',
        'type'     => 'text',
    ));

    // Contact Areas
    $wp_customize->add_setting('oromo_contact_areas', array(
        'default'           => 'Serving Footscray, Sunshine, Werribee, and surrounding areas',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_contact_areas', array(
        'label'    => __('Service Areas', 'oromo-resource-centre'),
        'section'  => 'oromo_contact_section',
        'type'     => 'text',
    ));

    // Contact Phone
    $wp_customize->add_setting('oromo_contact_phone', array(
        'default'           => '(03) XXXX XXXX',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_contact_phone', array(
        'label'    => __('Phone Number', 'oromo-resource-centre'),
        'section'  => 'oromo_contact_section',
        'type'     => 'text',
    ));

    // Contact Email
    $wp_customize->add_setting('oromo_contact_email', array(
        'default'           => 'info@oromocentre.org',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('oromo_contact_email', array(
        'label'    => __('Email Address', 'oromo-resource-centre'),
        'section'  => 'oromo_contact_section',
        'type'     => 'email',
    ));

    // Contact Hours
    $wp_customize->add_setting('oromo_contact_hours', array(
        'default'           => 'Saturday: 9:00 AM - 5:00 PM',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('oromo_contact_hours', array(
        'label'    => __('Operating Hours', 'oromo-resource-centre'),
        'section'  => 'oromo_contact_section',
        'type'     => 'text',
    ));

    /**
     * Social Media Links
     */
    $wp_customize->add_section('oromo_social_section', array(
        'title'    => __('Social Media', 'oromo-resource-centre'),
        'priority' => 45,
    ));

    // Facebook URL
    $wp_customize->add_setting('oromo_facebook_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('oromo_facebook_url', array(
        'label'    => __('Facebook URL', 'oromo-resource-centre'),
        'section'  => 'oromo_social_section',
        'type'     => 'url',
    ));

    // Twitter URL
    $wp_customize->add_setting('oromo_twitter_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('oromo_twitter_url', array(
        'label'    => __('Twitter URL', 'oromo-resource-centre'),
        'section'  => 'oromo_social_section',
        'type'     => 'url',
    ));

    // Instagram URL
    $wp_customize->add_setting('oromo_instagram_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('oromo_instagram_url', array(
        'label'    => __('Instagram URL', 'oromo-resource-centre'),
        'section'  => 'oromo_social_section',
        'type'     => 'url',
    ));

    // YouTube URL
    $wp_customize->add_setting('oromo_youtube_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('oromo_youtube_url', array(
        'label'    => __('YouTube URL', 'oromo-resource-centre'),
        'section'  => 'oromo_social_section',
        'type'     => 'url',
    ));

    /**
     * Footer Settings
     */
    $wp_customize->add_section('oromo_footer_section', array(
        'title'    => __('Footer Settings', 'oromo-resource-centre'),
        'priority' => 50,
    ));

    // Footer Description
    $wp_customize->add_setting('oromo_footer_description', array(
        'default'           => 'Serving the Oromo community in Victoria with educational programs, cultural activities, and Islamic burial services. Building bridges between tradition and modern life.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('oromo_footer_description', array(
        'label'    => __('Footer Description', 'oromo-resource-centre'),
        'section'  => 'oromo_footer_section',
        'type'     => 'textarea',
    ));

    // Footer Background Image
    $wp_customize->add_setting('oromo_footer_background_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'oromo_footer_background_image', array(
        'label'    => __('Footer Background Image', 'oromo-resource-centre'),
        'section'  => 'oromo_footer_section',
        'settings' => 'oromo_footer_background_image',
    )));

    // Header Background Image
    $wp_customize->add_setting('oromo_header_background_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'oromo_header_background_image', array(
        'label'    => __('Header Background Image', 'oromo-resource-centre'),
        'section'  => 'header_image',
        'settings' => 'oromo_header_background_image',
    )));
}
add_action('customize_register', 'oromo_resource_centre_customize_register');

/**
 * Render the site title for the selective refresh partial.
 */
function oromo_resource_centre_customize_partial_blogname() {
    bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 */
function oromo_resource_centre_customize_partial_blogdescription() {
    bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function oromo_resource_centre_customize_preview_js() {
    wp_enqueue_script('oromo-resource-centre-customizer', get_template_directory_uri() . '/js/customizer.js', array('customize-preview'), _S_VERSION, true);
}
add_action('customize_preview_init', 'oromo_resource_centre_customize_preview_js');