/**
 * Smooth scrolling functionality for Oromo Resource Centre theme
 */
(function($) {
    'use strict';

    $(document).ready(function() {
        
        // Smooth scrolling for all anchor links
        function smoothScroll() {
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                    && 
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        
                        // Close mobile menu if open
                        $('.menu-toggle').removeClass('active');
                        $('.mobile-navigation').removeClass('active');
                        $('body').removeClass('menu-open');
                        
                        var headerOffset = $('.site-header').outerHeight() || 80;
                        var targetOffset = target.offset().top - headerOffset;
                        
                        $('html, body').animate({
                            scrollTop: targetOffset
                        }, {
                            duration: 800,
                            easing: 'easeInOutCubic',
                            complete: function() {
                                // Add focus to target for accessibility
                                target.attr('tabindex', '-1').focus();
                                
                                // Update URL without triggering scroll
                                if (history.pushState) {
                                    history.pushState(null, null, location.pathname + target.selector);
                                }
                            }
                        });
                    }
                }
            });
        }

        // Initialize smooth scrolling
        smoothScroll();

        // Scroll to top functionality
        function scrollToTop() {
            // Create scroll to top button if it doesn't exist
            if (!$('.scroll-to-top').length) {
                $('body').append('<button class="scroll-to-top" aria-label="Scroll to top"><i class="fas fa-arrow-up"></i></button>');
            }

            var $scrollBtn = $('.scroll-to-top');

            // Show/hide scroll to top button
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 600) {
                    $scrollBtn.addClass('visible');
                } else {
                    $scrollBtn.removeClass('visible');
                }
            });

            // Scroll to top on click
            $scrollBtn.on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, {
                    duration: 600,
                    easing: 'easeInOutCubic'
                });
                return false;
            });
        }

        // Initialize scroll to top
        scrollToTop();

        // Parallax effect for hero section
        function parallaxEffect() {
            var $window = $(window);
            var $heroSection = $('.hero-section');
            
            if ($heroSection.length) {
                $window.on('scroll', function() {
                    var scrollTop = $window.scrollTop();
                    var rate = scrollTop * -0.5;
                    
                    $heroSection.find('.hero-background img').css({
                        'transform': 'translate3d(0, ' + rate + 'px, 0)'
                    });
                });
            }
        }

        // Initialize parallax (only on larger screens)
        if ($(window).width() > 768) {
            parallaxEffect();
        }

        // Fade in animation on scroll
        function animateOnScroll() {
            var $animatedElements = $('.fade-in, .card, .service-card, .stat-item');
            
            function checkVisibility() {
                var windowHeight = $(window).height();
                var windowTop = $(window).scrollTop();
                var windowBottom = windowTop + windowHeight;

                $animatedElements.each(function() {
                    var $element = $(this);
                    var elementTop = $element.offset().top;
                    var elementBottom = elementTop + $element.outerHeight();

                    // If element is in viewport
                    if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {
                        $element.addClass('animate-in');
                    }
                });
            }

            $(window).on('scroll resize', checkVisibility);
            checkVisibility(); // Check on page load
        }

        // Initialize scroll animations
        animateOnScroll();

        // Smooth hover effects for interactive elements
        function hoverEffects() {
            // Service cards hover effect
            $('.service-card, .card').hover(
                function() {
                    $(this).addClass('hover-effect');
                },
                function() {
                    $(this).removeClass('hover-effect');
                }
            );

            // Button hover effects
            $('.btn').hover(
                function() {
                    $(this).addClass('btn-hover');
                },
                function() {
                    $(this).removeClass('btn-hover');
                }
            );
        }

        // Initialize hover effects
        hoverEffects();

        // Section highlighting in navigation
        function sectionHighlight() {
            var $sections = $('section[id]');
            var $navLinks = $('.nav-menu a[href^="#"], .mobile-nav-menu a[href^="#"]');

            $(window).on('scroll', function() {
                var currentScrollTop = $(window).scrollTop();
                var headerHeight = $('.site-header').outerHeight() || 80;

                $sections.each(function() {
                    var $section = $(this);
                    var sectionTop = $section.offset().top - headerHeight - 100;
                    var sectionBottom = sectionTop + $section.outerHeight();

                    if (currentScrollTop >= sectionTop && currentScrollTop < sectionBottom) {
                        var sectionId = $section.attr('id');
                        
                        // Remove active class from all nav links
                        $navLinks.removeClass('active');
                        
                        // Add active class to current section link
                        $navLinks.filter('[href="#' + sectionId + '"]').addClass('active');
                    }
                });
            });
        }

        // Initialize section highlighting
        sectionHighlight();

        // Preloader fade out (if exists)
        function preloaderFadeOut() {
            var $preloader = $('.preloader');
            if ($preloader.length) {
                $preloader.fadeOut(500, function() {
                    $preloader.remove();
                });
            }
        }

        // Initialize preloader fade out
        setTimeout(preloaderFadeOut, 500);
    });

    // Custom easing function
    $.easing.easeInOutCubic = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };

})(jQuery);