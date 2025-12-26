// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Loading Animation
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.opacity = '0';
        document.querySelector('.loading-overlay').style.visibility = 'hidden';
    }, 1000);

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.innerHTML = mainNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Product Card Animations
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const toast = document.querySelector('.toast');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Update cart count
            let count = parseInt(cartCount.textContent);
            cartCount.textContent = count + 1;

            // Show toast notification
            toast.textContent = 'Item added to cart!';
            toast.classList.add('show');

            // Button animation
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.background = '#5cdb95';

            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                this.style.background = '';
            }, 2000);

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    });

    // Quick View Buttons
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            alert('Quick view feature would open a modal with product details here!');
        });
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');

            if (emailInput.value) {
                // Show success message
                toast.textContent = 'Thank you for subscribing!';
                toast.style.background = '#5cdb95';
                toast.classList.add('show');

                // Clear input
                emailInput.value = '';

                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.style.background = '';
                }, 3000);
            }
        });
    }

    // Social Media Links Animation
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = 'translateY(0)';
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');

        if (hero) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all product cards
    productCards.forEach(card => {
        observer.observe(card);
    });

    // Form Input Focus Effects
    const formInputs = document.querySelectorAll('input, textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Discount Badge Animation
    const discountBadge = document.querySelector('.discount-badge');

    if (discountBadge) {
        setInterval(() => {
            discountBadge.style.transform = 'scale(1.1)';
            setTimeout(() => {
                discountBadge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }

    // Initialize AOS (Animate On Scroll) effect
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Run scroll animations on load and scroll
    window.addEventListener('load', initScrollAnimations);
    window.addEventListener('scroll', initScrollAnimations);
});

// Add hover sound effect (optional)
document.addEventListener('DOMContentLoaded', function () {
    const interactiveElements = document.querySelectorAll('button, .product-card, .social-link, .nav-link');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            // You could add a subtle sound effect here
            // For example: new Audio('hover-sound.mp3').play();
        });
    });
});