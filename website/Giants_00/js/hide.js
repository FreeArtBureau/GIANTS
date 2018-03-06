/**
 * Script for hide/show content
 */


 var show = function (elem) {

 	var getHeight = function () {
 		elem.style.display = 'block';
 		var height = elem.scrollHeight + 'px';
 		elem.style.display = '';
 		return height;
 	};

 	var height = getHeight();
 	elem.classList.add('is-visible');
 	elem.style.height = height;
 	window.setTimeout(function () {
 		elem.style.height = '';
 	}, 550);
 };

 var hide = function (elem) {
 	elem.style.height = elem.scrollHeight + 'px';
 	window.setTimeout(function () {
 		elem.style.height = '0';
 	}, 1);

 	window.setTimeout(function () {
 		elem.classList.remove('is-visible');
 	}, 550);

 };

 var toggle = function (elem, timing) {
 	if (elem.classList.contains('is-visible')) {
 		hide(elem);
 		return;
 	}
 	show(elem);

 };

// Listening for click events
document.addEventListener('click', function (event) {
	if (!event.target.classList.contains('toggle')) return;
	event.preventDefault();
	var content = document.querySelector(event.target.hash);
	if (!content) return;
	toggle(content);

}, false);
