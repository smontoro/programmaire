var questionObjs = [
	{
		question: "What does HTML stand for?",
		answer: ["How To Make Lattes", "Hyper Text Markup Language", "Hyper Textual Makeup Language", "Hyper Text Markup Logic"],	
		correct: "Hypertext Markup Language",
	},
	{
		question: "What is the difference between a class and an id?",
		answer: ["A class is used in css while an id is used in JavaScript", "A class changes color and an id changes hight", "A class can only be used on title tags while an id can be used on all tags", "A class specifies one or more class names for an HTML element while an id only specifies one"],	
		correct: "A class specifies one or more class names for an HTML element while an id only specifies one",
	},
	{
		question: "What is a method in JavaScript?",
		answer: ["A function inside of a Array", "A way to solve problems", "A function inside of string", "A function inside of an object"],
		correct: "A function inside of an object",
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
	main.innerHTML = " "
	 showQuestion()
}

function showQuestion() {
	for (var i = 0; i < questionObjs.length; i++) {
		var main = document.getElementById("main")
		var h1Question = document.createElement("h1")
			main.appendChild(h1Question)
		var h1Text = document.createTextNode(question[i])
			h1Question.appendChild("h1Text")
		
		

	}

}








