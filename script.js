        // Navbar scroll
        window.addEventListener('scroll', () => {
            document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 40);
        });

        // Smooth scroll + active nav
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const navbar = document.getElementById('navbarNav');
                    if (navbar.classList.contains('show')) {
                        bootstrap.Collapse.getInstance(navbar)?.hide();
                    }
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    const clicked = document.querySelector('.nav-link[href="' + targetId + '"]');
                    if (clicked) clicked.classList.add('active');
                }
            });
        });

        // Scroll animations
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
                    el.style.transitionDelay = delay + 's';
                    el.classList.add('animated');
                    revealObserver.unobserve(el);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

        // Active section on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            document.querySelectorAll('section[id]').forEach(section => {
                if (scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
            });
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });
        });

        // Gallery filter
        document.querySelectorAll('.filter-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.gallery-col').forEach(col => {
                    col.style.display = (filter === 'all' || filter === col.getAttribute('data-category')) ? '' : 'none';
                });
            });
        });

        // Forms
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! BOSALOKINGZ will contact you within 1 hour.');
            this.reset();
        });
        document.getElementById('quickQuoteForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Quote request sent! BOSALOKINGZ will reply on WhatsApp shortly.');
            const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
            if (modal) modal.hide();
            this.reset();
        });