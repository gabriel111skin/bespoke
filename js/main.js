(function() {
	const questions = [
		{
			question: "How manny products do you use a day",
			answers: {
				a: "2 products",
				b: "3-5 products",
				c: "6+ products"
			},
		},
		{
			question: "What is your skin type ?",
			answers: {
				a: "Dry",
				b: "Oily",
				c: "Normal",
				d: "Combination"
			},
		},
		{
			question: "What are you looking to achieve?",
			answers: {
				a: "Radiance",
				b: "Moisturise",
				c: "Brighten",
				d: "Soothe",
				e: "Firm"
			},
		},
	];
let suggestions;
//Get Products
function getJSON(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var res = xhr.responseText;
				// Executes your callback with the
				// response already parsed into JSON
				callback(JSON.parse(res));
			} else { // Server responded with some error
				console.error(xhr.statusText);
			} // End of verifying response status
		} // Please read: http://www.w3schools.com/ajax/...
		  // .../ajax_xmlhttprequest_onreadystatechange.asp
	}; // End of what to do when the response is answered
	
	// What to do if there's an error with the request
	xhr.onerror = function (e) {
	  console.error(xhr.statusText);
	}; // End of error handling
	
	// Send the request to the server
	xhr.send(null);
} // End of getJSON function
var apiURL = "https://111skin.myshopify.com/products.json";

getJSON(apiURL, function(userInfo) {
	suggestions = userInfo;
	console.log(suggestions);
}); // End of request


	let customerData = [];

	function init() {
		//html output
		const output = [];

		questions.forEach((currentQuestion, questionNumber) => {
			//answers 
			const answers = [];
			//add to answers
			for (index in currentQuestion.answers) {
				//radio buttons
				answers.push(
					`<label>
						<input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[index]}">
						<span class="checkmark">${currentQuestion.answers[index]}</span>
					</label>`
				);
			}
			//add to question and answer to html output
			output.push(
				`<div class="slide">
					<div class="question"> ${currentQuestion.question} </div>
					<div class="answers"> ${answers.join("")} </div>
				</div>`
			);
		});

		quizApp.innerHTML = output.join("");
	};

	function quizRezult() {
		const answerContainers = quizApp.querySelectorAll('.answers');

		questions.forEach((currentQuestion, questionNumber) => {
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			customerData.push((answerContainer.querySelector(selector) || {}).value);
		});
		
		
	results.innerHTML = `<img src="${suggestions.products[20].images[0].src}" height="220" width="220">`;
	console.log(customerData);
	}

	function slide(x) {
		slides[slideNow].classList.remove('active-slide');
		slides[x].classList.add('active-slide');
		slideNow = x;

		if (slideNow === 0) {
			back.style.display = 'none';
		} else {
			back.style.display = 'inline-block';
		}

		if (slideNow === slides.length - 1) {
			forward.style.display = 'none';
			submit.style.display = 'inline-block';
		} else {
			forward.style.display = 'inline-block';
			submit.style.display = 'none';
		}
	}

	function forwardSlide() {
		slide(slideNow + 1);
	}

	function backSlide() {
		slide(slideNow - 1);
	}

	const quiz = document.querySelector('.quiz')
	const quizApp = document.querySelector('.quiz-app')
	const results = document.querySelector('.results')

	init();

	const back = document.querySelector('.back');
	const forward = document.querySelector('.forward');
	const submit = document.querySelector('.submit');

	const slides = document.querySelectorAll('.slide');
	let slideNow = 0;

	slide(0);

	submit.addEventListener('click',quizRezult);
	forward.addEventListener('click',forwardSlide);
	back.addEventListener('click',backSlide);

})();



