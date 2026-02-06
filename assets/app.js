/* Guardian Lead Safety — Site JS */

(function () {
  'use strict';

  var isMobile = function () { return window.innerWidth <= 768; };

  /* --- Desktop dropdown menus (old nav style) --- */
  var closeTimeout;
  document.querySelectorAll('nav li.has-sub').forEach(function (li) {
    li.addEventListener('mouseenter', function () {
      if (isMobile()) return;
      clearTimeout(closeTimeout);
      document.querySelectorAll('nav li.has-sub').forEach(function (o) { o.classList.remove('open'); });
      li.classList.add('open');
    });
    li.addEventListener('mouseleave', function () {
      if (isMobile()) return;
      closeTimeout = setTimeout(function () { li.classList.remove('open'); }, 200);
    });
  });

  /* --- Close menus on outside click --- */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav') && !e.target.closest('.site-header')) {
      document.querySelectorAll('nav li.has-sub').forEach(function (li) { li.classList.remove('open'); });
      document.querySelectorAll('.nav-list').forEach(function (nl) { nl.classList.remove('open'); });
      // Reset hamburger
      document.querySelectorAll('.nav-toggle').forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
      });
      document.body.style.overflow = '';
    }
  });

  /* --- Mobile hamburger toggle --- */
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var nav = btn.closest('.site-header').querySelector('.nav-list');
      if (nav) {
        var isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        // Lock body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
        // Swap icon: hamburger ↔ X
        if (isOpen) {
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>';
        } else {
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
          // Close all mobile submenus
          nav.querySelectorAll('.mobile-open').forEach(function (li) { li.classList.remove('mobile-open'); });
        }
      }
    });
  });

  /* --- Mobile submenu tap-to-toggle --- */
  document.querySelectorAll('.nav-list > li').forEach(function (li) {
    var submenu = li.querySelector('.submenu');
    var link = li.querySelector(':scope > a');
    if (!submenu || !link) return;

    link.addEventListener('click', function (e) {
      if (!isMobile()) return;
      // On mobile, toggle submenu instead of navigating
      e.preventDefault();
      // Close other open submenus
      li.parentElement.querySelectorAll('.mobile-open').forEach(function (other) {
        if (other !== li) other.classList.remove('mobile-open');
      });
      li.classList.toggle('mobile-open');
    });
  });

  /* --- Close mobile menu when a submenu link is clicked --- */
  document.querySelectorAll('.submenu a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!isMobile()) return;
      var nav = a.closest('.nav-list');
      if (nav) {
        nav.classList.remove('open');
        document.body.style.overflow = '';
        // Reset hamburger icon
        document.querySelectorAll('.nav-toggle').forEach(function (btn) {
          btn.setAttribute('aria-expanded', 'false');
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
        });
      }
    });
  });

  /* --- Dynamic year in footer --- */
  var year = new Date().getFullYear();
  document.querySelectorAll('#year, #y').forEach(function (el) {
    el.textContent = year;
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
