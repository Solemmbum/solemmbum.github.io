(() => {
  const sections = [...document.querySelectorAll('.section')];

  sections.forEach((section) => {
    const button = section.querySelector('.section-toggle');
    const list = section.querySelector('.file-list');
    const icon = button?.querySelector('[aria-hidden="true"]');

    if (!button || !list) return;

    button.addEventListener('click', () => {
      const isOpen = list.classList.toggle('visible');
      button.setAttribute('aria-expanded', String(isOpen));
      if (icon) icon.textContent = isOpen ? '▲' : '▼';
    });
  });

  const filter = document.querySelector('#resource-filter');
  if (!filter) return;

  filter.addEventListener('input', () => {
    const query = filter.value.trim().toLowerCase();

    sections.forEach((section) => {
      const text = section.textContent.toLowerCase();
      const match = !query || text.includes(query);
      section.hidden = !match;
    });
  });
})();
