// Navbar scroll effect (if you have a .navbar)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Make global functions for inline HTML
window.toggleAccordion = function(header) {
    const content = header.nextElementSibling;
    // Close all other accordions
    document.querySelectorAll('.accordion-header.active').forEach(activeHeader => {
        if (activeHeader !== header) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.classList.remove('active');
        }
    });
    // Toggle current accordion
    header.classList.toggle('active');
    content.classList.toggle('active');
};

window.copyCode = function(button) {
    const codeBlock = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(codeBlock).then(() => {
        // Show success feedback
        button.classList.add('copied');
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        // Show toast
        const toast = document.getElementById('toast');
        if (toast) toast.classList.add('show');
        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = '<i class="fas fa-copy"></i> Copy';
        }, 2000);
        // Hide toast after 3 seconds
        setTimeout(() => {
            if (toast) toast.classList.remove('show');
        }, 3000);
    });
};

window.toggleTheme = function() {
    document.body.classList.toggle('dark-theme');
    // Optionally, persist theme in localStorage
};

document.addEventListener('DOMContentLoaded', function() {
    // Section highlight in nav (if you have nav links)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    function onScroll() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    onScroll();
    window.addEventListener('scroll', onScroll);

    // Filter bar functionality
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                if (filter === 'all') {
                    section.style.display = 'block';
                } else {
                    const category = section.dataset.category;
                    if (category === filter) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                }
            });
        });
    });

    // Smooth anchor scrolling for all hash links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('data-bs-toggle') === 'collapse') return;
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open (Bootstrap only)
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show') && window.bootstrap) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                    bsCollapse.hide();
                }
            }
        });
    });

    // Optional: Back to top button
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop);

    // Optional: Section anchors for headings
    document.querySelectorAll('h2, h3, h4').forEach(heading => {
        if (heading.id) {
            const anchor = document.createElement('a');
            anchor.href = '#' + heading.id;
            anchor.className = 'section-anchor';
            heading.parentNode.insertBefore(anchor, heading);
        }
    });
});