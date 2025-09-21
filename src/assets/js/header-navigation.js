/**
 * Header Navigation JavaScript
 * Handles mobile menu toggle and navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu elements
    const mobileMenuTrigger = document.querySelector('.mburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuContent = document.querySelector('.mobile-menu-content');

    // Toggle mobile menu
    function toggleMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
            
            // Add animation classes
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenuContent.classList.add('animate-slide-in-right');
            }
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            mobileMenuContent.classList.remove('animate-slide-in-right');
        }
    }

    // Event listeners
    if (mobileMenuTrigger) {
        mobileMenuTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }

    // Close menu on mobile nav link click
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(closeMobileMenu, 100); // Small delay for better UX
        });
    });

    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });

    // Active nav link highlighting
    function updateActiveNavLinks() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (currentPath === href || currentPath.includes(href))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Update active links on load
    updateActiveNavLinks();

    // Update active links on navigation (for SPA-like behavior)
    window.addEventListener('popstate', updateActiveNavLinks);
});

// Custom styles for navigation
const customNavStyles = `
    <style>
        .nav-link.active {
            color: #16a34a !important;
            font-weight: 600;
        }
        
        .mobile-nav-link.active {
            background-color: #f0fdf4 !important;
            color: #16a34a !important;
            font-weight: 600;
        }
        
        .mobile-menu {
            transition: all 0.3s ease-in-out;
        }
        
        .mobile-menu-content {
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .mobile-menu:not(.hidden) .mobile-menu-content {
            transform: translateX(0);
        }
        
        .animate-slide-in-right {
            animation: slideInRight 0.3s ease-out;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }
        
        /* Navigation hover effects */
        .nav-link {
            position: relative;
            transition: color 0.3s ease;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #16a34a;
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
            width: 100%;
        }
        
        /* Mobile menu overlay */
        .mobile-menu {
            backdrop-filter: blur(4px);
        }
        
        /* RTL Support */
        [dir="rtl"] .mobile-menu-content {
            transform: translateX(-100%);
        }
        
        [dir="rtl"] .mobile-menu:not(.hidden) .mobile-menu-content {
            transform: translateX(0);
        }
        
        [dir="rtl"] .animate-slide-in-right {
            animation: slideInLeft 0.3s ease-out;
        }
        
        @keyframes slideInLeft {
            from {
                transform: translateX(-100%);
            }
            to {
                transform: translateX(0);
            }
        }
    </style>
`;

// Inject custom styles
document.head.insertAdjacentHTML('beforeend', customNavStyles);