/* Guardian Lead Safety — Site JS */

(function () {
  'use strict';

  var isMobile = function () { return window.innerWidth <= 768; };

  /* --- Create backdrop overlay (for mobile slide menu) --- */
  var backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);

  /* --- Create close button inside nav-list (for mobile) --- */
  document.querySelectorAll('.nav-list').forEach(function (nav) {
    var closeItem = document.createElement('li');
    closeItem.className = 'nav-close';
    closeItem.innerHTML = '<button aria-label="Close menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg></button>';
    nav.insertBefore(closeItem, nav.firstChild);

    closeItem.querySelector('button').addEventListener('click', function () {
      closeMenu();
    });
  });

  /* --- Helper: close mobile menu --- */
  function closeMenu() {
    document.querySelectorAll('.nav-list').forEach(function (nl) {
      nl.classList.remove('open');
      nl.querySelectorAll('.mobile-open').forEach(function (li) { li.classList.remove('mobile-open'); });
    });
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    document.querySelectorAll('.nav-toggle').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  /* --- Desktop dropdown menus --- */
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
    if (!e.target.closest('nav') && !e.target.closest('.site-header') && !e.target.closest('.nav-list')) {
      document.querySelectorAll('nav li.has-sub').forEach(function (li) { li.classList.remove('open'); });
      closeMenu();
    }
  });

  /* --- Backdrop click closes menu --- */
  backdrop.addEventListener('click', function () {
    closeMenu();
  });

  /* --- Mobile hamburger toggle --- */
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var nav = btn.closest('.site-header').querySelector('.nav-list');
      if (nav) {
        var isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        backdrop.classList.toggle('open', isOpen);
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
      closeMenu();
    });
  });

  /* --- Close mobile menu when mobile-action links are clicked --- */
  document.querySelectorAll('.mobile-actions a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!isMobile()) return;
      closeMenu();
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

  /* --- Handle resize: clean up mobile state if resized to desktop --- */
  window.addEventListener('resize', function () {
    if (!isMobile()) {
      closeMenu();
    }
  });

})();
