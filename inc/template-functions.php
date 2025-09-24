<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Oromo_Resource_Centre
 */

/**
 * Adds custom classes to the array of body classes.
 */
function oromo_resource_centre_body_classes($classes) {
    // Adds a class of hfeed to non-singular pages.
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    // Adds a class of no-sidebar when there is no sidebar present.
    if (!is_active_sidebar('sidebar-1')) {
        $classes[] = 'no-sidebar';
    }

    return $classes;
}
add_filter('body_class', 'oromo_resource_centre_body_classes');

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function oromo_resource_centre_pingback_header() {
    if (is_singular() && pings_open()) {
        printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
    }
}
add_action('wp_head', 'oromo_resource_centre_pingback_header');

/**
 * Custom function to limit excerpt length
 */
function oromo_custom_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'oromo_custom_excerpt_length', 999);

/**
 * Custom excerpt more string
 */
function oromo_custom_excerpt_more($more) {
    if (is_admin()) {
        return $more;
    }
    return '...';
}
add_filter('excerpt_more', 'oromo_custom_excerpt_more');

/**
 * Add custom image sizes to media library
 */
function oromo_add_image_size_names_choose($sizes) {
    return array_merge($sizes, array(
        'oromo-featured-large'  => __('Featured Large', 'oromo-resource-centre'),
        'oromo-featured-medium' => __('Featured Medium', 'oromo-resource-centre'),
        'oromo-featured-small'  => __('Featured Small', 'oromo-resource-centre'),
    ));
}
add_filter('image_size_names_choose', 'oromo_add_image_size_names_choose');

/**
 * Enqueue admin styles and scripts
 */
function oromo_admin_scripts() {
    wp_enqueue_style('oromo-admin-style', get_template_directory_uri() . '/css/admin.css', array(), _S_VERSION);
}
add_action('admin_enqueue_scripts', 'oromo_admin_scripts');

/**
 * Add custom meta box for services
 */
function oromo_add_services_meta_boxes() {
    add_meta_box(
        'oromo-service-details',
        __('Service Details', 'oromo-resource-centre'),
        'oromo_service_details_callback',
        'services'
    );
}
add_action('add_meta_boxes', 'oromo_add_services_meta_boxes');

/**
 * Service details meta box callback
 */
function oromo_service_details_callback($post) {
    wp_nonce_field('oromo_service_details_nonce', 'oromo_service_details_nonce');
    
    $service_icon = get_post_meta($post->ID, '_oromo_service_icon', true);
    $service_link = get_post_meta($post->ID, '_oromo_service_link', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="oromo_service_icon">' . __('Service Icon', 'oromo-resource-centre') . '</label></th>';
    echo '<td><input type="text" id="oromo_service_icon" name="oromo_service_icon" value="' . esc_attr($service_icon) . '" size="50" placeholder="fas fa-graduation-cap" />';
    echo '<p class="description">' . __('Font Awesome icon class (e.g., fas fa-graduation-cap)', 'oromo-resource-centre') . '</p></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="oromo_service_link">' . __('External Link', 'oromo-resource-centre') . '</label></th>';
    echo '<td><input type="url" id="oromo_service_link" name="oromo_service_link" value="' . esc_attr($service_link) . '" size="50" /></td>';
    echo '</tr>';
    echo '</table>';
}

/**
 * Save service details meta box data
 */
function oromo_save_service_details($post_id) {
    if (!isset($_POST['oromo_service_details_nonce']) || 
        !wp_verify_nonce($_POST['oromo_service_details_nonce'], 'oromo_service_details_nonce')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['oromo_service_icon'])) {
        update_post_meta($post_id, '_oromo_service_icon', sanitize_text_field($_POST['oromo_service_icon']));
    }

    if (isset($_POST['oromo_service_link'])) {
        update_post_meta($post_id, '_oromo_service_link', esc_url_raw($_POST['oromo_service_link']));
    }
}
add_action('save_post', 'oromo_save_service_details');

/**
 * Add support for WordPress 5.8 block widgets
 */
function oromo_theme_support() {
    add_theme_support('widgets-block-editor');
}
add_action('after_setup_theme', 'oromo_theme_support');

/**
 * Enqueue block editor assets
 */
function oromo_block_editor_assets() {
    wp_enqueue_style(
        'oromo-block-editor-styles',
        get_template_directory_uri() . '/css/editor-style.css',
        array(),
        _S_VERSION
    );
}
add_action('enqueue_block_editor_assets', 'oromo_block_editor_assets');

/**
 * Custom login page styling
 */
function oromo_login_stylesheet() {
    wp_enqueue_style('custom-login', get_template_directory_uri() . '/css/login.css', array(), _S_VERSION);
}
add_action('login_enqueue_scripts', 'oromo_login_stylesheet');

/**
 * Custom login logo URL
 */
function oromo_login_logo_url() {
    return home_url();
}
add_filter('login_headerurl', 'oromo_login_logo_url');

/**
 * Custom login logo title
 */
function oromo_login_logo_url_title() {
    return get_bloginfo('name');
}
add_filter('login_headertitle', 'oromo_login_logo_url_title');

/**
 * Remove WordPress version number from head
 */
function oromo_remove_version() {
    return '';
}
add_filter('the_generator', 'oromo_remove_version');

/**
 * Disable file editing in WordPress admin
 */
if (!defined('DISALLOW_FILE_EDIT')) {
    define('DISALLOW_FILE_EDIT', true);
}

/**
 * Add custom favicon if not set
 */
function oromo_add_favicon() {
    if (!has_site_icon()) {
        echo '<link rel="shortcut icon" href="' . esc_url(get_template_directory_uri() . '/images/favicon.ico') . '" />';
    }
}
add_action('wp_head', 'oromo_add_favicon');

/**
 * Custom search form
 */
function oromo_search_form($form) {
    $form = '<form role="search" method="get" class="search-form" action="' . esc_url(home_url('/')) . '">
        <label class="screen-reader-text" for="s">' . __('Search for:', 'oromo-resource-centre') . '</label>
        <input type="search" class="search-field" placeholder="' . esc_attr__('Search...', 'oromo-resource-centre') . '" value="' . get_search_query() . '" name="s" />
        <button type="submit" class="search-submit">
            <i class="fas fa-search"></i>
            <span class="screen-reader-text">' . __('Search', 'oromo-resource-centre') . '</span>
        </button>
    </form>';

    return $form;
}
add_filter('get_search_form', 'oromo_search_form');