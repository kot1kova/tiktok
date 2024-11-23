gsap.registerPlugin(ScrollTrigger)
gsap.from('.up', {
	duration: 2,
	opacity: 0,
	// scrollTrigger: 'hero',
	y: 150,
	marker: true,
})

var swiper = new Swiper('.reviews-slider', {
	slidesPerView: 4,
	spaceBetween: 24,
	centeredSlides: false,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		450: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		650: {
			slidesPerView: 2,
			//   spaceBetween: 20,
		},

		768: {
			slidesPerView: 3,
			//   spaceBetween: 40,
		},
		990: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 3.8,
			spaceBetween: 24,
		},
	},

	navigation: {
		nextEl: '.slide-next',
		prevEl: '.slide-prev',
	},
})

var swiper = new Swiper('.modulus-slider', {
	slidesPerView: 1.8,
	spaceBetween: 0,
	centeredSlides: false,
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		450: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		650: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		768: {
			slidesPerView: 1,
			//   spaceBetween: 24,
		},
		990: {
			slidesPerView: 1.8,
			//    spaceBetween: 30,
		},
		1024: {
			slidesPerView: 1.8,
			//    spaceBetween: 41,
		},
	},

	navigation: {
		nextEl: '.slide-next',
		prevEl: '.slide-prev',
	},
})
var swiper = new Swiper('.result-slider', {
	slidesPerView: 4,
	spaceBetween: 10,
	centeredSlides: false,
	// loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		450: {
			slidesPerView: 1,
			// spaceBetween: 20,
		},

		650: {
			slidesPerView: 1,
			spaceBetween: 20,
		},

		768: {
			slidesPerView: 2,
			//   spaceBetween: 24,
		},
		990: {
			slidesPerView: 4,
			//    spaceBetween: 30,
		},
		1024: {
			slidesPerView: 4,
			//    spaceBetween: 41,
		},
	},

	// navigation: {
	// 	nextEl: '.slide-next',
	// 	prevEl: '.slide-prev',
	// },
})

document.addEventListener('DOMContentLoaded', function () {
	const faqItems = document.querySelectorAll('.faq__item')

	faqItems.forEach(item => {
		const header = item.querySelector('.faq__header')

		header.addEventListener('click', () => {
			const currentlyActive = document.querySelector('.faq__item.active')

			if (currentlyActive && currentlyActive !== item) {
				currentlyActive.classList.remove('active')
			}

			item.classList.toggle('active')
		})
	})
})

document.addEventListener('DOMContentLoaded', function () {
	const wrapper = document.querySelector('.faq__wrapper')

	function checkScrollNeeded() {
		if (wrapper.scrollHeight > 910) {
			wrapper.classList.add('scrollable')
		} else {
			wrapper.classList.remove('scrollable')
		}
	}

	checkScrollNeeded()

	window.addEventListener('resize', checkScrollNeeded)
})
