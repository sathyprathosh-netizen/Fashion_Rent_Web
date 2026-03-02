/* ============================================================
   LUXURY FASHION RENTAL — CORE JS
   Cursor ∙ Scroll Observer ∙ Nav ∙ Preloader ∙ Transitions
   ============================================================ */

(function () {
  'use strict';



  /* ── Custom Cursor ── */
  function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0;  // mouse
    let rx = 0, ry = 0;  // ring (lagged)
    let raf;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });

    // Smooth ring follow with lerp
    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover enlarge
    const hovers = 'a, button, .btn, .card, .filter-pill, .product-card, .nav-links a';
    document.querySelectorAll(hovers).forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  /* ── Navigation ── */
  function initNav() {
    const nav = document.querySelector('.site-nav');
    const burger = document.querySelector('.nav-hamburger');
    const drawer = document.querySelector('.nav-drawer');
    const drawerLinks = document.querySelectorAll('.nav-drawer a');
    if (!nav) return;

    let lastScroll = 0;

    // Active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    // Scroll behavior
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      if (sy > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');

      if (sy > lastScroll + 5 && sy > 300) nav.classList.add('hide');
      else if (sy < lastScroll - 5) nav.classList.remove('hide');
      lastScroll = sy;
    }, { passive: true });

    // Hamburger
    if (burger && drawer) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        drawer.classList.toggle('open');
        document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
      });
      drawerLinks.forEach(a => {
        a.addEventListener('click', () => {
          burger.classList.remove('open');
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  /* ── Intersection Observer (scroll animations) ── */
  function initScrollAnimations() {
    const selector = '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale, .anim-mask, .anim-border-draw';

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay || 0;
          setTimeout(() => el.classList.add('in-view'), Number(delay));
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    function observeNew() {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('in-view')) {
          obs.observe(el);
        }
      });
    }

    // Initial run
    observeNew();

    // Watch for dynamic additions
    const mutObs = new MutationObserver((mutations) => {
      let shouldRefresh = false;
      mutations.forEach(m => {
        if (m.addedNodes.length) shouldRefresh = true;
      });
      if (shouldRefresh) observeNew();
    });

    mutObs.observe(document.body, { childList: true, subtree: true });

    // Expose for manual calls
    window.LUXE = window.LUXE || {};
    window.LUXE.refreshAnimations = observeNew;
  }

  /* ── Stagger utility ── */
  function staggerElements(selector, baseDelay, step) {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.dataset.delay = baseDelay + (i * step);
    });
  }

  /* ── Ripple button ── */
  function initRipple() {
    document.querySelectorAll('.btn-ripple').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        const wave = document.createElement('span');
        wave.className = 'ripple-wave';
        wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
        this.appendChild(wave);
        setTimeout(() => wave.remove(), 700);
      });
    });
  }

  /* ── Marquee ── */
  function initMarquee() {
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) return;
    // Duplicate content for seamless loop
    marquee.innerHTML += marquee.innerHTML;
  }

  /* ── Parallax hero (subtle) ── */
  function initHeroParallax() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      hero.style.transform = `translateY(${sy * 0.35}px)`;
    }, { passive: true });
  }

  /* ── Reveal text lines ── */
  function initTextReveal() {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      const spans = el.querySelectorAll('.reveal-line');
      spans.forEach((span, i) => {
        span.style.animationDelay = `${i * 0.15}s`;
      });
    });
  }

  /* ── WhatsApp & Toast System ── */
  const WA_NUMBER = '917604811742';

  function showToast(message, icon = 'check') {
    let toast = document.querySelector('.luxe-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'luxe-toast';
      document.body.appendChild(toast);
    }

    const icons = {
      check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      wa: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
    };

    toast.innerHTML = `<span class="toast-icon">${icons[icon] || icons.check}</span> <span>${message}</span>`;
    toast.classList.remove('hiding');
    toast.classList.add('visible');

    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.classList.remove('visible'), 500);
    }, 3500);
  }

  function handleRentalRequest(productName = '') {
    const message = `Request received, Our concierge will confirm within 2 hours.`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

    showToast('Redirecting to WhatsApp Concierge...', 'wa');
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  }

  function initWhatsAppButtons() {
    // Product Detail Page
    const rentBtn = document.getElementById('pd-rent-btn');
    if (rentBtn) {
      rentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('pd-name')?.textContent || 'Piece';
        handleRentalRequest(name);
      });
    }

    // Membership Page
    document.querySelectorAll('.tier-cta').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tier = btn.closest('.tier-card')?.querySelector('.tier-name')?.textContent || 'Membership';
        const message = `Request received, Our concierge will confirm within 2 hours.`;
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

        showToast(`Requesting ${tier} Access...`, 'wa');
        setTimeout(() => window.open(url, '_blank'), 1200);
      });
    });
  }

  /* ── Sparkles ── */
  function initSparkles() {
    const heroes = document.querySelectorAll('.hero, .page-hero, .mem-hero');
    heroes.forEach(hero => {
      const container = document.createElement('div');
      container.className = 'sparkle-container';
      hero.appendChild(container);

      setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = `sparkleDrift ${2 + Math.random() * 3}s linear forwards`;
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 5000);
      }, 400);
    });
  }


  /* ── 3D Tilt Effect ── */
  function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    });
  }



  /* ── Init ── */
  function init() {
    initNumberCounters();
    initCursor();
    initNav();
    initScrollAnimations();
    initRipple();
    initMarquee();
    initHeroParallax();
    initTextReveal();
    initWhatsAppButtons();
    initSparkles();
    initTiltEffect();
    staggerElements('.product-card', 50, 100);
    staggerElements('.collection-card', 50, 120);
    staggerElements('.step-card', 100, 150);
    staggerElements('.tier-card', 50, 120);
    staggerElements('.exp-card', 0, 200);
    staggerElements('.hiw-step', 0, 200);
    staggerElements('.test-card', 0, 150);
    staggerElements('.mt-tier', 100, 200);
  }

  /* ── Number Counter Animation ── */
  function initNumberCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.num-anim').forEach(el => observer.observe(el));
  }

  function animateNumber(el) {
    const originalText = el.textContent.trim();
    if (originalText.toLowerCase() === 'zero') return;

    // Use regex to precisely find the numeric group
    const match = originalText.match(/(\d[\d,.]*)/);
    if (!match) return;

    const fullMatch = match[0];
    const numericPart = fullMatch.replace(/,/g, '');
    const target = parseFloat(numericPart) || 0;

    // Split text based on the number match
    const startIdx = match.index;
    const endIdx = startIdx + fullMatch.length;
    const prefix = originalText.substring(0, startIdx);
    const suffix = originalText.substring(endIdx);

    const hasCommas = fullMatch.includes(',');
    const duration = 2000;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(ease * target);

      let displayText = current.toString();
      if (hasCommas) {
        displayText = current.toLocaleString('en-IN');
      }

      el.textContent = `${prefix}${displayText}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = originalText;
      }
    }

    requestAnimationFrame(update);
  }


  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
