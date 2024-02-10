const perguntas = [
    {
      Pergunta: "Quem é considerado o primeiro homem na Bíblia?",
      respostas: [
        "Abel",
        "Moisés",
        "Adão"
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é o nome do irmão mais novo de Moisés?",
      respostas: [
        "Josué",
        "Arão",
        "Caim"
      ],
      correta: 1
    },
    {
      Pergunta: "Quantos livros compõem o Novo Testamento?",
      respostas: [
        "27",
        "39",
        "66"
      ],
      correta: 0
    },
    {
      Pergunta: "Quem foi o rei que construiu o Templo de Jerusalém na Bíblia?",
      respostas: [
        "Davi",
        "Salomão",
        "Saul"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é o nome do rio onde João Batista batizava as pessoas?",
      respostas: [
        "Rio Nilo",
        "Rio Jordão",
        "Rio Tigre"
      ],
      correta: 1
    },
    {
      Pergunta: "Quem foi o profeta que desafiou os profetas de Baal no monte Carmelo?",
      respostas: [
        "Elias",
        "Eliseu",
        "Isaías"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o nome do monte onde Jesus foi crucificado?",
      respostas: [
        "Monte Sinai",
        "Monte das Oliveiras",
        "Monte Calvário"
      ],
      correta: 2
    },
    {
      Pergunta: "Quem foi a esposa de Abraão na Bíblia?",
      respostas: [
        "Sara",
        "Raquel",
        "Lea"
      ],
      correta: 0
    },
    {
      Pergunta: "Quem foi o homem que ficou conhecido por seu grande exemplo de paciência na Bíblia?",
      respostas: [
        "Jó",
        "Noé",
        "Isaías"
      ],
      correta: 0
    },
    {
      Pergunta: "Quem é considerado o pai dos israelitas na Bíblia?",
      respostas: [
        "Abraão",
        "Isaque",
        "Jacó"
      ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarToral = document.querySelector('#acertos span')
  mostrarToral.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas ) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarToral.textContent = corretas.size + 'de' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  
  
  
    // remove as resposta, apos ter clonado
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  