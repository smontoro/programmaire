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

//store the main form div
var main = document.getElementById('main')


//show the question and answer choices 
function showQuestion() {
	main.innerHTML = ""

	//loop through the questions and puts them into h2 tags
	for (var i = 0; i < 1; i++) {
		//creates the h2 tag and stores the question text inside
		var h2Question = document.createElement("h2")
		var h2QuestionText = document.createTextNode(questionObjs[i].question)
			h2Question.appendChild(h2QuestionText)
			main.appendChild(h2Question)
		

		//add the possible answers to the button texts and values
		for (var j = 0; j < questionObjs[i].answer.length; j++) {
				//create buttons and attach the answer value to them
			var buttonAnswer = document.createElement("button")
				buttonAnswer.className = "btn btn-info m-2"
				buttonAnswer.type = "button"
				buttonAnswer.value = questionObjs[i].answer[j]
				buttonAnswer.setAttribute("onclick", "checkAnswer(event.target)") 

				//adds the answer text to the buttons
			var buttonAnswerText = document.createTextNode(questionObjs[i].answer[j])
				buttonAnswer.appendChild(buttonAnswerText)
				main.appendChild(buttonAnswer)

		}


	}
	
};


var correct = 0
var incorrect = 0

//check to see if the value of the button clicked matches the correct answer
function checkAnswer(e) {
	var btn = e

		if (btn.value == questionObjs[0].correct){
			//add one to correct
			correct++
			
		} else {
			//add one to incorrect
			incorrect++
		}

	
	//move to the next question
	updateScore()
	questionObjs.shift()
	showQuestion()

};


function updateScore() {
	//update correct and incorrect values
	document.querySelector('#correct').textContent = correct
	document.querySelector('#incorrect').textContent = incorrect
}























