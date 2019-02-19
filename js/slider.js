/* этот код помечает картинки, для удобства разработки */
let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
	lis[i].style.position = 'relative';
	let span = document.createElement('span');
	// обычно лучше использовать CSS-классы,
	// но этот код - для удобства разработки, так что не будем трогать стили
	lis[i].appendChild(span);
}

/* конфигурация */
let width = 750; // ширина изображения
let count = 1; // количество изображений

let carousel = document.getElementById('carousel-1');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // текущий сдвиг влево

carousel.querySelector('.prev').onclick = function() {
	// сдвиг влево
	// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
	position = Math.min(position + width * count, 0)
	list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
	// сдвиг вправо
	// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
	position = Math.max(position - width * count, -width * (listElems.length - count));
	list.style.marginLeft = position + 'px';
};