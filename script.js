/* ══════════════════════════════════════════════════════════════
   BOSALOKINGZ – script.js  (fully updated)
══════════════════════════════════════════════════════════════ */

/* ── SERVICE DATA (for modal) ── */
const serviceData = {
    'doc-printing': {
        title: 'Document Printing',
        category: 'Printing & Document Services',
        price: 'From ₹10/page',
        img: 'https://images.unsplash.com/photo-1612832021455-245704c6755a?auto=format&fit=crop&w=1000&q=80',
        desc: 'High-clarity black & white and colour document printing for office files, school projects, legal documents, travel forms, and more. Files can be sent via WhatsApp – no need to visit first.',
        details: [
            { label: 'B&W printing', value: 'From ₹10 per page' },
            { label: 'Colour printing', value: 'From ₹10 per page' },
            { label: 'Bulk orders', value: 'Discounts available' },
            { label: 'Turnaround', value: 'Instant / same day' },
            { label: 'File formats', value: 'PDF, Word, JPG, PNG' },
            { label: 'Paper sizes', value: 'A4, A3, custom sizes' },
        ],
        tags: ['A4 • A3', 'Bulk discounts', 'WhatsApp files', 'Instant service', 'Colour & B&W'],
    },
    'photocopy': {
        title: 'Photocopy & Scans',
        category: 'Printing & Document Services',
        price: 'From ₹5/page',
        img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80',
        desc: 'Sharp and well-aligned photocopy service for ID cards, documents, forms, certificates, and any paperwork. Scanning also available – get your scanned file sent directly on WhatsApp.',
        details: [
            { label: 'Photocopy', value: 'From ₹5 per page' },
            { label: 'Scan to PDF/JPG', value: 'Available' },
            { label: 'Turnaround', value: 'Minutes' },
            { label: 'IDs & docs', value: 'Aadhar, passport, etc.' },
            { label: 'Bulk copies', value: 'Same-day large orders' },
        ],
        tags: ['IDs', 'Certificates', 'Bulk copies', 'Scan to WhatsApp'],
    },
    'passport-photos': {
        title: 'Passport Photos',
        category: 'Printing & Document Services',
        price: 'From ₹50 (4 copies)',
        img: 'https://images.unsplash.com/photo-1606791405792-1004f1718d0c?auto=format&fit=crop&w=1000&q=80',
        desc: 'Studio-style passport and visa photos with correct dimensions, white/light blue background, and high print quality. Suitable for Indian passports, visas, FRRO, university admissions, and government forms.',
        details: [
            { label: '4 prints', value: 'From ₹50' },
            { label: 'Dimensions', value: 'Standard 35x45mm (customisable)' },
            { label: 'Background', value: 'White or light blue' },
            { label: 'Ready in', value: 'Under 10 minutes' },
            { label: 'Usage', value: 'Passport, FRRO, visa, forms' },
        ],
        tags: ['Passport', 'Visa', 'FRRO', 'University', 'Same day'],
    },
    'binding': {
        title: 'Binding & Lamination',
        category: 'Printing & Document Services',
        price: 'From ₹30',
        img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
        desc: 'Spiral binding and comb binding for project reports, assignments, research papers, and proposals. Lamination for ID cards, certificates, important documents, and menu cards.',
        details: [
            { label: 'Spiral binding', value: 'From ₹30' },
            { label: 'Soft lamination', value: 'Per sheet pricing' },
            { label: 'Hard cover', value: 'Available on request' },
            { label: 'Turnaround', value: 'Same day' },
            { label: 'Best for', value: 'Reports, projects, certificates' },
        ],
        tags: ['Reports', 'Projects', 'Spiral binding', 'Lamination', 'Same day'],
    },
    'jersey': {
        title: 'Jersey Printing & Selling',
        category: 'Jerseys, Branding & Custom Printing',
        price: 'From ₹250',
        img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=1000&q=80',
        desc: 'Custom team jerseys with player names, squad numbers and logos printed on premium sublimation fabric. Ready-made jerseys also available for sale. Great for football, cricket, basketball teams and fans.',
        details: [
            { label: 'Custom jersey', value: 'From ₹250 each' },
            { label: 'Minimum order', value: 'Single piece accepted' },
            { label: 'Team order discount', value: 'Available (10+ pcs)' },
            { label: 'Turnaround', value: 'Same / next day' },
            { label: 'Sports covered', value: 'Football, cricket, basketball, more' },
            { label: 'Customisation', value: 'Name, number, logo, flag' },
        ],
        tags: ['Football', 'Cricket', 'Team orders', 'Fans', 'Sublimation print'],
    },
    'tshirt': {
        title: 'T-Shirt Printing',
        category: 'Jerseys, Branding & Custom Printing',
        price: 'From ₹299',
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
        desc: 'High-quality custom T-shirt printing for events, college fests, company uniforms, and casual wear. Send your design via WhatsApp and get a proof before printing.',
        details: [
            { label: 'Single T-shirt', value: 'From ₹299' },
            { label: 'Bulk (20+ pcs)', value: 'Call for group discount' },
            { label: 'Print method', value: 'DTF / sublimation' },
            { label: 'Turnaround', value: 'Same / next day' },
            { label: 'Sizes', value: 'XS to 3XL' },
            { label: 'Best for', value: 'Events, college, business' },
        ],
        tags: ['Events', 'College fests', 'Staff uniform', 'DTF print', 'Any design'],
    },
    'mugs': {
        title: 'Mugs & Magic Cups',
        category: 'Jerseys, Branding & Custom Printing',
        price: 'From ₹250',
        img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1000&q=80',
        desc: 'Custom ceramic mugs and magic (colour-changing) cups printed with your photo, name, quote, or logo. Perfect for birthdays, anniversaries, farewell gifts, or office branding.',
        details: [
            { label: 'Standard mug', value: 'From ₹250' },
            { label: 'Magic cup', value: 'From ₹350' },
            { label: 'Photo mug', value: 'From ₹299' },
            { label: 'Turnaround', value: 'Same day' },
            { label: 'Personalisation', value: 'Photo, name, quote, logo' },
            { label: 'Gifting', value: 'Wrapped on request' },
        ],
        tags: ['Birthdays', 'Gifts', 'Magic cup', 'Photo print', 'Branding'],
    },
    'caps': {
        title: 'Caps, Plates & Merch',
        category: 'Jerseys, Branding & Custom Printing',
        price: 'Custom quote',
        img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=80',
        desc: 'Printed caps, plates and other merchandise for brand visibility, events, and special occasions. Contact BOSALOKINGZ with your design requirements to get a quote.',
        details: [
            { label: 'Caps', value: 'Custom embroidery/print' },
            { label: 'Plates', value: 'Custom design' },
            { label: 'Merch packs', value: 'Bundle pricing' },
            { label: 'Turnaround', value: 'Varies by item' },
        ],
        tags: ['Caps', 'Plates', 'Merch packs', 'Brand visibility'],
    },
    'wallpaper': {
        title: 'Room Wallpaper Installation',
        category: 'Room Wallpaper, Décor & Frames',
        price: 'Custom quote',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80',
        desc: 'Professional room wallpaper installation to instantly upgrade your room or office walls. Wide variety of designs available – from abstract and nature themes to solid colours and custom prints.',
        details: [
            { label: 'Service', value: 'Supply + installation' },
            { label: 'Who for', value: 'Students, families, offices' },
            { label: 'Design options', value: 'Wide range available' },
            { label: 'Measurement', value: 'Site visit / room dimensions needed' },
            { label: 'Quote', value: 'Depends on room size & design' },
            { label: 'Location', value: 'Upcountry & nearby areas' },
        ],
        tags: ['Students', 'Rental rooms', 'Offices', 'Custom design', 'Supply + fit'],
    },
    'frames': {
        title: 'Photo Frames & Décor',
        category: 'Room Wallpaper, Décor & Frames',
        price: 'From ₹150',
        img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=1000&q=80',
        desc: 'Printed and framed photos, wall frames, and home décor pieces ready to hang. Perfect for birthdays, anniversaries, and making any room feel personal.',
        details: [
            { label: 'Small frame (5x7)', value: 'From ₹150' },
            { label: 'Medium frame (8x12)', value: 'From ₹250' },
            { label: 'Large frame', value: 'From ₹400' },
            { label: 'Collage frames', value: 'Available' },
            { label: 'Turnaround', value: 'Same / next day' },
        ],
        tags: ['Gifts', 'Birthdays', 'Home décor', 'Collage', 'Wall art'],
    },
    'custom-framing': {
        title: 'Custom Framing',
        category: 'Room Wallpaper, Décor & Frames',
        price: 'From ₹200',
        img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1000&q=80',
        desc: 'Neat and professional frames for certificates, degree scrolls, portraits, posters, and artwork with a clean premium finish. Excellent for achievement displays and office décor.',
        details: [
            { label: 'Certificate frame', value: 'From ₹200' },
            { label: 'Poster frame', value: 'From ₹300' },
            { label: 'Portrait frame', value: 'Custom quote' },
            { label: 'Finish', value: 'Matte or gloss' },
            { label: 'Turnaround', value: 'Same / next day' },
        ],
        tags: ['Certificates', 'Degrees', 'Achievements', 'Posters', 'Premium finish'],
    },
    'home-shifting': {
        title: 'Home Shifting',
        category: 'Moving, House Rentals & Support',
        price: 'Custom quote',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        desc: 'Careful packing, loading, transport and basic setup for home or room shifting within Upcountry and nearby areas. Ideal for students and families moving in or out of SuperTech Upcountry.',
        details: [
            { label: 'Coverage', value: 'Upcountry & nearby' },
            { label: 'Services', value: 'Packing, loading, transport' },
            { label: 'Setup help', value: 'Basic setup included' },
            { label: 'Booking', value: '24 hrs advance preferred' },
            { label: 'Quote', value: 'Based on distance & goods' },
        ],
        tags: ['Students', 'Families', 'Local move', 'Packing help', 'Upcountry'],
    },
    'goods-transport': {
        title: 'Goods Transportation',
        category: 'Moving, House Rentals & Support',
        price: 'Custom quote',
        img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Door-to-door transport of household goods, appliances, and small consignments. Reliable and careful handling of your belongings.',
        details: [
            { label: 'Coverage', value: 'Door-to-door, local' },
            { label: 'Item types', value: 'Furniture, appliances, boxes' },
            { label: 'Quote', value: 'Based on weight & distance' },
            { label: 'Booking', value: 'Contact BOSALOKINGZ' },
        ],
        tags: ['Door-to-door', 'Appliances', 'Furniture', 'Local delivery'],
    },
    'rental-help': {
        title: 'House Rental Help',
        category: 'Moving, House Rentals & Support',
        price: 'Broker charges apply',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
        desc: 'Broker and networking support to help you find rooms and houses for rent around SuperTech Upcountry, Yamuna Expressway and nearby areas. Ideal for new students and families looking for a good deal.',
        details: [
            { label: 'Area coverage', value: 'Upcountry & nearby' },
            { label: 'Property types', value: 'Rooms, 1BHK, 2BHK' },
            { label: 'Best for', value: 'Students, working professionals' },
            { label: 'Timeline', value: '1–3 days typical' },
            { label: 'Fee', value: 'Standard broker charges' },
        ],
        tags: ['Students', '1BHK', 'Rooms', 'Yamuna Expressway', 'Broker support'],
    },
    'marc-frro': {
        title: 'MARC, Rent Agreements & FRRO',
        category: 'Moving, House Rentals & Support',
        price: 'Service fee applies',
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80',
        desc: 'Assistance with preparing and filing MARC forms, rent/lease agreements, and basic FRRO-related paperwork. Especially useful for international students and tenants in India who need documentation support.',
        details: [
            { label: 'MARC form', value: 'Preparation support' },
            { label: 'Rent agreement', value: 'Draft + printing' },
            { label: 'FRRO docs', value: 'Guidance & document prep' },
            { label: 'Who for', value: 'International students, tenants' },
            { label: 'Turnaround', value: 'Same / next day' },
        ],
        tags: ['International students', 'MARC', 'FRRO', 'Rent agreement', 'Documentation'],
    },
    'money-transfer': {
        title: 'Zimbabwe → India Money Receive',
        category: 'Money Transfer & Legal Support',
        price: 'Contact for rates',
        img: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1000&q=80',
        desc: 'Safe and reliable connector service for the Zimbabwe–India community. Helps families and students receive money from Zimbabwe to India quickly and securely with real-time updates.',
        details: [
            { label: 'Route', value: 'Zimbabwe → India' },
            { label: 'Community', value: 'Zimbabwean students & families' },
            { label: 'Process', value: 'Coordinated with trusted contacts' },
            { label: 'Updates', value: 'Real-time WhatsApp updates' },
            { label: 'Rates', value: 'Contact BOSALOKINGZ directly' },
        ],
        tags: ['Zimbabwe', 'India', 'Students', 'Trusted transfer', 'WhatsApp updates'],
    },
    'laptops': {
        title: 'Laptops & Study Tables',
        category: 'Second-hand Gadgets & Furniture',
        price: 'Item dependent',
        img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80',
        desc: 'Pre-owned laptops and study tables available at student-friendly prices. All laptops are checked before sale. Good condition items sourced from reliable sellers.',
        details: [
            { label: 'Laptops', value: 'Various brands & specs' },
            { label: 'Study tables', value: 'In stock periodically' },
            { label: 'Condition', value: 'Checked before sale' },
            { label: 'Price range', value: 'Budget-friendly' },
            { label: 'Availability', value: 'Contact to check current stock' },
        ],
        tags: ['Budget laptops', 'Study table', 'Student-friendly', 'Pre-owned', 'Checked stock'],
    },
    'furniture': {
        title: 'Beds, Wardrobes & Furniture',
        category: 'Second-hand Gadgets & Furniture',
        price: 'Item dependent',
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
        desc: 'Second-hand beds, wardrobes, chairs, and essential furniture for rooms and flats. Great for students and new residents setting up their space without spending a lot.',
        details: [
            { label: 'Beds', value: 'Single & double' },
            { label: 'Wardrobes', value: 'Available periodically' },
            { label: 'Other items', value: 'Chairs, shelves, tables' },
            { label: 'Condition', value: 'Good condition, vetted' },
            { label: 'Availability', value: 'Contact to check stock' },
        ],
        tags: ['Beds', 'Wardrobes', 'Chairs', 'Budget furniture', 'Students'],
    },
};

/* ═══════════════════════════════════════
   OPEN SERVICE MODAL
═══════════════════════════════════════ */
function openServiceModal(id) {
    const s = serviceData[id];
    if (!s) return;

    document.getElementById('serviceModalTitle').textContent    = s.title;
    document.getElementById('serviceModalCategory').textContent = s.category;
    document.getElementById('serviceModalPrice').textContent    = s.price;
    document.getElementById('serviceModalImg').src             = s.img;
    document.getElementById('serviceModalImg').alt             = s.title;
    document.getElementById('serviceModalDesc').textContent    = s.desc;

    // Detail cards
    const detailsEl = document.getElementById('serviceModalDetails');
    detailsEl.innerHTML = s.details.map(d => `
        <div class="col-6">
            <div class="service-modal-detail-card">
                <h6>${d.label}</h6>
                <p>${d.value}</p>
            </div>
        </div>
    `).join('');

    // Tags
    const tagsEl = document.getElementById('serviceModalTags');
    tagsEl.innerHTML = s.tags.map(t => `
        <span class="service-modal-tag"><i class="fas fa-check-circle" style="font-size:.7rem;"></i>${t}</span>
    `).join('');

    // Open modal
    const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    modal.show();
}

function scrollToContact() {
    setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
}

/* ═══════════════════════════════════════
   NAVBAR: scroll shadow + active state
═══════════════════════════════════════ */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Highlight active section in nav
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

/* ═══════════════════════════════════════
   SMOOTH SCROLL + CLOSE MOBILE NAV
═══════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
            }
        }
    });
});

/* ═══════════════════════════════════════
   SCROLL REVEAL ANIMATIONS
═══════════════════════════════════════ */
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
}, { threshold: 0.08 });

document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════
   GALLERY FILTER
═══════════════════════════════════════ */
document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.gallery-col').forEach(col => {
            const match = filter === 'all' || filter === col.getAttribute('data-category');
            col.style.display = match ? '' : 'none';

            // Re-trigger animation on visible items
            if (match) {
                col.classList.remove('animated');
                setTimeout(() => col.classList.add('animated'), 30);
            }
        });
    });
});

/* ═══════════════════════════════════════
   TOAST HELPER
═══════════════════════════════════════ */
function showToast(msg) {
    const toastEl = document.getElementById('successToast');
    document.getElementById('toastMsg').textContent = msg;
    const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
    toast.show();
}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('✓ Enquiry sent! BOSALOKINGZ will contact you within 1 hour.');
    this.reset();
});

/* ═══════════════════════════════════════
   QUICK QUOTE FORM
═══════════════════════════════════════ */
document.getElementById('quickQuoteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('✓ Quote request sent! BOSALOKINGZ will reply on WhatsApp shortly.');
    const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
    if (modal) modal.hide();
    this.reset();
});

/* ═══════════════════════════════════════
   LIGHTBOX CONFIG
═══════════════════════════════════════ */
if (typeof lightbox !== 'undefined') {
    lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        disableScrolling: true,
        albumLabel: 'Image %1 of %2',
    });
}

/* ═══════════════════════════════════════
   PRICING TABLE – row click opens modal
═══════════════════════════════════════ */
// Map table row index to service ID
const pricingRowMap = [
    'doc-printing', 'doc-printing', 'passport-photos',
    'jersey', 'mugs', 'wallpaper',
    'home-shifting', 'rental-help', 'marc-frro', 'laptops'
];
document.querySelectorAll('.pricing-table tbody tr').forEach((row, i) => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
        const id = pricingRowMap[i];
        if (id) openServiceModal(id);
    });
    // Keyboard accessible
    row.setAttribute('tabindex', '0');
    row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const id = pricingRowMap[i];
            if (id) openServiceModal(id);
        }
    });
});

/* ═══════════════════════════════════════
   HERO PARALLAX (desktop only)
═══════════════════════════════════════ */
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const heroBg = document.querySelector('.hero-bg-image');
        if (heroBg) {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }, { passive: true });
}

/* ═══════════════════════════════════════
   SERVICE CARD KEYBOARD ACCESSIBILITY
═══════════════════════════════════════ */
document.querySelectorAll('.service-card-v2').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});
