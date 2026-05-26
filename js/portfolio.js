(() => {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener('click', () => {
      link.dataset.clicked = 'true';
    });
  });
})();
