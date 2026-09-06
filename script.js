document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.querySelectorAll('.fade-in-section').forEach(s => s.classList.add('is-visible'));
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 10);
    backToTop.style.display = window.scrollY > 400 ? 'flex' : 'none';
    const pos = window.scrollY + 120;
    sections.forEach(s => document.querySelector(`.nav-link[data-section="${s.id}"]`)
      .classList.toggle('active', pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight));
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) return form.classList.add('was-validated');
    document.getElementById('formStatus').textContent = 'Thanks! Connect this form to Formspree or EmailJS to receive real messages.';
    form.reset();
    form.classList.remove('was-validated');
  });
});
