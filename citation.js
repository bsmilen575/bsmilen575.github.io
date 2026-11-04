document.querySelectorAll('.citation').forEach(citation => {
  citation.addEventListener('mouseleave', () => citation.removeAttribute('data-dismissed'));
  citation.addEventListener('focusout', () => citation.removeAttribute('data-dismissed'));
  citation.addEventListener('keydown', event => {
    if (event.key === 'Escape') citation.setAttribute('data-dismissed', '');
  });
});
