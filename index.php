<?php
/**
 * The main template file
 * 
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container">
        
        <?php if (have_posts()) : ?>
            
            <?php if (is_home() && !is_front_page()) : ?>
                <header class="page-header">
                    <h1 class="page-title"><?php single_post_title(); ?></h1>
                </header>
            <?php endif; ?>

            <div class="posts-container">
                <?php while (have_posts()) : the_post(); ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-item card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('large', array('class' => 'post-image')); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="post-content">
                            <header class="entry-header">
                                <?php if (is_singular()) : ?>
                                    <h1 class="entry-title"><?php the_title(); ?></h1>
                                <?php else : ?>
                                    <h2 class="entry-title">
                                        <a href="<?php the_permalink(); ?>" rel="bookmark">
                                            <?php the_title(); ?>
                                        </a>
                                    </h2>
                                <?php endif; ?>

                                <?php if ('post' === get_post_type()) : ?>
                                    <div class="entry-meta">
                                        <span class="posted-on">
                                            <time class="entry-date published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                                <?php echo esc_html(get_the_date()); ?>
                                            </time>
                                        </span>
                                        <span class="byline">
                                            <?php _e('by', 'oromo-resource-centre'); ?>
                                            <span class="author vcard">
                                                <a class="url fn n" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
                                                    <?php echo esc_html(get_the_author()); ?>
                                                </a>
                                            </span>
                                        </span>
                                        <?php if (has_category()) : ?>
                                            <span class="cat-links">
                                                <?php _e('in', 'oromo-resource-centre'); ?>
                                                <?php the_category(', '); ?>
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                <?php endif; ?>
                            </header>

                            <div class="entry-content">
                                <?php
                                if (is_singular() || is_home()) {
                                    the_content();
                                    
                                    wp_link_pages(array(
                                        'before' => '<div class="page-links">' . __('Pages:', 'oromo-resource-centre'),
                                        'after'  => '</div>',
                                    ));
                                } else {
                                    the_excerpt();
                                    echo '<a href="' . esc_url(get_permalink()) . '" class="btn btn-primary">' . __('Read More', 'oromo-resource-centre') . '</a>';
                                }
                                ?>
                            </div>

                            <?php if (is_singular() && has_tag()) : ?>
                                <footer class="entry-footer">
                                    <div class="tag-links">
                                        <?php _e('Tags: ', 'oromo-resource-centre'); ?>
                                        <?php the_tags('', ', ', ''); ?>
                                    </div>
                                </footer>
                            <?php endif; ?>
                        </div>
                    </article>

                <?php endwhile; ?>
                
                <?php
                // Pagination
                the_posts_pagination(array(
                    'prev_text' => __('Previous', 'oromo-resource-centre'),
                    'next_text' => __('Next', 'oromo-resource-centre'),
                ));
                ?>
                
            </div>

        <?php else : ?>
            
            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title"><?php _e('Nothing Found', 'oromo-resource-centre'); ?></h1>
                </header>

                <div class="page-content">
                    <?php if (is_home() && current_user_can('publish_posts')) : ?>
                        <p>
                            <?php
                            printf(
                                wp_kses(
                                    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'oromo-resource-centre'),
                                    array(
                                        'a' => array(
                                            'href' => array(),
                                        ),
                                    )
                                ),
                                esc_url(admin_url('post-new.php'))
                            );
                            ?>
                        </p>
                    <?php elseif (is_search()) : ?>
                        <p><?php _e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'oromo-resource-centre'); ?></p>
                        <?php get_search_form(); ?>
                    <?php else : ?>
                        <p><?php _e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'oromo-resource-centre'); ?></p>
                        <?php get_search_form(); ?>
                    <?php endif; ?>
                </div>
            </section>

        <?php endif; ?>
        
    </div>
</main>

<?php get_sidebar(); ?>
<?php get_footer(); ?>