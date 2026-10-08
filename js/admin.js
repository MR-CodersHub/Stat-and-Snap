/**
 * STAT & SNAP - STUDIO ADMIN PORTAL LOGIC
 * Handles module switching, search/filter, approvals, crew assignment.
 */
document.addEventListener('DOMContentLoaded', () => {
  initAdminSidebar();
  initAdminSearchFilter();
  initAdminApprovals();
});

function initAdminSidebar() {
  const items = document.querySelectorAll('.sidebar-item[data-module]');
  const modules = document.querySelectorAll('.dash-module');
  const title = document.querySelector('.dash-page-title');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const overlay = document.querySelector('.dash-overlay');
  const syncOverlay = () => {
    if (!overlay || !sidebar) return;
    overlay.classList.toggle('show', sidebar.classList.contains('active'));
  };
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const name = item.getAttribute('data-module');
      items.forEach((i) => i.classList.remove('active'));
      modules.forEach((m) => { m.style.display = 'none'; });
      item.classList.add('active');
      const target = document.getElementById('admin-' + name);
      if (target) target.style.display = 'block';
      if (title) title.textContent = item.querySelector('span')?.textContent || 'Admin';
      if (window.innerWidth < 1025 && sidebar) sidebar.classList.remove('active');
      syncOverlay();
    });
  });
  const toggles = document.querySelectorAll('.sidebar-toggle-btn');
  toggles.forEach((b) => b.addEventListener('click', () => { sidebar?.classList.toggle('active'); syncOverlay(); }));
  if (overlay) overlay.addEventListener('click', () => { sidebar?.classList.remove('active'); syncOverlay(); });
}

function initAdminSearchFilter() {
  document.querySelectorAll('[data-table-search]').forEach((input) => {
    input.addEventListener('keyup', () => {
      const table = document.getElementById(input.getAttribute('data-table-search'));
      if (!table) return;
      const q = input.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach((r) => {
        r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  });
  document.querySelectorAll('[data-status-filter]').forEach((sel) => {
    sel.addEventListener('change', () => {
      const table = document.getElementById(sel.getAttribute('data-status-filter'));
      if (!table) return;
      const v = sel.value.toLowerCase();
      table.querySelectorAll('tbody tr').forEach((r) => {
        if (v === 'all') { r.style.display = ''; return; }
        const badge = r.querySelector('.badge');
        r.style.display = badge && badge.textContent.toLowerCase().includes(v) ? '' : 'none';
      });
    });
  });
}

function initAdminApprovals() {
  document.querySelectorAll('[data-approve]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('tr');
      const label = btn.getAttribute('data-approve') || 'Request approved';
      if (row) {
        const badge = row.querySelector('.badge');
        if (badge) { badge.className = 'badge badge-completed'; badge.textContent = 'Approved'; }
        btn.outerHTML = '<span style="font-size:0.8rem;color:#10B981;font-weight:700;"><i class="fa-solid fa-circle-check"></i> Approved</span>';
      }
      showToast(label + '!', 'success');
    });
  });
  document.querySelectorAll('[data-reject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('tr');
      if (row) row.style.opacity = '0.45';
      showToast('Request declined — school notified.', 'error');
    });
  });
}
