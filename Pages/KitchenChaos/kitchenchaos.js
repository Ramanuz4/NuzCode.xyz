const cursor = document.querySelector('.custom-cursor');
const hoverTargets = document.querySelectorAll('.hover-target');

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

// Only animate cursor on desktop devices (changed from 768px to 1024px for better tablet experience)
if (window.innerWidth > 1024) {
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

// Handle window resize to disable/enable cursor on screen size change
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    // Hide cursor on mobile/tablet
    if (cursor) {
      cursor.style.display = 'none';
    }
  } else {
    // Show cursor on desktop
    if (cursor) {
      cursor.style.display = 'block';
    }
  }
});