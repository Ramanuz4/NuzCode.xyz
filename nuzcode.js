const cursor = document.querySelector('.custom-cursor');
const hoverTargets = document.querySelectorAll('.hover-target');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

let mouseX = 0;
let mouseY = 0;

// Listen to mousemove and update coordinates
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate the cursor movement smoothly
function animateCursor() {
  // Smooth follow using current position
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  
  requestAnimationFrame(animateCursor);
}

// Only animate cursor on desktop devices
if (window.innerWidth > 768) {
  animateCursor();
}

// Detect hovering on specific elements
hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    document.body.classList.add('hovering');
  });
  target.addEventListener('mouseleave', () => {
    document.body.classList.remove('hovering');
  });
});

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  
  // Prevent scrolling when menu is open
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Close mobile menu when clicking on a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Handle window resize
window.addEventListener('resize', () => {
  // Close mobile menu if window is resized to desktop
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Re-enable cursor animation for desktop
    if (!cursor.style.animation) {
      animateCursor();
    }
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});