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

/* Toggle Between Services JS */
const insuranceBtn = document.getElementById("insurance");
const investmentBtn = document.getElementById("investment");

const insuranceCards = document.getElementById("insurances");
const investmentCards = document.getElementById("investments");

insuranceBtn.addEventListener("click", () => {
  // Toggle button states
  insuranceBtn.classList.add("active");
  investmentBtn.classList.remove("active");

  // Toggle card visibility
  insuranceCards.classList.add("active");
  investmentCards.classList.remove("active");
});

investmentBtn.addEventListener("click", () => {
  // Toggle button states
  investmentBtn.classList.add("active");
  insuranceBtn.classList.remove("active");

  // Toggle card visibility
  investmentCards.classList.add("active");
  insuranceCards.classList.remove("active");
});

/* Reviews JS */
const tracks = document.querySelectorAll('.reviews-track');

tracks.forEach(track => {
  const direction = track.dataset.direction === 'right' ? 1 : -1;
  const row = track.querySelector('.reviews-row');

  const originalItems = Array.from(row.children);
  const cloneItems = originalItems.map(item => item.cloneNode(true));
  if (direction === 1) {
    cloneItems.reverse();
  }

  requestAnimationFrame(() => {
    const trackWidth = track.offsetWidth;

    while (row.scrollWidth < trackWidth * 2) {
      cloneItems.forEach(clone => {
        const cloneNode = clone.cloneNode(true);
        if (direction === 1) {
          row.insertBefore(cloneNode, row.firstChild);
        } else {
          row.appendChild(cloneNode);
        }
      });
    }

    if (direction === 1) {
      row.style.transform = `translateX(-${row.scrollWidth / 2}px)`;
    }

    let offset = 0;
    let lastTime = null;
    let paused = false;

    track.addEventListener('mouseenter', () => paused = true);
    track.addEventListener('mouseleave', () => paused = false);

    function step(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      if (!paused) {
        offset += delta * 0.065;
        const totalWidth = row.scrollWidth / 2;
        if (offset >= totalWidth) offset = 0;

        if (direction === 1) {
          row.style.transform = `translateX(${-totalWidth + offset}px)`;
        } else {
          row.style.transform = `translateX(${-offset}px)`;
        }
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
});

/* Partners Scrolling JS */
document.addEventListener('DOMContentLoaded', () => {
  const partnersContainer = document.querySelector('.partners-container');
  
  if (partnersContainer) {
    let isScrolling = false;
    
    // Enable horizontal scroll with mouse wheel
    partnersContainer.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        partnersContainer.scrollLeft += e.deltaY;
      }
    });
    
    // Add smooth scrolling
    partnersContainer.style.scrollBehavior = 'smooth';
    
    // Make container horizontally scrollable
    partnersContainer.style.overflowX = 'auto';
    partnersContainer.style.overflowY = 'hidden';
    
    // Hide scrollbar but keep functionality
    const style = document.createElement('style');
    style.textContent = `
      .partners-container::-webkit-scrollbar {
        display: none;
      }
      .partners-container {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
  }
});