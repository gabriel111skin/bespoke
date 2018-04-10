const quiz = document.querySelector('.quiz')

const headerButton = document.querySelector('.header-button');

const q1 = document.querySelector('.q1');


let customerData = [];

function init() {
	if (quiz.style.display == 'block') {
		quiz.style.display = 'none';
		q1.style.display = 'none';
	} else 
		quiz.style.display = 'block'
		 q1.style.display = 'block';
};

// const answersOption = [...document.querySelectorAll('.answer-option')];

// answersOption.forEach(function(x){
// 	x.addEventListener('click', function(){
// 		 // x.classList.toggle('active');
// 	});
// })


headerButton.addEventListener('click', init);


