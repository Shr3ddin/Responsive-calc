const prevNum = document.querySelector('.prevNum');
const mathSign = document.querySelector('.mathSign');
const currentNum = document.querySelector('.currentNum');
const numBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const calcHistory = document.querySelector('.calc-history');

let result = '';

function handleNums() {
	if (this.textContent === '.' && currentNum.textContent.includes('.')) return;

	if (this.textContent === '.' && currentNum.textContent === '') return (currentNum.textContent = '0.');

	currentNum.textContent += this.textContent;
}

function handleOperators() {
	if (currentNum.textContent === '' && this.textContent === '-') {
		currentNum.textContent = '-';
		return;
	} else if (currentNum.textContent === '') {
		return;
	}

	if (mathSign.textContent !== '') {
		calculate();
	} else if (currentNum.textContent.includes('-') && this.textContent === '-') {
		return;
	}

	prevNum.textContent = currentNum.textContent;
	mathSign.textContent = this.textContent;
	currentNum.textContent = '';
}

function calculate() {
	if (prevNum.textContent === '' || currentNum.textContent === '') return;

	let a = parseFloat(currentNum.textContent);
	let b = parseFloat(prevNum.textContent);
	let operator = mathSign.textContent;

	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = b - a;
			break;
		case 'x':
			result = a * b;
			break;
		case '/':
			result = b / a;
			break;
		case '^':
			result = b ** a;
			break;
	}

	addtoHistory();
	currentNum.textContent = result;
	prevNum.textContent = '';
	mathSign.textContent = '';
}

function clearOperation() {
	prevNum.textContent = '';
	mathSign.textContent = '';
	currentNum.textContent = '';
}

const addtoHistory = () => {
	const historyItem = document.createElement('p');
	historyItem.classList.add('.hist-item');
	historyItem.textContent = `${currentNum.textContent} ${mathSign.textContent} ${prevNum.textContent} = ${result}`;
	calcHistory.append(historyItem);
};

numBtns.forEach(btn => btn.addEventListener('click', handleNums));
operatorBtns.forEach(btn => btn.addEventListener('click', handleOperators));
equals.addEventListener('click', calculate);
clear.addEventListener('click', clearOperation);
