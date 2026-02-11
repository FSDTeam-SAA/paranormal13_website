import './style.css'

// Add scroll reveal animation support
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-up');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .support .container').forEach(el => {
  observer.observe(el);
});

console.log('MEDIVARO Support Website Initialized');
