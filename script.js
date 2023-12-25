const prevNum = document.querySelector('.prevNum');
const mathSign = document.querySelector('.mathSign');
const currentNum = document.querySelector('.currentNum');
const numBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let result = '';
let maxChars = 11;

function handleNums() {
	if (currentNum.textContent.length > maxChars) return;

	if (this.textContent === '.' && currentNum.textContent.includes('.')) return;

	currentNum.textContent += this.textContent;
}

numBtns.forEach(btn => btn.addEventListener('click', handleNums));
