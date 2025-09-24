<?php
/**
 * The sidebar containing the main widget area
 *
 * @package Oromo_Resource_Centre
 */

if (!is_active_sidebar('sidebar-1')) {
    return;
}
?>

<aside id="secondary" class="widget-area" role="complementary">
    <div class="sidebar-content">
        <?php dynamic_sidebar('sidebar-1'); ?>
        
        <!-- Default sidebar content if no widgets are active -->
        <?php if (!dynamic_sidebar('sidebar-1')) : ?>
            
            <!-- Recent Posts Widget -->
            <section class="widget widget_recent_entries">
                <h3 class="widget-title"><?php esc_html_e('Recent Posts', 'oromo-resource-centre'); ?></h3>
                <ul>
                    <?php
                    $recent_posts = wp_get_recent_posts(array(
                        'numberposts' => 5,
                        'post_status' => 'publish'
                    ));
                    foreach ($recent_posts as $post) :
                    ?>
                        <li>
                            <a href="<?php echo esc_url(get_permalink($post['ID'])); ?>">
                                <?php echo esc_html($post['post_title']); ?>
                            </a>
                            <span class="post-date"><?php echo esc_html(get_the_date('', $post['ID'])); ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>

            <!-- Categories Widget -->
            <?php if (get_categories()) : ?>
                <section class="widget widget_categories">
                    <h3 class="widget-title"><?php esc_html_e('Categories', 'oromo-resource-centre'); ?></h3>
                    <ul>
                        <?php wp_list_categories(array(
                            'title_li' => '',
                            'show_count' => true,
                        )); ?>
                    </ul>
                </section>
            <?php endif; ?>

            <!-- Community Information Widget -->
            <section class="widget widget_community_info">
                <h3 class="widget-title"><?php esc_html_e('Community Info', 'oromo-resource-centre'); ?></h3>
                <div class="community-info-content">
                    <div class="info-item">
                        <i class="fas fa-graduation-cap"></i>
                        <div>
                            <h4><?php esc_html_e('Saturday School', 'oromo-resource-centre'); ?></h4>
                            <p><?php esc_html_e('Every Saturday 9:00 AM - 3:00 PM', 'oromo-resource-centre'); ?></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <div>
                            <h4><?php esc_html_e('Community Events', 'oromo-resource-centre'); ?></h4>
                            <p><?php esc_html_e('Cultural celebrations and workshops', 'oromo-resource-centre'); ?></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fas fa-hands-helping"></i>
                        <div>
                            <h4><?php esc_html_e('Get Involved', 'oromo-resource-centre'); ?></h4>
                            <p>
                                <a href="<?php echo esc_url(get_permalink(get_page_by_path('volunteer'))); ?>" class="btn btn-primary btn-sm">
                                    <?php esc_html_e('Volunteer', 'oromo-resource-centre'); ?>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Info Widget -->
            <section class="widget widget_contact_info">
                <h3 class="widget-title"><?php esc_html_e('Contact Us', 'oromo-resource-centre'); ?></h3>
                <div class="contact-info-content">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><?php echo esc_html(get_theme_mod('oromo_contact_location', 'Victoria')); ?></span>
                    </div>
                    
                    <?php if (get_theme_mod('oromo_contact_phone')) : ?>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('oromo_contact_phone'))); ?>">
                                <?php echo esc_html(get_theme_mod('oromo_contact_phone')); ?>
                            </a>
                        </div>
                    <?php endif; ?>
                    
                    <?php if (get_theme_mod('oromo_contact_email')) : ?>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('oromo_contact_email')); ?>">
                                <?php echo esc_html(get_theme_mod('oromo_contact_email')); ?>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </section>

            <!-- Archives Widget -->
            <section class="widget widget_archive">
                <h3 class="widget-title"><?php esc_html_e('Archives', 'oromo-resource-centre'); ?></h3>
                <ul>
                    <?php wp_get_archives(array('type' => 'monthly', 'limit' => 12)); ?>
                </ul>
            </section>

        <?php endif; ?>
    </div>
</aside><!-- #secondary -->