// show menu 
let showMenu = () => {
	let toggle = document.getElementById('nav-toggle');
	let nav = document.getElementById('nav-menu');

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
		 	nav.classList.toggle('show-menu');
		})
	}
}
showMenu();

// remove menu mobile when u choise section 

let navLink = document.querySelectorAll('.nav-link');

function linkAction () {
	let navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll setion active link 

 let sections = document.querySelectorAll('section[id]')

 function scrollActive () {
 	let scrollY = window.pageYOffset;

 	sections.forEach(current => {
 		let sectionHeight = current.offsetHeight;
 		let sectionTop = current.offsetTop -50;
 		sectionId = current.getAttribute('id');

 		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
 			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
 		} else {
			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
 		}
 	})
 }
 window.addEventListener('scroll', scrollActive);

 // channnge background header 
 function scrollHeader() {
 	let nav = document.getElementById('header');
   // when scroll is grater than 200, add the scroll-header class
 	if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
 }
 window.addEventListener('scroll', scrollHeader);

 // show scroll top 
 function scrollTop() {
 	let scrollTop = document.getElementById('scroll-top');
   // when scroll is grater than 560, add the scroll-header class
 	if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
 }
window.addEventListener('scroll', scrollTop);

/*                          dark light theme      */
 
let themeButton = document.getElementById('theme-button');
let darkTheme = 'dark-theme';
let iconTheme = 'bx-sun';

// save to local storage 

let selectedTheme = localStorage.getItem('selected-theme');
let selectedIcon = localStorage.getItem('selected-icon');

// we validate the current theme that the iinterface has by validate the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// activate / desectivate dark them  
themeButton.addEventListener('click', () => {
	// add/remove the dark/icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	// We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


			/* Scroll Animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-data, .home-img,
            .about-data, .about-img,
            .services-content, .menu-content,
            .app-data, .app-img,
            .contact-data, .contact-button,
            .footer-content`, {
    interval: 200
})