/* Punto de entrada */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init('#btn-theme');

  const sel = document.querySelector('#sel-lang');
  sel.innerHTML = I18N.languages.map(([code, name]) => `<option value="${code}">${name}</option>`).join('');
  sel.value = I18N.lang;
  I18N.set(I18N.lang);
  sel.addEventListener('change', () => { I18N.set(sel.value); UI.refresh(); });

  UI.init();
});
