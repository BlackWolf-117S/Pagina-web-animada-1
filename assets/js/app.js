gsap.registerPlugin(ScrollTrigger);

//! Anm1 I
const tl = gsap.timeline({
	delay: 0.1,
});

tl.from('.header__logo', {
	duration: 1.5,
	y: '-100vh',
})
	.from(
		'.header__title__h1',
		{
			x: '100vw',
			opacity: 0,
		},
		'-=.5'
	)
	.from(
		'.header__p',
		{
			x: '-100vw',
			opacity: 0,
		},
		'-=.5'
	)
	.from(
		'.header--button',
		{
			y: '100vh',
			opacity: 0,
		},
		'-=.2'
	);
// !Anm1 F
//* ----------------------------------------------------------
// !Anm2 I
const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.main-exchainge-container',
		toggleActions: 'play reverse restart reverse',
		start: '20% 40%',
		end: '100% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});

tl2
	.from('.backgroundImg', {
		delete: 1,
		opacity: 0,
	})
	.from('.main-exchainge-container--title', {
		x: '100vw',
	});
// !Anm2 F
//* ----------------------------------------------------------
// ?Anm3 I

ScrollTrigger.matchMedia({
	'(max-width: 819px)': function () {
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: '.contenedor__tablas',
				pin: true,
				scrub: true,
				start: '0% 20%',
				end: '100% 20%',
				// markers: true,
				anticipatePin: 1,
			},
		});
		tl3
			.from('.table__main__1', {
				duration: 8,
				x: '-100vw',
			})
			.to('.table__main__1', {
				duration: 8,

				x: '100vw',
			})
			.from('.table__main__2', {
				duration: 8,

				x: '100vw',
			});
	},
	'(min-width: 820px)': function () {
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: '.contenedor__tablas',
				pin: true,
				scrub: true,
				start: '0% 0%',
				end: '100% 0%',
				// markers: true,
				anticipatePin: 1,
			},
		});
		tl3
			.from('.table__main__1', {
				duration: 2,
				x: '-100vw',
			})
			.from('.table__main__2', {
				duration: 2,

				x: '100vw',
			});
	},
});
// ?Anm3 F
//* ----------------------------------------------------------
// ?Anm4 I
ScrollTrigger.matchMedia({
	'(max-width: 819px)': function () {
		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: '.main-product-detail',
				toggleActions: 'play reverse restart reverse',
				start: '0% 70%',
				end: '100% 20%',
				// markers: true,
				anticipatePin: 1,
			},
		});
		tl4
			.from('.product-detail--batata-logo', {
				opacity: 0,
				y: '-100vh',
			})
			.from('.product__title', {
				x: '-100vw',
			})
			.from('.product__parrafo', {
				x: '100vw',
			})
			.from('.product__card__1', {
				x: '-100vw',
			})
			.from(
				'.product__card__2',
				{
					x: '-100vw',
				},
				'-=0.1'
			)
			.from(
				'.product__card__3',
				{
					x: '-100vw',
				},
				'-=0.1'
			)
			.from(
				'.product__card__4',
				{
					x: '-100vw',
				},
				'-=0.1'
			);
	},
	'(min-width: 820px)': function () {
		const tl4 = gsap.timeline({
			scrollTrigger: {
				trigger: '.main-product-detail',
				toggleActions: 'play reverse restart reverse',
				start: '0% 70%',
				end: '100% 20%',
				// markers: true,
				anticipatePin: 1,
			},
		});
		tl4
			.from('.product-detail--batata-logo', {
				opacity: 0,
				y: '-100vh',
			})
			.from(
				'.product__title',
				{
					x: '-100vw',
				},
				'-=0.2'
			)
			.from(
				'.product__parrafo',
				{
					x: '100vw',
				},
				'-=0.2'
			)
			.from('.product__card__1', {
				x: '-100vw',
			})
			.from(
				'.product__card__2',
				{
					x: '100vw',
				},
				'-=0.3'
			)
			.from(
				'.product__card__3',
				{
					x: '-100vw',
				},
				'-=0.3'
			)
			.from(
				'.product__card__4',
				{
					x: '100vw',
				},
				'-=0.3'
			);
	},
});

// ?Anm4 F

const tl5 = gsap.timeline({
	scrollTrigger: {
		trigger: '.bitcoin-img-containet',
		toggleActions: 'play reverse restart reverse',
		start: '0% 20%',
		end: '70% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl5.from('.bitcoin__h2', {
	duration: 1,
	opacity: 0,
});

const tl6 = gsap.timeline({
	scrollTrigger: {
		trigger: '.min-plans-comtainer',
		toggleActions: 'play reverse restart reverse',
		start: '0% 25%',
		end: '100% 25%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl6
	.from('.title__plans__h2', {
		x: '100vw',
	})
	.from(
		'.title__plans__parrafo',
		{
			opacity: 0,
		},
		'-=.3'
	)
	.from('.plans-container--card', {
		duration: 1.2,
		opacity: 0,
	});

const tl7 = gsap.timeline({
	scrollTrigger: {
		trigger: 'footer',
		toggleActions: 'play reverse restart reverse',
		start: '0% 100%',
		end: '100% 90%',
		// markers: true,
		anticipatePin: 1,
	},
});

tl7
	.from('.footer__logo', {
		x: '100vw',
	})
	.from(
		'.footer__a__1',
		{
			x: '-100vw',
		},
		'-=0.5'
	)
	.from(
		'.footer__a__2',
		{
			x: '-100vw',
		},
		'-=0.1'
	)
	.from(
		'.footer__a__3',
		{
			x: '-100vw',
		},
		'-=0.1'
	);
