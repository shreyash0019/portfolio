// Typewriter Effect for Hero Title
const typewriter = document.getElementById('typewriter');
const roles = ["Python Developer", "Frontend Developer", "Backend Developer", "Software Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typewriter.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500; // Pause between roles
  }

  setTimeout(typeWriter, typingSpeed);
}

// Hero Section Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Start typewriter after initial animations
  setTimeout(typeWriter, 2000);
  
  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = '0 10px 20px rgba(76, 175, 80, 0.3)';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = 'none';
    });
  });

  // Scroll down arrow
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Prevent horizontal scroll
  document.body.style.overflowX = 'hidden';
});

// Enhanced Smooth Scroll Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Scroll down arrow functionality
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }

  // Navigation smooth scroll (if you add nav later)
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

  // Add scroll animation for sections
  function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint && sectionBottom > 0) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }

  // Initialize section animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id !== 'home') {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'all 0.8s ease';
    }
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check

  // Typewriter Effect (from previous)
  // ... your typewriter code here ...
});

// Remove the animateSkillBars function and its calls
// Keep only the smooth scroll functionality

function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Check on load
});

// Add this to your existing script.js
function animateProjects() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (cardTop < triggerPoint) {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 200);
    }
  });
}

// Update the scroll animation function
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
      
      // Animate projects when projects section is in view
      if (section.id === 'projects') {
        animateProjects();
      }
    }
  });
}

// Initialize project cards with opacity 0
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
  });
});

// Add this to your script.js
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}

// Update DOMContentLoaded to include contact form
document.addEventListener('DOMContentLoaded', function() {
  // ... existing code ...
  initContactForm();
});