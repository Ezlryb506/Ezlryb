function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('formMessage').classList.add('hidden');
    this.reset();
  }, 3000);
});
