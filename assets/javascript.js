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


function showQuestion() {
  console.log('showquestionhandler');
  $('#question').text(myQuestions[currentQuestion].question);
};



  
function showAnswers() {
    console.log('showanswershandler');
    $('.answers').html('');
    var i;
    for (i = 0; i < myQuestions[currentQuestion].answers.length; i++) { 
      $('.answers').append("<div class='col-sm-5 answer border'> <span class='choice'>"+ String.fromCharCode(65+i) +"</span> <span class='answerspan'>"+ myQuestions[currentQuestion].answers[i] +"</span></div>");
    };
    $('.answerspan').click(a);
}
  
function a() { 
  console.log('clickhandleevent');
  //save input
  input = $(this).text() 
  checkInput();
  if (currentQuestion == myQuestions.length -1) {
    alert('thanks for playing! ' + 'score: ' + score +'/' + myQuestions.length)
  }
  else {
    currentQuestion++;
    showQuestion();
    showAnswers();
  }
 }
 

 $('.answerspan').click(a);
  
showQuestion();
showAnswers();


function checkInput() {
  
      console.log('input: '+ input); 
      //check if input is correct
      console.log('correct answer:' + myQuestions[currentQuestion].correctAnswer); 
      if (input == myQuestions[currentQuestion].correctAnswer) {
        score++;
        console.log('Score: ' + score);
  }


}


