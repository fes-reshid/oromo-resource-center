<?php
/**
 * The template for displaying the footer
 *
 * @package Oromo_Resource_Centre
 */
?>

    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="footer-overlay">
            <div class="footer-background">
                <?php 
                $footer_bg = get_theme_mod('oromo_footer_background_image');
                if ($footer_bg) : ?>
                    <img src="<?php echo esc_url($footer_bg); ?>" alt="Footer Background" class="footer-bg-image">
                <?php endif; ?>
            </div>
            
            <div class="container">
                <div class="footer-content">
                    <div class="footer-main grid md:grid-cols-4">
                        
                        <!-- Site Info -->
                        <div class="footer-section footer-about">
                            <div class="footer-logo">
                                <?php
                                $custom_logo_id = get_theme_mod('custom_logo');
                                if ($custom_logo_id) :
                                    $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                                ?>
                                    <img src="<?php echo esc_url($logo[0]); ?>" alt="<?php bloginfo('name'); ?>" class="footer-logo-img">
                                <?php else : ?>
                                    <div class="footer-logo-text">
                                        <i class="fas fa-community"></i>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="footer-site-info">
                                    <h3 class="footer-site-title"><?php bloginfo('name'); ?></h3>
                                    <p class="footer-site-description"><?php bloginfo('description'); ?></p>
                                </div>
                            </div>
                            
                            <p class="footer-description">
                                <?php echo esc_html(get_theme_mod('oromo_footer_description', 'Serving the Oromo community in Victoria with educational programs, cultural activities, and Islamic burial services. Building bridges between tradition and modern life.')); ?>
                            </p>
                            
                            <!-- Social Media -->
                            <div class="social-media">
                                <?php if (get_theme_mod('oromo_facebook_url')) : ?>
                                    <a href="<?php echo esc_url(get_theme_mod('oromo_facebook_url')); ?>" target="_blank" rel="noopener" class="social-link">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                <?php endif; ?>
                                
                                <?php if (get_theme_mod('oromo_twitter_url')) : ?>
                                    <a href="<?php echo esc_url(get_theme_mod('oromo_twitter_url')); ?>" target="_blank" rel="noopener" class="social-link">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                <?php endif; ?>
                                
                                <?php if (get_theme_mod('oromo_instagram_url')) : ?>
                                    <a href="<?php echo esc_url(get_theme_mod('oromo_instagram_url')); ?>" target="_blank" rel="noopener" class="social-link">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                <?php endif; ?>
                                
                                <?php if (get_theme_mod('oromo_youtube_url')) : ?>
                                    <a href="<?php echo esc_url(get_theme_mod('oromo_youtube_url')); ?>" target="_blank" rel="noopener" class="social-link">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                <?php endif; ?>
                            </div>
                        </div>

                        <!-- Footer Widget Area 1 -->
                        <?php if (is_active_sidebar('footer-1')) : ?>
                            <div class="footer-section footer-widget-1">
                                <?php dynamic_sidebar('footer-1'); ?>
                            </div>
                        <?php else : ?>
                            <div class="footer-section footer-quick-links">
                                <h4 class="footer-title"><?php esc_html_e('Quick Links', 'oromo-resource-centre'); ?></h4>
                                <ul class="footer-menu">
                                    <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#about"><?php esc_html_e('About Us', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#services"><?php esc_html_e('Services', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="<?php echo esc_url(get_post_type_archive_link('events')); ?>"><?php esc_html_e('Events', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="<?php echo esc_url(get_permalink(get_page_by_path('volunteer'))); ?>"><?php esc_html_e('Volunteer', 'oromo-resource-centre'); ?></a></li>
                                </ul>
                            </div>
                        <?php endif; ?>

                        <!-- Footer Widget Area 2 -->
                        <?php if (is_active_sidebar('footer-2')) : ?>
                            <div class="footer-section footer-widget-2">
                                <?php dynamic_sidebar('footer-2'); ?>
                            </div>
                        <?php else : ?>
                            <div class="footer-section footer-services">
                                <h4 class="footer-title"><?php esc_html_e('Our Services', 'oromo-resource-centre'); ?></h4>
                                <ul class="footer-menu">
                                    <li><a href="#services"><?php esc_html_e('Saturday School', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#services"><?php esc_html_e('Community Events', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#services"><?php esc_html_e('Funeral Services', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#services"><?php esc_html_e('Cultural Programs', 'oromo-resource-centre'); ?></a></li>
                                    <li><a href="#services"><?php esc_html_e('Language Classes', 'oromo-resource-centre'); ?></a></li>
                                </ul>
                            </div>
                        <?php endif; ?>

                        <!-- Footer Widget Area 3 -->
                        <?php if (is_active_sidebar('footer-3')) : ?>
                            <div class="footer-section footer-widget-3">
                                <?php dynamic_sidebar('footer-3'); ?>
                            </div>
                        <?php else : ?>
                            <div class="footer-section footer-contact">
                                <h4 class="footer-title"><?php esc_html_e('Contact Info', 'oromo-resource-centre'); ?></h4>
                                <div class="footer-contact-info">
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
                                    
                                    <div class="contact-item">
                                        <i class="fas fa-clock"></i>
                                        <span><?php echo esc_html(get_theme_mod('oromo_contact_hours', 'Saturday: 9:00 AM - 5:00 PM')); ?></span>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <!-- Footer Bottom -->
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'oromo-resource-centre'); ?></p>
                            
                            <?php if (has_nav_menu('footer')) : ?>
                                <nav class="footer-navigation">
                                    <?php
                                    wp_nav_menu(array(
                                        'theme_location' => 'footer',
                                        'menu_id'        => 'footer-menu',
                                        'menu_class'     => 'footer-nav-menu',
                                        'depth'          => 1,
                                    ));
                                    ?>
                                </nav>
                            <?php endif; ?>
                        </div>
                        
                        <div class="footer-credits">
                            <p>
                                <?php
                                printf(
                                    esc_html__('Built with %1$s and community spirit', 'oromo-resource-centre'),
                                    '<i class="fas fa-heart"></i>'
                                );
                                ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>