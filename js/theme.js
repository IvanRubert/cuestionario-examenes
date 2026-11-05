/* Tema claro/oscuro (oscuro por defecto) */
const Theme = (() => {
  let btn;
  const apply = th => {
    document.documentElement.dataset.theme = th;
    Store.set('theme', th);
    if (btn) btn.textContent = th === 'dark' ? '☀' : '☾';
  };
  return {
    init(selector) {
      btn = document.querySelector(selector);
      apply(Store.get('theme', 'dark'));
      btn.addEventListener('click', () =>
        apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
    }
  };
})();
