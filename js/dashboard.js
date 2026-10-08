/**
 * STAT & SNAP - ADMIN / SCHOOL CLIENT DASHBOARD LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardSidebar();
  initDashboardTabs();
  initTableSearchAndFilter();
  initDashboardModals();
});

/* Sidebar Toggle for Mobile */
function initDashboardSidebar() {
  const toggles = document.querySelectorAll('.sidebar-toggle-btn');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const overlay = document.querySelector('.dash-overlay');
  const syncOverlay = () => {
    if (!overlay || !sidebar) return;
    overlay.classList.toggle('show', sidebar.classList.contains('active'));
  };

  if (toggles && sidebar) {
    toggles.forEach((toggleBtn) => {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        syncOverlay();
      });
    });
  }
  if (overlay) overlay.addEventListener('click', () => { sidebar?.classList.remove('active'); syncOverlay(); });
}

/* Dashboard Module Switching */
function initDashboardTabs() {
  const sidebarItems = document.querySelectorAll('.sidebar-item[data-module]');
  const modules = document.querySelectorAll('.dash-module');
  const pageTitle = document.querySelector('.dash-page-title');

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const moduleName = item.getAttribute('data-module');

      sidebarItems.forEach(i => i.classList.remove('active'));
      modules.forEach(m => m.style.display = 'none');

      item.classList.add('active');
      const targetModule = document.getElementById(`module-${moduleName}`);
      if (targetModule) {
        targetModule.style.display = 'block';
      }

      if (pageTitle) {
        const text = item.querySelector('span')?.textContent || 'Dashboard';
        pageTitle.textContent = text;
      }

      if (window.innerWidth < 1025) {
        document.querySelector('.dashboard-sidebar')?.classList.remove('active');
        document.querySelector('.dash-overlay')?.classList.remove('show');
      }
    });
  });
}

/* Table Search & Status Filter */
function initTableSearchAndFilter() {
  const searchInputs = document.querySelectorAll('[data-table-search]');

  searchInputs.forEach(input => {
    input.addEventListener('keyup', () => {
      const targetTableId = input.getAttribute('data-table-search');
      const table = document.getElementById(targetTableId);
      if (!table) return;

      const query = input.value.toLowerCase();
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });

  const filterSelects = document.querySelectorAll('[data-status-filter]');
  filterSelects.forEach(select => {
    select.addEventListener('change', () => {
      const targetTableId = select.getAttribute('data-status-filter');
      const table = document.getElementById(targetTableId);
      if (!table) return;

      const selectedStatus = select.value.toLowerCase();
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
        if (!selectedStatus || selectedStatus === 'all') {
          row.style.display = '';
        } else {
          const badge = row.querySelector('.badge');
          if (badge) {
            const badgeText = badge.textContent.toLowerCase();
            row.style.display = badgeText.includes(selectedStatus) ? '' : 'none';
          } else {
            row.style.display = '';
          }
        }
      });
    });
  });
}

/* Modal Dialog Controls */
function initDashboardModals() {
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-open-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });

  document.querySelectorAll('.dash-modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.dash-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
}
