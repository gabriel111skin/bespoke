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
						${currentQuestion.answers[index]}
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
		
		results.innerHTML = `${customerData}`;
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




