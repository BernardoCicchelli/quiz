let quizData = [
    {
      title: `Acrescente uma "tooltip" ao parágrafo abaixo com o texto "Sobre Quizcode".`,
      question: `<p ***="Sobre Quizcode">Quizcode de quiz sobre programação.</p>`,
      a: "h1",
      b: "id",
      c: "class",
      d: "title",
      correct: "d",
    },
    {
      title: `Ajuste o tamanho da imagem para 250 pixels de largura e 400 pixels de altura.`,
      question: '<img src="w3schools.jpg" width="***" height="***">',
      a: "width=250, height=250",
      b: "width=400, height=250",
      c: "width=250, height=400",
      d: "width=400, height=400",
      correct: "c",
    },
    {
      title: `Transforme o elemento abaixo em um link que vá para "https://www.quizcode.com.br".`,
      question: `<a ***="https://www.quizcode.com.br">Isso é um link.</a>`,
      a: "src",
      b: "href",
      c: "link",
      d: "script",
      correct: "b",
    },
    {
      title: `Especificar um texto alternativo para a imagem. O texto alternativo é útil quando a imagem não pode ser exibida e também para acessibilidade.`,
      question: `<img src="quizcode.png" ***="Quizcode Logo">`,
      a: "text",
      b: "alt",
      c: "p",
      d: "inform",
      correct: "b",
    },
    {
      title: `Use a tag HTML correta para adicionar um título com o texto "London".`,
      question: `<***>London</***>`,
      a: "h1",
      b: "title",
      c: "text",
      d: "p",
      correct: "a",
    },
    {
      title: `Use a tag HTML correta para adicionar um parágrafo com o texto "Hello World!`,
      question: `<***>Hello World!</***>`,
      a: "h1",
      b: "title",
      c: "text",
      d: "p",
      correct: "d",
    },
    {
      title: `Acrescentar uma quebra de linha no meio do parágrafo:`,
      question: `<p>João foi ao parque.<***>João encontrou seu amigo lá.</p>`,
      a: "rb",
      b: "ul",
      c: "br",
      d: "li",
      correct: "c",
    },
    {
      title: `Utilize a etiqueta de comentário HTML para fazer um comentário a partir do texto "Isto é um comentário".`,
      question: `*** Isso é um comentário ***`,
      a: "<!-- -->",
      b: "<-- -->",
      c: "<!- -!>",
      d: "<-- ?-->",
      correct: "a",
    },
    {
      title: `Utilize o HTML correto para tornar o texto abaixo em um link para "default.html".`,
      question: `<***>Visite nosso tutorial de HTML</***>`,
      a: '<a href="default"> </a>',
      b: '<a href="default.html"> </a>',
      c: '<a src="default.html"> </a>',
      d: '<a src="default"> </a>',
      correct: "b",
    },
    {
      title: `Utilizar o atributo HTML correto para abrir numa nova janela.`,
      question: `<a href="html_images.asp" ***>HTML Images</a>`,
      a: 'target="_blank"',
      b: 'src="_blank"',
      c: 'target="_new"',
      d: 'src="new"',
      correct: "a",
    },
    {
      title: `Utilizar os atributos de imagem HTML para definir o tamanho da imagem para 250 pixels de largura e 400 pixels de altura.`,
      question: `<img src="scream.png" ***="250" ***="400">`,
      a: "size size",
      b: "height width",
      c: "top left",
      d: "width height",
      correct: "d",
    },
    {
      title: `Crie um iframe com um endereço URL que vá para https://www.quizcode.com.br`,
      question: `<iframe ***="https://www.w3schools.com"></iframe>`,
      a: "media",
      b: "href",
      c: "src",
      d: "link",
      correct: "c",
    },
    {
      title: `No formulário abaixo, adicionar um campo de entrada com o tipo "botão" e o valor "OK".`,
      question: `<form> <***> </form>`,
      a: 'input type="input" value="OK"',
      b: 'input tag="button" text="OK"',
      c: 'input type="button" value="OK"',
      d: 'input tag="button" string="OK"',
      correct: "c",
    },
    {
      title: `Termine o código Form para ele ser funcional`,
      question: `<form ***="/action_page.js"></form>`,
      a: "action",
      b: "play",
      c: "link",
      d: "href",
      correct: "a",
    },
    {
      title: `Especifique que o formulário é submetido utilizando o método "POST".`,
      question: `<form action="/action_page.js" ***></form>`,
      a: 'link="post"',
      b: 'action="post"',
      c: 'http="post"',
      d: 'method="post"',
      correct: "d",
    },
    {
      title: `Desative o input abaixo.`,
      question: `<input type="text" ***>`,
      a: "disable",
      b: "off",
      c: "enable",
      d: "dontUSe",
      correct: "a",
    },
    {
      title: `Defina o número máximo de caracteres permitidos no campo de entrada para 40.`,
      question: `<input type="text" ***>`,
      a: 'minlength="40"',
      b: 'maxlength="40"',
      c: 'maxsize="40"',
      d: 'minsize="40"',
      correct: "b",
    },
  ];
  
  let btn = document.querySelector("#btn");
  let quiz = document.querySelector("#quiz");
  let title = document.querySelector("#title");
  let question = document.querySelector("#question");
  let a = document.querySelector("#questionA");
  let b = document.querySelector("#questionB");
  let c = document.querySelector("#questionC");
  let d = document.querySelector("#questionD");
  const answerEls = document.querySelectorAll(".answer");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswer();
  
    // const currentQuizData = quizData[currentQuiz];
  
    title.innerText = quizData[currentQuiz].title;
    question.innerText = quizData[currentQuiz].question;
    a.innerText = quizData[currentQuiz].a;
    b.innerText = quizData[currentQuiz].b;
    c.innerText = quizData[currentQuiz].c;
    d.innerText = quizData[currentQuiz].d;
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deselectAnswer() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  btn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer == quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        //TODO: Show results
        quiz.innerHTML = `<h2 id="result">Sua pontuação: ${score}/${quizData.length}</h2><button onclick="location.reload()">Recomeçar</button>`;
      }
    }
  });
  