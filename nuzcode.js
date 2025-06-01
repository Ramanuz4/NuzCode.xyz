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
      animateCursor();
      
      // Detect hovering on specific elements
      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
          document.body.classList.add('hovering');
        });
        target.addEventListener('mouseleave', () => {
          document.body.classList.remove('hovering');
        });
      });