<?php
/**
 * Custom template tags for this theme
 *
 * @package Oromo_Resource_Centre
 */

if (!function_exists('oromo_posted_on')) :
    /**
     * Prints HTML with meta information for the current post-date/time.
     */
    function oromo_posted_on() {
        $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
        if (get_the_time('U') !== get_the_modified_time('U')) {
            $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
        }

        $time_string = sprintf($time_string,
            esc_attr(get_the_date(DATE_W3C)),
            esc_html(get_the_date()),
            esc_attr(get_the_modified_date(DATE_W3C)),
            esc_html(get_the_modified_date())
        );

        $posted_on = sprintf(
            /* translators: %s: post date. */
            esc_html_x('Posted on %s', 'post date', 'oromo-resource-centre'),
            '<a href="' . esc_url(get_permalink()) . '" rel="bookmark">' . $time_string . '</a>'
        );

        echo '<span class="posted-on">' . $posted_on . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }
endif;

if (!function_exists('oromo_posted_by')) :
    /**
     * Prints HTML with meta information for the current author.
     */
    function oromo_posted_by() {
        $byline = sprintf(
            /* translators: %s: post author. */
            esc_html_x('by %s', 'post author', 'oromo-resource-centre'),
            '<span class="author vcard"><a class="url fn n" href="' . esc_url(get_author_posts_url(get_the_author_meta('ID'))) . '">' . esc_html(get_the_author()) . '</a></span>'
        );

        echo '<span class="byline"> ' . $byline . '</span>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }
endif;

if (!function_exists('oromo_entry_footer')) :
    /**
     * Prints HTML with meta information for the categories, tags and comments.
     */
    function oromo_entry_footer() {
        // Hide category and tag text for pages.
        if ('post' === get_post_type()) {
            /* translators: used between list items, there is a space after the comma */
            $categories_list = get_the_category_list(esc_html__(', ', 'oromo-resource-centre'));
            if ($categories_list) {
                /* translators: 1: list of categories. */
                printf('<span class="cat-links">' . esc_html__('Posted in %1$s', 'oromo-resource-centre') . '</span>', $categories_list); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            }

            /* translators: used between list items, there is a space after the comma */
            $tags_list = get_the_tag_list('', esc_html_x(', ', 'list item separator', 'oromo-resource-centre'));
            if ($tags_list) {
                /* translators: 1: list of tags. */
                printf('<span class="tags-links">' . esc_html__('Tagged %1$s', 'oromo-resource-centre') . '</span>', $tags_list); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            }
        }

        if (!is_single() && !post_password_required() && (comments_open() || get_comments_number())) {
            echo '<span class="comments-link">';
            comments_popup_link(
                sprintf(
                    wp_kses(
                        /* translators: %s: post title */
                        __('Leave a Comment<span class="screen-reader-text"> on %s</span>', 'oromo-resource-centre'),
                        array(
                            'span' => array(
                                'class' => array(),
                            ),
                        )
                    ),
                    wp_kses_post(get_the_title())
                )
            );
            echo '</span>';
        }

        edit_post_link(
            sprintf(
                wp_kses(
                    /* translators: %s: Name of current post. Only visible to screen readers */
                    __('Edit <span class="screen-reader-text">%s</span>', 'oromo-resource-centre'),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                ),
                wp_kses_post(get_the_title())
            ),
            '<span class="edit-link">',
            '</span>'
        );
    }
endif;

if (!function_exists('oromo_post_thumbnail')) :
    /**
     * Displays an optional post thumbnail.
     *
     * Wraps the post thumbnail in an anchor element on index views, or a div
     * element when on single views.
     */
    function oromo_post_thumbnail() {
        if (post_password_required() || is_attachment() || !has_post_thumbnail()) {
            return;
        }

        if (is_singular()) :
            ?>
            <div class="post-thumbnail">
                <?php the_post_thumbnail(); ?>
            </div><!-- .post-thumbnail -->
        <?php else : ?>
            <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
                <?php
                the_post_thumbnail('post-thumbnail', array(
                    'alt' => the_title_attribute(array(
                        'echo' => false,
                    )),
                ));
                ?>
            </a>
        <?php
        endif; // End is_singular().
    }
endif;

if (!function_exists('wp_body_open')) :
    /**
     * Shim for sites older than 5.2.
     */
    function wp_body_open() {
        do_action('wp_body_open');
    }
endif;

/**
 * Custom function to get excerpt with custom length
 */
if (!function_exists('oromo_get_excerpt')) :
    function oromo_get_excerpt($limit = 25) {
        $excerpt = get_the_excerpt();
        $excerpt = wp_trim_words($excerpt, $limit);
        return $excerpt;
    }
endif;

/**
 * Custom breadcrumb function
 */
if (!function_exists('oromo_breadcrumbs')) :
    function oromo_breadcrumbs() {
        if (is_front_page()) {
            return;
        }

        echo '<nav class="breadcrumbs" aria-label="' . esc_attr__('Breadcrumb Navigation', 'oromo-resource-centre') . '">';
        echo '<a href="' . esc_url(home_url('/')) . '">' . esc_html__('Home', 'oromo-resource-centre') . '</a>';
        
        if (is_category() || is_single()) {
            echo ' / ';
            if (is_single()) {
                the_category(' / ');
                echo ' / ';
                the_title();
            } else {
                single_cat_title();
            }
        } elseif (is_page()) {
            echo ' / ';
            the_title();
        } elseif (is_search()) {
            echo ' / ';
            echo esc_html__('Search Results for', 'oromo-resource-centre') . ' "' . get_search_query() . '"';
        } elseif (is_404()) {
            echo ' / ';
            echo esc_html__('404 - Page Not Found', 'oromo-resource-centre');
        }
        
        echo '</nav>';
    }
endif;

/**
 * Display navigation to next/previous set of posts when applicable.
 */
if (!function_exists('oromo_posts_navigation')) :
    function oromo_posts_navigation() {
        the_posts_navigation(array(
            'prev_text' => '<i class="fas fa-arrow-left"></i> ' . __('Older posts', 'oromo-resource-centre'),
            'next_text' => __('Newer posts', 'oromo-resource-centre') . ' <i class="fas fa-arrow-right"></i>',
        ));
    }
endif;

/**
 * Display navigation to next/previous post when applicable.
 */
if (!function_exists('oromo_post_navigation')) :
    function oromo_post_navigation() {
        the_post_navigation(array(
            'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'oromo-resource-centre') . '</span> <span class="nav-title">%title</span>',
            'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'oromo-resource-centre') . '</span> <span class="nav-title">%title</span>',
        ));
    }
endif;