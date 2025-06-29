const questions = [
    { 
      question: "Qui est le premier roi ?",
      options: ["Radama I", "Andrianampoinimerina", "Andriamena"],
      answer: "Andrianampoinimerina",
      
    },
    { 
      question: "Quelle est la superficie de Madagascar?",
      options: ["590 026km²", "587 041km²", "592 502km²"],
      answer: "587 041km²",
      
    },
    { 
      question: "Madagascar a combien d'Etnie?",
      options: ["19 Ethnies", "20 Ethnies", "18 Ethnies"],
      answer: "18 Ethnies",
     
    },
    { 
      question: "Le roi SAKALAVA le plus célèbre?",
      options: ["Andriamisara", "Andriamandisoarivo", "Ralambo"],
      answer: "Andriamandisoarivo",
      
    },
    { 
      question: "On est en quel République?",
      options: ["Troixième", "Quatrième", "Sixième", "Cinquième"],
      answer: "Quatrième",
      
    },
    { 
      question: "Qui a donnée le nom 'Madagascar' à cet île?",
      options: ["Diego Diaz", "Gallieni", "Polo Marco"],
      answer: "Polo Marco",
      
    },
    { 
      question: "Quel évènement marque le respect des ancêtres à Madagascar?",
      options: ["Famadihana", "Famorana", "Fandevenana", "Vody Ondry"],
      answer: "Famadihana",
      
    },
    { 
      question: "Quel est le/la roi/reine le/la plus sévère de tous?",
      options: ["Radama I", "Ranavalona II", "Rasoherina", "Ranavalona I"],
      answer: "Ranavalona I",
      
    },
    { 
      question: "Quel est le point culminant de Madagascar?",
      options: ["Maromokotra", "Ankaratra", "Tsaratanana"],
      answer: "Maromokotra",
      
    },
    { 
      question: "Quel est le fleuve le plus long?",
      options: ["Sofia", "Canal de pangalana", "Mangoky", "Tsirery"],
      answer: "Mangoky",
      
    },
    { 
      question: "Quel est le principal bassin de l'île?",
      options: ["Morondava", "Mangoky", "Tsiribina", "Betsiboka"],
      answer: "Morondava",
      
    },
    { 
      question: "Que represente un 'Mpanandro' ?",
      options: ["Voyant", "Benisseur", "Astrologue", "Sorcier"],
      answer: "Astrologue",
      
    },
    { 
      question: "Le président du 3ème république 1er tranche?",
      options: ["Ravalomanana", "Zafy Albert", "Ratsiraka", "Ratsirahonana"],
      answer: "Zafy Albert",
      
    },
    { 
      question: "Quelle baie est la plus grandes ?",
      options: ["Antsiranana", "Sakalava", "Narindra", "Ampasindava"],
      answer: "Antsiranana",
      
    },
    {
      question: "Qui était la dernière reine de Madagascar avant la colonisation française ?",
      options: ["Ranavalona III", "Ranavalona II", "Rasoherina", "Rabodo"],
      answer: "Ranavalona III",
   },
   {
      question: "En quelle année Madagascar a-t-elle obtenu son indépendance ?",
      options: ["1958", "1960", "1962", "1964"],
      answer: "1960",
  },
  {
      question: "Quelle est la capitale de Madagascar ?",
      options: ["Toamasina", "Antananarivo", "Mahajanga", "Fianarantsoa"],
      answer: "Antananarivo",
  },
  {
      question: "Qui fut le premier président de Madagascar indépendant ?",
      options: ["Didier Ratsiraka", "Philibert Tsiranana", "Albert Zafy", "Marc Ravalomanana"],
      answer: "Philibert Tsiranana",
  },
  {
      question: "Combien de régions administratives compte Madagascar ?",
      options: ["18", "22", "23", "24"],
      answer: "23",
  },
  {
      question: "Quelle est la plus grande ville portuaire de Madagascar ?",
      options: ["Mahajanga","Antsiranana", "Toliara", "Toamasina"],
      answer: "Toamasina",
  },
  {
      question: "Quelle est la principale religion pratiquée à Madagascar ?",
      options: ["Islam", "Christianisme", "Hindouisme", "Culte des ancêtres"],
      answer: "Christianisme",
  },
  {
      question: "Qu'est-ce que le 'fady' ?",
      options: ["Un tabou", "Une fête", "Un plat", "Une danse"],
      answer: "Un tabou",
  },
  {
      question: "Quelle région de Madagascar est connue pour ses baobabs ?",
      options: ["Menabe", "Atsimo-Andrefana", "Boeny", "Les trois"],
      answer: "Les trois",
  },
  {
      question: "Quel animal est considéré comme sacré par certaines ethnies malgaches ?",
      options: ["Le zébu", "Le lémurien", "Le crocodile", "Les trois"],
      answer: "Les trois",
  },
  {
      question: "En quelle année la France établit-elle son protectorat sur Madagascar ?",
      options: ["1885", "1890", "1895", "1900"],
      answer: "1895",
  },
  {
      question: "Quel était le nom de la capitale du royaume Merina ?",
      options: ["Antananarivo", "Ambohimanga", "Antsirabe", "Fianarantsoa"],
      answer: "Ambohimanga",
  },
  {
      question: "Qui était Radama I ?",
      options: ["1er président de Madagascar", "roi Merina modernisateur", "Reine Merina", "Citoyen"],
      answer: "roi Merina modernisateur",
  },
  {
      question: "En quelle année eut lieu la révolte des Menalamba ?",
      options: ["1895-1898", "1900-1903", "1905-1908", "1910-1913"],
      answer: "1905-1908",
  },
  {
      question: "Quelle était la religion principale avant l'arrivée du christianisme ?",
      options: ["Islam", "Culte des ancêtres", "Hindouisme", "Animisme"],
      answer: "Culte des ancêtres",
  },
  {
      question: "Quel est le nom traditionnel du Nouvel An malgache ?",
      options: ["Alahamady", "Fandroana", "Santabary", "Asaramanitra"],
      answer: "Alahamady",
  },
  {
      question: "Quel est le climat dominant dans les Hautes Terres centrales ?",
      options: ["Tropical humide", "Tropical sec", "Tempéré", "Équatorial"],
      answer: "Tempéré",
  },
  {
      question: "Comment appelle-t-on les tombeaux traditionnels malgaches ?",
      options: ["Trano", "Kibory", "Tranobe", "Rova"],
      answer: "Kibory",
  },
  {
    question: "Quel président malgache est surnommé l’Amiral rouge ?",
    options: ["Andry Rajoelina", "Didier Ratsiraka", "Marc Ravalomanana", "Albert Zafy"],
    answer: "Didier Ratsiraka"
  },
  {
    question: "Qui est connu pour avoir résisté à la colonisation française au début du XXe siècle ?",
    options: ["Rainilaiarivony", "Toera", "Rabemananjara", "Behanzin"],
    answer: "Rabemananjara"
  },
  {
    question: "Quel Premier ministre a dominé la politique malgache durant les règnes de trois reines successives ?",
    options: ["Rainandriamampandry", "Rainilaiarivony", "Ratsimandrava", "Tsiranana"],
    answer: "Rainilaiarivony"
  },
  {
    question: "Qui fut la première et unique femme présidente de Madagascar ?",
    options: ["Cécile Manorohanta", "Lalao Ravalomanana", "Charlotte Rabesoa", "Aucune"],
    answer: "Aucune"
  },
  {
    question: "Quel roi malgache a signé un traité avec les Britanniques en 1817 ?",
    options: ["Radama II", "Andrianampoinimerina", "Radama I", "Rainilaiarivony"],
    answer: "Radama I"
  },
  {
    question: "Qui fut l’un des premiers intellectuels malgaches, auteur et homme politique sous la colonisation française ?",
    options: ["Jean Ralaimongo", "Philippe Rabemananjara", "Richard Ratsimandrava", "Zafimahova"],
    answer: "Jean Ralaimongo"
  },
  {
    question: "Quel ancien président a dirigé la Haute Autorité de la Transition après la crise de 2009 ?",
    options: ["Didier Ratsiraka", "Marc Ravalomanana", "Andry Rajoelina", "Albert Zafy"],
    answer: "Andry Rajoelina"
  },
  {
    question: "Quel Premier ministre fut assassiné en 1975 peu après sa prise de fonction ?",
    options: ["Gabriel Ramanantsoa", "Richard Ratsimandrava", "Rainilaiarivony", "Ratsimandrava"],
    answer: "Richard Ratsimandrava"
  },
    
  ];
  function melanger(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  melanger(questions); 

  let currentQuestion = 0;
  let score = 0;
  let timer;
  
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'fr-FR';
  
  recognition.onresult = function(event) {
    const answer = event.results[0][0].transcript;
    checkAnswer(answer);
  }
  
  function displayQuestion() {
    clearInterval(timer);
    document.getElementById('question').textContent = questions[currentQuestion].question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questions[currentQuestion].options.forEach((option, index) => {
      const optionButton = document.createElement('button');
      optionButton.classList.add('option');
      optionButton.textContent = option;
      optionButton.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionButton);
    });
    startTimer();
  }
  
  function checkAnswer(answer) {
    clearInterval(timer);
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
    if (answer.toLowerCase() === correctAnswer) {
      document.getElementById('result').textContent = 'Correct!';
      score++;
    } else {
      document.getElementById('result').textContent = 'Incorrect!';
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
    
  
  function displayScore() {
    document.getElementById('question').textContent = 'Quiz Terminé✅';
    document.getElementById('options').innerHTML = '';
    document.getElementById('result').textContent = `Votre Score : ${score}/${questions.length}`;
    document.getElementById('timer').textContent = '';
    alert("Merci pour votre participation🤝 \n Appyuez sur 🆗 pour afficher le résultat")
  }
  
  function startTimer() {
    let timeLeft = 19;
    timer = setInterval(() => {
      document.getElementById('timer').textContent = `temps restant : ${timeLeft} secondes⌚`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = "Temps écoulé!⌛❌";
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
          displayScore();
        }
      }
    }, 1000);
  }
  
  document.getElementById('commencer').addEventListener('click', function() {
    recognition.start();
    displayQuestion();
  });
  document.getElementById('recommencer').addEventListener('click', function() {
    location.reload();
  });

  