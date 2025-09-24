/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function($) {
    'use strict';

    // Site title and description.
    wp.customize('blogname', function(value) {
        value.bind(function(to) {
            $('.site-title a').text(to);
        });
    });

    wp.customize('blogdescription', function(value) {
        value.bind(function(to) {
            $('.site-description').text(to);
        });
    });

    // Header text color.
    wp.customize('header_textcolor', function(value) {
        value.bind(function(to) {
            if ('blank' === to) {
                $('.site-title, .site-description').css({
                    'clip': 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute'
                });
            } else {
                $('.site-title, .site-description').css({
                    'clip': 'auto',
                    'position': 'relative'
                });
                $('.site-title a, .site-description').css({
                    'color': to
                });
            }
        });
    });

    // Hero section customizations
    wp.customize('oromo_hero_title', function(value) {
        value.bind(function(to) {
            $('.hero-title').text(to);
        });
    });

    wp.customize('oromo_hero_subtitle', function(value) {
        value.bind(function(to) {
            $('.hero-accent').text(to);
        });
    });

    wp.customize('oromo_hero_description', function(value) {
        value.bind(function(to) {
            $('.hero-description').text(to);
        });
    });

    wp.customize('oromo_hero_background_image', function(value) {
        value.bind(function(to) {
            if (to) {
                $('.hero-bg-image').attr('src', to);
            } else {
                $('.hero-bg-image').attr('src', '');
            }
        });
    });

    // About section customizations
    wp.customize('oromo_about_title', function(value) {
        value.bind(function(to) {
            $('#about .section-title').text(to);
        });
    });

    wp.customize('oromo_about_description', function(value) {
        value.bind(function(to) {
            $('#about .section-description').text(to);
        });
    });

    wp.customize('oromo_about_mission', function(value) {
        value.bind(function(to) {
            $('#about .about-text p').first().text(to);
        });
    });

    wp.customize('oromo_about_image', function(value) {
        value.bind(function(to) {
            if (to) {
                $('.about-img').attr('src', to);
            } else {
                $('.about-img').attr('src', '');
            }
        });
    });

    // Contact information customizations
    wp.customize('oromo_contact_location', function(value) {
        value.bind(function(to) {
            $('.contact-info .location, .footer-contact .contact-item .fas.fa-map-marker-alt').next().text(to);
        });
    });

    wp.customize('oromo_contact_phone', function(value) {
        value.bind(function(to) {
            $('.contact-info .phone, .footer-contact .contact-item .fas.fa-phone').parent().find('a, span').last().text(to);
            $('.footer-contact .contact-item .fas.fa-phone').parent().find('a').attr('href', 'tel:' + to.replace(/\s/g, ''));
        });
    });

    wp.customize('oromo_contact_email', function(value) {
        value.bind(function(to) {
            $('.contact-info .email, .footer-contact .contact-item .fas.fa-envelope').parent().find('a').text(to).attr('href', 'mailto:' + to);
        });
    });

    wp.customize('oromo_contact_hours', function(value) {
        value.bind(function(to) {
            $('.footer-contact .contact-item .fas.fa-clock').next().text(to);
        });
    });

    // Footer customizations
    wp.customize('oromo_footer_description', function(value) {
        value.bind(function(to) {
            $('.footer-description').text(to);
        });
    });

    wp.customize('oromo_footer_background_image', function(value) {
        value.bind(function(to) {
            if (to) {
                $('.footer-bg-image').attr('src', to);
            } else {
                $('.footer-bg-image').attr('src', '');
            }
        });
    });

    // Header background image
    wp.customize('oromo_header_background_image', function(value) {
        value.bind(function(to) {
            if (to) {
                $('.header-bg-image').attr('src', to);
            } else {
                $('.header-bg-image').attr('src', '');
            }
        });
    });

    // Social media links
    wp.customize('oromo_facebook_url', function(value) {
        value.bind(function(to) {
            var $facebookLink = $('.social-link .fab.fa-facebook-f').parent();
            if (to) {
                $facebookLink.attr('href', to).show();
            } else {
                $facebookLink.hide();
            }
        });
    });

    wp.customize('oromo_twitter_url', function(value) {
        value.bind(function(to) {
            var $twitterLink = $('.social-link .fab.fa-twitter').parent();
            if (to) {
                $twitterLink.attr('href', to).show();
            } else {
                $twitterLink.hide();
            }
        });
    });

    wp.customize('oromo_instagram_url', function(value) {
        value.bind(function(to) {
            var $instagramLink = $('.social-link .fab.fa-instagram').parent();
            if (to) {
                $instagramLink.attr('href', to).show();
            } else {
                $instagramLink.hide();
            }
        });
    });

    wp.customize('oromo_youtube_url', function(value) {
        value.bind(function(to) {
            var $youtubeLink = $('.social-link .fab.fa-youtube').parent();
            if (to) {
                $youtubeLink.attr('href', to).show();
            } else {
                $youtubeLink.hide();
            }
        });
    });

})(jQuery);