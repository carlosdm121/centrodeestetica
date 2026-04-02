document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarLinks = document.querySelectorAll('.navbar-menu a');

  // Toggle menu on button click
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container')) {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    }
  });

  // Form
  const form = document.getElementById('consultaForm');
  const success = document.getElementById('formSuccess');
  const error = document.getElementById('formError');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    success.classList.add('hidden');
    error.classList.add('hidden');

    try {
      const email = form.email.value.trim();
      const phone = form.telefono.value.trim();
      const name = form.nombre.value.trim();

      if (!name || !email || !phone) throw new Error('required');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('invalid-email');
      if (phone.replace(/\D/g, '').length < 8) throw new Error('invalid-phone');

      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => success.classList.add('hidden'), 5000);
    } catch (err) {
      error.classList.remove('hidden');
      setTimeout(() => error.classList.add('hidden'), 5000);
    }
  });
});
