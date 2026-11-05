/* Interfaz: pinta pantallas y gestiona eventos */
const UI = (() => {
  const $ = sel => document.querySelector(sel);
  const t = (k, v) => I18N.t(k, v);
  const L = v => I18N.L(v);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmtTime = ms => { const s = Math.round(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

  const setup = { subject: '', unit: '', topics: new Set(), shuffle: true, type: 'all' };
  let screen = 'setup';
  let answered = null; // resultado de la pregunta actual una vez enviada

  function show(name) {
    screen = name;
    ['setup', 'quiz', 'results'].forEach(n => { $('#screen-' + n).hidden = n !== name; });
    window.scrollTo({ top: 0 });
  }

  function translateStatic() {
    document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
    document.querySelectorAll('[data-i18n-title]').forEach(n => {
      n.title = t(n.dataset.i18nTitle); n.setAttribute('aria-label', n.title);
    });
    document.title = t('appTitle');
  }

  /* ---------- Configuración ---------- */
  const curSubject = () => QuizBank.get(setup.subject);
  const curUnit = () => curSubject()?.units.find(u => u.id === setup.unit);
  const opts = (items, sel) => `<option value="">${t('choose')}</option>` +
    items.map(i => `<option value="${esc(i.id)}"${i.id === sel ? ' selected' : ''}>${esc(L(i.name))}</option>`).join('');

  function renderSetup() {
    $('#sel-subject').innerHTML = opts(QuizBank.subjects, setup.subject);
    const units = curSubject()?.units ?? [];
    $('#sel-unit').innerHTML = opts(units, setup.unit);
    $('#sel-unit').disabled = !units.length;

    const topics = curUnit()?.topics ?? [];
    const all = topics.length > 0 && topics.every(tp => setup.topics.has(tp.id));
    $('#topic-list').innerHTML = topics.length
      ? `<label class="check all"><input type="checkbox" id="chk-all"${all ? ' checked' : ''}><span class="box"></span><span>${t('allTopics')}</span></label>` +
        topics.map(tp => `<label class="check"><input type="checkbox" data-topic="${esc(tp.id)}"${setup.topics.has(tp.id) ? ' checked' : ''}><span class="box"></span><span>${esc(L(tp.name))}</span><small>${tp.questions.length}</small></label>`).join('')
      : '<p class="muted">—</p>';

    $('#sw-shuffle').checked = setup.shuffle;
    $('#sel-type').value = setup.type;
    updateAvailable();
  }

  function updateAvailable() {
    const n = Quiz.pool(setup.subject, setup.unit, [...setup.topics], setup.type).length;
    $('#available').textContent = t('available', { n });
    $('#btn-start').disabled = n === 0;
  }

  const startQuiz = cfg => {
    if (!Quiz.start(cfg)) return;
    answered = null;
    show('quiz');
    renderQuestion();
  };

  /* ---------- Pregunta ---------- */
  const selected = () => [...document.querySelectorAll('#q-options input:checked')].map(i => +i.value);

  function renderQuestion() {
    const item = Quiz.current(), { index, total } = Quiz.progress(), multi = item.type === 'multiple';
    $('#q-count').textContent = t('questionOf', { n: index + 1, total });
    $('#q-bar').style.width = `${(index + (answered ? 1 : 0)) / total * 100}%`;
    $('#q-topic').textContent = L(item.topic);
    const ty = $('#q-type'); ty.textContent = t(item.type); ty.className = 'chip ' + item.type;
    $('#q-text').textContent = L(item.q.q);
    $('#q-hint').textContent = t(multi ? 'hintMultiple' : 'hintSimple');
    $('#q-options').className = 'options' + (multi ? ' multi' : '');
    $('#q-options').innerHTML = item.order.map(i =>
      `<label class="opt" data-i="${i}"><input type="${multi ? 'checkbox' : 'radio'}" name="opt" value="${i}"><span class="mark"></span><span>${esc(L(item.q.options[i]))}</span></label>`).join('');
    $('#q-feedback').hidden = true;
    if (answered) paint(answered);
    syncButtons();
  }

  /* Verde = correcta · rojo = marcada pero incorrecta · borde discontinuo = correcta que faltó */
  function paint(rec) {
    const ans = rec.item.q.answer;
    document.querySelectorAll('#q-options .opt').forEach(o => {
      const i = +o.dataset.i, sel = rec.selected.includes(i), ok = ans.includes(i), inp = o.querySelector('input');
      inp.checked = sel; inp.disabled = true;
      o.classList.toggle('correct', ok);
      o.classList.toggle('wrong', sel && !ok);
      o.classList.toggle('missed', ok && !sel);
    });
    const fb = $('#q-feedback'), ex = rec.item.q.explain;
    fb.hidden = false; fb.className = 'feedback ' + (rec.isCorrect ? 'ok' : 'bad');
    fb.innerHTML = `<strong>${t(rec.isCorrect ? 'right' : 'wrong')}</strong>` + (ex ? `<p>${esc(L(ex))}</p>` : '');
  }

  function syncButtons() {
    const { index, total } = Quiz.progress();
    $('#btn-submit').hidden = !!answered;
    $('#btn-submit').disabled = selected().length === 0;
    $('#btn-next').hidden = !answered;
    $('#btn-next').textContent = t(index + 1 === total ? 'finish' : 'next');
  }

  /* ---------- Resultados ---------- */
  function renderResults() {
    show('results');
    const r = Quiz.results();
    const msg = r.pct >= 90 ? 'msgExcellent' : r.pct >= 70 ? 'msgGood' : r.pct >= 50 ? 'msgPass' : 'msgFail';
    $('#res-ring').style.setProperty('--pct', r.pct);
    $('#res-pct').textContent = r.pct + '%';
    $('#res-score').textContent = `${r.correct} / ${r.total}`;
    $('#res-msg').textContent = t(msg);

    $('#res-cards').innerHTML = [['correct', r.correct, 'ok'], ['incorrect', r.incorrect, 'bad'], ['time', fmtTime(r.ms), ''], ['avgTime', fmtTime(r.avg), '']]
      .map(([k, v, c]) => `<div class="stat ${c}"><span>${t(k)}</span><strong>${v}</strong></div>`).join('');

    const bar = (label, c, n) => `<div class="bar-row"><div class="bar-head"><span>${esc(label)}</span><span>${c}/${n} · ${Math.round(c / n * 100)}%</span></div><div class="bar"><i style="width:${c / n * 100}%"></i></div></div>`;
    $('#res-types').innerHTML = r.byType.map(x => bar(t(x.type), x.correct, x.total)).join('');
    $('#res-topics').innerHTML = r.byTopic.map(x => bar(L(x.name), x.correct, x.total)).join('');

    const names = (q, ids) => ids.length ? ids.map(i => esc(L(q.options[i]))).join(', ') : t('noAnswer');
    $('#res-review').innerHTML = r.log.map((x, n) => {
      const q = x.item.q;
      return `<details class="rev ${x.isCorrect ? 'ok' : 'bad'}"><summary><span class="ico">${x.isCorrect ? '✓' : '✕'}</span><span>${n + 1}. ${esc(L(q.q))}</span></summary>` +
        `<p><b>${t('yourAnswer')}:</b> ${names(q, x.selected)}</p>` +
        (x.isCorrect ? '' : `<p><b>${t('correctAnswer')}:</b> ${names(q, q.answer)}</p>`) + '</details>';
    }).join('');
  }

  /* ---------- Eventos ---------- */
  function bind() {
    $('#sel-subject').onchange = e => { setup.subject = e.target.value; setup.unit = ''; setup.topics = new Set(); renderSetup(); };
    $('#sel-unit').onchange = e => {
      setup.unit = e.target.value;
      setup.topics = new Set(curUnit()?.topics.map(x => x.id) ?? []);
      renderSetup();
    };
    $('#topic-list').onchange = e => {
      const el = e.target;
      if (el.id === 'chk-all') setup.topics = el.checked ? new Set(curUnit().topics.map(x => x.id)) : new Set();
      else if (el.dataset.topic) el.checked ? setup.topics.add(el.dataset.topic) : setup.topics.delete(el.dataset.topic);
      renderSetup();
    };
    $('#sw-shuffle').onchange = e => { setup.shuffle = e.target.checked; };
    $('#sel-type').onchange = e => { setup.type = e.target.value; updateAvailable(); };
    $('#btn-start').onclick = () => startQuiz({ ...setup, topics: [...setup.topics] });

    $('#q-options').onchange = syncButtons;
    $('#btn-submit').onclick = () => {
      answered = Quiz.submit(selected());
      $('#q-bar').style.width = `${(Quiz.progress().index + 1) / Quiz.progress().total * 100}%`;
      paint(answered); syncButtons();
    };
    $('#btn-next').onclick = () => {
      if (Quiz.next()) { answered = null; renderQuestion(); } else renderResults();
    };
    $('#btn-quit').onclick = () => { if (confirm(t('quitConfirm'))) show('setup'); };
    $('#btn-retry').onclick = () => startQuiz(Quiz.config());
    $('#btn-new').onclick = () => show('setup');
  }

  /* Repinta todo al cambiar de idioma sin perder el progreso */
  function refresh() {
    translateStatic();
    renderSetup();
    if (screen === 'quiz') renderQuestion();
    if (screen === 'results') renderResults();
  }

  function init() { bind(); refresh(); show('setup'); }

  return { init, refresh };
})();
