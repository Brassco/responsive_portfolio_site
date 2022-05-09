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