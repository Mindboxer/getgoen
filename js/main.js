/* ═══════════════════════════════════════════
   GET GOEN — main.js
   ═══════════════════════════════════════════

   Table of contents
   -----------------
   1. Nav scroll behaviour
   2. Footer year
   3. Work grid — hover-to-play video
   4. Hero — YouTube facade (commented out)

═══════════════════════════════════════════ */


/* ── 1. NAV SCROLL BEHAVIOUR ────────────────
   Adds .nav--scrolled to <nav> once the user
   scrolls past the hero. CSS handles the
   visual transition (see style.css nav section).
──────────────────────────────────────────── */
const nav = document.querySelector('nav');

const handleNavScroll = () => {
  if (window.scrollY > 80) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
};

window.addEventListener('scroll', handleNavScroll, { passive: true });


// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    // Move to body so position:fixed escapes the header stacking context
    document.body.appendChild(navMenu);
  } else {
    // Move back into nav for desktop layout
    navToggle.parentElement.appendChild(navMenu);
  }
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    // Move back into nav
    navToggle.parentElement.appendChild(navMenu);
  });
});


/* ── 2. FOOTER YEAR ─────────────────────────
   Keeps the copyright year current automatically.
──────────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}



/* ── 3. WORK GRID — LIGHTBOX ────────────────
   Handles YouTube embed and coming-soon state
   lightbox for work grid cards.
──────────────────────────────────────────── */

(function () {
  const lightbox      = document.getElementById('gg-lightbox');
  const backdrop      = lightbox.querySelector('.gg-lightbox-backdrop');
  const closeBtn      = lightbox.querySelector('.gg-lightbox-close');
  const iframe        = document.getElementById('gg-yt-iframe');
  const playerWrap    = document.getElementById('gg-player-wrap');
  const comingSoon    = document.getElementById('gg-coming-soon');
  const csImg         = document.getElementById('gg-cs-img');
  const lbTitle       = document.getElementById('gg-lightbox-title');
  const lbMeta        = document.getElementById('gg-lightbox-meta');
 
  const YT_BASE = 'https://www.youtube.com/embed/';
  const YT_PARAMS = '?autoplay=1&rel=0&modestbranding=1&controls=1&color=white&vq=hd1080';
 
  function openLightbox(trigger) {
    const type    = trigger.dataset.type;
    const title   = trigger.dataset.title || '';
    const meta    = trigger.dataset.meta  || '';
 
    lbTitle.textContent = title;
    lbMeta.textContent  = meta;
 
    if (type === 'youtube') {
      const id = trigger.dataset.videoId;
      iframe.src = YT_BASE + id + YT_PARAMS;
      playerWrap.hidden  = false;
      comingSoon.hidden  = true;
    } else if (type === 'coming-soon') {
      const poster = trigger.dataset.poster || '';
      csImg.src    = poster;
      csImg.alt    = title;
      playerWrap.hidden  = true;
      comingSoon.hidden  = false;
    }
 
    lightbox.hidden = false;
    // Trigger transition on next frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => lightbox.classList.add('is-open'));
    });
 
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
 
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
 
    setTimeout(() => {
      lightbox.hidden = true;
      iframe.src = ''; // stops YouTube playback
      playerWrap.hidden = true;
      comingSoon.hidden = true;
    }, 300);
  }
 
  // Trigger clicks
  document.querySelectorAll('.work-lightbox-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => openLightbox(trigger));
  });
 
  // Close on backdrop click
  backdrop.addEventListener('click', closeLightbox);
 
  // Close button
  closeBtn.addEventListener('click', closeLightbox);
 
  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();


/* ── 4. STATEMENT KANJI ──────────────────────
   Reveals the kanji in the statement on scroll.
──────────────────────────────────────────── */
const statement = document.querySelector('.statement');
if (statement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => statement.classList.add('logo-revealed'), 2000);
      } else {
        statement.classList.remove('logo-revealed');
      }
    });
  }, { threshold: 0.4 });
  observer.observe(statement);
}