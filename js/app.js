/**
 * STAT & SNAP - ATHLETICS PHOTOGRAPHY & YEARBOOK STUDIO
 * Master JavaScript Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndDirection();
  initNavbar();
  initMobileDrawer();
  initAccordions();
  initTabs();
  initLightbox();
  initFormValidation();
  initScrollAnimations();
  initBackToTop();
  initBlogViewMore();
  initStatCounters();
});

/* ==========================================================================
   1. Theme & RTL Direction Controller
   ========================================================================== */
function initThemeAndDirection() {
  const savedTheme = localStorage.getItem('stat_snap_theme') || 'dark';
  const savedDir = localStorage.getItem('stat_snap_dir') || 'ltr';

  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('dir', savedDir);

  updateThemeIcons(savedTheme);
  updateDirIcons(savedDir);

  // Theme Toggles
  const themeButtons = document.querySelectorAll('.theme-toggle');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('stat_snap_theme', newTheme);
      updateThemeIcons(newTheme);
      showToast(`Switched to ${newTheme.toUpperCase()} mode`, 'info');
    });
  });

  // RTL Toggles
  const dirButtons = document.querySelectorAll('.dir-toggle');
  dirButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('stat_snap_dir', newDir);
      updateDirIcons(newDir);
      showToast(`Text direction changed to ${newDir.toUpperCase()}`, 'info');
    });
  });
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-toggle i');
  icons.forEach(icon => {
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  });
}

function updateDirIcons(dir) {
  const labels = document.querySelectorAll('.dir-toggle-label');
  labels.forEach(label => {
    label.textContent = dir === 'ltr' ? 'RTL' : 'LTR';
  });
}

/* ==========================================================================
   2. Sticky Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!hamburger || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================================
   3. Accordion Handler
   ========================================================================== */
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isAlreadyActive = item.classList.contains('active');

      // Close all neighboring items in same accordion container
      const parent = item.closest('.accordion-container');
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      }

      if (!isAlreadyActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Tab Switcher Controller
   ========================================================================== */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tab-container]');

  tabContainers.forEach(container => {
    const navButtons = container.querySelectorAll('.tab-btn');
    const tabPanels = container.querySelectorAll('.tab-panel');

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        navButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = container.querySelector(`#${targetTab}`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  });
}

/* ==========================================================================
   5. Lightbox Preview Modal
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const modalImg = modal.querySelector('.lightbox-img');
  const closeBtn = modal.querySelector('.lightbox-close');

  // Delegated handler — works for static + dynamically injected [data-lightbox] cards
  // (e.g. service-details gallery rendered by services.js).
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-lightbox]');
    if (!card || !modalImg) return;
    // Only handle cards when the modal exists on this page
    const imgUrl = card.getAttribute('data-lightbox') || card.querySelector('img')?.src;
    if (imgUrl) {
      modalImg.src = imgUrl;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
  window.__statSnapLightbox = function () { /* no-op: delegation covers dynamic cards */ };

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });
}

/* ==========================================================================
   6. Form Validation & Toast System
   ========================================================================== */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'var(--color-crimson)';
        } else {
          input.style.borderColor = 'var(--border-subtle)';
        }
      });

      if (isValid) {
        const successMsg = form.getAttribute('data-success') || 'Form submitted successfully! We will contact you soon.';
        showToast(successMsg, 'success');
        form.reset();
      } else {
        showToast('Please fill out all required fields.', 'error');
      }
    });
  });
}

/* Password visibility eye-toggle (used by inline onclick handlers) */
function togglePasswordVisibility(btn) {
  const input = btn.parentElement.querySelector('input');
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  const icon = btn.querySelector('i');
  if (icon) icon.className = show ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
  btn.setAttribute('title', show ? 'Hide password' : 'Show password');
}

function showToast(message, type = 'info') {  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <div>
      <div style="font-weight: 700; font-size: 0.9rem;">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   7. Scroll Reveal & Back to Top
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card-glass, .process-step, .pricing-card, .blog-card, .portfolio-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

/* ==========================================================================
   8. Blog All-Posts View More Pagination (6 default, +3 per click)
   ========================================================================== */
function initBlogViewMore() {
  const panel = document.getElementById('tab-all-posts');
  const btn = document.getElementById('blogViewMoreBtn');
  if (!panel || !btn) return;

  const cards = Array.from(panel.querySelectorAll('.blog-card'));
  const countLabel = document.getElementById('blogViewMoreCount');
  const PAGE_SIZE = 3;
  let visible = 6;

  if (cards.length <= visible) {
    btn.style.display = 'none';
    return;
  }

  function render() {
    cards.forEach((card, i) => card.classList.toggle('is-hidden', i >= visible));
    if (countLabel) {
      countLabel.textContent = `(Showing ${Math.min(visible, cards.length)} of ${cards.length})`;
    }
    if (visible >= cards.length) {
      btn.style.display = 'none';
    }
  }

  btn.addEventListener('click', () => {
    visible += PAGE_SIZE;
    render();
  });

  render();
}

/* ==========================================================================
   9. Animated Stat Counters (data-count / data-suffix / data-decimals / data-comma)
   ========================================================================== */
function initStatCounters() {
  const nums = document.querySelectorAll('.stat-number[data-count]');
  if (!nums.length || !('IntersectionObserver' in window)) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function format(el, value) {
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    let text = value.toFixed(decimals);
    if (el.dataset.comma) {
      text = Number(text).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    return text + (el.dataset.suffix || '');
  }

  function run(el) {
    const target = parseFloat(el.dataset.count);
    if (reduceMotion || !(target > 0)) {
      el.textContent = format(el, target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(el, target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nums.forEach((n) => observer.observe(n));
}

function initBackToTop() {  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
