/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function($) {
    'use strict';

    $(document).ready(function() {
        
        // Mobile menu toggle
        $('.menu-toggle').on('click', function() {
            var $this = $(this);
            var $mobileNav = $('.mobile-navigation');
            
            $this.toggleClass('active');
            $mobileNav.toggleClass('active');
            
            // Toggle aria-expanded
            var expanded = $this.attr('aria-expanded') === 'true' || false;
            $this.attr('aria-expanded', !expanded);
            
            // Toggle body scroll
            $('body').toggleClass('menu-open');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.site-header').length) {
                $('.menu-toggle').removeClass('active');
                $('.mobile-navigation').removeClass('active');
                $('.menu-toggle').attr('aria-expanded', false);
                $('body').removeClass('menu-open');
            }
        });

        // Handle dropdown menus
        $('.menu-item-has-children > a').on('click', function(e) {
            if ($(window).width() <= 768) {
                e.preventDefault();
                $(this).next('.sub-menu').slideToggle();
                $(this).parent().toggleClass('menu-open');
            }
        });

        // Keyboard navigation
        $('.main-navigation a, .mobile-navigation a').on('keydown', function(e) {
            var $this = $(this);
            var $menu = $this.closest('.nav-menu, .mobile-nav-menu');
            var $menuItems = $menu.find('a');
            var currentIndex = $menuItems.index($this);

            if (e.which === 9) { // Tab key
                if (e.shiftKey) {
                    // Shift + Tab (previous item)
                    if (currentIndex === 0) {
                        e.preventDefault();
                        $menuItems.last().focus();
                    }
                } else {
                    // Tab (next item)
                    if (currentIndex === $menuItems.length - 1) {
                        e.preventDefault();
                        $menuItems.first().focus();
                    }
                }
            }
        });

        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            
            if (target.length) {
                e.preventDefault();
                
                // Close mobile menu if open
                $('.menu-toggle').removeClass('active');
                $('.mobile-navigation').removeClass('active');
                $('.menu-toggle').attr('aria-expanded', false);
                $('body').removeClass('menu-open');
                
                // Smooth scroll to target
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 600, 'easeInOutCubic');
            }
        });

        // Header scroll behavior
        var lastScrollTop = 0;
        var $header = $('.site-header');
        var headerHeight = $header.outerHeight();

        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();

            if (scrollTop > headerHeight) {
                if (scrollTop > lastScrollTop) {
                    // Scrolling down
                    $header.addClass('scroll-down').removeClass('scroll-up');
                } else {
                    // Scrolling up
                    $header.addClass('scroll-up').removeClass('scroll-down');
                }
            } else {
                // At top
                $header.removeClass('scroll-down scroll-up');
            }

            lastScrollTop = scrollTop;
        });

        // Add active class to current menu item
        function setActiveMenuItem() {
            var currentPath = window.location.pathname;
            $('.nav-menu a, .mobile-nav-menu a').each(function() {
                var linkPath = $(this).attr('href');
                
                if (linkPath === currentPath || 
                    (currentPath === '/' && linkPath === home_url) ||
                    (linkPath !== '#' && currentPath.indexOf(linkPath) !== -1)) {
                    $(this).parent().addClass('current-menu-item');
                }
            });
        }

        // Initialize active menu item
        setActiveMenuItem();

        // Handle resize events
        $(window).on('resize', function() {
            if ($(window).width() > 768) {
                // Reset mobile menu state on larger screens
                $('.menu-toggle').removeClass('active');
                $('.mobile-navigation').removeClass('active');
                $('.menu-toggle').attr('aria-expanded', false);
                $('body').removeClass('menu-open');
                $('.sub-menu').removeAttr('style');
                $('.menu-item-has-children').removeClass('menu-open');
            }
        });

        // Accessibility: Skip link focus fix
        $('.skip-link').on('click', function() {
            var target = $($(this).attr('href'));
            if (target.length) {
                target.attr('tabindex', '-1').focus();
            }
        });

        // Form validation for contact form
        $('.basic-contact-form').on('submit', function(e) {
            var isValid = true;
            var $form = $(this);
            
            // Clear previous errors
            $form.find('.error').removeClass('error');
            $form.find('.error-message').remove();
            
            // Validate required fields
            $form.find('[required]').each(function() {
                var $field = $(this);
                var value = $field.val().trim();
                
                if (!value) {
                    isValid = false;
                    $field.addClass('error');
                    $field.after('<span class="error-message">This field is required.</span>');
                }
            });
            
            // Validate email format
            var $email = $form.find('input[type="email"]');
            if ($email.length && $email.val()) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test($email.val())) {
                    isValid = false;
                    $email.addClass('error');
                    $email.after('<span class="error-message">Please enter a valid email address.</span>');
                }
            }
            
            if (!isValid) {
                e.preventDefault();
                
                // Focus on first error field
                $form.find('.error').first().focus();
                
                // Show general error message
                if (!$form.find('.form-error').length) {
                    $form.prepend('<div class="form-error">Please correct the errors below.</div>');
                }
                
                // Remove error message after 5 seconds
                setTimeout(function() {
                    $form.find('.form-error').fadeOut(function() {
                        $(this).remove();
                    });
                }, 5000);
            }
        });
    });

    // Easing function for smooth scrolling
    $.easing.easeInOutCubic = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };

})(jQuery);