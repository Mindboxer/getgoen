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


/* ── 2. FOOTER YEAR ─────────────────────────
   Keeps the copyright year current automatically.
──────────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/* ── 3. WORK GRID — HOVER-TO-PLAY VIDEO ─────
   When a <video> element exists inside a
   .work-item-media, play it on hover and
   reset on mouse leave.
   CSS handles the opacity fade.
──────────────────────────────────────────── */
document.querySelectorAll('.work-item').forEach(item => {
  const video = item.querySelector('video');
  if (!video) return;

  item.addEventListener('mouseenter', () => {
    video.play().catch(() => {
      // Autoplay may be blocked by browser policy — fail silently
    });
  });

  item.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


/* ── 4. HERO — YOUTUBE FACADE ───────────────
   Click-to-load pattern for YouTube in the hero.
   Keeps page load fast — iframe only loads
   when the user explicitly clicks play.

   To use:
   1. Add a .hero-facade div inside .hero-media
   2. Set a background-image thumbnail on it in CSS
   3. Add a play button element inside it
   4. Uncomment the code below and add your video ID

const heroFacade = document.querySelector('.hero-facade');

if (heroFacade) {
  heroFacade.addEventListener('click', () => {
    const videoId = 'YOUR_YOUTUBE_VIDEO_ID';
    const iframe = document.createElement('iframe');

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`;
    iframe.allow = 'autoplay; fullscreen';
    iframe.title = 'Get Goen showreel';
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';

    heroFacade.replaceWith(iframe);
  }, { once: true });
}
──────────────────────────────────────────── */
