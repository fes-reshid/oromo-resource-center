<?php
/**
 * The front page template file
 * 
 * This template will be used for the front page when a static page is set as the front page.
 * 
 * @package Oromo_Resource_Centre
 */

get_header(); ?>

<main id="main" class="site-main front-page">

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-background">
            <?php 
            $hero_bg = get_theme_mod('oromo_hero_background_image');
            if ($hero_bg) : ?>
                <img src="<?php echo esc_url($hero_bg); ?>" alt="<?php esc_attr_e('Oromo Resource Center grounds and memorial site', 'oromo-resource-centre'); ?>" class="hero-bg-image">
            <?php endif; ?>
            <div class="hero-overlay"></div>
        </div>

        <div class="hero-content">
            <div class="container">
                <div class="hero-text">
                    <h1 class="hero-title">
                        <?php echo esc_html(get_theme_mod('oromo_hero_title', 'Building Community,')); ?>
                        <span class="hero-accent"><?php echo esc_html(get_theme_mod('oromo_hero_subtitle', 'Preserving Culture')); ?></span>
                    </h1>
                    
                    <p class="hero-description">
                        <?php echo esc_html(get_theme_mod('oromo_hero_description', 'The Oromo Resource Center serves Melbourne\'s western communities with Saturday education programs, cultural activities, and Islamic burial services. Together, we strengthen our heritage and support our families.')); ?>
                    </p>

                    <div class="hero-buttons">
                        <a href="#about" class="btn btn-secondary hero-btn-primary">
                            <?php esc_html_e('Learn More About Us', 'oromo-resource-centre'); ?>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="btn btn-outline hero-btn-secondary">
                            <?php esc_html_e('Contact Us Today', 'oromo-resource-centre'); ?>
                        </a>
                    </div>

                    <!-- Quick Stats -->
                    <div class="hero-stats grid grid-cols-1 md:grid-cols-3">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-title"><?php esc_html_e('Saturday School', 'oromo-resource-centre'); ?></div>
                                <div class="stat-subtitle"><?php esc_html_e('Educational Programs', 'oromo-resource-centre'); ?></div>
                            </div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-title"><?php esc_html_e('Community Hub', 'oromo-resource-centre'); ?></div>
                                <div class="stat-subtitle"><?php echo esc_html(get_theme_mod('oromo_contact_location', 'Victoria')); ?></div>
                            </div>
                        </div>
                        
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-title"><?php esc_html_e('Burial Services', 'oromo-resource-centre'); ?></div>
                                <div class="stat-subtitle"><?php esc_html_e('Islamic Traditions', 'oromo-resource-centre'); ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title"><?php echo esc_html(get_theme_mod('oromo_about_title', 'About Our Community')); ?></h2>
                <p class="section-description">
                    <?php echo esc_html(get_theme_mod('oromo_about_description', 'Discover our rich heritage and commitment to serving the Oromo community in Victoria.')); ?>
                </p>
            </div>

            <div class="about-content grid md:grid-cols-2">
                <div class="about-text">
                    <h3><?php esc_html_e('Our Mission', 'oromo-resource-centre'); ?></h3>
                    <p><?php echo esc_html(get_theme_mod('oromo_about_mission', 'We are dedicated to preserving Oromo culture, language, and Islamic values while supporting our community through education, cultural activities, and essential services.')); ?></p>

                    <h3><?php esc_html_e('What We Offer', 'oromo-resource-centre'); ?></h3>
                    <ul class="about-features">
                        <li><i class="fas fa-check"></i> <?php esc_html_e('Saturday Educational Programs', 'oromo-resource-centre'); ?></li>
                        <li><i class="fas fa-check"></i> <?php esc_html_e('Cultural Events & Celebrations', 'oromo-resource-centre'); ?></li>
                        <li><i class="fas fa-check"></i> <?php esc_html_e('Islamic Burial Services', 'oromo-resource-centre'); ?></li>
                        <li><i class="fas fa-check"></i> <?php esc_html_e('Community Support Programs', 'oromo-resource-centre'); ?></li>
                        <li><i class="fas fa-check"></i> <?php esc_html_e('Language & Heritage Classes', 'oromo-resource-centre'); ?></li>
                    </ul>
                </div>

                <div class="about-image">
                    <?php 
                    $about_image = get_theme_mod('oromo_about_image');
                    if ($about_image) : ?>
                        <img src="<?php echo esc_url($about_image); ?>" alt="<?php esc_attr_e('About Oromo Resource Centre', 'oromo-resource-centre'); ?>" class="about-img">
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title"><?php esc_html_e('Our Services', 'oromo-resource-centre'); ?></h2>
                <p class="section-description">
                    <?php esc_html_e('Comprehensive community services that honor our traditions and support our families.', 'oromo-resource-centre'); ?>
                </p>
            </div>

            <div class="services-grid grid md:grid-cols-3">
                <?php
                // Display custom services from the services post type
                $services_query = new WP_Query(array(
                    'post_type' => 'services',
                    'posts_per_page' => 6,
                ));

                if ($services_query->have_posts()) :
                    while ($services_query->have_posts()) : $services_query->the_post();
                ?>
                    <div class="service-card card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="service-image">
                                <?php the_post_thumbnail('oromo-featured-medium'); ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="service-content">
                            <h3 class="service-title"><?php the_title(); ?></h3>
                            <div class="service-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                <?php esc_html_e('Learn More', 'oromo-resource-centre'); ?>
                            </a>
                        </div>
                    </div>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    // Default services if none are created
                    $default_services = array(
                        array(
                            'title' => __('Saturday School', 'oromo-resource-centre'),
                            'description' => __('Educational programs for children and youth focusing on Oromo language, culture, and Islamic studies.', 'oromo-resource-centre'),
                            'icon' => 'fas fa-graduation-cap'
                        ),
                        array(
                            'title' => __('Community Services', 'oromo-resource-centre'),
                            'description' => __('Regular community gatherings, cultural celebrations, workshops, and support programs for families.', 'oromo-resource-centre'),
                            'icon' => 'fas fa-users'
                        ),
                        array(
                            'title' => __('Funeral Services', 'oromo-resource-centre'),
                            'description' => __('Compassionate Islamic burial services that honor our traditions and support grieving families.', 'oromo-resource-centre'),
                            'icon' => 'fas fa-heart'
                        ),
                    );

                    foreach ($default_services as $service) :
                ?>
                    <div class="service-card card">
                        <div class="service-icon">
                            <i class="<?php echo esc_attr($service['icon']); ?>"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="service-title"><?php echo esc_html($service['title']); ?></h3>
                            <p class="service-description"><?php echo esc_html($service['description']); ?></p>
                            <a href="#contact" class="btn btn-primary">
                                <?php esc_html_e('Learn More', 'oromo-resource-centre'); ?>
                            </a>
                        </div>
                    </div>
                <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title"><?php esc_html_e('Get In Touch', 'oromo-resource-centre'); ?></h2>
                <p class="section-description">
                    <?php esc_html_e('We\'re here to serve our community. Reach out to learn more about our programs or how you can get involved.', 'oromo-resource-centre'); ?>
                </p>
            </div>

            <div class="contact-content grid md:grid-cols-2">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php esc_html_e('Location', 'oromo-resource-centre'); ?></h4>
                            <p>
                                <?php echo esc_html(get_theme_mod('oromo_contact_location', 'Victoria')); ?><br>
                                <?php echo esc_html(get_theme_mod('oromo_contact_areas', 'Serving Footscray, Sunshine, Werribee, and surrounding areas')); ?>
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php esc_html_e('Phone', 'oromo-resource-centre'); ?></h4>
                            <p><?php echo esc_html(get_theme_mod('oromo_contact_phone', '(03) XXXX XXXX')); ?></p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4><?php esc_html_e('Email', 'oromo-resource-centre'); ?></h4>
                            <p><?php echo esc_html(get_theme_mod('oromo_contact_email', 'info@oromocentre.org')); ?></p>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <?php
                    // Display contact form (you can integrate with Contact Form 7 or other form plugins)
                    if (shortcode_exists('contact-form-7')) {
                        echo do_shortcode('[contact-form-7 id="1" title="Contact form 1"]');
                    } else {
                        // Basic HTML form fallback
                        ?>
                        <form class="basic-contact-form" action="#" method="post">
                            <div class="form-group">
                                <label for="contact-name"><?php esc_html_e('Name', 'oromo-resource-centre'); ?></label>
                                <input type="text" id="contact-name" name="contact-name" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-email"><?php esc_html_e('Email', 'oromo-resource-centre'); ?></label>
                                <input type="email" id="contact-email" name="contact-email" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-message"><?php esc_html_e('Message', 'oromo-resource-centre'); ?></label>
                                <textarea id="contact-message" name="contact-message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <?php esc_html_e('Send Message', 'oromo-resource-centre'); ?>
                            </button>
                        </form>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>