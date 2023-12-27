// Array to store questions
var questions = [
	{ question: "What are the university's admission requirements?", answer: "You can find the university's admission requirements on our website." },
	{ question: "When is the deadline for submitting applications?", answer: "The deadline for submitting applications is May 31st." },
	{ question: "How can I contact the university?", answer: "You can find the university's contact information on our website." }
];

// Get DOM elements
var addQuestionForm = document.getElementById("add-question-form");
var updateQuestionForm = document.getElementById("update-question-form");
var questionList = document.getElementById("question-list");

// Event listeners
addQuestionForm.addEventListener("submit", addQuestion);
questionList.addEventListener("click", handleQuestionListClick);
updateQuestionForm.addEventListener("submit", updateQuestion);
document.getElementById("cancel-update").addEventListener("click", cancelUpdate);

// Functions
function addQuestion(event) {
	event.preventDefault();

	// Get form values
	var questionInput = document.getElementById("question");
	var answerInput = document.getElementById("answer");

	// Create new question object
	var newQuestion = {
		question: questionInput.value,
		answer: answerInput.value
	};

	// Add new question to array
	questions.push(newQuestion);

	// Clear form inputs
	questionInput.value = "";
	answerInput.value = "";

	// Update question list
	updateQuestionList();
}

function updateQuestionList() {
	// Clear current question list
	questionList.innerHTML = "";

	// Loop through questions array and create list items
	for (var i = 0; i < questions.length; i++) {
		var question = questions[i];

		var li = document.createElement("li");
		li.innerHTML = "<p><strong>" + question.question + "</strong></p><p>" + question.answer + "</p><button data-id=\"" + i + "\">Update</button>";
		questionList.appendChild(li);
	}
}

function handleQuestionListClick(event) {
	if (event.target.tagName === "BUTTON") {
		var questionIndex = event.target.getAttribute("data-id");

		// Fill update form with current question data
		var question = questions[questionIndex];
		document.getElementById("update-question").value = question.question;
		document.getElementById("update-answer").value = question.answer;
		document.getElementById("update-id").value = questionIndex;

		// Show update form and hide add form
		updateQuestionForm.style.display = "block";
		addQuestionForm.style.display = "none";
	}
}

function updateQuestion(event) {
	event.preventDefault();

	// Get form values
	var questionInput = document.getElementById("update-question");
	var answerInput = document.getElementById("update-answer");
	var questionIndexInput = document.getElementById("update-id");

	// Update question in array
	var questionIndex = parseInt(questionIndexInput.value);
	questions[questionIndex].question = questionInput.value;
	questions[questionIndex].answer = answerInput.value;

	// Clear form inputs
	questionInput.value = "";
	answerInput.value = "";
	questionIndexInput.value = "";

	// Update question list
	updateQuestionList();

	// Hide update form and show add form
	updateQuestionForm.style.display = "none";
	addQuestionForm.style.display = "block";
}

function cancelUpdate() {
	// Clear form inputs
	document.getElementById("update-question").value = "";
	document.getElementById("update-answer").value = "";
	document.getElementById("update-id").value = "";

	// Hide update form and show add form
	updateQuestionForm.style.display = "none";
	addQuestionForm.style.display = "block";
}


// Course selection form
const courseForm = document.querySelector('#course-form');
const courseSelect = document.querySelector('#course');

// Year selection form
const yearForm = document.querySelector('#year-form');
const yearSelect = document.querySelector('#year');

// Section selection form
const sectionForm = document.querySelector('#section-form');
const sectionSelect = document.querySelector('#section');

// Message form
const messageForm = document.querySelector('#message-form');
const messageTextarea = document.querySelector('#message');
const cancelMessageButton = document.querySelector('#cancel-message');

// Course, year, and section variables
let selectedCourse = '';
let selectedYear = '';
let selectedSection = '';

// Event listeners for course selection form
courseSelect.addEventListener('change', e => {
	selectedCourse = e.target.value;
	yearSelect.selectedIndex = 0;
	sectionSelect.selectedIndex = 0;
	if (selectedCourse) {
		yearForm.style.display = 'block';
	} else {
		yearForm.style.display = 'none';
		sectionForm.style.display = 'none';
		messageForm.style.display = 'none';
	}
});

// Event listeners for year selection form
yearSelect.addEventListener('change', e => {
	selectedYear = e.target.value;
	sectionSelect.selectedIndex = 0;
	if (selectedYear) {
		sectionForm.style.display = 'block';
	} else {
		sectionForm.style.display = 'none';
		messageForm.style.display = 'none';
	}
});

// Event listeners for section selection form
sectionSelect.addEventListener('change', e => {
	selectedSection = e.target.value;
	if (selectedSection) {
		messageForm.style.display = 'block';
	} else {
		messageForm.style.display = 'none';
	}
});

// Event listeners for message form
messageForm.addEventListener('submit', e => {
	e.preventDefault();
	const message = messageTextarea.value.trim();
	if (message) {
		// Send message to selected section
		sendMessage(selectedCourse, selectedYear, selectedSection, message);
		messageTextarea.value = '';
		sectionSelect.selectedIndex = 0;
		sectionForm.style.display = 'none';
		messageForm.style.display = 'none';
	}
});

cancelMessageButton.addEventListener('click', e => {
	e.preventDefault();
	messageTextarea.value = '';
	sectionSelect.selectedIndex = 0;
	sectionForm.style.display = 'none';
	messageForm.style.display = 'none';
});

// Function to send message to selected section
function sendMessage(course, year, section, message) {
	// Code to send message goes here
	// You can use the 'course', 'year', 'section', and 'message' variables to send the message to the selected section
	console.log(`Message sent to ${course} ${year} ${section}: ${message}`);
}


// Update question list on page load
// Call updateQuestionList function to display the initial questions
updateQuestionList();