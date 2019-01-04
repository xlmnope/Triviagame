const myQuestions = [
  {
    question: "The season one opening sequence refers to which artwork by Leonardo da Vinci?",
    answers: [
      "The Vitruvian Man",
      "The Last Supper",
      "The Annunciation",
      "The Adoration of the Magi"
    ],
    correctAnswer: "The Vitruvian Man"
  },
  {
    question: "In episode one, what real-world location was the backdrop to the photograph of a woman found by Peter Abernathy?",
    answers: [
      "Sydney Opera House",
      "The Taj Mahal",
      "Times Square",
      "The Petronas Towers"
    ],
    correctAnswer: "Times Square"
  },
  {
    question: "What are the names of the two Delos technicians manipulated by Maeve in season one?",
    answers: [
      "Felix and Sylvester",
      "Oliver and Garfield",
      "James and Salem",
      "Tom and Heathcliff"
    ],
    correctAnswer: "Felix and Sylvester"
  },
  {
    question: "When Dolores asks Teddy when they can go somewhere else, he replies that he will take her, but when?",
    answers: [
      "Someday",
      "Tomorrow",
      "Next Week",
      "Next Month"
    ],
    correctAnswer: "Someday"
  },
  {
    question: "",
    answers: [
      
    ],
  },
];

var score = 0
var currentQuestion = 0
var timeLeft = 15;
var timeelem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);
start();

function start() {  
  console.log(myQuestions);
  console.log(myQuestions.length);

  //create div for each question
  var i;
  for (i = 0; i < myQuestions.length; i++) { 
    $('.questioncontainer').append("<div class='col-sm-12 text-center question'>" + myQuestions[i].question +"</div>");
    $('.answercontainer').append("<div class='answers row justify-content-center'></div>")
    
    //create div for answers of each question
    var j;
    for (j = 0; j < myQuestions[i].answers.length; j++) { 
      $('.answers').eq(i).append("<div class='col-sm-5 answer'> <span class='choice'>"+ String.fromCharCode(65+j) +"</span> <span class='answerspan'>"+ myQuestions[i].answers[j] +"</span></div>");
    };
  };
  //when .answer is clicked do a function
  $('.answer').click(answerhandler);
  //show question and answers
  showQA();
}

function showQA() {
  $('.question').eq(currentQuestion).addClass('show');
  $('.answers').eq(currentQuestion).addClass('show');
  if(currentQuestion > 0){
    //apply answered class to previous question.. this class allows for animation 
    $('.question').eq(currentQuestion-1).addClass('answered');
    $('.answers').eq(currentQuestion-1).addClass('answered');
  }
}
function answerhandler() { 
  console.log('clickhandleevent');
  //save text of what user clicked
  var endMessage = "thanks for playing! " + 'Score: ' + score +'/' + (myQuestions.length - 1)
  var input = $('.answerspan', this).text() 
  var element = $(this);
  //pass input and element into checkInput function
  checkInput(input, element);
  //if the current question is the last question, change the text of the next 'question' showing to endmessage
  //subtracted by two because the last myquestions is empty, it saves a spot for the end message
  if (currentQuestion == myQuestions.length -2 ) {
    endMessage = "thanks for playing! " + 'Score: ' + score +'/' + (myQuestions.length - 1)
    $(".question:last-child").text(endMessage);
    setTimeout(advanceQuestion, 1000); 
    setTimeout(function (){
      $('#timer').hide();
    }, 1000);
  }
  else {
    currentQuestion++;
    resetTimer();
    setTimeout(showQA, 1000);
  }
}

function resetTimer() {
  timeLeft = 15
  clearTimeout(timerId);
  timerId = setInterval(countdown, 1000);
}  
function checkInput(input, element) {  
  console.log('input: '+ input); 
  //check if input is correct
  console.log('correct answer:' + myQuestions[currentQuestion].correctAnswer); 
  if (input == myQuestions[currentQuestion].correctAnswer) {
    element.addClass('answerCorrectSelected');
    score++;
    console.log('Score: ' + score);  
    }
   

  
  else {
    element.addClass('answerIncorrectSelected');
  }
}

function countdown() {
  var endMessage = "thanks for playing! " + 'Score: ' + score +'/' + (myQuestions.length - 1)
  if (timeLeft == 0) {
    console.log('timeleft = 0')
    clearTimeout(timerId);
    //set text of last div to endMessage
     if (currentQuestion == myQuestions.length -2 ) {
      $(".question:last-child").text(endMessage);
      //stop timer
      clearTimeout(timerId);
      //hidetimer
        $('#timer').hide();
     }
    advanceQuestion();
    }
    //stop timers after questions are answered
    if (currentQuestion >= myQuestions.length -1) {
      clearTimeout(timerId);
    }
   
  else {
    timeelem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}


function advanceQuestion() {
  currentQuestion++;
  resetTimer();
  showQA();
}
 
