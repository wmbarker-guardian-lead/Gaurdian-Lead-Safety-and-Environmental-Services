/* Guardian Lead Safety — Site JS */

(function () {
  'use strict';

  /* --- Desktop dropdown menus (old nav style) --- */
  let closeTimeout;
  document.querySelectorAll('nav li.has-sub').forEach(li => {
    li.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout);
      document.querySelectorAll('nav li.has-sub').forEach(o => o.classList.remove('open'));
      li.classList.add('open');
    });
    li.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => li.classList.remove('open'), 200);
    });
  });

  /* --- Close menus on outside click --- */
  document.addEventListener('click', e => {
    if (!e.target.closest('nav') && !e.target.closest('.site-header')) {
      document.querySelectorAll('nav li.has-sub').forEach(li => li.classList.remove('open'));
      document.querySelectorAll('.nav-list').forEach(nl => nl.classList.remove('open'));
    }
  });

  /* --- Mobile hamburger toggle --- */
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.closest('.site-header').querySelector('.nav-list');
      if (nav) {
        nav.classList.toggle('open');
        const expanded = nav.classList.contains('open');
        btn.setAttribute('aria-expanded', expanded);
      }
    });
  });

  /* --- Dynamic year in footer --- */
  const year = new Date().getFullYear();
  document.querySelectorAll('#year, #y').forEach(el => {
    el.textContent = year;
  });

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
