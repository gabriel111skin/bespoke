const quiz = document.querySelector('.quiz')

const headerButton = document.querySelector('.header-button');

const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');

const button = [...document.querySelectorAll('.button')];

const savePackageLocal = JSON.parse(localStorage.getItem('savePackageLocal')) || [];

let answers = {
	numberOfProducts : {},
	skinType : {},
	age : {},
}

let customerData = [];

function init() {
	if (quiz.style.display == 'block') {
		quiz.style.display = 'none';
		q1.style.display = 'none';
		q2.style.display = 'none';
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
	else if (q2.style.display = 'block') {
		answers.skinType = document.querySelector('input[name=skin_products]:checked').value;
		
	}
	savePackageLocal.splice(0, savePackageLocal.length);

	savePackageLocal.push(answers);

	localStorage.setItem('savePackageLocal', JSON.stringify(savePackageLocal));
		headerButton.innerHTML = `You chose ${answers.numberOfProducts} products with a skin type of ${answers.skinType}`;
})

headerButton.addEventListener('click', init);


