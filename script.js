// Navigation functionality
let currentPage = 'home';

function showHome() {
    setActivePage('home');
    updateNavigation('home');
}

function showPortfolio() {
    setActivePage('portfolio');
    updateNavigation('portfolio');
}

function setActivePage(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    currentPage = page;
}

function updateNavigation(page) {
    // Update navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
}

// Portfolio filtering functionality
let activeFilter = 'all';

function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            setActiveFilter(filter);
            filterPortfolioItems(filter);
            updateFilterButtons(filter);
        });
    });
}

function setActiveFilter(filter) {
    activeFilter = filter;
}

function filterPortfolioItems(filter) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        
        if (shouldShow) {
            item.classList.remove('hidden');
            item.style.animationDelay = `${index * 100}ms`;
        } else {
            item.classList.add('hidden');
        }
    });
}

function updateFilterButtons(activeFilter) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.filter === activeFilter) {
            button.classList.add('active');
        }
    });
}

// FAQ functionality
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // If we're not on the home page and the target is on home page, switch first
                if (currentPage !== 'home' && ['home', 'services', 'approach', 'faq'].includes(targetId)) {
                    showHome();
                    // Wait for page transition then scroll
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                } else {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.service-card, .testimonial-card, .portfolio-item, '.approach-step'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Header scroll effect
function initializeHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 1)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key to close any overlays or return to home
        if (e.key === 'Escape') {
            showHome();
        }
        
        // Arrow key navigation for portfolio filters
        if (currentPage === 'portfolio') {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const activeButton = document.querySelector('.filter-btn.active');
            const currentIndex = Array.from(filterButtons).indexOf(activeButton);
            
            if (e.key === 'ArrowLeft' && currentIndex > 0) {
                e.preventDefault();
                filterButtons[currentIndex - 1].click();
                filterButtons[currentIndex - 1].focus();
            } else if (e.key === 'ArrowRight' && currentIndex < filterButtons.length - 1) {
                e.preventDefault();
                filterButtons[currentIndex + 1].click();
                filterButtons[currentIndex + 1].focus();
            }
        }
    });
}

// Mobile menu toggle (for responsive design)
function initializeMobileMenu() {
    // Add mobile menu button if screen is small
    const header = document.querySelector('.header-content');
    const navigation = document.querySelector('.navigation');
    
    function checkMobileView() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
                mobileMenuBtn.style.cssText = `
                    display: block;
                    background: none;
                    border: none;
                    color: var(--color-blue-700);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                `;
                
                mobileMenuBtn.addEventListener('click', () => {
                    navigation.style.display = navigation.style.display === 'flex' ? 'none' : 'flex';
                    navigation.style.position = 'absolute';
                    navigation.style.top = '100%';
                    navigation.style.left = '0';
                    navigation.style.right = '0';
                    navigation.style.background = 'rgba(255, 255, 255, 0.95)';
                    navigation.style.backdropFilter = 'blur(20px)';
                    navigation.style.flexDirection = 'column';
                    navigation.style.padding = '1rem';
                    navigation.style.borderTop = '1px solid rgba(147, 197, 253, 0.5)';
                });
                
                header.appendChild(mobileMenuBtn);
                
                // Re-initialize Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        } else {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.remove();
                navigation.style.display = 'flex';
                navigation.style.position = 'static';
                navigation.style.background = 'none';
                navigation.style.backdropFilter = 'none';
                navigation.style.flexDirection = 'row';
                navigation.style.padding = '0';
                navigation.style.borderTop = 'none';
            }
        }
    }
    
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
}

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in-out';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for external resources
function handleResourceErrors() {
    // Handle image loading errors
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('Failed to load image:', e.target.src);
        }
    }, true);
    
    // Handle script loading errors
    window.addEventListener('error', (e) => {
        console.warn('Script error:', e.message);
    });
}

// Button click handlers
function handleCTAClick() {
    alert('Contact form would open here. Replace with your actual contact form or booking system.');
}

function handleGetStartedClick() {
    alert('Project inquiry form would open here. Replace with your actual project inquiry system.');
}

// Add click event listeners to CTA buttons
function initializeCTAButtons() {
    // Header CTA button
    const headerCTA = document.querySelector('.cta-button');
    if (headerCTA) {
        headerCTA.addEventListener('click', handleCTAClick);
    }

    // Approach CTA button
    const approachCTA = document.querySelector('.approach-cta-button');
    if (approachCTA) {
        approachCTA.addEventListener('click', handleCTAClick);
    }

    // FAQ CTA buttons
    const faqCTAButtons = document.querySelectorAll('.faq-cta-button');
    faqCTAButtons.forEach(button => {
        button.addEventListener('click', handleGetStartedClick);
    });

    // Primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', handleGetStartedClick);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initializePortfolioFilters();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeHeaderScrollEffect();
    initializeKeyboardNavigation();
    initializeMobileMenu();
    initializeLazyLoading();
    initializeCTAButtons();
    handleResourceErrors();
    
    // Set initial page state
    showHome();
    
    console.log('BIZiWEB website initialized successfully!');
});

// Export functions for potential external use
window.BIZiWEB = {
    showHome,
    showPortfolio,
    setActiveFilter,
    filterPortfolioItems,
    toggleFAQ
};