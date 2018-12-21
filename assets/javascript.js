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
  }
];

var input
var score = 0
var currentQuestion = 0


function showQA() {
  $('.question').first().addClass('display');
  var current = $('.question').first()
  current.next().removeClass('display');
  $('.questioncontainer').append(current);
  


  $('.answers').html('');
  var i;
  for (i = 0; i < myQuestions[currentQuestion].answers.length; i++) { 
    $('.answers').append("<div class='col-sm-5 answer'> <span class='choice'>"+ String.fromCharCode(65+i) +"</span> <span class='answerspan'>"+ myQuestions[currentQuestion].answers[i] +"</span></div>");
  };
  $('.answerspan').click(a);

};

 



  
function a() { 
  console.log('clickhandleevent');
  //save input
  input = $(this).text() 
  checkInput();
  if (currentQuestion == myQuestions.length -1) {
    timeup();
    $('#timer').hide();

  }
  else {
    currentQuestion++;
    resetTimer();
    showQA();
  }
  
 }
 
 function resetTimer() {
  timeLeft = 15
  clearTimeout(timerId);
  timerId = setInterval(countdown, 1000);
}

 $('.answerspan').click(a);
  
showQA();
//create div for each question ////but only show first
var i;
for (i = 0; i < myQuestions.length; i++) { 
$('.questioncontainer').append("<div class='col-sm-12 text-center question display'>" + myQuestions[i].question +"</div>");
};
$('.question').first().removeClass('display');





function checkInput() {
      console.log('input: '+ input); 
      //check if input is correct
      console.log('correct answer:' + myQuestions[currentQuestion].correctAnswer); 
      if (input == myQuestions[currentQuestion].correctAnswer) {
        score++;
        console.log('Score: ' + score);
  }
}

var timeLeft = 15;
var timeelem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);
    
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
        endgame();
      }
      else {
        currentQuestion++;
        resetTimer();
        showQA();
      }

   };

   function endgame(){
    timeelem.innerHTML = '';
    $('.answers').html('');
    $('.question').html("thanks for playing! " + 'Score: ' + score +'/' + myQuestions.length);


   }