document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.getElementById('menu-btn');
	const mobileMenu = document.getElementById('mobileMenu');
	const closeBtn = document.getElementById('close-menu');
	const overlay = document.querySelector('.mobile-menu__overlay');

	menuBtn.addEventListener('click', function () {
		mobileMenu.classList.add('active');
	});

	closeBtn.addEventListener('click', function () {
		mobileMenu.classList.remove('active');
	});

	overlay.addEventListener('click', function () {
		mobileMenu.classList.remove('active');
	});

	const menuLinks = document.querySelectorAll('.mobile-menu__link');
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			mobileMenu.classList.remove('active');
		});
	});
});
