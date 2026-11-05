/* Motor del cuestionario: lógica pura, sin DOM */
const Quiz = (() => {
  let s = null; // estado de la partida en curso

  const shuffle = arr => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const typeOf = q => (q.answer.length > 1 ? 'multiple' : 'simple');

  /* Preguntas disponibles para una selección (type: all | simple | multiple) */
  function pool(subjectId, unitId, topicIds, type = 'all') {
    const unit = QuizBank.get(subjectId)?.units.find(u => u.id === unitId);
    if (!unit) return [];
    return unit.topics
      .filter(tp => topicIds.includes(tp.id))
      .flatMap(tp => tp.questions
        .filter(q => type === 'all' || typeOf(q) === type)
        .map(q => ({ q, topic: tp.name })));
  }

  function start(cfg) {
    let items = pool(cfg.subject, cfg.unit, cfg.topics, cfg.type);
    if (cfg.shuffle) items = shuffle(items);
    items = items.map(({ q, topic }) => {
      const order = q.options.map((_, i) => i);
      return { q, topic, type: typeOf(q), order: cfg.shuffle ? shuffle(order) : order };
    });
    s = { cfg: { ...cfg }, items, index: 0, log: [], tq: Date.now() };
    return items.length;
  }

  const current = () => s.items[s.index];
  const progress = () => ({ index: s.index, total: s.items.length });

  /* selected: índices ORIGINALES de las opciones marcadas */
  function submit(selected) {
    const item = current(), ans = item.q.answer;
    const isCorrect = selected.length === ans.length && selected.every(i => ans.includes(i));
    const rec = { item, selected: [...selected].sort((a, b) => a - b), isCorrect, ms: Date.now() - s.tq };
    s.log.push(rec);
    return rec;
  }

  function next() {
    s.index++; s.tq = Date.now();
    return s.index < s.items.length;
  }

  function results() {
    const total = s.log.length;
    const correct = s.log.filter(r => r.isCorrect).length;
    const ms = s.log.reduce((a, r) => a + r.ms, 0);
    const byType = ['simple', 'multiple'].map(type => {
      const rs = s.log.filter(r => r.item.type === type);
      return { type, total: rs.length, correct: rs.filter(r => r.isCorrect).length };
    }).filter(x => x.total > 0);
    const topics = new Map();
    s.log.forEach(r => {
      const e = topics.get(r.item.topic) ?? { name: r.item.topic, total: 0, correct: 0 };
      e.total++; if (r.isCorrect) e.correct++;
      topics.set(r.item.topic, e);
    });
    return {
      total, correct, incorrect: total - correct,
      pct: total ? Math.round(correct / total * 100) : 0,
      ms, avg: total ? ms / total : 0,
      byType, byTopic: [...topics.values()], log: s.log
    };
  }

  return { pool, start, current, progress, submit, next, results, config: () => s?.cfg };
})();
