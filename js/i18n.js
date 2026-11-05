/* Textos de la interfaz en castellano (es) y valenciano (va).
   Para añadir un texto: crea la clave en AMBOS idiomas. */
const I18N = (() => {
  const dict = {
    es: {
      appTitle: 'Cuestionarios de examen', appSubtitle: 'Practica por asignatura, unidad y tema.',
      subject: 'Asignatura', unit: 'Unidad', topics: 'Temas', choose: 'Selecciona…', allTopics: 'Todos los temas',
      options: 'Opciones', shuffle: 'Mezclar preguntas', shuffleHint: 'También cambia el orden de las respuestas',
      qtype: 'Tipo de pregunta', typeAll: 'Todas', typeSimple: 'Simples (una respuesta)', typeMultiple: 'Múltiples (varias respuestas)',
      available: '{n} preguntas disponibles', start: 'Empezar cuestionario',
      questionOf: 'Pregunta {n} de {total}', simple: 'Simple', multiple: 'Múltiple',
      hintSimple: 'Elige una respuesta', hintMultiple: 'Elige todas las respuestas correctas',
      submit: 'Enviar respuesta', next: 'Siguiente', finish: 'Ver resultados', quit: 'Salir',
      quitConfirm: '¿Salir del cuestionario? Se perderá el progreso.',
      right: '¡Correcto!', wrong: 'Incorrecto', results: 'Resultados',
      correct: 'Correctas', incorrect: 'Incorrectas', time: 'Tiempo total', avgTime: 'Media por pregunta',
      byType: 'Resultados por tipo de pregunta', byTopic: 'Resultados por tema', review: 'Revisión de preguntas',
      yourAnswer: 'Tu respuesta', correctAnswer: 'Respuesta correcta', noAnswer: 'Sin respuesta',
      retry: 'Repetir cuestionario', newQuiz: 'Nuevo cuestionario',
      msgExcellent: '¡Excelente trabajo!', msgGood: '¡Muy bien, sigue así!', msgPass: 'Aprobado, pero puedes mejorarlo.', msgFail: 'Conviene repasar un poco más.',
      theme: 'Cambiar tema', language: 'Idioma'
    },
    va: {
      appTitle: 'Qüestionaris d\'examen', appSubtitle: 'Practica per assignatura, unitat i tema.',
      subject: 'Assignatura', unit: 'Unitat', topics: 'Temes', choose: 'Selecciona…', allTopics: 'Tots els temes',
      options: 'Opcions', shuffle: 'Barrejar preguntes', shuffleHint: 'També canvia l\'ordre de les respostes',
      qtype: 'Tipus de pregunta', typeAll: 'Totes', typeSimple: 'Simples (una resposta)', typeMultiple: 'Múltiples (diverses respostes)',
      available: '{n} preguntes disponibles', start: 'Començar qüestionari',
      questionOf: 'Pregunta {n} de {total}', simple: 'Simple', multiple: 'Múltiple',
      hintSimple: 'Tria una resposta', hintMultiple: 'Tria totes les respostes correctes',
      submit: 'Enviar resposta', next: 'Següent', finish: 'Veure resultats', quit: 'Eixir',
      quitConfirm: 'Vols eixir del qüestionari? Es perdrà el progrés.',
      right: 'Correcte!', wrong: 'Incorrecte', results: 'Resultats',
      correct: 'Correctes', incorrect: 'Incorrectes', time: 'Temps total', avgTime: 'Mitjana per pregunta',
      byType: 'Resultats per tipus de pregunta', byTopic: 'Resultats per tema', review: 'Revisió de preguntes',
      yourAnswer: 'La teua resposta', correctAnswer: 'Resposta correcta', noAnswer: 'Sense resposta',
      retry: 'Repetir qüestionari', newQuiz: 'Nou qüestionari',
      msgExcellent: 'Excel·lent treball!', msgGood: 'Molt bé, continua així!', msgPass: 'Aprovat, però pots millorar-ho.', msgFail: 'Convé repassar una mica més.',
      theme: 'Canviar tema', language: 'Llengua'
    }
  };
  let lang = Store.get('lang', 'es');
  if (!dict[lang]) lang = 'es';

  const t = (key, vars = {}) =>
    String(dict[lang][key] ?? dict.es[key] ?? key).replace(/\{(\w+)\}/g, (_, n) => vars[n] ?? '');
  /* Devuelve el texto en el idioma activo: acepta {es, va} o un texto simple */
  const L = v => (v && typeof v === 'object') ? (v[lang] ?? v.es ?? '') : (v ?? '');

  return {
    t, L,
    get lang() { return lang; },
    set(l) {
      if (!dict[l]) return;
      lang = l; Store.set('lang', l);
      document.documentElement.lang = l === 'va' ? 'ca-ES-valencia' : 'es';
    },
    languages: [['es', 'Castellano'], ['va', 'Valencià']]
  };
})();
