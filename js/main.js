const quiz = document.querySelector('.quiz')

const headerButton = document.querySelector('.header-button');

const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');

const button = [...document.querySelectorAll('.button')];
const buttons = document.querySelector('.navigation-buttons');
const savePackageLocal = JSON.parse(localStorage.getItem('savePackageLocal')) || [];

let answers = {
	numberOfProducts : {},
	skinType : {},
	goal : {},
}

let customerData = [];

function init() {
	if (quiz.style.display == 'block') {
		quiz.style.display = 'none';
	} else 
		quiz.style.display = 'block'
		 q1.style.display = 'block';
};


button[1].addEventListener('click', function() {

	if (q1.style.display == 'block') {
		answers.numberOfProducts = document.querySelector('input[name=number_of_products]:checked').value;
		q1.style.display = 'none';
		q2.style.display = 'block';		
	} 
	if (q2.style.display = 'block') {
		answers.skinType = document.querySelector('input[name=skin_products]:checked').value;
		q2.style.display = 'none';
		q3.style.display = 'block'
	} 
	if (q3.style.display = 'block') {
		answers.goal = document.querySelector('input[name=goal_products]:checked').value;
		q3.style.display = 'none';
		buttons.style.display = 'none';
		quiz.append(`
		You choose: ${answers.numberOfProducts.toUpperCase()} products |
		Skin type: ${answers.skinType.toUpperCase()} |
		Looking to achieve a ${answers.goal.toUpperCase()} skin`);

	}

	
	savePackageLocal.splice(0, savePackageLocal.length);

	savePackageLocal.push(answers);

	localStorage.setItem('savePackageLocal', JSON.stringify(savePackageLocal));
		
})

headerButton.addEventListener('click', init);


