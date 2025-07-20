/* Nav Bar JS */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
  
    function openSidebar() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    function closeSidebar() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  
    hamburger.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
  
    document.addEventListener('click', (e) => {
      const isClickInside = sidebar.contains(e.target) || hamburger.contains(e.target);
      if (!isClickInside) {
        closeSidebar();
      }
    });
});

/* Nav Bar Dropdown JS */
document.querySelectorAll('.sidebar .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.dropdown');
      parent.classList.toggle('open');
    });
});

document.querySelectorAll('.dropdown-toggle').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });