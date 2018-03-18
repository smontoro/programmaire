var questionObjs = [
	{
		question: "What does HTML stand for?",
		answer: ["How To Make Lattes", "Hyper Text Markup Language", "Hyper Textual Makeup Language", "Hyper Text Markup Logic"],	
		correct: 'Hyper Text Markup Language'
	},
	{
		question: "What is the difference between a class and an id?",
		answer: ["A class is used in css while an id is used in JavaScript", "A class changes color and an id changes hight", "A class can only be used on title tags while an id can be used on all tags", "A class specifies one or more class names for an HTML element while an id only specifies one"],	
		correct: "A class specifies one or more class names for an HTML element while an id only specifies one"
	},
	{
		question: "What is a method in JavaScript?",
		answer: ["A function inside of a Array", "A way to solve problems", "A function inside of string", "A function inside of an object"],
		correct: "A function inside of an object"
	},

	{
		question: "What element property do we use to get a value from an input tag in JavaScript?",
		answer: [".value", ".textContent", ".innerHTML", ".length"],	
		correct: ".value"
	},
	{
		question: "Which of the following is true about variable naming conventions in JavaScript?",
		answer: ["JavaScript variable names should not start with a numeral", "You should not use any of the JavaScript reserved keyword as variable name", "None of these", "Both of these"],	
		correct: "Both of these"
	}

]

//gets the div
var main = document.getElementById("main")
//var question = 0;

//clears the button and starts the game
function startGame() {
	main.innerHTML = ""

	 showQuestion()
};

//loops through the submitted answers
function showQuestion() {
	main.innerHTML = ""
	//loops through the object questions and puts them into h2 tags
	for (var i = 0; i < 1; i++) {	
		var h2Question = document.createElement("h2")
			//stores the object question in text
		var h2QuestionText = document.createTextNode(questionObjs[i].question)
	
		//appends the questions to the #main div
		h2Question.appendChild(h2QuestionText)
		main.appendChild(h2Question)

		//loops through all of the object answers
		for (var j = 0; j < questionObjs[i].answer.length; j++) {
			//stores the correct answer in the var
			var correctAnswer = questionObjs[i].correct
			//stores the possible answers in buttons
			var buttonAnswer = document.createElement("button")
				buttonAnswer.type = "button"
				//gives the button a value of the correct answer to check against
				buttonAnswer.value = questionObjs[i].answer[j]
				buttonAnswer.className = "btn btn-info m-2"

				//when the button is clicked, run checkAnswer() to see if it is correct
				buttonAnswer.setAttribute("onclick", "checkAnswer()")
				// buttonAnswer.addEventListener("click", checkAnswer(this.value, correctAnswer))
			var buttonAnswerText = document.createTextNode(questionObjs[i].answer[j])
			
			buttonAnswer.appendChild(buttonAnswerText)
			main.appendChild(buttonAnswer)

		}	
	}
	
};

function checkAnswer() {
	var btn = document.getElementsByTagName("button")

	//loop through the button values
	for (var i = 0; i < btn.length; i++) {
		//if the value matches correct answer, shift to next question
		if (btn[i].value == questionObjs[0].correct){
			console.log("correct")
		
			questionObjs.shift()

			showQuestion()

			if (questionObjs.length === 0) {
				main.innerHTML = ""
				main.innerHTML = "<h1>Good Job, You Completed the Quiz!!!<h1>" + "</br>" +  "<img src='img/success.jpg'>"

				return
			}

		}
	} 
		
};


/*function checkAnswer(buttonAnswer, correctAnswer) {
	var correct = 0
	var incorrect = 0

		if (buttonAnswer.value == correctAnswer.correct ) {
			buttonAnswer.className = ' correct';
			correct++
			questionObjs.shift();
			showQuestion();
		}

		if (buttonAnswer.value != correctAnswer.correct) {
			buttonAnswer.className =  ' incorrect';
			incorrect++;
			questionObjs.shift();
			showQuestion();
		}

						// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;


};*/









