// iRAMA Homepage JavaScript
class IramaHomepage {
    constructor() {
        this.currentLanguage = 'en';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupHeroAnimations();
        this.setupSmoothScrolling();
    }

    setupLanguageToggle() {
        // Language switching functionality
        const languageToggle = document.querySelector('[data-language-toggle]');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Auto-detect language from store settings or browser
        this.detectLanguage();
        this.updateLanguageContent();
    }

    detectLanguage() {
        // Check if Salla store has language setting
        if (typeof salla !== 'undefined' && salla.config && salla.config.locale) {
            this.currentLanguage = salla.config.locale.startsWith('ar') ? 'ar' : 'en';
        } else {
            // Fallback to browser language
            const browserLang = navigator.language || navigator.userLanguage;
            this.currentLanguage = browserLang.startsWith('ar') ? 'ar' : 'en';
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
        this.updateLanguageContent();
        
        // Update body direction
        document.body.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.currentLanguage;
    }

    updateLanguageContent() {
        // Hide all language content
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.classList.add('hidden');
        });

        // Show current language content
        document.querySelectorAll(`[data-lang="${this.currentLanguage}"]`).forEach(element => {
            element.classList.remove('hidden');
        });

        // Update elements with data attributes
        document.querySelectorAll('[data-en][data-ar]').forEach(element => {
            const text = element.getAttribute(`data-${this.currentLanguage}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    setupScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('animate-on-scroll');
            observer.observe(section);
        });

        // Observe individual items
        document.querySelectorAll('.benefit-item, .product-card, .stat-item').forEach(item => {
            item.classList.add('animate-on-scroll');
            observer.observe(item);
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('[data-count]');
        
        const observerOptions = {
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const start = performance.now();
        const startValue = 0;

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue + (target - startValue) * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(animate);
    }

    setupHeroAnimations() {
        // Hero background animation
        const heroSection = document.querySelector('.irama-hero');
        if (heroSection) {
            const heroBackground = heroSection.querySelector('.hero-bg-animation');
            if (heroBackground) {
                // Create animated background
                this.createHeroBackground(heroBackground);
            }
        }

        // Parallax effect for hero content
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.irama-hero .relative');
            if (heroContent) {
                const rate = scrolled * -0.5;
                heroContent.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    createHeroBackground(container) {
        // Create animated hydroponic farm visualization
        container.innerHTML = `
            <div class="hero-animation-container">
                <div class="floating-plants">
                    <div class="plant plant-1">🌱</div>
                    <div class="plant plant-2">🌿</div>
                    <div class="plant plant-3">🍃</div>
                    <div class="plant plant-4">🌱</div>
                    <div class="plant plant-5">🌿</div>
                </div>
                <div class="water-drops">
                    <div class="drop drop-1">💧</div>
                    <div class="drop drop-2">💧</div>
                    <div class="drop drop-3">💧</div>
                </div>
            </div>
        `;

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            .hero-animation-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
            
            .floating-plants .plant {
                position: absolute;
                font-size: 2rem;
                opacity: 0.3;
                animation: float 6s ease-in-out infinite;
            }
            
            .plant-1 { top: 20%; left: 10%; animation-delay: 0s; }
            .plant-2 { top: 60%; left: 80%; animation-delay: 1s; }
            .plant-3 { top: 40%; left: 15%; animation-delay: 2s; }
            .plant-4 { top: 70%; left: 70%; animation-delay: 3s; }
            .plant-5 { top: 30%; left: 85%; animation-delay: 4s; }
            
            .water-drops .drop {
                position: absolute;
                font-size: 1.5rem;
                opacity: 0.4;
                animation: dropFall 4s linear infinite;
            }
            
            .drop-1 { left: 25%; animation-delay: 0s; }
            .drop-2 { left: 50%; animation-delay: 1.5s; }
            .drop-3 { left: 75%; animation-delay: 3s; }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            @keyframes dropFall {
                0% { top: -10%; opacity: 0; }
                10% { opacity: 0.4; }
                90% { opacity: 0.4; }
                100% { top: 110%; opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    setupSmoothScrolling() {
        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Additional CSS animations
const additionalStyles = `
    <style>
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s ease-out;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-slogan {
            animation: heroTextFade 2s ease-out;
        }
        
        .hero-subheading {
            animation: heroTextFade 2s ease-out 0.5s both;
        }
        
        .hero-cta {
            animation: heroTextFade 2s ease-out 1s both;
        }
        
        @keyframes heroTextFade {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .benefit-item:hover .icon-wrapper {
            transform: scale(1.1);
            transition: transform 0.3s ease;
        }
        
        .product-card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .partner-logo:hover {
            transform: scale(1.05);
        }
        
        /* RTL Specific Styles */
        [dir="rtl"] .hero-cta {
            flex-direction: row-reverse;
        }
        
        [dir="rtl"] .about-content {
            text-align: right;
        }
        
        [dir="rtl"] .benefits-grid {
            direction: rtl;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .hero-slogan {
                font-size: 2.5rem !important;
            }
            
            .hero-subheading {
                font-size: 1.25rem !important;
            }
            
            .benefits-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
            
            .products-grid {
                grid-template-columns: 1fr !important;
            }
        }
    </style>
`;

// Inject additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new IramaHomepage();
    });
} else {
    new IramaHomepage();
}