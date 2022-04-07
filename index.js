import {Chart, registerables} from 'chart.js';
import {titleCase} from 'title-case';

import colors from 'tailwindcss/colors';

import './index.css';

Chart.register(...registerables);

function getErrorMessage(element) {
	const {
		valueMissing: valueIsMissing,
		patternMismatch: patternMismatches,
	} = element.validity;
	
	switch (true) {
		case valueIsMissing:
			return 'The field is required.';

		case patternMismatches:
			return 'The provided value does not meet the field format.';

		default:
			return '';
	}
}

document.addEventListener('DOMContentLoaded', () => {
  const {form} = document.forms;
	const formElemenents = [...form.elements];

	formElemenents.forEach(element => {
		element.addEventListener('input', () => {
			element.classList.add('validated');
			element.setCustomValidity(getErrorMessage(element));
			element.reportValidity();
		});
	});

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
   
    for (const [key, value] of formData) {
      localStorage.setItem(key, value);
    }

    form.remove();

		const timerStopDate = Date.now() + Number(formData.get('gameTime')) * 60 * 1000;
		const timerRoot = document.querySelector('.timerRoot');

		const intervalId = setInterval(() => {
			const timeLeft = new Date(timerStopDate - Date.now());

			if (timeLeft < 0) {
				clearInterval(intervalId);
				timerRoot.textContent = `Time's up!`;

				return;
			}

			timerRoot.textContent = timeLeft.toISOString().slice(14, 23);
		}, 30);
  });

	const chessPieceKinds = ['pawn', 'rook', 'knight', 'bishop', 'queen', 'king'];

	const chessPieces = chessPieceKinds.map((kind, index) => {
		return {
			name: titleCase(kind), 
			count: document.querySelectorAll(`[data-chess-piece=${kind}]`).length,
			color: colors.zinc[(index + 3) * 100],
		};
	});	

	const context = document.getElementById('chart').getContext('2d');
	new Chart(context, {
  	type: 'bar',
  	data: {
    	labels: chessPieces.map(piece => piece.name),
    	datasets: [{
				label: 'Number of Pieces',
      	data: chessPieces.map(piece => piece.count),
      	backgroundColor: chessPieces.map(piece => piece.color),
			}],
  	},
		options: {
			scale: {
				ticks: {
					precision: 0
				},
			},
		},
	});
});
