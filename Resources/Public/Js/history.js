(function () {
	'use strict';

	xna.on('documentLoaded', function() {
		let offset = 100;
		let progressHeight = 0;
		let indicatorHeight = 0;
		let node = document.querySelector('.ce-history');
		let indicator = node.querySelector('.indicator');
		let container = node.querySelector('ul');
		let watch = node.querySelector('.watch');
		let maxHeight = container.offsetHeight;
		let options = {
			threshold: []
		};

		for(let i = 0; i <= 1.0; i += 0.1) {
			options.threshold.push(i);
		}
		// for (let i=0; i<=1.0; i+= 0.01) {
		// 	options.threshold.push(i);
		// }

		let steps = container.querySelectorAll('li');
		// steps.forEach(function(step, index) {
		//
		// });



		// maximal bis zum letzten Element scrollen
		let lastChildHeight = steps[steps.length - 1].offsetHeight;
		maxHeight = maxHeight - lastChildHeight;

		// if(lastChildHeight < offset) {
		// 	maxHeight = maxHeight - steps[steps.length - 1].offsetHeight + 100;
		// 	console.log(maxHeight);
		//
		// } else {
		// 	maxHeight = maxHeight - steps[steps.length - 1].offsetHeight;
		// }

		let os = new IntersectionObserver(function(entries) {
			if(typeof(entries[0]) !== 'undefined') {
				let scrollHeight = (Math.floor(entries[0].intersectionRect.height));

				//console.log(container.getBoundingClientRect());
				console.log(maxHeight, scrollHeight, progressHeight);
				// console.log(entries[0]);

				if(scrollHeight >= progressHeight) {
					progressHeight = scrollHeight;
					indicatorHeight = (scrollHeight - offset);

					console.log(indicatorHeight);

					if(indicatorHeight > maxHeight) {
						indicatorHeight = maxHeight;
					}

					if(indicatorHeight > 0 && indicatorHeight <= maxHeight) {
						indicator.style.height = indicatorHeight  + 'px';
					}

				// 	console.log(percent);
				}
			}
		}, options);

		os.observe(watch);
	});
})();