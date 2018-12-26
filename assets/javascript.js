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
    
      //instead of wiping it out pre-load them and only show 
    var j;
    for (j = 0; j < myQuestions[i].answers.length; j++) { 
      $('.answers').eq(i).append("<div class='col-sm-5 answer'> <span class='choice'>"+ String.fromCharCode(65+j) +"</span> <span class='answerspan'>"+ myQuestions[i].answers[j] +"</span></div>");
    };
  };

  $('.answer').click(answerhandler);

  showQA();
}

function showQA() {
  $('.question').eq(currentQuestion).addClass('show');
  $('.answers').eq(currentQuestion).addClass('show');
  if(currentQuestion > 0){
    $('.question').eq(currentQuestion-1).addClass('answered');
    $('.answers').eq(currentQuestion-1).addClass('answered');
  }
}
function answerhandler() { 
  console.log('clickhandleevent');
  //save input
  var input = $('.answerspan', this).text() 
  var element = $(this);
  checkInput(input, element);
  //if the current question is the last question, change the text of the next 'question' showing to endmessage
  //subtracted by two because the last myquestions is empty, it saves a spot for the end message
  if (currentQuestion == myQuestions.length -2 ) {
    console.log($('.question:last-child'));
    //bug...this is not working, coming back as NaN
    $(".question:last-child").text("thanks for playing! " + 'Score: ' + score +'/' + (myQuestions.length - 1));
    console.log($('.question:last-child'));

    timeup();
    $('#timer').hide();
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
    //change text of last div to endmessage
        
      }
   

  
  else {
    element.addClass('answerIncorrectSelected');
  }
}

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    timeup();
  } else {
    timeelem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function timeup() {
  //log time up 
  console.log('time is up');
  //next question
  if (currentQuestion == myQuestions.length -1) {
    setTimeout(endgame, 1000);
  }
  else {
    currentQuestion++;
    resetTimer();
    showQA();
  } 
}

function endgame(){
  timeelem.innerHTML = '';

  //$('.answers').html('');
  //$('.question').html("thanks for playing! " + 'Score: ' + score +'/' + myQuestions.length - 1);
}