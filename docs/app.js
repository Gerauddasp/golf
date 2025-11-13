/**
 * Golf Training Hub - Mobile-First JavaScript
 * Powers collapsibles, image viewer, and navigation
 */

(function() {
    'use strict';

    // ========================================
    // COLLAPSIBLE SECTIONS
    // ========================================

    function initCollapsibles() {
        const collapsibles = document.querySelectorAll('.collapsible-header');

        collapsibles.forEach(header => {
            header.addEventListener('click', function() {
                const collapsible = this.parentElement;
                const isExpanded = collapsible.classList.contains('expanded');

                // Toggle expanded state
                collapsible.classList.toggle('expanded');

                // Update ARIA for accessibility
                this.setAttribute('aria-expanded', !isExpanded);

                // Save state to localStorage
                const contentId = collapsible.id;
                if (contentId) {
                    localStorage.setItem(`collapsible-${contentId}`, !isExpanded);
                }
            });
        });

        // Restore saved states from localStorage
        restoreCollapsibleStates();
    }

    function restoreCollapsibleStates() {
        const collapsibles = document.querySelectorAll('.collapsible[id]');

        collapsibles.forEach(collapsible => {
            const contentId = collapsible.id;
            const savedState = localStorage.getItem(`collapsible-${contentId}`);

            if (savedState === 'true') {
                collapsible.classList.add('expanded');
                const header = collapsible.querySelector('.collapsible-header');
                if (header) {
                    header.setAttribute('aria-expanded', 'true');
                }
            }
        });
    }

    // ========================================
    // IMAGE VIEWER
    // ========================================

    function initImageViewer() {
        // Create image viewer modal if it doesn't exist
        let viewer = document.getElementById('image-viewer');

        if (!viewer) {
            viewer = document.createElement('div');
            viewer.id = 'image-viewer';
            viewer.className = 'image-viewer';
            viewer.innerHTML = `
                <button class="image-viewer-close" aria-label="Close image viewer">×</button>
                <img class="image-viewer-img" src="" alt="">
            `;
            document.body.appendChild(viewer);
        }

        const viewerImg = viewer.querySelector('.image-viewer-img');
        const closeBtn = viewer.querySelector('.image-viewer-close');

        // Open viewer on image click
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('content-image')) {
                e.preventDefault();
                viewerImg.src = e.target.src;
                viewerImg.alt = e.target.alt;
                viewer.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });

        // Close viewer
        function closeViewer() {
            viewer.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
            viewerImg.src = '';
        }

        closeBtn.addEventListener('click', closeViewer);

        // Close on background click
        viewer.addEventListener('click', function(e) {
            if (e.target === viewer) {
                closeViewer();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && viewer.classList.contains('active')) {
                closeViewer();
            }
        });
    }

    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================

    function initScrollToTop() {
        // Create scroll-to-top button if it doesn't exist
        let scrollBtn = document.getElementById('scroll-to-top');

        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.id = 'scroll-to-top';
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '↑';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            document.body.appendChild(scrollBtn);
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // NAVIGATION HELPERS
    // ========================================

    function initNavigation() {
        // Add active states to navigation elements if needed
        const currentPage = window.location.pathname.split('/').pop();

        // Highlight current page in navigation
        document.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // ========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================================

    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ========================================
    // LAZY LOAD IMAGES
    // ========================================

    function initLazyLoading() {
        // Use Intersection Observer for lazy loading if supported
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            // Observe all images with data-src attribute
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback: load all images immediately
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }

    // ========================================
    // TOUCH FEEDBACK
    // ========================================

    function initTouchFeedback() {
        // Add visual feedback for touch interactions
        document.addEventListener('touchstart', function(e) {
            const target = e.target.closest('.selector-button, .main-button, .collapsible-header, .action-button');
            if (target) {
                target.style.transform = 'scale(0.98)';
            }
        });

        document.addEventListener('touchend', function(e) {
            const target = e.target.closest('.selector-button, .main-button, .collapsible-header, .action-button');
            if (target) {
                setTimeout(() => {
                    target.style.transform = '';
                }, 100);
            }
        });
    }

    // ========================================
    // PERFORMANCE: DEBOUNCE HELPER
    // ========================================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ========================================
    // ANALYTICS (Placeholder)
    // ========================================

    function trackPageView() {
        // Placeholder for analytics tracking
        // Can integrate Google Analytics, Plausible, etc.
        const page = window.location.pathname;
        console.log('Page view:', page);
    }

    // ========================================
    // INITIALIZE EVERYTHING
    // ========================================

    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
    }

    function initializeApp() {
        console.log('Golf Training Hub initialized');

        // Initialize all features
        initCollapsibles();
        initImageViewer();
        initScrollToTop();
        initNavigation();
        initSmoothScrolling();
        initLazyLoading();
        initTouchFeedback();
        trackPageView();

        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
    }

    // Start initialization
    init();

})();
