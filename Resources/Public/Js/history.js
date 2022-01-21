(function () {
	'use strict';

	xna.on('documentLoaded', function() {

		let node = document.querySelector('.ce-history');
		let container = node.querySelector('ul');

		let lastKnownScrollPosition = 0;
		let ticking = false;

		let containerTop = (window.scrollY + container.getBoundingClientRect().top) - window.outerHeight;
		let indicator = node.querySelector('.indicator');
		let maxHeight = container.getBoundingClientRect().height;

		let steps = container.querySelectorAll('li');

		// maximal bis zum letzten Element scrollen
		let lastChildHeight = steps[steps.length - 1].offsetHeight;
		maxHeight = maxHeight - lastChildHeight;

		//console.log();
		// console.log(window.outerHeight);

		// let spy = function() {
		//
		// };

		let scrollOnContainer = function() {
			let containerScrollPosition = lastKnownScrollPosition - containerTop;

			if(containerScrollPosition > maxHeight) {
				containerScrollPosition = maxHeight;
			}

			if(containerScrollPosition <= maxHeight) {
				indicator.style.height = Math.floor(containerScrollPosition)  + 'px';
			}


		}


		window.addEventListener('scroll', function() {
			lastKnownScrollPosition = window.scrollY;

			if(ticking === false) {
				window.requestAnimationFrame(function() {
					if(lastKnownScrollPosition >= containerTop) {
						scrollOnContainer();
					}
					ticking = false;
				});

				ticking = true;
			}
		});





























		// let offset = 100;
		// let progressHeight = 0;
		// let indicatorHeight = 0;
		// let node = document.querySelector('.ce-history');
		// let indicator = node.querySelector('.indicator');
		// let container = node.querySelector('ul');
		// let watch = node.querySelector('.watch');
		// let maxHeight = container.offsetHeight;
		// let options = {
		// 	threshold: []
		// };
		//
		// for(let i = 0; i <= 1.0; i += 0.1) {
		// 	options.threshold.push(i);
		// }
		// // for (let i=0; i<=1.0; i+= 0.01) {
		// // 	options.threshold.push(i);
		// // }
		//
		// let steps = container.querySelectorAll('li');
		// // steps.forEach(function(step, index) {
		// //
		// // });
		//
		//
		//
		// // maximal bis zum letzten Element scrollen
		// let lastChildHeight = steps[steps.length - 1].offsetHeight;
		// maxHeight = maxHeight - lastChildHeight;
		//
		//
		// let containerObserver = new IntersectionObserver(function(entries) {
		// 	if(typeof(entries[0]) !== 'undefined') {
		// 		let scrollHeight = (Math.floor(entries[0].intersectionRect.height));
		//
		// 		if(scrollHeight >= progressHeight) {
		// 			progressHeight = scrollHeight;
		// 			indicatorHeight = (scrollHeight - offset);
		//
		// 			if(indicatorHeight > maxHeight) {
		// 				indicatorHeight = maxHeight;
		// 			}
		//
		// 			if(indicatorHeight > 0 && indicatorHeight <= maxHeight) {
		// 				indicator.style.height = indicatorHeight  + 'px';
		// 				steps[0].classList.add('active');
		// 			}
		// 		}
		// 	}
		// }, options);
		//
		// containerObserver.observe(watch);
		//
		//
		// let stepObserver = new IntersectionObserver(function(entries, observer) {
		// 	if(typeof(entries[0]) !== 'undefined' && entries[0].isIntersecting === true) {
		//
		// 		if((entries[0].intersectionRect.height - 165) >= 0) {
		// 			console.log((entries[0].intersectionRect.height - offset));
		// 			entries[0].target.classList.add('active');
		// 		}
		// 	}
		// }, {
		// 	threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
		// });
		//
		// steps.forEach(function(step, index) {
		// 	stepObserver.observe(step);
		// });
	});
})();