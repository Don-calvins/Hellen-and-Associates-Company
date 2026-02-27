// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuBtn = document.querySelector('.menu-btn');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('show');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    const navLinks = document.getElementById('navLinks');
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnMenuBtn && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
  
  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Update copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();
