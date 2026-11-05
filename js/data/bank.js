/* ============================================================
   BANCO DE PREGUNTAS · registro
   Para añadir una asignatura: crea js/data/<nombre>.js, llama a
   QuizBank.register({...}) y enlázalo en index.html tras bank.js.

   Estructura:
   {
     id: 'mates',
     name: QuizBank.textTranslation('Matemáticas', 'Matemàtiques'),
     units: [{
       id: 'u1', name: QuizBank.textTranslation('...', '...'),
       topics: [{
         id: 't1', name: QuizBank.textTranslation('...', '...'),
         questions: [
           QuizBank.createQuestion(
             QuizBank.textTranslation('Pregunta', 'Pregunta'),
             ['texto común', QuizBank.textTranslation('Opción', 'Opció')],
             [1],            // índices correctos: 1 = simple, 2+ = múltiple
             QuizBank.textTranslation('...', '...')   // opcional
           )
         ]
       }]
     }]
   }
   ============================================================ */
window.QuizBank = {
  subjects: [],
  textTranslation(es, va) { return { es, va }; },
  createQuestion(q, options, answer, explain) {
    return explain ? { q, options, answer, explain } : { q, options, answer };
  },
  register(subject) { this.subjects.push(subject); },
  get(id) { return this.subjects.find(s => s.id === id); }
};
