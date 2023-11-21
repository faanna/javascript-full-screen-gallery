//변수설정 - 데이터의 효과적인 운용을 위해서
const btns = document.querySelectorAll('.btns li');
const h1 = document.querySelector('h1');
const img = document.querySelector('.showBox img');
const str = document.querySelector('strong');
const span = document.querySelector('span');

let total = btns.length; //4
span.innerText = total;

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', (e) => {
		e.preventDefault();

		str.innerText = i + 1;

		let imgSrc = btns[i].querySelector('a').getAttribute('href');
		img.setAttribute('src', imgSrc);

		let txt = btns[i].querySelector('a').innerText;
		h1.innerText = txt;

		for (let el of btns) {
			el.classList.remove('on');
		}
		btns[i].classList.add('on');
		for (let el of boxes) {
			el.classList.remove('on');
		}
		boxes[i].classList.add('on');
	});
}

// 		for (let el of btns1) {
// 			el.classList.remove('on');
// 		}
// 		btns1[i].classList.add('on');

// 		for (let el of boxes) {
// 			el.classList.remove('on');
// 		}
// 		boxes[i].classList.add('on');
// 		});
