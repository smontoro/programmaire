var questionObjs = [
	{
		question: "What does HTML stand for?",
		answer: ["How To Make Lattes", "Hyper Text Markup Language", "Hyper Textual Makeup Language", "Hyper Text Markup Logic"],	
		correct: 'Hypertext Markup Language'
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

var main = document.getElementById("main")


function startGame() {
	main.innerHTML = ""

	 showQuestion()
};

function showQuestion() {
	main.innerHTML = ""
	console.log("running")

	for (var i = 0; i < 1; i++) {	
		console.log("running")
		var h2Question = document.createElement("h2")
			h2Question.id = "questions" + i
		var h2QuestionText = document.createTextNode(questionObjs[i].question)
	
		h2Question.appendChild(h2QuestionText)
		main.appendChild(h2Question)

		for (var j = 0; j < questionObjs[i].answer.length; j++) {
			var correctAnswer = questionObjs[i].correct
			var buttonAnswer = document.createElement("button")
				buttonAnswer.type = "button"
				buttonAnswer.name = "button" + [i]
				buttonAnswer.value = questionObjs[i].answer[j]
				buttonAnswer.className = "btn btn-info m-2"

				// buttonAnswer.setAttribute("onclick", "checkAnswer(this," + questionObjs[i].correct + ")")
				buttonAnswer.addEventListener("click", checkAnswer(this, correctAnswer))
			var buttonAnswerText = document.createTextNode(questionObjs[i].answer[j])
		
			
			buttonAnswer.appendChild(buttonAnswerText)
			main.appendChild(buttonAnswer)

			console.log(buttonAnswer.value)

		}	
	}
	

};

function checkAnswer(buttonAnswer, correctAnswer) {
		//console.log(correctAnswer)

		if (buttonAnswer.value == correctAnswer ) {

			//console.log("correct")
		
		}
	

};









