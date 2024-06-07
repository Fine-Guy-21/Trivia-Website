var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&type=multiple', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    // console.log(data);
    displayQuestions(data.results);
  }
};
xhr.onerror = function() {
  console.error('Error:', xhr.statusText);
};
xhr.send();

data = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
        "correct_answer": "Motherboard",
        "incorrect_answers": [
            "Central Processing Unit",
            "Hard Disk Drive",
            "Random Access Memory"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "What does LTS stand for in the software market?",
        "correct_answer": "Long Term Support",
        "incorrect_answers": [
            "Long Taco Service",
            "Ludicrous Transfer Speed",
            "Ludicrous Turbo Speed"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "What amount of bits commonly equals one byte?",
        "correct_answer": "8",
        "incorrect_answers": [
            "1",
            "2",
            "64"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "In web design, what does CSS stand for?",
        "correct_answer": "Cascading Style Sheet",
        "incorrect_answers": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
        "correct_answer": "1000",
        "incorrect_answers": [
            "512",
            "1024",
            "500"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "What does the Prt Sc button do?",
        "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard",
        "incorrect_answers": [
            "Nothing",
            "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
            "Closes all windows"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
        "correct_answer": "Binary",
        "incorrect_answers": [
            "JavaScript",
            "C++",
            "Python"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "Which computer language would you associate Django framework with?",
        "correct_answer": "Python",
        "incorrect_answers": [
            "C#",
            "C++",
            "Java"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
        "correct_answer": "HD Graphics 500",
        "incorrect_answers": [
            "HD Graphics 700 ",
            "HD Graphics 600",
            "HD Graphics 7000"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Science: Computers",
        "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
        "correct_answer": "Green",
        "incorrect_answers": [
            "Red",
            "Blue",
            "Yellow"
        ]
    }
  ]
  
  const contentDiv = document.querySelector('.content');
//   displayQuestions(data)
  
  var index = 1
  function displayQuestions(questions) {
    // Loop through the questions and display them
    questions.forEach(function(question) {
      // Access the question properties, such as question.question, question.correct_answer, question.incorrect_answers
      // console.log('Correct Answer:', question.correct_answer);
      // console.log('Incorrect Answers:', question.incorrect_answers);
  
       
  
  
      const questioncard = document.createElement('div');
      questioncard.classList.add('question-card');
  
      const questiontext = document.createElement('div');
      questiontext.classList.add('question-text');
      questiontext.textContent = replacer(question.question);
      questioncard.appendChild(questiontext)
      
      
      const questionchoice = document.createElement('div');
      questionchoice.classList.add('question-choice')
  
  
      let choices = []
      for(i in question.incorrect_answers){
        choices.push(question.incorrect_answers[i])
      }
      choices.push(question.correct_answer)
      choices.sort();
  
      for (let i = 0; i < 4; i++) {
        const radioDiv = document.createElement('div');
        radioDiv.classList.add('radio-option');
      
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `${question.correct_answer}`;
        radio.value = i;
      
        const label = document.createElement('label');
        label.textContent = `  ${replacer(choices[i])}`;
      
        radioDiv.appendChild(radio);
        radioDiv.appendChild(label);
        questionchoice.appendChild(radioDiv);
      }
      
      questioncard.appendChild(questionchoice)
  
  
  
  
      
      // Append the new element to the .content div
      
      contentDiv.appendChild(questioncard);
      contentDiv.appendChild(document.createElement('br'));
      
    });
  }
  
  
  
  
  function replacer(text) {
    let replacements = {
      "#039": "'",
      "&quot;": '"',
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&#039;": "'"
    };
  
    let replacedText = text;
  
    for (let [representation, replacement] of Object.entries(replacements)) {
      replacedText = replacedText.replaceAll(representation, replacement);
    }
  
    return replacedText;
  }
  