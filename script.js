const lightbox = document.querySelector('.lightbox');

// Image links also work without JavaScript or native dialog support.
if (lightbox && typeof lightbox.showModal === 'function') {
  const preview = lightbox.querySelector('.lightbox-image');
  const caption = lightbox.querySelector('#lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');
  let lastTrigger = null;

  document.querySelectorAll('[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      lastTrigger = link;
      preview.src = link.href;
      preview.alt = link.querySelector('img')?.alt || '';
      caption.textContent = link.dataset.caption || preview.alt;
      lightbox.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    const bounds = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    )) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    preview.removeAttribute('src');
    lastTrigger?.focus({ preventScroll: true });
  });
}
