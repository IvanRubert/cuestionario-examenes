/* Almacenamiento seguro (recuerda idioma y tema entre visitas) */
const Store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('quizapp:' + key); return v === null ? fallback : v; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('quizapp:' + key, value); } catch { /* sin almacenamiento */ }
  }
};
