const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== SHOW MENU =====*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkAction))


/*===== ACCORDION SKILLS =====*/
const skillsHeader = document.querySelectorAll('.skills__header');
const skillsContent = document.getElementsByClassName('skills__content');

function toggleSkills() {
   let itemClass = this.parentNode.className;
   for(i = 0; i < skillsContent.length; i++) {
       skillsContent[i].className = 'skills__content skills__close'
   }

   if (itemClass == 'skills__content skills__close') {
       this.parentNode.className = 'skills__content skills__open'
   }
}

skillsHeader.forEach( el => {
    el.addEventListener('click', toggleSkills)
})

/*===== QUALIFICATION TABS =====*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('.qualification__content');

tabs.forEach( tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach( tContent => {
            tContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach( t => {
            t.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
}) 

/*============ SERVICES MODAL =============*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalButtons = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');

let modalFunction = function(modalElement){
    modalViews[modalElement].classList.add('active-modal')
}

modalButtons.forEach( (modalBtn, i) => {
 
    modalBtn.addEventListener('click', () => {
        modalFunction(i)
    })
})

modalClose.forEach( (modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach( modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*========== SWIPER SLIDER ==========*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


  /*========== SWIPER TESTIMONIAL SLIDER ==========*/
let testimonialSwiper = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination-testimonial",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
    // mousewheel: true,
    // keyboard: true,
  });

/*========== SCROLL ACTIVE LINKS ==========*/

const sections = document.querySelectorAll('.section');

function scrollActive() {
    const scrollY = pageYOffset;
    sections.forEach( section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

    if (sectionId) {

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    }
    })
}

window.addEventListener('scroll', scrollActive )

/*========== CHANGE BACKGROUND COLOR ==========*/
function scrollHeader() {
    const header = document.getElementById('header');

    (this.scrollY >= 80) ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*========== SHOW SCROLL TOP ==========*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-up');

    this.scrollY >= 560 ? scrollTop.classList.add('show-scroll') : scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)

/*========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }
  
  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })