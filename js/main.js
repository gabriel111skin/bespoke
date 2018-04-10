const quiz = document.querySelector('.quiz')

const headerButton = document.querySelector('.header-button');

let customerData = [];

function init() {
 quiz.style.display = 'block';
};

headerButton.addEventListener('click', function(){
	if (quiz.style.display == 'block') {
		quiz.style.display = 'none';
	} else 
		quiz.style.display = 'block';	
});

