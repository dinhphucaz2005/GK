// Small JS to toggle the mobile nav and add simple interactivity
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', ()=>{
    const isHidden = getComputedStyle(navLinks).display === 'none';
    navLinks.style.display = isHidden ? 'flex' : 'none';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    })
  })
  
  // Move to top button
  const moveToTopBtn = document.getElementById('move-to-top');
  
  // Show button when scrolling down past 300px
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      moveToTopBtn.classList.add('visible');
    } else {
      moveToTopBtn.classList.remove('visible');
    }
  }, { passive: true });
  
  // Scroll to top when clicked
  moveToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Animate progress bars when they come into view
  const observeProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });
    
    progressBars.forEach(bar => {
      observer.observe(bar);
    });
  };
  
  // Initialize progress bar animation
  observeProgressBars();
});

// Lightbox functionality
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  
  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');
  
  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  
  // Restore body scrolling
  document.body.style.overflow = 'auto';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

/* Parallax: scroll-based background offset and mouse-based subtle movement */
document.addEventListener('DOMContentLoaded', ()=>{
  const banner = document.querySelector('.banner');
  const shapes = [];
  // create decorative shapes
  const s1 = document.createElement('div'); s1.className='parallax-shape shape-1'; banner.appendChild(s1); shapes.push(s1);
  const s2 = document.createElement('div'); s2.className='parallax-shape shape-2'; banner.appendChild(s2); shapes.push(s2);

  // Scroll parallax: move ::before background a bit slower than scroll
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    if(banner){
      // translate the pseudo layers by setting transform on the shapes and banner-inner
      banner.style.setProperty('--scrollY', `${y}px`);
      // subtle parallax for shapes
      shapes.forEach((el, idx)=>{
        const speed = (idx === 0) ? 0.15 : 0.08;
        el.style.transform = `translate3d(${y*speed}px, ${y*speed}px, 0)`;
      })
    }
  }, {passive:true});

  // Mouse parallax
  const photoEls = document.querySelectorAll('.profile-card img');
  document.addEventListener('mousemove', (e)=>{
    const w = window.innerWidth; const h = window.innerHeight;
    const cx = (e.clientX - w/2) / (w/2);
    const cy = (e.clientY - h/2) / (h/2);
    // apply translations based on cursor
    shapes.forEach((el, idx)=>{
      const depth = idx === 0 ? 12 : 6;
      el.style.transform = `translate3d(${cx*depth}px, ${cy*depth}px, 0)`;
    });
    photoEls.forEach((img, i)=>{
      const depth = (i % 2 === 0) ? 10 : 6;
      img.style.transform = `translate3d(${cx*depth}px, ${cy*depth}px, 0) scale(1)`;
    })
  });

});
