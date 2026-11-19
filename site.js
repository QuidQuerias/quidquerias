// Site navigation: open and close dropdown menus (click or tap, Escape, click outside).
// Hover opening on desktop is handled in styles.css.
document.querySelectorAll('.nav-group').forEach(function (group) {
  var toggle = group.querySelector('.nav-toggle');
  if (!toggle) return;
  function setOpen(open) {
    group.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    setOpen(!group.classList.contains('is-open'));
  });
  document.addEventListener('click', function (event) {
    if (!group.contains(event.target)) setOpen(false);
  });
  group.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') { setOpen(false); toggle.focus(); }
  });
});
