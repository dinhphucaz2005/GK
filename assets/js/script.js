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
});
