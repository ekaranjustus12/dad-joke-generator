const questions = [
	{question: "whats my favourite color?",
	answers:[
		{text:"black",correct:true},
		{text:"grey",correct:false},
		{text:"white",correct:false},
		{text:"beige",correct:false},
	]
},

{question: "whats my favourite food?",
	answers:[
		{text:"chapo",correct:false},
		{text:"githeri",correct:true},
		{text:"rice nyama",correct:false},
		{text:"pizza",correct:false},
	]
},

{question: "whats my favourite music?",
	answers:[
		{text:"intentions by justin bieber",correct:true},
		{text:"calm down by rema",correct:false},
		{text:"creeping by the weekend",correct:false},
		{text:"alcohol by joeboy",correct:false},
	]
},

{question: "who is my favourite artist ?",
	answers:[
		{text:"justin bieber",correct:true},
		{text:"wizkid",correct:false},
		{text:"rema",correct:false},
		{text:"joeboy",correct:false},
      ]
   }
];    
const questionElement = document.getElementById('questions');
const answerButton = document.getElementById('btn-ans');
const nextButton = document.getElementById('next-btn');

let questionIndex = 0;
let score = 0;

function quiz(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuiz();
}
function displayQuiz(){
	resetState();
	let currentQuiz = questions[questionIndex];
	let quizNo = questionIndex + 1;
	questionElement.innerHTML = quizNo + ". " + currentQuiz.question;

	currentQuiz.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerHTML = answer.text;
		button.classList.add('btn');
		answerButton.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click',selectedAns);
	});
}
function resetState(){
	nextButton.style.display = 'none';
	while(answerButton.firstChild){
		answerButton.removeChild(answerButton.firstChild);
	}
}
function selectedAns(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct ==='true';
	if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
	}else{
		selectedBtn.classList.add('incorrect');
	}
	Array.from(answerButton.children).forEach(button =>{
		if (button.dataset.correct === 'true') {
			button.classList.add('correct');
		}
		button.disabled = true;
	})
	nextButton.style.display = 'block';
}
function showScore(){
	resetState();
	questionElement.innerHTML = "you scored ${score} out of ${question.length}!";
	nextButton.innerHTML = 'try again';
	nextButton.style.display = 'block'; 
}
function handleNextButton(){
	questionIndex++;
	if (questionIndex < questions.length) {
		displayQuiz();
	}else{
		showScore();
	}
}
nextButton.addEventListener("click",()=>{
	if(questionIndex < questions.length){
		handleNextButton();
	}else{
		displayQuiz();
	}
})


displayQuiz();
