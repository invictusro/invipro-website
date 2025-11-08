// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  const isOpen = document.body.classList.contains('menu-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll for anchor links
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

// Custom cursor
const cursorDot = document.getElementById('c-dot');
const cursorRing = document.getElementById('c-ring');

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth following effect
  const dotSpeed = 0.15;
  const ringSpeed = 0.1;

  dotX += (mouseX - dotX) * dotSpeed;
  dotY += (mouseY - dotY) * dotSpeed;
  ringX += (mouseX - ringX) * ringSpeed;
  ringY += (mouseY - ringY) * ringSpeed;

  cursorDot.style.left = dotX + 'px';
  cursorDot.style.top = dotY + 'px';
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';

  requestAnimationFrame(animateCursor);
}

// Only run custom cursor on desktop
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  animateCursor();
}

// Hover effects for cursor
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width = '46px';
    cursorRing.style.height = '46px';
    cursorRing.style.borderColor = 'var(--accent)';
  });

  el.addEventListener('mouseleave', () => {
    cursorRing.style.width = '36px';
    cursorRing.style.height = '36px';
    cursorRing.style.borderColor = 'rgba(120, 231, 255, .6)';
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('menu-open')) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Prevent scroll when mobile menu is open
const preventScroll = (e) => {
  if (document.body.classList.contains('menu-open')) {
    e.preventDefault();
  }
};

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinksArray = Array.from(navLinks.querySelectorAll('a'));

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
